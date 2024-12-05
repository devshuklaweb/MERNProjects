const ContactModal = require('../models/contact-model')

const contactForm = async (res, resp) => {
  try {
    const response = res.body
    await ContactModal.create(response)
    return resp.status(200).json({ message: 'Contact form created' })
  } catch (error) {
    const errorObj = {
      status: 500,
      message: 'Fill the input properly ',
      extraDetails: error
    }
    console.log(errorObj, 'Error')
    //next(errorObj)
  }
}

module.exports = contactForm
