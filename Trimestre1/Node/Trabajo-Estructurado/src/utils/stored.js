require('dotenv').config({path: '../../.env'});

const envToken = process.env.ACCESS_TOKEN;
const users = [
    {
        username: process.env.ADMIN_USER,
        password: process.env.ADMIN_PASSWORD,
        role: 'admin'
    },
    {
        username: 'guest',
        password: 'guest',
        role: 'guest'
    },
];

module.exports = {
    users,
    envToken,
}