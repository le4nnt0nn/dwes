const Movie = require('../models/movies');

function listall(req, res) {
    // limit y paginado
    const { page = 1, limit = 10 } = req.query;
    Movie.find({}).limit(limit * 1).skip((page - 1) * limit).select('title genres year rated type').populate('title genres year rated type')
        .then(movies => {
            if (movies.length) return res.status(200).send({ movies })
            return res.status(204).send({ message: 'NO CONTENT' });
        }).catch(err => res.status(500).send({ err }))
    // lookup para recoger los comentarios de una peli y los datos de esta [title, genres, year, rated, type]
    let movie = Movie.aggregate([
        {
            $lookup: {
                from: "comments",
                localField: "_id",
                foreignField: "movie_id",
                as: "comments_info",
            },
        },
        {
            $unwind: "$comments_info",
        },
    ]).limit(10)
    const populateQuery = [
        {
            path: '_id',
            select: 'title genres year rated type',
        },
    ];

    movie =  Movie.populate(movie, populateQuery).then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });
    /* 
    Movie.aggregate([
    {
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "movie_id",
            as: "comments_info",
        },
    },
    {
        $unwind: "$comments_info",
    },
    ]).limit(10).then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
    */
}

function create(req, res) {
    let movie = new Movie(req.body);
    movie.save()
        .then(movie =>
            res.status(201).send({ movie })
        ).catch(err => res.status(500).send({ err }))

}

function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.movies) return res.status(404).send({ message: 'Not Found' });
    let movies = req.body.movies;
    return res.status(200).send({ movies });
}

function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.movies) return res.status(404).send({ message: 'Not Found' });
    let movie = req.body.movies[0];
    movie = Object.assign(movie, req.body);
    movie.save()
        .then(movie => res.status(200).send({ message: 'Movie Updated', movie })
        ).catch(err => res.status(500).send({ err }))
}

function deleted(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.movies) return res.status(404).send({ message: 'Not Found' });
    req.body.movies[0].remove()
        .then(movie => {
            res.status(200).send({ message: 'Movie removed', movie })
        }
        ).catch(err => res.status(500).send({ err }));
}

function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value
    Movie.find(query).then(movies => {
        if (!movies.length) return next();
        req.body.movies = movies;
        return next();
    }).catch(err => {
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