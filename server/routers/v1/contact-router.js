const express = require('express')
const router = express.Router()

const contactController = require('../../controllers/contact-controller')

const contactSchema = require('../../validators/contact-validator')
const validate = require('../../middlewares/validate-middleware')

router.route('/save').post(validate(contactSchema), contactController)

module.exports = router
