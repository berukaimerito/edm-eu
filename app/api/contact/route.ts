// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import validator from 'validator';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Simple in-memory rate limiter (for demonstration; use Redis or similar for production)
const rateLimitStore: { [key: string]: { count: number; lastRequest: number } } = {};
const RATE_LIMIT = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in milliseconds

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'; // Removed request.socket.remoteAddress

  const currentTime = Date.now();
  if (rateLimitStore[ip]) {
    const { count, lastRequest } = rateLimitStore[ip];
    if (currentTime - lastRequest < RATE_LIMIT_WINDOW) {
      if (count >= RATE_LIMIT) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      rateLimitStore[ip].count += 1;
    } else {
      rateLimitStore[ip] = { count: 1, lastRequest: currentTime };
    }
  } else {
    rateLimitStore[ip] = { count: 1, lastRequest: currentTime };
  }

  try {
    const data: ContactFormData = await request.json();

    // Basic validation
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.message ||
      !validator.isEmail(data.email) ||
      !validator.isMobilePhone(data.phone, 'any') // Adjust locale as needed
    ) {
      return NextResponse.json(
        { error: 'All fields are required and must be valid.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: validator.escape(data.name),
      email: validator.normalizeEmail(data.email),
      phone: validator.escape(data.phone),
      message: validator.escape(data.message),
    };

    // Limit message length
    if (sanitizedData.message.length > 1800) {
      return NextResponse.json(
        { error: 'Message is too long. Please limit to 1800 characters.' },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP transport (Outlook)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.office365.com'
      port: Number(process.env.SMTP_PORT), // e.g., 587
      secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for port 587
      auth: {
        user: process.env.SMTP_USER, // Your Outlook email address (info@edm-technologies.pl)
        pass: process.env.SMTP_PASS, // Your Outlook email password or app-specific password
      },
    });

    // Verify the connection configuration
    await transporter.verify();

    // Format the email content
    const mailOptions = {
      from: `"${sanitizedData.name}" <${sanitizedData.email}>`, // Sender address
      to: process.env.CONTACT_EMAIL, // Recipient address (info@edm-technologies.pl)
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      text: `
You have a new contact form submission:

Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone}
Message:
${sanitizedData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Your message has been sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
