const express = require('express');

const { rootController } = require('../controllers');
const { filterUsers } = require('../utils/filter');
const userRouter = require('./user');
const fileRouter = require('./upload') 
const dowRouter = require('./download') 

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
router.post('/upload', fileRouter);
router.get('/users', userRouter);
router.get('/files', dowRouter);
router.get('/files/:name', dowRouter);

module.exports = router;