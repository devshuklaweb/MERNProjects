




const Product = require("./Models/Product");

//jwt authentication
const JWT = require('jsonwebtoken');
const jwtkey = "JayShriRaam";
//middleware for verifytokens
function verifyJWTToken(req, resp, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(' ')[1];
        JWT.verify(token, jwtkey, (error, valid) => {
            if (error) {
                resp.status(401).send({ result: 'Please enter valid token' });
            } else {
                next();
            }
        })
    } else {
        resp.status(403).send({ result: 'Please add token with header' });
    }
}
//resolve cors issue
const cors = require("cors");
app.use(cors());

app.get('/', async (req, resp) => {
    let data = await User.find();
    console.log(data);
    resp.send(data);
});

app.post('/register', async (req, resp) => {
    let data = new User(req.body);
    let result = await data.save();
    //jwt code
    JWT.sign({ data }, jwtkey, { expiresIn: "2h" }, (error, token) => {
        if (error) {
            resp.send({ result: 'something went wrong. Please try again.' });
        } else {
            let user = {
                _id: result._id,
                name: result.name,
                email: result.email
            }
            resp.send({ user, auth: token });

        }
    })
    //jwt code end
});

app.post('/login', async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password");//-password se ye column result se hata dega
        if (user) {
            //jwt code
            JWT.sign({ user }, jwtkey, { expiresIn: "2h" }, (error, token) => {
                if (error) {
                    resp.send({ result: 'something went wrong. Please try again.' });
                } else {
                    resp.send({ user, auth: token });
                }
            })
            //jwt code end
        } else {
            resp.send({ result: 'No user found' });
        }
    } else {
        resp.send({ result: 'No user found' });
    }
});

/////////////////////////////////////////////// Product API
app.post('/add-product',verifyJWTToken, async (req, resp) => {
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

app.get('/get-product/:id',verifyJWTToken, async (req, resp) => {
    let product = await Product.findOne({ _id: req.params.id });
    console.log(product.length);
    if (product) {
        resp.send(product);
    } else {
        resp.send({ result: 'No record found!' })
    }
});

app.delete('/del-product/:id', verifyJWTToken, async (req, resp) => {
    let result = await Product.deleteOne({ _id: req.params.id });
    resp.send(result);
});

app.put('/update-product/:id',verifyJWTToken, async (req, resp) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            "$set": req.body
        }
    );
    resp.send(result);
});

app.get('/search-product/:key', verifyJWTToken, async (req, resp) => {
    let product = await Product.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { price: { $regex: req.params.key } },
            { category: { $regex: req.params.key } }
        ]
    });
    resp.send(product);
});
