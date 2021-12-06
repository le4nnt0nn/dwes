const express = require('express');

const { showNotes, showNote, addNote } = require('../controllers/notas');

const router = express.Router();

router.get('/notas', showNotes);
router.get('/notas/:id', showNote);
router.post('/notas/:name', addNote);

module.exports = router;