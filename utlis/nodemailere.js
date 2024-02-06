import nodemailer from "nodemailer";
import { templateEmail } from "./templateEmail.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "amoghazy345@gmail.com",
    pass: "jjry embg zzgh tgzq",
  },
});

async function sendVerificationEmail(email, url) {
  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <amoghazy345@gmail.com>',
    to: email,
    subject: "verification email ✔ ✔ ✔",
    text: " welcome to our website please verify your email",
    html: templateEmail(url),
  });


}

// sendVerificationEmail().catch(console.erro);
export default sendVerificationEmail;
