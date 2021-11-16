var express = require('express')
var morgan = require('morgan')

var app = express()

// formato tiny
app.use(morgan('tiny'))

app.get('/', function (req, res) {
  res.send('Hola pequeño Morgan!')
})

app.listen(3000)