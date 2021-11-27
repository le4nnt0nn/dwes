const express = require('express');

const { rootController } = require('../controllers');
const userRouter = require('./user'); 

const router = express.Router();

router.get('/', rootController);
router.get('/users', userRouter);
router.get('/users/:id', userRouter);
router.get('/users/add/:object', userRouter);

module.exports = router;