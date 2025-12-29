import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Typdefinitioner
type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Google Sheets setup
async function appendToGoogleSheet(data: ContactData) {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './wallmanswebbyra-5ce3bd6443cb.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || 'DIN_GOOGLE_SHEET_ID';

    // Rad att lägga till i sheetet
    const values = [
      [
        new Date().toLocaleString('sv-SE'),
        data.name,
        data.email,
        data.subject,
        data.message,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Kontakt!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values },
    });

    return { success: true };
  } catch (error) {
    console.error('Google Sheets error:', error);
    return { success: false, error };
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json();

    // Validera required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Alla fält är obligatoriska' },
        { status: 400 }
      );
    }

    // Validera email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Ange en giltig e-postadress' },
        { status: 400 }
      );
    }

    // Spara till Google Sheets
    const sheetResult = await appendToGoogleSheet(data);
    
    if (!sheetResult.success) {
      throw new Error('Kunde inte spara till Google Sheets');
    }

    return NextResponse.json({
      success: true,
      message: 'Meddelande skickat och sparat!',
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Ett fel uppstod. Försök igen senare.' },
      { status: 500 }
    );
  }
}