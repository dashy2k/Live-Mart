const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: String,
    name: String,
    picture: String,
    email: String,
    cart: {
        type: Array,
        default: []

    },
    orderHistory:{
        type: Array,
        default: []
    },
    signUpDetails: {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        re_password: String,
        customer: Boolean,
        retailer: Boolean,
        wholesaler: Boolean,
        address1: String,
        address2: String,


    }
})

mongoose.model('users', userSchema);