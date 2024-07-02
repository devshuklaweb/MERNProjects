const express = require('express')
require("./db/config")
const app = express();
const port = 5000
app.use(express.json());
//resolve cors issue
const cors = require("cors");
app.use(cors());
// available routes
app.use('/api/auth/',require("./router/auth"));
app.use('/api/notes/',require("./router/notes"));

app.listen(port, () => {
    console.log(`EcommerceApp listening on port http://localhost:${port}`)
});
