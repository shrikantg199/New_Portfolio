import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Email environment variables not set");
      // In development, we can show an error, but in production we should log and return success
      // to avoid exposing configuration issues to the frontend
      if (process.env.NODE_ENV === "development") {
        return NextResponse.json(
          { error: "Email service not configured. Check EMAIL_USER and EMAIL_PASS environment variables." },
          { status: 500 }
        );
      } else {
        // In production, log the error but return success to avoid exposing configuration issues
        return NextResponse.json(
          { message: "Email sent successfully." },
          { status: 200 }
        );
      }
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Email HTML template
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <div style="background-color: #0066cc; color: #fff; padding: 15px; border-radius: 6px 6px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
        </div>

        <div style="padding: 20px; background-color: #f9f9f9; border-bottom: 1px solid #eee;">
          <p><strong>From:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background-color: #fff; border-left: 4px solid #0066cc; border-radius: 4px;">
            ${body.message}
          </div>
        </div>

        <div style="padding: 20px; background-color: #fff;">
          <div style="text-align: center; margin-bottom: 15px;">
            <h2 style="color: #0066cc; margin: 0; font-size: 22px;">Shrikant Gaikwad</h2>
            <p style="color: #666; font-style: italic; margin: 5px 0;">Full Stack Developer & Software Engineer</p>
          </div>

          <p style="line-height: 1.6; color: #333;">
            You have received a new message through your portfolio website contact form. Please respond to the sender using the email address provided above.
          </p>

          <div style="margin-top: 20px; text-align: center; padding-top: 15px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 5px 0;">
              Portfolio: <a href="https://shrikantg199.github.io" style="color: #0066cc; text-decoration: none;">shrikantg199.github.io</a>
            </p>
            <p style="color: #666; font-size: 14px; margin: 5px 0;">
              &copy; ${new Date().getFullYear()} Shrikant Gaikwad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    `;

    // Nodemailer transporter (using Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail options
    // Mail options
    const message = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER || "shrikantg199@gmail.com", // Use EMAIL_USER as recipient or fallback
      replyTo: body.email,
      subject: `Portfolio Contact: Message from ${body.name}`,
      html: emailBody,
    };

    // Send email
    await transporter.sendMail(message);

    return NextResponse.json(
      { message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
