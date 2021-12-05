/* const users = [{"id":"1","name":"Antonio", "pass":"123"},
{"id":"2","name":"Gabri", "pass":"333"},
{"id":"3","name":"Maria", "pass":"766"},
{"id":"4","name":"Juanma", "pass":"312"},
{"id":"5","name":"Alicia", "pass":"223"},
{"id":"6","name":"Marta", "pass":"999"}] */

// Example user added
// {"id":"7","name":"Sapo", "pass":"788"}
const accessTokenSecret = 'youraccesstokensecret';
/* const authAccessTokenSecret = 'youraccesstokensecret'; */

const users = [
    {
        username: 'antonio',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'gabri',
        password: 'password123vip',
        role: 'vip'
    }
    , {
        username: 'alicia',
        password: 'password123guest',
        role: 'guest'
    }
];

module.exports = {
    users,
    accessTokenSecret,
}