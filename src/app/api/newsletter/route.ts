import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

type NewsletterData = {
  email: string;
};

// Google Sheets setup
async function appendToGoogleSheet(data: NewsletterData) {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './wallmanswebbyra-5ce3bd6443cb.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || 'DIN_GOOGLE_SHEET_ID';

    // Först: Hämta alla sheets för att hitta "Newsletter"
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    console.log('Available sheets:', spreadsheet.data.sheets?.map(s => s.properties?.title));

    const newsletterSheet = spreadsheet.data.sheets?.find(
      (sheet) => sheet.properties?.title === 'Newsletter'
    );

    if (!newsletterSheet) {
      console.error('Newsletter sheet not found. Available sheets:', spreadsheet.data.sheets?.map(s => s.properties?.title));
      throw new Error('Newsletter sheet not found');
    }

    // Rad att lägga till i sheetet
    const values = [
      [
        data.email,
        new Date().toLocaleString('sv-SE'),
      ],
    ];

    // Använd sheet ID för att vara säker på att vi skriver till rätt sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `'Newsletter'!A:B`,
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
    const { email } = await request.json();

    // Validera email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ogiltig e-postadress' },
        { status: 400 }
      );
    }

    // Spara till Google Sheets
    const sheetResult = await appendToGoogleSheet({ email });
    
    if (!sheetResult.success) {
      throw new Error('Kunde inte spara till Google Sheets');
    }

    return NextResponse.json({ 
      success: true,
      message: 'Tack för din prenumeration! Du kommer få vårt nyhetsbrev snart.' 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Något gick fel. Försök igen senare.' },
      { status: 500 }
    );
  }
}