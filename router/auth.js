const express = require('express')
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


router.get('/', (req, resp) => { //url: /api/auth/
    resp.send("iNotbook api");
});

router.post('/register', [
    body("name",'Enter a valid name').isLength({ min: 5 }),
    body("email",'Enter a valid email').isEmail(),
    body("password",'Enter a valid password').isLength({ min: 5 }).withMessage('Min length is 5 chars'),
], async (req, resp) => { //url: /api/auth/register
    //return errors when any validation true
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({error:errors.array()});
    }
    //checking usre already exist or not
    let checkUser = await User.findOne({email:req.body.email});
    if(checkUser) {
        return resp.status(400).json({error:"Sorry a user with this email already exist"});
    }
    const salt = await bcrypt.genSaltSync(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);
    User.create({
        name:req.body.name,
        email:secPassword,
        password:req.body.password
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
});

module.exports = router;