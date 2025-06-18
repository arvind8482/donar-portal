// app/api/send-verification/route.ts
import { transporter } from '../../../lib/mailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { to, subject, text, html } = await req.json();

  try {
    await transporter.sendMail({
      from: `"ISKCON Wavecity" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text,
      html,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Email error:', error.message);
    return NextResponse.json({ message: 'Email failed', error: error.message }, { status: 500 });
  }
}
