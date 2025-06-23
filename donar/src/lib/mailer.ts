import nodemailer from 'nodemailer';

export async function sendVerificationEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your email password or app password
    },
  });

  const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify?token=${token}`;

  const mailOptions = {
    from: `"DonationPe" <${process.env.SMTP_USER}>`,
    to: email,
    subject: 'Verify Your Email',
    html: `
      <h2>Welcome to DonationPe!</h2>
      <p>Please verify your email by clicking the link below:</p>
      <a href="${verificationLink}">${verificationLink}</a>
    `,
  };

  await transporter.sendMail(mailOptions);
}
