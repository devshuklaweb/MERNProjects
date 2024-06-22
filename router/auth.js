const express = require('express')
const User = require("../Models/User");
const router = express.Router();

router.get('/', (req, resp) => { //url: /api/auth/
    resp.send("iNotbook api");
});

router.post('/register',  async (req, resp) => { //url: /api/auth/register
    let data = new User(req.body);
    let result = await data.save();
    resp.send(result);
});

module.exports = router;