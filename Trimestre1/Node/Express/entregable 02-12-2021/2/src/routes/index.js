const express = require('express');

const { rootController } = require('../controllers');
const { filterUsers } = require('../utils/filter');
const userRouter = require('./user'); 

const router = express.Router();

// Para probar en local
/* router.get('/', rootController);
router.get('/users', userRouter);
router.get('/users/:id', userRouter);
router.get('/users/add/:object', userRouter);
router.get('/users/edit/:id/:object', userRouter);
router.get('/users/remove/:id', userRouter); */

// Para Postman

router.get('/', rootController);
router.get('/users', userRouter);

module.exports = router;