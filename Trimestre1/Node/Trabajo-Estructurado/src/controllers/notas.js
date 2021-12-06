const { logger } = require("../utils");
const { findNotes, findContentNotes, currentNotes, addNoteDir } = require('../utils/dir')
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

let allNotes = [];


// Muestra todas las notas
async function showNotes(req, res) {
    // Manda cada uno de las notas
    await findNotes().then(async function(notes){
        await notes.forEach(note => {
            let noteContent = fs.readFileSync(`${currentNotes}/notes/${note}`, 'utf-8')
            allNotes.push({name: note, content: noteContent})
        })
        return res.send(allNotes)
    })
    return res.status(200)
    
}

// Muestra la nota seleccionada por nombre
async function showNote(req, res) {
    const id = req.params.id
    let finded;
    // Manda cada uno de las notas
    await findNotes().then(async function(notes){
        for (let index = 0; index <= notes.length; index++) {
            if(index==id) {
                let noteContent = fs.readFileSync(`${currentNotes}/notes/${notes[index]}`, 'utf-8')
                finded = {name: notes[index], content: noteContent}
            }
        }
        return res.send(finded)
    })
    return res.status(200)
}

async function addNote(req, res) {
    const name = req.params.name
    const content = req.body
    console.log(content.content)
    addNoteDir(name, content.content).then(res.status(200).send('Nota creada'))
}

module.exports = {
    showNotes,
    showNote,
    addNote,
}