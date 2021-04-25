const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model('users')

module.exports = app => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))

  app.post('/userSignup', (req, res) => {
    const newUser = {
      name: req.body.firstName + ' ' + req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      address: req.body.address1 + ' ' + req.body.address2
    }
    new User({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      address: newUser.address,
      role: {
        customer: req.body.cutomer || false,
        retailer: req.body.retailer || false,
        wholeseller: req.body.wholeseller || false
      }
    })
      .save()
      .then((err) => {
        console.log(err)
      })
    res.redirect('http://localhost:3000/')
  })
}
