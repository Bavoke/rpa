// mailer.js
const nodemailer = require('nodemailer');

async function sendEmail(toEmail) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL || 'your_email@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'your_app_password'
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: toEmail,
    subject: 'Your Email Was Successfully Extracted!',
    html: `
      <h2>Congratulations!</h2>
      <p>Your email has been successfully extracted by our automation bot.</p>
      <p>This is an automated test from your DevOps project.</p>
    `
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;