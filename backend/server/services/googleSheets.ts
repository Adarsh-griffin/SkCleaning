import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

interface LeadData {
  serviceCategory: string;
  serviceType?: string;
  businessType?: string;
  homeType?: string;
  area?: string;
  pincode: string;
  name: string;
  phone: string;
  selectedPackage?: string;
  customRequest?: string;
  timestamp: string;
}

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  isOption?: boolean;
  flowStateSnapshot?: string;
}

interface ChatHistory {
  sessionId: string;
  clientName: string;
  clientPhone: string;
  messages: ChatMessage[];
  conversationData: Partial<LeadData>;
  startTime: Date;
  endTime?: Date;
}

class GoogleSheetsService {
  private auth: JWT;
  private sheets: any;
  private spreadsheetId: string;

  constructor() {
    this.spreadsheetId = process.env.GOOGLE_SHEET_ID || '';
    
    if (!this.spreadsheetId) {
      console.warn('Google Sheet ID not configured. Google Sheets integration will be disabled.');
      return;
    }

    this.auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth: this.auth });
  }

  private async ensureSheetsExist() {
    try {
      // Check if sheets exist, create them if they don't
      const response = await this.sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheetId,
      });

      const existingSheets = response.data.sheets?.map((sheet: any) => sheet.properties?.title) || [];
      
      const requiredSheets = ['Leads', 'Chat History', 'Conversation Summary'];
      const sheetsToCreate = requiredSheets.filter(sheet => !existingSheets.includes(sheet));

      if (sheetsToCreate.length > 0) {
        await this.createSheets(sheetsToCreate);
        await this.setupHeaders();
      }
    } catch (error) {
      console.error('Error ensuring sheets exist:', error);
      throw error;
    }
  }

  private async createSheets(sheetNames: string[]) {
    const requests = sheetNames.map(name => ({
      addSheet: {
        properties: {
          title: name,
        },
      },
    }));

    await this.sheets.spreadsheets.batchUpdate({
      spreadsheetId: this.spreadsheetId,
      requestBody: {
        requests,
      },
    });
  }

  private async setupHeaders() {
    const leadsHeaders = [
      'Timestamp',
      'Name',
      'Phone',
      'Service Category',
      'Service Type',
      'Business Type',
      'Home Type',
      'Area',
      'Pincode',
      'Selected Package',
      'Custom Request',
      'Status'
    ];

    const chatHeaders = [
      'Session ID',
      'Client Name',
      'Client Phone',
      'Message Type',
      'Message Content',
      'Timestamp',
      'Flow State',
      'Is Option'
    ];

    const summaryHeaders = [
      'Session ID',
      'Client Name',
      'Client Phone',
      'Service Category',
      'Service Type',
      'Business Type',
      'Home Type',
      'Area',
      'Pincode',
      'Selected Package',
      'Custom Request',
      'Start Time',
      'End Time',
      'Total Messages',
      'Status'
    ];

    await this.sheets.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId,
      range: 'Leads!A1:L1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [leadsHeaders],
      },
    });

    await this.sheets.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId,
      range: 'Chat History!A1:H1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [chatHeaders],
      },
    });

    await this.sheets.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId,
      range: 'Conversation Summary!A1:O1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [summaryHeaders],
      },
    });

    // Format headers
    await this.sheets.spreadsheets.batchUpdate({
      spreadsheetId: this.spreadsheetId,
      requestBody: {
        requests: [
          {
            repeatCell: {
              range: {
                sheetId: 0, // Leads sheet
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.2, green: 0.6, blue: 0.9 },
                  textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId: 1, // Chat History sheet
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.2, green: 0.6, blue: 0.9 },
                  textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat)',
            },
          },
          {
            repeatCell: {
              range: {
                sheetId: 2, // Conversation Summary sheet
                startRowIndex: 0,
                endRowIndex: 1,
              },
              cell: {
                userEnteredFormat: {
                  backgroundColor: { red: 0.2, green: 0.6, blue: 0.9 },
                  textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
                },
              },
              fields: 'userEnteredFormat(backgroundColor,textFormat)',
            },
          },
        ],
      },
    });
  }

  async storeLead(leadData: LeadData): Promise<void> {
    if (!this.spreadsheetId) {
      console.warn('Google Sheets not configured, skipping lead storage');
      return;
    }

    try {
      await this.ensureSheetsExist();

      const row = [
        leadData.timestamp,
        leadData.name,
        leadData.phone,
        leadData.serviceCategory,
        leadData.serviceType || '',
        leadData.businessType || '',
        leadData.homeType || '',
        leadData.area || '',
        leadData.pincode,
        leadData.selectedPackage || '',
        leadData.customRequest || '',
        'New'
      ];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'Leads!A:L',
        valueInputOption: 'RAW',
        requestBody: {
          values: [row],
        },
      });

      console.log('Lead stored in Google Sheets successfully');
    } catch (error) {
      console.error('Error storing lead in Google Sheets:', error);
      throw error;
    }
  }

  async storeChatHistory(chatHistory: ChatHistory): Promise<void> {
    if (!this.spreadsheetId) {
      console.warn('Google Sheets not configured, skipping chat history storage');
      return;
    }

    try {
      await this.ensureSheetsExist();

      // Store individual messages
      const messageRows = chatHistory.messages.map(message => [
        chatHistory.sessionId,
        chatHistory.clientName,
        chatHistory.clientPhone,
        message.type,
        message.content,
        message.timestamp.toISOString(),
        message.flowStateSnapshot || '',
        message.isOption ? 'Yes' : 'No'
      ]);

      if (messageRows.length > 0) {
        await this.sheets.spreadsheets.values.append({
          spreadsheetId: this.spreadsheetId,
          range: 'Chat History!A:H',
          valueInputOption: 'RAW',
          requestBody: {
            values: messageRows,
          },
        });
      }

      // Store conversation summary
      const summaryRow = [
        chatHistory.sessionId,
        chatHistory.clientName,
        chatHistory.clientPhone,
        chatHistory.conversationData.serviceCategory || '',
        chatHistory.conversationData.serviceType || '',
        chatHistory.conversationData.businessType || '',
        chatHistory.conversationData.homeType || '',
        chatHistory.conversationData.area || '',
        chatHistory.conversationData.pincode || '',
        chatHistory.conversationData.selectedPackage || '',
        chatHistory.conversationData.customRequest || '',
        chatHistory.startTime.toISOString(),
        chatHistory.endTime?.toISOString() || '',
        chatHistory.messages.length.toString(),
        'Completed'
      ];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'Conversation Summary!A:O',
        valueInputOption: 'RAW',
        requestBody: {
          values: [summaryRow],
        },
      });

      console.log('Chat history stored in Google Sheets successfully');
    } catch (error) {
      console.error('Error storing chat history in Google Sheets:', error);
      throw error;
    }
  }

  async getAllLeads(): Promise<LeadData[]> {
    if (!this.spreadsheetId) {
      console.warn('Google Sheets not configured, returning empty leads');
      return [];
    }

    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'Leads!A2:L',
      });

      const rows = response.data.values || [];
      return rows.map((row: any[]) => ({
        timestamp: row[0] || '',
        name: row[1] || '',
        phone: row[2] || '',
        serviceCategory: row[3] || '',
        serviceType: row[4] || '',
        businessType: row[5] || '',
        homeType: row[6] || '',
        area: row[7] || '',
        pincode: row[8] || '',
        selectedPackage: row[9] || '',
        customRequest: row[10] || '',
      }));
    } catch (error) {
      console.error('Error fetching leads from Google Sheets:', error);
      return [];
    }
  }

  async getChatHistory(sessionId?: string): Promise<ChatHistory[]> {
    if (!this.spreadsheetId) {
      console.warn('Google Sheets not configured, returning empty chat history');
      return [];
    }

    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'Conversation Summary!A2:O',
      });

      const rows = response.data.values || [];
      return rows
        .filter((row: any[]) => !sessionId || row[0] === sessionId)
        .map((row: any[]) => ({
          sessionId: row[0] || '',
          clientName: row[1] || '',
          clientPhone: row[2] || '',
          conversationData: {
            serviceCategory: row[3] || '',
            serviceType: row[4] || '',
            businessType: row[5] || '',
            homeType: row[6] || '',
            area: row[7] || '',
            pincode: row[8] || '',
            selectedPackage: row[9] || '',
            customRequest: row[10] || '',
          },
          startTime: new Date(row[11] || ''),
          endTime: row[12] ? new Date(row[12]) : undefined,
          messages: [], // Individual messages would need separate query
        }));
    } catch (error) {
      console.error('Error fetching chat history from Google Sheets:', error);
      return [];
    }
  }
}

export default new GoogleSheetsService();
export { LeadData, ChatMessage, ChatHistory };
