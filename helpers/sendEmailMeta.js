const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD } = process.env;

const sendEmailMeta = async () => {
  const nodemailerConfig = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      user: 'southernsunny@meta.ua',
      pass: META_PASSWORD,
    },
  };

  const transport = nodemailer.createTransport(nodemailerConfig);

  const email = {
    to: 'southernsunny22@gmail.com',
    from: 'southernsunny@meta.ua',
    subject: 'Test email',
    html: '<p><strong>Test email</strong> from localhost:3000</p>',
  };

  await transport.sendMail(email);
};

module.exports = sendEmailMeta;
