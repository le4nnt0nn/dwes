const { logger } = require("../utils");
const { findNotes } = require('../utils/dir')
const path = require('path');
const { readdir } = require("fs");

// Readline
// const readline = require("readline");
// const fs = require("fs").promises;

/* 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); */

function showNotes(req, res) {
    // Manda cada uno de las notas
    findNotes().then(val => res.send(val))
    res.status(200)
    
}

module.exports = {
    showNotes,
}