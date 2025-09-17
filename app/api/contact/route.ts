import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
// You'll need to add RESEND_API_KEY to your .env.local file
const resendApiKey = process.env.RESEND_API_KEY || '';
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured in environment variables');
      return NextResponse.json(
        { error: 'Email service is not properly configured' },
        { status: 500 }
      );
    }

    // Parse the request body
    const body = await request.json();
    const { firstName, lastName, email, businessName, phoneNumber, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'arefuzzaman2005@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${businessName ? `<p><strong>Business:</strong> ${businessName}</p>` : ''}
        ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Successfully sent the message' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}