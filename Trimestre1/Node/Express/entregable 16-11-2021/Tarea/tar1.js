const express = require('express')
const winston = require('winston');
const app = express()
const port = 3000

const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize({
            all: true
        }),
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${[info.timestamp]}: ${info.level}: ${info.message}`),
    )
};

const logger = winston.createLogger(logConfiguration);

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.get('/hora', function (req, res) {
    // Si flag es false, se manda el error 500
    const flag = true;
    if (flag === true) {
        logger.info('OK - 2XX');
        var responseText = 'Hello World!<br>'
        responseText += '<small>Requested at: ' + req.requestTime + '</small>'
        res.send(responseText)
    } else {
        logger.error('SERVER ERROR - 5XX')
        res.status(500).send({
            code: 500, message: 'Server Error'
        });;
    }
})

function controller(req, res, next) {
    try {
        requestTime();
    } catch (err) {
        return next(err);
    }
}

/* function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode < 500 ? err.statusCode : 500;
        logger.error('SERVER ERROR - 5XX')
        res.status(statusCode).send({
        code: statusCode, message: 'Server Error'});;
} */

function warnHandler(err, req, res, next) {
    const statusCode = err.statusCode < 404 ? err.statusCode : 404;
    logger.warn('NOT FOUND - 4XX')
    res.status(statusCode).send({
        code: statusCode, message: 'Not Found'
    });;
}

app.use(controller)
app.use(warnHandler)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})