# Email Setup Guide for Portfolio

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration for Nodemailer
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Gmail App Password Setup

For Gmail, you need to use an App Password instead of your regular password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Enable 2-Step Verification if not already enabled
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Use that password in the `EMAIL_PASS` environment variable

## Alternative Email Services

You can also use other email services by modifying the transporter configuration in `app/api/send-email/route.ts`:

### Outlook/Hotmail

```javascript
const transporter = nodemailer.createTransporter({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP

```javascript
const transporter = nodemailer.createTransporter({
  host: "smtp.your-provider.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Customization

### Update Portfolio URL

In `app/api/send-email/route.ts`, replace `your-portfolio-url.com` with your actual portfolio URL.

### Update Email Template

You can customize the email template by modifying the `emailBody` HTML in the API route. The template includes:

- Professional styling
- Sender information
- Your name and title
- Portfolio link
- Copyright notice

## Testing

1. Start your development server: `npm run dev`
2. Fill out the contact form on your portfolio website
3. Submit the form
4. Check your email inbox for the message

## Security Notes

- Never commit your `.env.local` file to version control
- Use App Passwords instead of regular passwords
- Consider rate limiting for production use
- Add CAPTCHA or other spam prevention measures for production
- Update the portfolio URL in the email template
