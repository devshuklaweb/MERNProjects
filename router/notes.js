const express = require('express')
const router = express.Router();

router.get('/', (req, resp) => { //url: /api/auth/
    // let data = await User.find();
    // console.log(data);
    resp.send("devendra");
});

module.exports = router;