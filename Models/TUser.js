const mongoose = require("mongoose");
const { Schema } = mongoose;

const tuserScheme = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const TUser = mongoose.model('tusers', tuserScheme);
TUser.createIndexes();//for creating unique indexes
module.exports = TUser;
