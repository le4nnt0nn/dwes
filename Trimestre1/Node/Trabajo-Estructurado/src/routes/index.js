const express = require('express');

const { rootController } = require('../controllers');
const notasRouter = require('./notas'); 

const router = express.Router();

router.get('/', rootController);
router.get('/notas', notasRouter);
router.get('/notas/:id', notasRouter);

module.exports = router;