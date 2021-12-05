const { logger } = require("../utils");
const { findNotes } = require('../utils/dir')
const path = require('path');

// Readline
// const readline = require("readline");
// const fs = require("fs").promises;

/* 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); */

function showNote(req, res) {
    res.status(200)
    res.send(findNotes())
}

module.exports = {
    showNote,
}