const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const Product = require('./routes/product');
const Grade = require('./routes/grades');
const Data = require('./routes/weatherdata');
const Comment = require('./routes/comments');
const Movie = require('./routes/movies');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// NOTA: para usar las distintas bbdd, cambiar parámetro en .env

//myFirstDatabase
app.use('/product', Product);

//sample_weatherdata
app.use('/data', Data);

//sample_mflix
app.use('/comments', Comment);

app.use('/movies', Movie);

//sample_training
app.use('/grades', Grade);

module.exports = app