const { logger, stored, filter } = require("../utils");

const { users } = stored;

function showUsers(req, res) {
    let isDesc = true
    const usersReverse = users.reverse()
    const usersToSort = users
    const { id, name, pass } = req.query;
    const filters = { id, name, pass };
    const filteredUsers = filter.filterObject(users, filters);
    // sort
    if(Object.keys(req.query)=='orderby' && Object.values(req.query)=='name') {
        const sortedUsers = filter.sortObject(usersToSort)
        return res.status(200).send(sortedUsers)
    } else if (Object.keys(req.query)=='orderby' && Object.values(req.query)=='desc' && !isDesc) {
        return res.status(200).send(usersReverse)
    } else if (Object.keys(req.query)=='orderby' && Object.values(req.query)=='asc' && isDesc) {
        return res.status(200).send(usersReverse)
    }
    // pagination
    if(Object.keys(req.query)=='limit') {
        const paginatedUsers = filter.paginateObject(users, Object.values(req.query) , 1)
        return res.status(200).send(paginatedUsers)
    }
    logger.info('OK - Show Users');
    return res.status(200).send(filteredUsers);
}

module.exports = {
    showUsers,
};