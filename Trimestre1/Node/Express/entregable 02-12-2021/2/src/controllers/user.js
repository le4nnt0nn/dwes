const { logger, stored, filter } = require("../utils");

const { users } = stored;

function showUsers(req, res) {
    const { id, name, pass } = req.query;
    const filters = { id, name, pass };
    console.log(filters)
    const filteredUsers = filter.filterObject(users, filters);
    
    
    logger.info('OK - Show Users');
    return res.status(200).send(filteredUsers);
}

module.exports = {
    showUsers,
};