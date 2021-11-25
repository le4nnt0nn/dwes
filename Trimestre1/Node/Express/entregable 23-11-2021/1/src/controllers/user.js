const { logger } = require("../utils");
const { users } = require("../utils/stored")

function userController(req, res) {
    res.status(200).send()
    logger.info('OK - User Executed')
}

function addUser(user) {
    users.push(user)
    res.status(200).send()
    logger.info('OK - Added User')
}

function editUser(user) {
    for (let i = 0; i <= users.length; i++) {
        if(users[i]===user) {
            const currentUser = users[i]
            currentUser = user;
        }
    }
    res.status(200).send()
    logger.info('OK - Modified User')
}

function removeUser(user) {
    res.status(200).send()
    logger.info('OK - Removed User')
}

module.exports = {
    userController,
};