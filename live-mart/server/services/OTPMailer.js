const cookieParser = require('cookie-parser')

const authenticator = require('otplib').totp

const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD'

var nodemailer = require('nodemailer')

const token = authenticator.generate(secret)


module.exports = app => {
  app.use(cookieParser())

  let options = {
    maxAge: 30 * 24 * 60 * 60 * 1000, // would expire after 15 minutes
    httpOnly: false, // The cookie only accessible by the web server
    signed: false // Indicates if the cookie should be signed
  }

 
}
