import express from 'express';
import { z } from 'zod';
import googleSheetsService, { LeadData } from '../services/googleSheets.js';

const router = express.Router();

// Lead data validation schema
const LeadSchema = z.object({
  serviceCategory: z.string(),
  serviceType: z.string().optional(),
  businessType: z.string().optional(),
  homeType: z.string().optional(),
  area: z.string().optional(),
  pincode: z.string(),
  name: z.string(),
  phone: z.string(),
  selectedPackage: z.string().optional(),
  customRequest: z.string().optional(),
  timestamp: z.string()
});

// In-memory storage (fallback if Google Sheets is not configured)
let leads: any[] = [];

// Store lead
router.post('/leads', async (req, res) => {
  try {
    const leadData = LeadSchema.parse(req.body);
    
    // Add timestamp if not provided
    if (!leadData.timestamp) {
      leadData.timestamp = new Date().toISOString();
    }
    
    // Store in Google Sheets
    try {
      await googleSheetsService.storeLead(leadData as LeadData);
    } catch (sheetsError) {
      console.error('Failed to store in Google Sheets, falling back to memory:', sheetsError);
      // Fallback to in-memory storage
      leads.push(leadData);
    }
    
    res.status(201).json({
      success: true,
      message: 'Lead stored successfully',
      leadId: leads.length,
      storedInGoogleSheets: true
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid lead data',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get all leads
router.get('/leads', async (req, res) => {
  try {
    // Try to get leads from Google Sheets first
    const sheetsLeads = await googleSheetsService.getAllLeads();
    
    if (sheetsLeads.length > 0) {
      res.json({
        success: true,
        leads: sheetsLeads,
        count: sheetsLeads.length,
        source: 'google_sheets'
      });
    } else {
      // Fallback to in-memory storage
      res.json({
        success: true,
        leads: leads,
        count: leads.length,
        source: 'memory'
      });
    }
  } catch (error) {
    console.error('Error fetching leads:', error);
    // Fallback to in-memory storage
    res.json({
      success: true,
      leads: leads,
      count: leads.length,
      source: 'memory_fallback'
    });
  }
});

// Export leads to Excel format
router.get('/leads/export', (req, res) => {
  try {
    const csvData = leads.map(lead => ({
      'Date': new Date(lead.timestamp).toLocaleDateString(),
      'Time': new Date(lead.timestamp).toLocaleTimeString(),
      'Name': lead.name || 'N/A',
      'Phone': lead.phone || 'N/A',
      'Service Category': lead.serviceCategory || 'N/A',
      'Service Type': lead.serviceType || 'N/A',
      'Business Type': lead.businessType || 'N/A',
      'Home Type': lead.homeType || 'N/A',
      'Area': lead.area || 'N/A',
      'Pincode': lead.pincode || 'N/A',
      'Selected Package': lead.selectedPackage || 'N/A',
      'Custom Request': lead.customRequest || 'N/A'
    }));

    res.json({
      success: true,
      data: csvData,
      count: csvData.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error exporting leads',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Store chat history
router.post('/chat-history', async (req, res) => {
  try {
    const { sessionId, clientName, clientPhone, messages, conversationData, startTime, endTime } = req.body;
    
    if (!sessionId || !clientName || !clientPhone || !messages) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: sessionId, clientName, clientPhone, messages'
      });
    }

    const chatHistory = {
      sessionId,
      clientName,
      clientPhone,
      messages: messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      })),
      conversationData: conversationData || {},
      startTime: new Date(startTime),
      endTime: endTime ? new Date(endTime) : undefined
    };

    await googleSheetsService.storeChatHistory(chatHistory);
    
    res.status(201).json({
      success: true,
      message: 'Chat history stored successfully',
      sessionId
    });
  } catch (error) {
    console.error('Error storing chat history:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to store chat history',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get chat history
router.get('/chat-history', async (req, res) => {
  try {
    const { sessionId } = req.query;
    const chatHistory = await googleSheetsService.getChatHistory(sessionId as string);
    
    res.json({
      success: true,
      chatHistory,
      count: chatHistory.length
    });
  } catch (error) {
    console.error('Error fetching chat history:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch chat history',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    leadsCount: leads.length,
    googleSheetsConfigured: !!process.env.GOOGLE_SHEET_ID
  });
});

export default router;
