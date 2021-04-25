const mongoose = require('mongoose')
const User = mongoose.model('users')
const express = require('express')
const cookieParser = require('cookie-parser')

module.exports = app => {

  app.use(cookieParser())

  let options = {
    maxAge: 30 * 24 * 60 * 60 * 1000, // would expire after 15 minutes
    httpOnly: false, // The cookie only accessible by the web server
    signed: false // Indicates if the cookie should be signed
  }

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.post('/signInCheck', (req, res) => {
    console.log(req.body)
    User.findOne({ email: req.body.email }, (err, UserProfile) => {
      if (err || UserProfile == null) {
        console.log(err)
        res.redirect('http://localhost:3000/')
      } else if (UserProfile.password == req.body.password) {
        res.cookie('user', UserProfile, options)
        console.log(req.cookies)
        res.redirect('http://localhost:3000/verifyOTP')
      } else {
        res.redirect('http://localhost:3000/')
      }
    })
  })
}
