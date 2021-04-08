const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID : String,
    name : String,
    role : Number
})

mongoose.model('users',userSchema);