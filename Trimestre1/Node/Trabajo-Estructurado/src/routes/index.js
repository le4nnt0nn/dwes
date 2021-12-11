const express = require('express');

const { rootController } = require('../controllers');
const notasRouter = require('./notas'); 
const uploadRouter = require('./upload'); 
const dowRouter = require('./download');

const router = express.Router();

router.get('/', rootController);
router.get('/notas', notasRouter);
router.get('/notas/:id', notasRouter);
router.post('/notas/:name', notasRouter);
router.put('/notas/:id', notasRouter);
router.delete('/notas/:id', notasRouter);
router.post('/upload', uploadRouter);
router.get('/download', dowRouter);
router.get('/download/:name', dowRouter);
router.post('/login', notasRouter);

module.exports = router;