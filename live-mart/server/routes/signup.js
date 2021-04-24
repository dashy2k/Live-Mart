const mongoose = require('mongoose')
var users = require('./../models/User.js');
const User = mongoose.model('users')
const bodyParser = require('body-parser');

module.exports = app => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.post('/usersignup', (req, res) => {
        const userDetails = new User({
            name: req.body.firstName + ' ' + req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address1 + req.body.address2
        });
        userDetails.save(function (err) {
            if (err) return handleError(err)
        });
        console.log(userDetails);
        res.redirect('http://localhost:3000');
    })
}