const express = require('express');

const { showNote } = require('../controllers/notas');

const router = express.Router();

router.get('/notas', showNote);

module.exports = router;