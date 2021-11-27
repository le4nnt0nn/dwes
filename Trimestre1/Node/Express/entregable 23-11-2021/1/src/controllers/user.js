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

function addUser() {
    const user = req.params.object
    users.push(user)
    res.status(200).send()
    logger.info('OK - Added User')
}

//TODO 
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

//TODO
function removeUser(user) {
    res.status(200).send()
    logger.info('OK - Removed User')
}

module.exports = {
    showUsers,
    showUser,
    addUser,
};