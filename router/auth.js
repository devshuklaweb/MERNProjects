const express = require('express')
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
//jwt authentication
const JWT = require('jsonwebtoken');
const jwtkey = "JayShriRaam";

router.get('/', (req, resp) => { //url: /api/auth/
    resp.send("iNotbook api");
});

router.post('/register', [
    body("name", 'Enter a valid name').isLength({ min: 5 }),
    body("email", 'Enter a valid email').isEmail(),
    body("password", 'Enter a valid password').isLength({ min: 5 }).withMessage('Min length is 5 chars'),
], async (req, resp) => { //url: /api/auth/register
    //return errors when any validation true
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({ error: errors.array() });
    }
    //checking usre already exist or not
    let checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
        return resp.status(400).json({ error: "Sorry a user with this email already exist" });
    }
    try {

        const salt = await bcrypt.genSaltSync(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);

        //way-1 for try and catch
        let user = await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email
        });
        let data = {
           user:{
            id: user._id
           }
        }
        //jwt code
        JWT.sign({ data }, jwtkey, { expiresIn: "2h" }, (error, token) => {
            if (error) {
                resp.status(500).send({ error: 'something went wrong. Please try again.' });
            } else {
                let obj = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    authtoken:token
                }
                resp.status(200).json(obj);
            }
        })
        //jwt code end
    } catch (error) {
        return resp.status(401).json({ error: 'Please enter a unique email address', message: error.message })
    }

    //way-2 for without using try catch internally using catch method and then method
    /*
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:secPassword
    })
    .then(user => resp.status(200).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        date:user.date        
    }))
    .catch(err => {
        console.log(err,"catch error")
        return resp.status(401).json({error:'Please enter a unique email address',message:err.message})
    });
    */
});

//url: /api/auth/login
router.post('/login', [
    body("email", 'Enter a valid email').isEmail(),
    body("password", 'Password can not be blank').exists(),
], async (req, resp) => { 
    //return errors when any validation true
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({ error: errors.array() });
    }
    
    try {
        const {email,password} = req.body;
        console.log(email,password);
        let selUser = await User.findOne({ email });
        if (!selUser) {
            return resp.status(400).json({ error: "Email address is not valid." });
        }
        const compairPassword = await bcrypt.compare(password,selUser.password);
        if(!compairPassword) {
            return resp.status(400).json({ error: "Password not valid. Please enter a correct password." });
        }
        let data = {
            user:{
             id: selUser._id
            }
        }
        const authtoken = JWT.sign(data,jwtkey);
        resp.send({authtoken});

        //way-1 for try and catch
        // let user = await User.create({
        //     name: req.body.name,
        //     email: secPassword,
        //     password: req.body.password
        // });
    } catch (error) {
        return resp.status(401).json({ error: 'Internal server error', message: error.message })
    }
});

module.exports = router;