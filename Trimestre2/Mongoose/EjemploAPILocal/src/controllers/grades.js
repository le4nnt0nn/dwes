const Grade = require('../models/grades');

function listall(req, res) {
    Grade.find({})
        .then(grades => {
            if(grades.length) return res.status(200).send({grades})
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(err => res.status(500).send({err}))
}

function create(req, res) {
    let grade = new Grade(req.body);
    grade.save()
        .then(grade => 
            res.status(201).send({grade})
        ).catch(err => res.status(500).send({err}))
    
}

function show(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.grades) return res.status(404).send({message: 'Not Found'});
    let grades = req.body.grades;
    return res.status(200).send({grades});
}

function update(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.grades) return res.status(404).send({message: 'Not Found'});
    let grade = req.body.grades[0];
    grade = Object.assign(grade, req.body);
    grade.save()
        .then(product => res.status(200).send({message: 'Grade Updated', grade})
    ).catch(err => res.status(500).send({err}))
}

function deleted(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.grades) return res.status(404).send({message: 'Not Found'});
    req.body.grades[0].remove()
        .then(grade => {
            res.status(200).send({message:'Grade removed', grade})
        }
        ).catch(err => res.status(500).send({err}));
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Grade.find(query).then(grades => {
        if(!grades.length) return next();
        req.body.grades = grades;
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