const jwt = require('jsonwebtoken');
const { envToken } = require('./stored')
require('dotenv').config({path: '../../.env'});

// Middleware to auth
async function authJWT (req, res, next) {
    const authHeader = await req.headers.authorization;
    if(authHeader) {
        console.log('validating')
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if(err) {
                console.log(token)
                console.log(process.env.ACCESS_TOKEN)
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