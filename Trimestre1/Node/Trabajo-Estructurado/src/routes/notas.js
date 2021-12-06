const express = require('express');

const { showNotes, showNote } = require('../controllers/notas');

const router = express.Router();

router.get('/notas', showNotes);
router.get('/notas/:name', showNote);

module.exports = router;