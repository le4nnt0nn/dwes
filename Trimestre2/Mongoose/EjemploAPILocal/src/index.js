const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Product = require('./routes/product');
const WeatherData = require('./routes/weatherdata');
const Grade = require('./routes/grades');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/product', Product);
app.use('/weatherdata', WeatherData);
app.use('/grades', Grade);

module.exports = app