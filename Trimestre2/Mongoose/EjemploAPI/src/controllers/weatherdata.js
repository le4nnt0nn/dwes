const WeatherData = require('../models/weatherdata');

function listall(req, res) {
    WeatherData.find({})
        .then(weatherDatas => {
            if(weatherDatas.length) return res.status(200).send({weatherDatas})
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(err => res.status(500).send({err}))
}

function create(req, res) {
    let weatherData = new weatherData(req.body);
    weatherData.save()
        .then(weatherData => 
            res.status(201).send({weatherData})
        ).catch(err => res.status(500).send({err}))
    
}

function show(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.weatherDatas) return res.status(404).send({message: 'Not Found'});
    let weatherDatas = req.body.weatherDatas;
    return res.status(200).send({weatherDatas});
}

function update(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.weatherDatas) return res.status(404).send({message: 'Not Found'});
    let weatherData = req.body.weatherDatas[0];
    weatherData = Object.assign(weatherData, req.body);
    weatherData.save()
        .then(weatherData => res.status(200).send({message: 'weatherData Updated', weatherData})
    ).catch(err => res.status(500).send({err}))
}

function deleted(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.weatherDatas) return res.status(404).send({message: 'Not Found'});
    req.body.weatherDatas[0].remove()
        .then(weatherData => {
            res.status(200).send({message:'weatherData removed', weatherData})
        }
        ).catch(err => res.status(500).send({err}));
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    WeatherData.find(query).then(weatherDatas => {
        if(!weatherDatas.length) return next();
        req.body.weatherDatas = weatherDatas;
        return next();
    }).catch(err =>{
        req.body.error = err;
        next();
    })
}

module.exports = {
    listall,
    show,
    create,
    update,
    deleted,
    find,
}