const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: "arch.selmelegy@gmail.com",
    subject: "Welcome to the club",
    text: `Dear Mr.${name}. This is a welcome email to let you know that we are happy to have you on board!!`
  };

  sgMail.send(msg);
};

const sendCancelEmail = (email, name) => {
  const msg = {
    to: email,
    from: "arch.selmelegy@gmail.com",
    subject: "So sad to say goodbye",
    text: `We are very Sorry Mr.${name} that you didn't like our website :(!!`
  };

  sgMail.send(msg);
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
