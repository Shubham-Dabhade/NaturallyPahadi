import { Email } from "./smtp";
import { SMTPClient } from "smtp-client";
// import {nodemailer} from "nodemailer";
// const nodemailer = require("nodemailer");

export const sendMail = () => {
  console.log("Sending...");
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "dabhadeshubham83@gmail.com",
    Password: "B7797CF703A884B8263327402D53249E02E2",
    To: "dabhadeshubham83@gmail.com",
    From: "dabhadeshubham512003@gmail.com",
    Subject: "Testing js - office",
    Body: "Hola mundo del email port 578"
  }).then((message) => alert("mail sent successfully"));
};

export const sendMailClient = () => {
  let s = new SMTPClient({
    host: "smtp.elasticemail.com",
    port: 25
  });

  (async function () {
    await s.connect();
    await s.greet({ hostname: "smtp.elasticemail.com" }); // runs EHLO command or HELO as a fallback
    await s.authPlain({
      username: "dabhadeshubham83@gmail.com",
      password: "B7797CF703A884B8263327402D53249E02E2"
    }); // authenticates a user
    await s.mail({ from: "dabhadeshubham512003@gmail.com" }); // runs MAIL FROM command
    await s.rcpt({ to: "dabhadeshubham83@gmail.com" }); // runs RCPT TO command (run this multiple times to add more recii)
    await s.data("Hola mundo mail source"); // runs DATA command and streams email source
    await s.quit(); // runs QUIT command
  })().catch(console.error);
};

// export const sendNodemailer = () => {
//   let transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "put_your_username_here",
//       pass: "put_your_password_here"
//     }
//   });
//   const message = {
//     from: "elonmusk@tesla.com", // Sender address
//     to: "to@email.com", // List of recipients
//     subject: "Design Your Model S | Tesla", // Subject line
//     text: "Have the most fun you can in a car. Get your Tesla today!" // Plain text body
//   };
//   transport.sendMail(message, function (err, info) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info);
//     }
//   });
// };
