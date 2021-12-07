const jwt = require('jsonwebtoken');
const { envToken } = require('./stored')
require('dotenv').config({path: '../../.env'});

// Middleware to auth
const authJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, envToken, (err, user) => {
            if(err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401)
    }
};

module.exports = {
    authJWT,
}