const express = require('express');

const { showNotes } = require('../controllers/notas');

const router = express.Router();

router.get('/notas', showNotes);

module.exports = router;