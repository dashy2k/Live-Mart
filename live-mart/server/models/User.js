const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId : String,
    name : String,
    picture : String,
    email : String,
    cart:{
        type: Array,
        default:[]

    },
    history:{
        type: Array,
        default: []
    }
})

mongoose.model('users',userSchema);