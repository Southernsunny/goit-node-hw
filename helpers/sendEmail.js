const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
require('dotenv').config();

const { MAILGUN_API_KEY } = process.env;

const sendEmail = async data => {
  const mg = mailgun.client({
    username: 'southensunny22@gmail.com',
    key: MAILGUN_API_KEY,
  });

  mg.messages
    .create('sandbox37207933cf9b416589e9c4f234216fe7.mailgun.org', {
      from: '<southensunny22@gmail.com>',
      to: [data.to],
      subject: 'Verify your email',
      text: 'Verify your email',
      html: data.html,
    })
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
};

module.exports = sendEmail;
