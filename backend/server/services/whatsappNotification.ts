import twilio from 'twilio';

interface WhatsAppNotificationData {
  name: string;
  phone: string;
  serviceCategory: string;
  serviceType?: string;
  area?: string;
  pincode: string;
  selectedPackage?: string;
  customRequest?: string;
}

export class WhatsAppNotificationService {
  private readonly adminPhoneNumber: string;
  private readonly twilioClient: twilio.Twilio | null;
  private readonly twilioFrom: string | null;
  private readonly twilioTo: string | null;

  constructor() {
    this.adminPhoneNumber = '9370207558';

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_WHATSAPP_FROM; // e.g. 'whatsapp:+14155238886' (Twilio sandbox) or your approved number
    const to = process.env.TWILIO_WHATSAPP_TO || (this.adminPhoneNumber ? `whatsapp:+91${this.adminPhoneNumber}` : null);

    if (accountSid && authToken && from && to) {
      this.twilioClient = twilio(accountSid, authToken);
      this.twilioFrom = from;
      this.twilioTo = to;
    } else {
      this.twilioClient = null;
      this.twilioFrom = null;
      this.twilioTo = null;
    }
  }

  async sendNewLeadNotification(leadData: WhatsAppNotificationData): Promise<boolean> {
    try {
      const message = this.formatNotificationMessage(leadData);

      // If Twilio is configured, send automatically
      if (this.twilioClient && this.twilioFrom && this.twilioTo) {
        await this.twilioClient.messages.create({
          from: this.twilioFrom,
          to: this.twilioTo,
          body: message,
        });
        console.log('✅ WhatsApp notification sent via Twilio');
        return true;
      }

      // Fallback: Create WhatsApp Web link for manual sending
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${this.adminPhoneNumber}?text=${encodedMessage}`;

      console.log('\n🚨 ===== WHATSAPP NOTIFICATION (FALLBACK) ===== 🚨');
      console.log('📱 Admin Phone: +91' + this.adminPhoneNumber);
      console.log('🔗 WhatsApp Link: ' + whatsappUrl);
      console.log('\n📋 Message Content:');
      console.log(message);
      console.log('\n💡 Twilio not configured. To enable auto-send, set env vars:');
      console.log('   TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM, TWILIO_WHATSAPP_TO');
      console.log('🚨 ===== END NOTIFICATION ===== 🚨\n');

      return true;
    } catch (error) {
      console.error('Error creating WhatsApp notification:', error);
      return false;
    }
  }

  private formatNotificationMessage(leadData: WhatsAppNotificationData): string {
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    let message = `🚨 *NEW LEAD ALERT* 🚨\n\n`;
    message += `👤 *Name:* ${leadData.name}\n`;
    message += `📱 *Phone:* ${leadData.phone}\n`;
    message += `🏠 *Service:* ${leadData.serviceCategory}`;
    
    if (leadData.serviceType) {
      message += ` - ${leadData.serviceType}`;
    }
    message += `\n`;
    
    if (leadData.area) {
      message += `📍 *Area:* ${leadData.area}\n`;
    }
    message += `📮 *Pincode:* ${leadData.pincode}\n`;
    
    if (leadData.selectedPackage) {
      message += `📦 *Package:* ${leadData.selectedPackage}\n`;
    }
    
    if (leadData.customRequest) {
      message += `💬 *Custom Request:* ${leadData.customRequest}\n`;
    }
    
    message += `⏰ *Time:* ${timestamp}\n\n`;
    message += `🔗 *Admin Dashboard:* Visit admin panel to handle this lead\n`;
    message += `📊 *Priority:* High - New customer interaction\n\n`;
    message += `_Please respond promptly to convert this lead!_`;

    return message;
  }

  getNotificationMessage(leadData: WhatsAppNotificationData): string {
    return this.formatNotificationMessage(leadData);
  }

  getWhatsAppLink(leadData: WhatsAppNotificationData): string {
    const message = this.formatNotificationMessage(leadData);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${this.adminPhoneNumber}?text=${encodedMessage}`;
  }
}

export default WhatsAppNotificationService;
