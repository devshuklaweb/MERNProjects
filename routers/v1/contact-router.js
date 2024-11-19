const express = require('express')
const router = express.Router()

const contactController = require('../../controllers/contact-controller')

router.route('/save').post(contactController)

module.exports = router
