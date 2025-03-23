import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(express.json());

const SPREADSHEET_ID = process.env.VITE_GOOGLE_SPREADSHEET_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL;

// Handle the private key properly
const GOOGLE_PRIVATE_KEY = process.env.VITE_GOOGLE_PRIVATE_KEY ? 
  process.env.VITE_GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join('\n') : undefined;

app.post('/api/submit-form', async (req, res) => {
  console.log('Received form submission request');
  try {
    // Validate environment variables
    if (!SPREADSHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      console.error('Missing required environment variables:', {
        hasSpreadsheetId: !!SPREADSHEET_ID,
        hasServiceEmail: !!GOOGLE_SERVICE_ACCOUNT_EMAIL,
        hasPrivateKey: !!GOOGLE_PRIVATE_KEY
      });
      return res.status(500).json({ 
        success: false, 
        error: 'Server configuration error: Missing required environment variables' 
      });
    }

    // Log the first and last few characters of the private key for debugging
    console.log('Private key format check:', {
      start: GOOGLE_PRIVATE_KEY.substring(0, 30),
      end: GOOGLE_PRIVATE_KEY.substring(GOOGLE_PRIVATE_KEY.length - 30),
      length: GOOGLE_PRIVATE_KEY.length,
      containsHeaders: GOOGLE_PRIVATE_KEY.includes('BEGIN PRIVATE KEY') && GOOGLE_PRIVATE_KEY.includes('END PRIVATE KEY')
    });

    // Validate request body
    const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'pickup', 'dropoff', 'vehicle'];
    const missingFields = requiredFields.filter(field => !req.body[field]);
    
    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields);
      return res.status(400).json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    console.log('Initializing Google Spreadsheet');
    const auth = new JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth);

    console.log('Loading spreadsheet info');
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const row = {
      Timestamp: new Date().toISOString(),
      Name: req.body.name,
      Email: req.body.email,
      Phone: req.body.phone,
      Date: req.body.date,
      Time: req.body.time,
      'Pickup Location': req.body.pickup,
      'Drop-off Location': req.body.dropoff,
      Vehicle: req.body.vehicle,
      Area: req.body.area || '',
      Event: req.body.event || '',
      Notes: req.body.notes || '',
    };

    console.log('Adding row to spreadsheet');
    await sheet.addRow(row);

    console.log('Successfully added row to spreadsheet');
    res.json({ success: true });
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    res.status(500).json({ 
      success: false, 
      error: error.message,
      type: error.name,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Environment variables status:', {
    hasSpreadsheetId: !!SPREADSHEET_ID,
    hasServiceEmail: !!GOOGLE_SERVICE_ACCOUNT_EMAIL,
    hasPrivateKey: !!GOOGLE_PRIVATE_KEY
  });
});