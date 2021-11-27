const { logger } = require("../utils");
const { users } = require("../utils/stored")

function showUsers(req, res) {
    res.status(200).send(users)
    logger.info('OK - Show Users')
}

function showUser(req, res) {
    const id = req.params.id
    console.log(id)
    for (let user of users) {
        if (user.id === id) {
            res.status(200).send(user);
            logger.info('OK - Show User')
            return;
        }
    }
    res.status(404).send('User not found');
    logger.warn('WARN - User not found')
}

function addUser(req, res) {
    const param = req.params.object
    const user = JSON.parse(param)
    users.push(user)
    res.status(200).send('Created user')
    logger.info('OK - Added User')
}

function editUser(req, res) {
    const id = req.params.id
    const param = req.params.object
    const modUser = JSON.parse(param)
    let objIndex = users.findIndex((user => user.id == id));
    const oldUser = users[objIndex]
    users[objIndex] = modUser
    res.status(200).send('Modified user')
    logger.info('OK - Modified User')
}

//TODO
function removeUser(user) {
    res.status(200).send()
    logger.info('OK - Removed User')
}

module.exports = {
    showUsers,
    showUser,
    addUser,
    editUser,
};