import nodemailer from 'nodemailer';

export async function post({ request }) {
  const { name, email, message } = await request.json();

  // 1. Configure your email transporter
  const transporter = nodemailer.createTransport({
    // Replace with your email provider's SMTP settings
    host: 'YOUR_SMTP_HOST',
    port: 587, // or 465
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'YOUR_EMAIL_ADDRESS',
      pass: 'YOUR_EMAIL_PASSWORD',
    },
  });

  try {
    // 2. Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'contact@denverbitdevs.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return {
      status: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      status: 500,
      body: JSON.stringify({ error: 'Failed to send email.' }),
    };
  }
}