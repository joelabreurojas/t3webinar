import nodemailer from "nodemailer";

export async function POST(request, res) {
  try {
    const { email, name } = await request.json();

    const firstName = name.split(" ")[0];

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

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailData = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Tech Talent Hub - Access to Webinar",
      html: `
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

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (error, info) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Email sent: " + info.response);
          resolve(info);
        }
      });
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
