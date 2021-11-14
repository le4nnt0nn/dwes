const express = require('express')
const app = express()
const port = 3000

const token = 'Au9as9df99s9adja9sd8fuasodf8ua89sdfuasdfhalskdjfasfasdfv32342';
app.get(`/header/:token`, function (req, res) {
    if(req.params.token == token) {
        res.send("Welcome!");
    } else {
        res.send({"code": 401,
        "error": "Unauthorized",
        "message": "Error: Set a token to login"})
    }
});

app.get('/:', (req, res) => {
    res.writeHead(404);
    res.send('Not Found');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



