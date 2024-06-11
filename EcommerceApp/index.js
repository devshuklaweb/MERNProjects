const express = require('express')
require("./db/config")
const app = express();
const port = 5000
const User = require("./Models/User");
app.use(express.json());
//resolve cors issue
const cors = require("cors");
app.use(cors());
app.get('/', async (req, resp) => {
    let data = await User.find();
    console.log(data);
    resp.send(data);
})

app.post('/register', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
})

app.listen(port, () => {
    console.log(`EcommerceApp listening on port http://localhost:${port}`)
})
