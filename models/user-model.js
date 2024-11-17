const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    phone: {
        type:String,
        require:true
    },
    isAdmin: {
        type:Boolean,
        default:false
    }
});

//define the modal name or collection name
const User = mongoose.model("User",userSchema); //first collection name in singular form and second is schema

module.exports = User;