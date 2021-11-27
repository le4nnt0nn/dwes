const { application } = require('express');
const express = require('express');

const { showUsers, showUser, addUser } = require('../controllers/user');

const router = express.Router();

router.get('/users', showUsers);
router.get('/users/:id', showUser)
router.get('/users/add/:object', addUser)

module.exports = router;