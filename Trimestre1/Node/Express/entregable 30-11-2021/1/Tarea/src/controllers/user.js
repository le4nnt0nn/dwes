const { logger } = require("../utils");
const { users } = require("../utils/stored")
const { accessTokenSecret } = require('../utils/stored')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

function showUsers(req, res) {
    res.status(200).send(users)
    logger.info('OK - Show Users')
}

function showUser(req, res) {
    const id = req.params.id
    console.log(id)
    for (let user of users) {
        if (user.id === id) {
            logger.info('OK - Show User');
            return res.status(200).send(user);
        }
    }
    logger.warn('WARN - User not found')
    return res.status(404).send({ message: 'User not found' });
}

function addUser(req, res) {
    // Para local
    /* const param = req.params.object
    const user = JSON.parse(param)
    users.push(user)
    res.status(200).send('Created user')
    logger.info('OK - Added User') */

    const newUser = req.body
    users.push(newUser)
    res.status(200).send('Created user')
    logger.info('OK - Added User')
}

function editUser(req, res) {
    // Para local
    /* const id = req.params.id
    const param = req.params.object
    const modUser = JSON.parse(param)
    let objIndex = users.findIndex((user => user.id == id));
    const oldUser = users[objIndex]
    users[objIndex] = modUser
    res.status(200).send('Modified user')
    logger.info('OK - Modified User') */

    const id = req.params.id;
    const newUser = req.body;
    let objIndex = users.findIndex((user => user.id == id));
    users[objIndex] = newUser
    res.status(200).send('Modified user')
    logger.info('OK - Modified User')

}

function removeUser(req, res) {
    const id = req.params.id
    users.filter(user => {
        if (user.id === id) {
            const index = users.indexOf(user);
            users.splice(index, 1);
        }
    });

    res.send('User is deleted');
    logger.info('OK - Removed User')
}

function loginUser(req, res) {
    const { username, password } = req.body;

    const user = users.find(u => { return u.username === username && u.password === password });
    if(user) {
        const accessToken = jwt.sign({username: user.username, role: user.role}, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('User or password incorrect')
    }
}

// Cualquier usuario
function itsPublic(req, res) {
    /* const { role } = req.user;

    if(role !== 'guest') {
        return res.sendStatus(403);
    } */

    res.send('GUEST - Welcome guest user, why you don´t have an account?')
}

// Usuarios registrados
function itsVip(req, res) {
    // Sólo si queremos usar rol vip
    /* const { role } = req.user;

    if(role !== 'vip') {
        return res.sendStatus(403);
    } */

    res.send('VIP - Welcome registered user')
}

// Sólo usuarios con rol admin
function itsAdmin(req, res) {
    const { role } = req.user;

    if(role !== 'admin') {
        return res.sendStatus(403);
    }

    res.send('ADMIN - Welcome admin user')
}

module.exports = {
    showUsers,
    showUser,
    addUser,
    editUser,
    removeUser,
    loginUser,
    itsPublic,
    itsVip,
    itsAdmin,
};