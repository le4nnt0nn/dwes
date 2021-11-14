const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('This is the principal route')
})

app.get('/header', function (req, res) {
  res.send('header')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

