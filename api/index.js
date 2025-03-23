import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleSpreadsheet } from 'google-spreadsheet';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const SPREADSHEET_ID = process.env.VITE_GOOGLE_SPREADSHEET_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.VITE_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

app.post('/api/submit-form', async (req, res) => {
  try {
    if (!SPREADSHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
      console.error('Missing required environment variables');
      return res.status(500).json({ 
        success: false, 
        error: 'Server configuration error' 
      });
    }

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY,
    });

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

    await sheet.addRow(row);

    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});