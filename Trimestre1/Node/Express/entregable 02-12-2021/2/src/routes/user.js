const { application } = require('express');
const express = require('express');
const { filterUsers } = require('../utils/filter');

const { showUsers } = require('../controllers/user');

const router = express.Router();

// Para probar en local

/* router.get('/users', showUsers);
router.get('/users/:id', showUser)
router.get('/users/add/:object', addUser)
router.get('/users/edit/:id/:object', editUser)
router.get('/users/remove/:id', removeUser) */

// Para Postman

router.get('/users', showUsers);

module.exports = router;