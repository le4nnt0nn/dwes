const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Product = require('./routes/product');
const WeatherData = require('./routes/weatherdata');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/product', Product);
app.use('/weatherdata', WeatherData);

module.exports = app