let nodemailer = require("nodemailer");
const formate = require("../mail/mailtemplate");

//from
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "vananijaydip53@gmail.com",
    pass: "imreupuhmdnidowy",
  },
});

let sendEmail = (to, subject, data) => {
  return transporter.sendMail({
    from: `<vananijaydip53@gmail.com>`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    // text: data, // plain text body
    html: data,
  });
};

module.exports = sendEmail;