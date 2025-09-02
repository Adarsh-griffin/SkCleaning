import express from 'express';
import { z } from 'zod';
import WhatsAppNotificationService from '../services/whatsappNotification';

const router = express.Router();
const whatsappService = new WhatsAppNotificationService();

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

// In-memory storage (replace with database in production)
let leads: any[] = [];

// Store lead
router.post('/leads', async (req, res) => {
  try {
    const leadData = LeadSchema.parse(req.body);
    
    // Add timestamp if not provided
    if (!leadData.timestamp) {
      leadData.timestamp = new Date().toISOString();
    }
    
    leads.push(leadData);
    
    // Send WhatsApp notification to admin
    try {
      await whatsappService.sendNewLeadNotification({
        name: leadData.name,
        phone: leadData.phone,
        serviceCategory: leadData.serviceCategory,
        serviceType: leadData.serviceType,
        area: leadData.area,
        pincode: leadData.pincode,
        selectedPackage: leadData.selectedPackage,
        customRequest: leadData.customRequest
      });
      console.log('✅ WhatsApp notification sent successfully for new lead:', leadData.name);
    } catch (notificationError) {
      console.error('❌ Failed to send WhatsApp notification:', notificationError);
      // Don't fail the lead creation if notification fails
    }
    
    res.status(201).json({
      success: true,
      message: 'Lead stored successfully',
      leadId: leads.length
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
router.get('/leads', (req, res) => {
  res.json({
    success: true,
    leads: leads,
    count: leads.length
  });
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

// Health check
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    leadsCount: leads.length
  });
});

export default router;

