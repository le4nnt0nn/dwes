var express = require('express')
var router = express.Router()


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res) {
  res.send('Animals Home Page')
})

router.get('/dog', function (req, res) {
  res.send({ "grow": "guau guau" })
})
router.get('/cat', function (req, res) {
  res.send({ "grow": "miau" })
})
router.get('/bird', function (req, res) {
  res.send({ "grow": "pio pio" })
})
router.get('/', function (req, res) {
  res.send({
    "code": 404,
    "error": "Not Found",
    "message": "Error: Path not found"
  })
})

module.exports = router