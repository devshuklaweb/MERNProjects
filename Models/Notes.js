const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesScheme = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, //treated as a foreign key
    ref: 'users',//users table name
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
    default:'General'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('notes', notesScheme);;
