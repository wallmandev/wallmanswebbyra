import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Typdefinitioner
type OnboardingData = {
  company: {
    companyName: string;
    orgNumber: string;
    existingWebsite: string;
    contactPerson: string;
    email: string;
    phone: string;
  };
  goals: {
    mainGoal: string;
    targetAudience: string;
    competitors: string;
    deadline: string;
  };
  design: {
    logoName: string;
    colorPreferences: string;
    stylePreference: string;
    inspirationLinks: string;
  };
  functionality: {
    contactForm: boolean;
    quoteRequest: boolean;
    bookingSystem: boolean;
    bookingSystemDetails: string;
    blog: boolean;
    ecommerce: boolean;
    ecommerceProductCount: string;
    multilingual: boolean;
    multilingualLanguages: string;
    socialMedia: boolean;
  };
  content: {
    hasTexts: string;
    hasImages: string;
    materialLinks: string;
    additionalComments: string;
  };
};

// Google Sheets setup
async function appendToGoogleSheet(data: OnboardingData) {
  try {
    // Läs Google Service Account credentials från JSON-filen
    const auth = new google.auth.GoogleAuth({
      keyFile: './wallmanswebbyra-5ce3bd6443cb.json',
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // TODO: Byt ut detta till ditt Google Sheet ID
    // Hitta det i URL:en: https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || 'DIN_GOOGLE_SHEET_ID';

    // Formatera funktionalitet som en sträng
    const functionality = [
      data.functionality.contactForm && 'Kontaktformulär',
      data.functionality.quoteRequest && 'Offertförfrågan',
      data.functionality.bookingSystem && `Bokningssystem (${data.functionality.bookingSystemDetails})`,
      data.functionality.blog && 'Blogg',
      data.functionality.ecommerce && `E-handel (${data.functionality.ecommerceProductCount} produkter)`,
      data.functionality.multilingual && `Flerspråkighet (${data.functionality.multilingualLanguages})`,
      data.functionality.socialMedia && 'Sociala medier',
    ].filter(Boolean).join(', ');

    // Rad att lägga till i sheetet
    const values = [
      [
        new Date().toLocaleString('sv-SE'),
        data.company.companyName,
        data.company.orgNumber,
        data.company.existingWebsite,
        data.company.contactPerson,
        data.company.email,
        data.company.phone,
        data.goals.mainGoal,
        data.goals.targetAudience,
        data.goals.competitors,
        data.goals.deadline,
        data.design.logoName,
        data.design.colorPreferences,
        data.design.stylePreference,
        data.design.inspirationLinks,
        functionality,
        data.content.hasTexts,
        data.content.hasImages,
        data.content.materialLinks,
        data.content.additionalComments,
      ],
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Onboarding!A:T', // Sheet namn och kolumner
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
    const data: OnboardingData = await request.json();

    // Validera required fields
    if (!data.company.companyName || !data.company.email || !data.company.contactPerson || !data.company.phone) {
      return NextResponse.json(
        { error: 'Saknade obligatoriska fält' },
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
      message: 'Onboarding sparad i Google Sheets!',
      savedToSheet: true,
    });

  } catch (error) {
    console.error('Onboarding API error:', error);
    return NextResponse.json(
      { error: 'Ett fel uppstod. Försök igen eller kontakta oss på kontakt@wallmanswebbyra.se' },
      { status: 500 }
    );
  }
}