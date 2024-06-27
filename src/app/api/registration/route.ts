import { sendEmail } from "~/utils/email";
import { db } from "~/server/db";
import { eq } from "drizzle-orm";
import { users } from "~/server/db/schema";

export async function POST(request) {
  const userData = await request.json();

  try {
    const user = await db.query.users.findFirst({
      where: (model, { eq }) => eq(model.email, userData.email),
    });

    if (user) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    await db.insert(users).values({
      name: userData.name,
      email: userData.email,
      company: userData.company,
      position: userData.position,
    });

    const firstName = userData.name.split(" ")[0];

    const messageData = {
      title: "Tech Talent Hub - Access to Webinar",
      message: `
        <head>
          <link
            href='https://fonts.googleapis.com/css?family=Inter'
            rel='stylesheet'
          >
        </head>
        <body style='background-color: white'>
          <table style='
            color: black;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            border-collapse: collapse;
            font-family:
              "Inter",
              "Helvetica",
              "Arial",
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
                    />
                    <h1 style='
                      font-size: 2.4em;
                      line-height: 1.3;
                    '
                    >Hello, ${firstName}!</h1>
                    <p style='font-size: 1.6em; line-height: 1.3'>
                      Our meeting will be on July 10.
                    </p>
                    <p style='font-size: 1.6em; line-height: 1.3'>
                      We are glad you are interested in joining us.
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
    };

    await sendEmail(userData, messageData);

    return new Response(
      JSON.stringify({ message: "User created successfully", user: userData }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ message: "Failed to create user" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
