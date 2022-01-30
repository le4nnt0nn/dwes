const Data = require('../models/weatherdata');

function listall(req, res) {
    Data.find({})
        .then(datas => {
            if(datas.length) return res.status(200).send({datas})
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(err => res.status(500).send({err}))
}

function create(req, res) {
    let data = new data(req.body);
    data.save()
        .then(data => 
            res.status(201).send({data})
        ).catch(err => res.status(500).send({err}))
    
}

function show(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.data) return res.status(404).send({message: 'Not Found'});
    let datas = req.body.datas;
    return res.status(200).send({datas});
}

function update(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.datas) return res.status(404).send({message: 'Not Found'});
    let datas = req.body.datas[0];
    datas = Object.assign(datas, req.body);
    datas.save()
        .then(data => res.status(200).send({message: 'data Updated', data})
    ).catch(err => res.status(500).send({err}))
}

function deleted(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.datas) return res.status(404).send({message: 'Not Found'});
    req.body.datas[0].remove()
        .then(data => {
            res.status(200).send({message:'data removed', data})
        }
        ).catch(err => res.status(500).send({err}));
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Data.find(query).then(datas => {
        if(!datas.length) return next();
        req.body.datas = datas;
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