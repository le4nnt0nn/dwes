const express = require('express');

const { showNotes, showNote } = require('../controllers/notas');

const router = express.Router();

router.get('/notas', showNotes);
router.get('/notas/:id', showNote);

module.exports = router;