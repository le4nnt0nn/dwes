const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

app.use(express.static('pages'))

app.use('/static', express.static('public'))
app.get("/page", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

app.get('/page2', function (req, res) {
    res.sendFile(__dirname + "/pages/index2.html");
});

app.get('/error', function (req, res) {
    res.sendFile(__dirname + "/pages/error.html");
});

app.get('/', function (req, res) {
    console.log(error)
});

// error handler
app.use(function(err, req, res, next){
    return res.status(404).send('Not Found Error 404');
});


