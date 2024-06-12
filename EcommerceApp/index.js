const express = require('express')
require("./db/config")
const app = express();
const port = 5000
const User = require("./Models/User");
const Product = require("./Models/Product");
app.use(express.json());

//resolve cors issue
const cors = require("cors");
app.use(cors());

app.get('/', async (req, resp) => {
    let data = await User.find();
    console.log(data);
    resp.send(data);
});

app.post('/register', async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send({ _id: result._id, name: result.name, email: result.email });
});

app.post('/login', async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");//-password se ye column result se hata dega
        if (user) {
            resp.send(user);
        } else {
            resp.send({ result: 'No user found' });
        }
    } else {
        resp.send({ result: 'No user found' });
    }
});

/////////////////////////////////////////////// Product API
app.post('/add-product', async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
});

app.get('/list-product', async (req, resp) => {
    let product = await Product.find();
    if (product.length > 0) {
        resp.send(product);
    } else {
        resp.send({ result: 'No record found!' })
    }
})

app.get('/get-product/:id', async (req, resp) => {
    let product = await Product.findOne({ _id: req.params.id });
    console.log(product.length);
    if (product) {
        resp.send(product);
    } else {
        resp.send({ result: 'No record found!' })
    }
});

app.delete('/del-product/:id', async (req, resp) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
});

app.put('/update-product/:id', async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            "$set": req.body
        }
    );
    resp.send(result);
});

app.get('/search-product/:key', async (req, resp) => {
    let product = await Product.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { category: { $regex: req.params.key } }
        ]
    });
    resp.send(product);
});

app.listen(port, () => {
    console.log(`EcommerceApp listening on port http://localhost:${port}`)
});
