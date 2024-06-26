import { EmailTemplate } from "~/_components/email";
import { Resend } from "resend";
import { NextApiRequest, NextApiResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email } = await request.json();

    const firstName = name.split(" ")[0];

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Access to Webinar - Tech Talent Hunt",
      react: EmailTemplate({ firstName }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
