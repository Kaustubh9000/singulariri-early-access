// app/api/submit/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json(); // Parse request body

    const apiKey = process.env.API_KEY; // Server-side API key
    const googleScriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return NextResponse.json(
        { status: 'error', message: 'Google Script URL not configured' },
        { status: 500 }
      );
    }

    const payload = { name, email, apiKey };

    // Send request to Google Apps Script
    const googleScriptResponse = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await googleScriptResponse.json();
    return NextResponse.json(result, { status: 200 });

  } catch (error: any) {
    return NextResponse.json(
      { status: 'error', message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
