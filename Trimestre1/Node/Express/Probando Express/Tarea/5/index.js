const express = require('express')
const fs = require('fs').promises;
const app = express()
const port = 3000

app.get('/page', (req, res) => {
    fs.readFile(__dirname + "/index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    });
})
app.get('/', function (req, res) {
    fs.readFile(__dirname + "/error.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})