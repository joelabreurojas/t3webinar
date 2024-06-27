import { sendEmail } from "~/utils/email";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";

export async function GET() {
  try {
    const users = await db.query.users.findMany();

    if (!users) {
      return new Response(JSON.stringify({ message: "No users found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    users.map(
      async (userData) =>
        await sendEmail(
          {
            firstName: userData.name.split(" ")[0],
            email: userData.email,
          },
          {
            title: "Tech Talent Hub - Reminder to Webinar",
            message: `
            <head>
              <link
                href='https://fonts.googleapis.com/css?family=Inter'
                rel='stylesheet'
              >
            </head>
            <body style= 'background-color: white'>
              <table style='
                color: black;
                max-width: 600px;
                margin: 0 auto;
                padding: 0;
                border-collapse: collapse;
                font-family:
                  &quot;Inter&quot;,
                  &quot;Helvetica&quot;,
                  &quot;Arial&quot;,
                  sans-serif;
                '
                height='100%'
                width='100%'
              >
                <tbody>
                  <tr>
                    <td style='padding: 30px;' align='center' valign='top'>
                      <div>
                        <img
                          style='text-align: center;'
                          src='https://utfs.io/f/a6d4d414-e41e-462f-bf5f-bcb5fedf89df-2olo5d.png'
                          alt='Tech Talent Hub notification'
                          width='48'
                        >
                        <h1 style='
                          font-size: 2.4em;
                          line-height: 1.3;
                          '
                        >Hello again!</h1>
                        <p style='font-size: 1.6em; line-height: 1.3'>
                          Our event takes place today, don't miss it.
                        </p>
                        <p style='font-size: 1.6em; line-height: 1.3'>
                          We are waiting for you.
                        </p>
                        <hr>
                        <p><strong>
                          <a
                            href='https://meet.google.com/xtk-hjor-eyq'>Google Meet Link
                          </a>
                        </strong></p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </body>
          `,
        }),
    );

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
