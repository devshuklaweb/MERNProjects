const express = require('express')
const app = express();
const port = 5000

app.get('/', (req, resp) => {
    resp.send('Hello World')
})

app.listen(port, () => {
    console.log(`EcommerceApp listening on port http://localhost:${port}`)
})
