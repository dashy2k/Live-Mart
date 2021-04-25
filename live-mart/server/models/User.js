const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    googleId: {
        type: String,
        default: ""
    },
    name: String,
    picture: String,
    email: String,
    password: {
        type : String,
        default : ""
    },
    address: {
        type : String,
        default : ""
    },
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
        retailer: {
            type : Boolean,
            default : false
        },
        wholeseller : {
            type : Boolean,
            default : false
        }
    }
})

mongoose.model('users', userSchema);