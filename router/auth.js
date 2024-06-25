const express = require('express')
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');

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
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    .then(user => resp.status(200).json(user))
    .catch(err => {
        console.log(err,"catch error")
        return resp.status(401).json({error:'Please enter a unique email address',message:err.message})
    });
});

module.exports = router;