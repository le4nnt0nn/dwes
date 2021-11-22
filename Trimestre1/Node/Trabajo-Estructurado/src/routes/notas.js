const express = require('express');

const { notasController } = require('../controllers/notas');

const router = express.Router();

router.get('/notas', notasController);

module.exports = router;