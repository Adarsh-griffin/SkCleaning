# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to store client data and chat history for SK Cleaning Services.

## Overview

The integration will create three sheets in your Google Spreadsheet:
1. **Leads** - Stores all client lead information
2. **Chat History** - Stores individual chat messages
3. **Conversation Summary** - Stores conversation summaries with client details

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Sheets API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 2: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `sk-cleaning-sheets`
   - Description: `Service account for SK Cleaning Google Sheets integration`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 3: Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Choose "JSON" format
5. Download the JSON file
6. **Keep this file secure** - it contains sensitive credentials

## Step 4: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "SK Cleaning - Client Data"
4. Copy the **Spreadsheet ID** from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the part between `/d/` and `/edit`

## Step 5: Share Spreadsheet with Service Account

1. In your Google Spreadsheet, click "Share"
2. Add the service account email (found in the JSON file) as an editor
3. The email format is: `service-account-name@project-id.iam.gserviceaccount.com`

## Step 6: Configure Environment Variables

1. Copy the `env.example` file to `.env` in the backend directory
2. Fill in the following variables:

```env
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key from JSON file\n-----END PRIVATE KEY-----\n"
```

**Important:** The private key should be the entire private key from the JSON file, including the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` parts.

## Step 7: Install Dependencies

```bash
cd backend
npm install
```

## Step 8: Test the Integration

1. Start the backend server:
```bash
npm run dev
```

2. Test the health endpoint:
```bash
curl http://localhost:3000/api/health
```

You should see:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "leadsCount": 0,
  "googleSheetsConfigured": true
}
```

## Step 9: Deploy to Production

### Railway Deployment
1. Add the environment variables to your Railway project
2. Deploy the backend

### Netlify/Vercel Deployment
1. Add the environment variables to your deployment platform
2. Make sure the backend URL is correctly configured in the frontend

## Data Structure

### Leads Sheet
| Column | Description |
|--------|-------------|
| Timestamp | When the lead was created |
| Name | Client's name |
| Phone | Client's phone number |
| Service Category | Residential/Commercial/Renovation |
| Service Type | Specific service type |
| Business Type | Type of business (for commercial) |
| Home Type | Type of home (for residential) |
| Area | Area in sqft or description |
| Pincode | Location pincode |
| Selected Package | Basic/Premium/Luxury |
| Custom Request | Any custom requirements |
| Status | New/Contacted/Converted |

### Chat History Sheet
| Column | Description |
|--------|-------------|
| Session ID | Unique conversation identifier |
| Client Name | Client's name |
| Client Phone | Client's phone number |
| Message Type | bot/user |
| Message Content | The actual message |
| Timestamp | When message was sent |
| Flow State | Current conversation state |
| Is Option | Whether it's a clickable option |

### Conversation Summary Sheet
| Column | Description |
|--------|-------------|
| Session ID | Unique conversation identifier |
| Client Name | Client's name |
| Client Phone | Client's phone number |
| Service Category | Service category |
| Service Type | Service type |
| Business Type | Business type |
| Home Type | Home type |
| Area | Area details |
| Pincode | Location pincode |
| Selected Package | Chosen package |
| Custom Request | Custom requirements |
| Start Time | Conversation start time |
| End Time | Conversation end time |
| Total Messages | Number of messages |
| Status | Conversation status |

## Troubleshooting

### Common Issues

1. **"Google Sheet ID not configured"**
   - Check that `GOOGLE_SHEET_ID` is set correctly
   - Verify the spreadsheet ID from the URL

2. **"Permission denied"**
   - Make sure the service account email has editor access to the spreadsheet
   - Check that the Google Sheets API is enabled

3. **"Invalid private key"**
   - Ensure the private key includes the BEGIN and END markers
   - Check that newlines are preserved correctly

4. **"API quota exceeded"**
   - Google Sheets API has quotas. For high volume, consider implementing caching
   - Monitor usage in Google Cloud Console

### Monitoring

1. Check the backend logs for any errors
2. Monitor Google Cloud Console for API usage
3. Verify data is being written to the spreadsheet

## Security Considerations

1. **Never commit the `.env` file** to version control
2. **Keep the service account JSON file secure**
3. **Use environment variables** in production
4. **Regularly rotate** service account keys
5. **Monitor API usage** for unusual activity

## Support

If you encounter issues:
1. Check the backend logs
2. Verify all environment variables are set correctly
3. Test the Google Sheets API manually
4. Ensure the service account has proper permissions

## Next Steps

Once the integration is working:
1. Set up automated backups of the spreadsheet
2. Create dashboards to visualize the data
3. Implement data export functionality
4. Add data validation and cleaning processes
