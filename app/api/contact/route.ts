// app/api/contact/route.ts
import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // TODO: Integrate with an email service or database
    // Example: Send an email using Nodemailer or SendGrid
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: data.email,
      to: process.env.CONTACT_EMAIL, // Your email address
      subject: `New Contact Form Submission from ${data.name}`,
      text: data.message,
    };

    await transporter.sendMail(mailOptions);
    */

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json({ message: 'Your message has been sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
