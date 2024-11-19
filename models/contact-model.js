const { Schema, model } = require('mongoose')

const ContactSchema = Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
})

//create a modal or collection
const Contact = new model('Contact', ContactSchema)

module.exports = Contact
