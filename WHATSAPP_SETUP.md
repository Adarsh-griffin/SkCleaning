# WhatsApp Notification Setup Guide

## 🚨 WhatsApp Notification System

This system automatically sends WhatsApp notifications to the admin team (9370207558) whenever a new user interacts with the chatbot and submits their information.

## 🔧 How It Works

1. **User Interaction**: When a user completes the chatbot conversation
2. **Lead Creation**: Lead data is saved to the backend
3. **WhatsApp Notification**: Admin team receives instant notification via WhatsApp
4. **Admin Response**: Team can immediately contact the potential customer

## 📱 Current Implementation

The system currently uses **WhatsApp Web links** as a fallback method:

- Creates a pre-filled WhatsApp message with lead details
- Logs the WhatsApp link to the console
- Admin can copy the link and open it to send the message

## 🚀 Production Setup Options

### Option 1: WhatsApp Business API (Recommended)
```bash
# Install WhatsApp Business API
npm install @whatsapp/cloud-api

# Set environment variables
WHATSAPP_API_URL=https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages
WHATSAPP_API_KEY=your_whatsapp_business_api_key
```

### Option 2: Twilio WhatsApp API
```bash
# Install Twilio
npm install twilio

# Set environment variables
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_WHATSAPP_FROM=your_twilio_whatsapp_number
```

### Option 3: MessageBird WhatsApp API
```bash
# Install MessageBird
npm install messagebird

# Set environment variables
MESSAGEBIRD_API_KEY=your_messagebird_api_key
MESSAGEBIRD_WHATSAPP_FROM=your_messagebird_whatsapp_number
```

## 🔐 Admin Access

- **URL**: `/sk-admin-2024-secure`
- **Password**: `SKCleaning2024!`
- **Security**: Account locks after 3 failed attempts for 15 minutes

## 📋 Notification Message Format

```
🚨 NEW LEAD ALERT 🚨

👤 Name: [Customer Name]
📱 Phone: [Customer Phone]
🏠 Service: [Service Category] - [Service Type]
📍 Area: [Area]
📮 Pincode: [Pincode]
📦 Package: [Selected Package]
💬 Custom Request: [Custom Request]
⏰ Time: [Timestamp]

🔗 Admin Dashboard: Visit admin panel to handle this lead
📊 Priority: High - New customer interaction

Please respond promptly to convert this lead!
```

## 🛠️ Customization

### Change Admin Phone Number
Edit `server/services/whatsappNotification.ts`:
```typescript
constructor() {
  this.adminPhoneNumber = 'YOUR_NEW_NUMBER'; // Remove 91 prefix
}
```

### Change Admin Password
Edit `client/pages/Admin.tsx`:
```typescript
const correctPassword = 'YOUR_NEW_PASSWORD';
```

### Modify Notification Message
Edit `server/services/whatsappNotification.ts` in the `formatNotificationMessage` method.

## 🔍 Testing

1. **Start the server**: `npm run dev`
2. **Open chatbot**: Interact with the chatbot on your website
3. **Complete conversation**: Fill out all required fields
4. **Check console**: Look for WhatsApp notification logs
5. **Test admin access**: Visit `/sk-admin-2024-secure`

## 📊 Monitoring

- Check server console for notification logs
- Monitor admin dashboard for new leads
- Track WhatsApp delivery status (if using API)

## 🚨 Troubleshooting

### Notifications not working?
1. Check server console for errors
2. Verify admin phone number format
3. Ensure WhatsApp API credentials are correct
4. Check network connectivity

### Admin page not accessible?
1. Verify the URL: `/sk-admin-2024-secure`
2. Check if the route is properly configured
3. Ensure Admin component is imported in App.tsx

### Lead data not saving?
1. Check backend API endpoints
2. Verify database connection
3. Check server logs for errors

## 🔒 Security Notes

- Change default admin password immediately
- Use HTTPS in production
- Implement rate limiting for admin access
- Consider adding IP whitelisting for admin access
- Regularly rotate API keys

## 📞 Support

For technical support or questions about the WhatsApp notification system, contact your development team.
