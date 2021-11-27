const express = require('express');

const { rootController } = require('../controllers');
const userRouter = require('./user'); 

const router = express.Router();

router.get('/', rootController);
router.get('/users', userRouter);
router.get('/users/:id', userRouter);
router.get('/users/add/:object', userRouter);
router.get('/users/edit/:id/:object', userRouter);
router.get('/users/remove/:id', userRouter);

module.exports = router;