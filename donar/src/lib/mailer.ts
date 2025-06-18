import nodemailer from 'nodemailer';

export async function sendVerificationEmail(to: string, token: string) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or another SMTP service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const verificationUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/verify-email?token=${token}`;

  const mailOptions = {
    from: `"ISKCON Support" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Email Verification - ISKCON Donor Portal',
    html: `
      <p>Thank you for registering.</p>
      <p>Please <a href="${verificationUrl}">click here to verify</a> your email address.</p>
      <p>If you did not request this, you can ignore this email.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
