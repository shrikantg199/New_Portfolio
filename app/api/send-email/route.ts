// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create an email body with user details
    const emailBody = `
    <div style="font-family: Poppins, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <div style="background-color: #0066cc; color: white; padding: 15px; border-radius: 6px 6px 0 0; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      
      <div style="padding: 20px; background-color: #f9f9f9; border-bottom: 1px solid #eee;">
        <p style="margin: 8px 0;"><strong>From:</strong> ${body.name}</p>
        <p style="margin: 8px 0;"><strong>Email:</strong> ${body.email}</p>
        <p style="margin: 12px 0 8px;"><strong>Message:</strong></p>
        <p style="margin: 8px 0; padding: 12px; background-color: white; border-left: 4px solid #0066cc; border-radius: 4px;">${body.message}</p>
      </div>
      
      <div style="padding: 20px; background-color: white;">
        <div style="text-align: center; margin-bottom: 15px;">
          <h2 style="color: #0066cc; margin: 0; font-size: 22px;">Shrikant Gaikwad</h2>
          <p style="color: #666; font-style: italic; margin: 5px 0;">Full Stack Developer & Software Engineer</p>
        </div>
        
        <p style="line-height: 1.6; color: #333;">You have received a new message through your portfolio website contact form. Please respond to the sender using the email address provided above.</p>
        
        <div style="margin-top: 20px; text-align: center; padding-top: 15px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px; margin: 5px 0;">Portfolio: <a href="https://your-portfolio-url.com" style="color: #0066cc; text-decoration: none;">your-portfolio-url.com</a></p>
          <p style="color: #666; font-size: 14px; margin: 5px 0;">© ${new Date().getFullYear()} Shrikant Gaikwad. All rights reserved.</p>
        </div>
      </div>
    </div>
  `;

    // Create transporter with your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Create the message object - sending FROM your app TO your email
    const message = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`, // Use your app's email as the sender
      to: "shrikantg199@gmail.com", // Your personal email
      replyTo: body.email, // Set reply-to as the user's email
      subject: `Portfolio Contact: Message from ${body.name}`,
      html: emailBody,
    };

    // Send the email
    await transporter.sendMail(message);
    
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: (error as Error).message },
      { status: 500 }
    );
  }
}
