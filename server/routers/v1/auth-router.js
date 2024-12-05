const express = require('express')
const router = express.Router()
//const {home,register} = require("../../controllers/auth-controller")
const authController = require('../../controllers/auth-controller')
const signupSchema = require('../../validators/auth-validator')
const authMiddleware = require("../../middlewares/authMiddleware");

const validate = require('../../middlewares/validate-middleware')

const signinSchema = require('../../validators/login-validator')

// http://localhost:5000/api/auth
router.get('/', authController.home)
//without validation
    //router.route('/register').post(authController.register)
    
//with validation
router.route('/register').post(validate(signupSchema), authController.register)

router.route('/login').post(validate(signinSchema), authController.login)

router.route("/user").get(authMiddleware, authController.user);

//export rounter
module.exports = router
