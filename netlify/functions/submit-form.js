const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    const doc = new GoogleSpreadsheet(process.env.VITE_GOOGLE_SPREADSHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: process.env.VITE_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.VITE_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const row = {
      Timestamp: new Date().toISOString(),
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Date: data.date,
      Time: data.time,
      'Pickup Location': data.pickup,
      'Drop-off Location': data.dropoff,
      Vehicle: data.vehicle,
      Area: data.area || '',
      Event: data.event || '',
      Notes: data.notes || '',
    };

    await sheet.addRow(row);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};