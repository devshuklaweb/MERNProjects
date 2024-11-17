const express = require('express');
const app = express();
const PORT = 5000;

//for accepting json inputs
app.use(express.json());

//get router file
const router = require("./routers/v1/auth-router");

const connectDB = require("./utils/db");

app.use("/api/auth/",router); //means jaise hi url me api/auth aayega router chalega.
//http://localhost:5000/api/auth 

// app.get('/',(req,resp)=> {
//     resp.status(200).send("Welcome to our website");
// });

// app.get('/register',(res,resp)=>{
//     resp.status(200).send("Register route url");
// });

// app.listen(PORT, () => {
//     console.log(`Website listening on port http://localhost:${PORT}`)
// });


//project start when db connected
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Website listening on port http://localhost:${PORT}`)
    });

})