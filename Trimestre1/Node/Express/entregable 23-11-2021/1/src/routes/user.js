const { application } = require('express');
const express = require('express');

const { showUsers, showUser, addUser, editUser, removeUser } = require('../controllers/user');

const router = express.Router();

// Para probar en local

/* router.get('/users', showUsers);
router.get('/users/:id', showUser)
router.get('/users/add/:object', addUser)
router.get('/users/edit/:id/:object', editUser)
router.get('/users/remove/:id', removeUser) */

// Para Postman

router.get('/users', showUsers);
router.get('/users/:id', showUser)
router.post('/users/add/:object', addUser)
router.put('/users/edit/:id/:object', editUser)
router.delete('/users/remove/:id', removeUser)


module.exports = router;