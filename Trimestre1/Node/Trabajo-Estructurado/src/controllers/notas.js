const { logger } = require("../utils");
const { findNotes, findContentNotes, currentNotes } = require('../utils/dir')
const path = require('path');
const fs = require("fs")
const { readFile } = require("fs/promises");

// Readline
// const readline = require("readline");
// const fs = require("fs").promises;

/* 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); */

// Muestra todas las notas
async function showNotes(req, res) {
    let allNotes = [];
    // Manda cada uno de las notas
    await findNotes().then(async function(notes){
        await notes.forEach(note => {
            let noteContent = fs.readFileSync(`${currentNotes}/notes/${note}`, 'utf-8')
            allNotes.push({name: note, content: noteContent})
        })
        return res.send(allNotes)
    })
    //findContentNotes('one.note').then( val => res.send(val))
    return res.status(200)
    
}

// Muestra la nota seleccionada por nombre
function showNote(req, res) {
    const name = `${req.params.name}.note`
    let finded;
    // Manda cada uno de las notas
    findNotes().then(val => val.includes(name) ?
         res.send(Object.values(val).filter(v => v === name)) : 
         res.status(404).send({ message: 'Nota no encontrada' }));
    return res.status(200)
    
}

module.exports = {
    showNotes,
    showNote,
}