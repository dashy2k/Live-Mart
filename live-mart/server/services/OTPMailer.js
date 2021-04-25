const nodemailer = require('nodemailer')

module.exports = (token) => {
  let options = {
    maxAge: 30 * 24 * 60 * 60 * 1000, // would expire after 15 minutes
    httpOnly: false, // The cookie only accessible by the web server
    signed: false // Indicates if the cookie should be signed
  }

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'livemart69@gmail.com',
      pass: 'livemartB16x'
    }
  })

  var mailOptions = {
    from: 'livemart69@gmail.com',
    to: 'ayush.deep99@gmail.com',
    subject: 'Sign-in OTP Live-Mart',
    text: 'Your OTP for signing into Live-Mart is ' + token
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })

}
