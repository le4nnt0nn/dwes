const express = require('express');

const { userController } = require('../controllers/user');

const router = express.Router();

router.get('/users', userController);

module.exports = router;