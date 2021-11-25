const express = require('express');

const { rootController } = require('../controllers');
const userRouter = require('./user'); 

const router = express.Router();

router.get('/', rootController);
router.get('/users', userRouter);

module.exports = router;