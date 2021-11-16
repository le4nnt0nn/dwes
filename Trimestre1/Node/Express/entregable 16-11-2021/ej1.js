var express = require('express')
var app = express()

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.get('/hora', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})

function controller(req, res, next) {
    try {
        requestTime();
    } catch (err) {
        return next(err);
    }
}

// error handler
function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode < 500 ? err.statusCode : 500;
        res.status(statusCode).send({
        code: statusCode, message: 'Server Error'});;
}

app.use(controller)
app.use(errorHandler)

app.listen(3000)