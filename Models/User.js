const mongoose = require("mongoose");
const { Schema } = mongoose;

const userScheme = new Schema({
  name: {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  email: {
    type: String,
    required: true,
    unique:true // Unique index. If you specify `unique: true`
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('users', userScheme);
