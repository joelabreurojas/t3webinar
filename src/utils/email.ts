import nodemailer from "nodemailer";

export async function sendEmail(userData, messageData) {
  const { email, name } = userData;
  const { title, message } = messageData;

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
    subject: title,
    html: message,
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
}
