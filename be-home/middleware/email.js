const nodemailer = require('nodemailer');
const path = require('path');

// --
const SECRET_PATH = '/app/deploy/secret';

// --
const KEY = require(path.join(SECRET_PATH, 'key'));

// --
let transporter = null;

const setTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth: {
        user: KEY.getNodeMailerUserName(process.env.NODE_ENV),
        pass: KEY.getNodeMailerUserPassword(process.env.NODE_ENV),
      },
    });
  }
};

const EMAIL = {
  initTransporter: () => {
    setTransporter();
  },
  sendMail: async (to = '', subject = '', text = '', html = '') =>
    await transporter.sendMail({
      from: `"Schedule Checker Admin" <${process.env.NODEMAILER_USER}>`,
      to,
      subject,
      text,
      html,
    }),
};

module.exports = EMAIL;
