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
    body("password",'Enter a valid password').isLength({ min: 5 }),
], async (req, resp) => { //url: /api/auth/register
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({error:errors.array()});
    }

    // let data = new User(req.body);
    // let result = await data.save();
    // resp.send(result);
});

module.exports = router;