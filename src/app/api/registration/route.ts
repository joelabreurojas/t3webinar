import { NextApiRequest, NextApiResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, name } = await request.json();

    const firstName =  name.split(" ")[0]

    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      host: process.env.SMTP_HOST,
      secure: process.env.SMTP_SECURE,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Tech Talent Hub - Access to Webinar",
      html: `<div><h1>Hello, ${firstName}. Thanks for registering!</h1><p>Our meeting will be on July 10.</p><a href='https://meet.google.com/xtk-hjor-eyq'>Google Meet Link</a><p>We are glad you are interested in joining us.</p></div>`,
    });

    return new Response(JSON.stringify({ message: "Email sent" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);

    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
