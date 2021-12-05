const { application } = require('express');
const express = require('express');

const { authJWT } = require('../utils/auth')
const { showUsers, showUser, addUser, editUser, removeUser, loginUser, itsPublic, itsVip, itsAdmin } = require('../controllers/user');

const router = express.Router();

// Para probar en local

/* router.get('/users', showUsers);
router.get('/users/:id', showUser)
router.get('/users/add/:object', addUser)
router.get('/users/edit/:id/:object', editUser)
router.get('/users/remove/:id', removeUser) */

// Para Postman

router.get('/users', authJWT, showUsers);
router.get('/users/:id', showUser);
router.get('/public', itsPublic);
router.get('/vip', authJWT, itsVip);
router.get('/admin', authJWT, itsAdmin);
router.post('/login', loginUser);
/* router.post('/users', addUser)
router.put('/users/:id', editUser)
router.delete('/users/:id', removeUser) */


module.exports = router;