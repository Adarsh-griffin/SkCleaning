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

  constructor() {
    this.adminPhoneNumber = '9370207558';
  }

  async sendNewLeadNotification(leadData: WhatsAppNotificationData): Promise<boolean> {
    try {
      const message = this.formatNotificationMessage(leadData);
      
      // Create WhatsApp Web link for manual sending
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${this.adminPhoneNumber}?text=${encodedMessage}`;
      
      // Log the notification details
      console.log('\n🚨 ===== WHATSAPP NOTIFICATION ===== 🚨');
      console.log('📱 Admin Phone: +91' + this.adminPhoneNumber);
      console.log('🔗 WhatsApp Link: ' + whatsappUrl);
      console.log('\n📋 Message Content:');
      console.log(message);
      console.log('\n💡 Instructions:');
      console.log('1. Copy the WhatsApp link above');
      console.log('2. Open it in your browser');
      console.log('3. It will open WhatsApp with the pre-filled message');
      console.log('4. Click send to notify the admin');
      console.log('🚨 ===== END NOTIFICATION ===== 🚨\n');
      
      // In production, you can integrate with:
      // - WhatsApp Business API
      // - Twilio WhatsApp API
      // - MessageBird WhatsApp API
      // - Or use webhooks to your own WhatsApp bot
      
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

  // Method to get the notification message for external use
  getNotificationMessage(leadData: WhatsAppNotificationData): string {
    return this.formatNotificationMessage(leadData);
  }

  // Method to get the WhatsApp link for external use
  getWhatsAppLink(leadData: WhatsAppNotificationData): string {
    const message = this.formatNotificationMessage(leadData);
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${this.adminPhoneNumber}?text=${encodedMessage}`;
  }
}

export default WhatsAppNotificationService;
