require('dotenv').config() //ye sbse top pe likhna hoga use karne ke liye.
const express = require('express')
var cors = require('cors')
const app = express()
const PORT = process.env.PORT

//for accepting json inputs
app.use(express.json())

//cors
let corsOption = {
  origin: 'http://localhost:5173',
  methods: 'POST, GET, PUT, PATCH, DELETE, HEAD',
  credentials: true,
};
app.use(cors(corsOption))

//get router file
const authRoute = require('./routers/v1/auth-router')

const contactRoute = require('./routers/v1/contact-router')

const serviceRoute = require('./routers/v1/service-router')

const adminRoute = require("./routers/v1/admin-router")

const connectDB = require('./utils/db')
const errorMiddleware = require('./middlewares/error-middleware')

app.use('/api/auth/', authRoute) //means jaise hi url me api/auth aayega router chalega.
//http://localhost:5000/api/auth

app.use('/api/contactform/', contactRoute)

app.use('/api/services/', serviceRoute)

app.use('/api/admin/', adminRoute)
// app.get('/',(req,resp)=> {
//     resp.status(200).send("Welcome to our website");
// });

// app.get('/register',(res,resp)=>{
//     resp.status(200).send("Register route url");
// });

// app.listen(PORT, () => {
//     console.log(`Website listening on port http://localhost:${PORT}`)
// });

// first check if error occur then show error
app.use(errorMiddleware)

//project start when db connected
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Website listening on port http://localhost:${PORT}`)
  })
})
