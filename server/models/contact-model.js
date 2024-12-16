const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')
const User = require("./user-model");

const ContactSchema = Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Referencing User
  //ref: 'User' = User = require("./user-model")
},
  {
    timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }
  }
)

//create a modal or collection
const Contact = new model('Contact', ContactSchema)

module.exports = Contact
