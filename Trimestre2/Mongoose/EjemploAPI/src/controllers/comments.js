const Comment = require('../models/comments');

function listall(req, res) {
    // limit y paginado
    const {page = 1, limit = 10} = req.query;
    // populate por nombre
    Comment.find({}).limit(limit*1).skip((page-1)*limit)
        .then(products => {
            if(products.length) return res.status(200).send({products})
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(err => res.status(500).send({err}))
}

function create(req, res) {
    let comment = new Comment(req.body);
    comment.save()
        .then(comment => 
            res.status(201).send({comment})
        ).catch(err => res.status(500).send({err}))
    
}

function show(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.comments) return res.status(404).send({message: 'Not Found'});
    let comments = req.body.comments;
    return res.status(200).send({comments});
}

function update(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.comments) return res.status(404).send({message: 'Not Found'});
    let comment = req.body.comments[0];
    comment = Object.assign(product, req.body);
    comment.save()
        .then(product => res.status(200).send({message: 'Comment Updated', comment})
    ).catch(err => res.status(500).send({err}))
}

function deleted(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.comments) return res.status(404).send({message: 'Not Found'});
    req.body.comments[0].remove()
        .then(comment => {
            res.status(200).send({message:'Comment removed', comment})
        }
        ).catch(err => res.status(500).send({err}));
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Comment.find(query).then(comments => {
        if(!comments.length) return next();
        req.body.comments = comments;
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