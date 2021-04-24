const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: {
        type: String,
        default: []
    },
    name: String,
    picture: String,
    email: String,
    password: String,
    address: String,
    cart: {
        type: Array,
        default: []

    },
    orderHistory: {
        type: Array,
        default: []
    },
    roles: {
        customer: {
            type: Boolean,
            default: true
        },
        retailer: Boolean,
        wholesaler: Boolean,
    }
})

mongoose.model('users', userSchema);