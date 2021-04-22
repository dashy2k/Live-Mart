const authenticator = require('otplib').totp
var nodemailer = require('nodemailer');


const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
// Alternative:
// const secret = authenticator.generateSecret();
// Note: .generateSecret() is only available for authenticator and not totp/hotp

const token = authenticator.generate(secret);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'livemart@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'livemart@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Live-Mart Sign In',
  text: 'Your OTP for signing in into Live-Mart is : '+token
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 