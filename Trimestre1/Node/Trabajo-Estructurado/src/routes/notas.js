const express = require('express');

const { showNotes, showNote, addNote, editNote, removeNote, loginUser } = require('../controllers/notas');
const { authJWT } = require('../utils/auth')

const router = express.Router();

router.get('/notas', showNotes);
router.get('/notas/:id', showNote);
router.post('/notas/:name', authJWT, addNote);
router.put('/notas/:id', authJWT, editNote);
router.delete('/notas/:id', authJWT, removeNote);
router.post('/login', loginUser);

module.exports = router;