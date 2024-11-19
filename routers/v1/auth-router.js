const express = require('express')
const router = express.Router()
//const {home,register} = require("../../controllers/auth-controller")
const authController = require('../../controllers/auth-controller')
const signupSchema = require('../../validators/auth-validator')
const validate = require('../../middlewares/validate-middleware')

// http://localhost:5000/api/auth
// router.get('/',(req,resp)=> {
//     resp.status(200).send("Welcome to our website using auth-router");
// });
router.get('/', authController.home)

// http://localhost:5000/api/auth/register
// router.get('/register',(res,resp)=>{
//     resp.status(200).send("Register route url using auth-router");
// });

// router.route('/register').get((res,resp)=>{
//     resp.status(200).send("Register route url using auth-router");
// });

//without validation
////router.route('/register').post(authController.register)

//with validation
router.route('/register').post(validate(signupSchema), authController.register)

router.post('/login', authController.login)

//export rounter
module.exports = router
