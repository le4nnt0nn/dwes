const { logger } = require("../utils");
const { findNotes, currentNotes, addNoteDir, findUser } = require('../utils/dir');
const { envToken, users } = require('../utils/stored');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require("fs")
const { readFile } = require("fs/promises");
require('dotenv').config({ path: '../../.env' });


let allNotes = [];

// Muestra todas las notas
async function showNotes(req, res) {
    // Manda cada uno de las notas
    await findNotes().then(async function (notes) {
        await notes.forEach(note => {
            let noteContent = fs.readFileSync(`${currentNotes}/notes/${note}`, 'utf-8')
            allNotes.push({ name: note, content: noteContent })
        })
        return res.send(allNotes)
    })
    logger.info('OK - Notas disponibles mostradas');
    return res.status(200)

}

// Muestra la nota seleccionada por nombre
async function showNote(req, res) {
    const id = req.params.id
    let finded;
    // Manda cada uno de las notas
    await findNotes().then(async function (notes) {
        for (let index = 0; index <= notes.length; index++) {
            if (index == id) {
                let noteContent = fs.readFileSync(`${currentNotes}/notes/${notes[index]}`, 'utf-8')
                finded = { name: notes[index], content: noteContent }
            }
        }
        return res.send(finded)
    })
    logger.info('OK - Nota disponible mostrada');
    return res.status(200)
}

// Añade una nota, cuyo título se pasa como parámetro y contenido como body
async function addNote(req, res) {
    const name = req.params.name;
    const content = req.body;
    addNoteDir(name, content.content).then(res.status(200).send('Nota creada'));
}

// Edita una nota, cuya id se pasa por parámetro y nuevo contenido como body
async function editNote(req, res) {
    const id = req.params.id;
    const newContent = req.body;
    await findNotes().then(async function (notes) {
        for (let index = 0; index <= notes.length; index++) {
            if (index == id) {
                fs.writeFileSync(`${currentNotes}/notes/${notes[index]}`, newContent.content, function (err) {
                    if (err) throw err;
                });
            };
        };
        logger.info('OK - Nota editada');
        return res.status(200).send('Nota editada');
    });
}

// Elimina una nota, cuya id se pasa por parámetro
async function removeNote(req, res) {
    const id = req.params.id;
    await findNotes().then(async function (notes) {
        for (let index = 0; index <= notes.length; index++) {
            if (index == id) {
                fs.unlinkSync(`${currentNotes}/notes/${notes[index]}`, function (err) {
                    if (err) throw err;
                });
            }
        };
        logger.info('OK - Nota eliminada');
        return res.status(200).send('Nota eliminada');
    });

}


async function loginUser(req, res) {
    const { username, password } = req.body;
    await findUser(username, password).then(async function(user) {
        console.log(user)
        if(user){
            const access = await jwt.sign({username: user.username, role: user.role }, process.env.ACCESS_TOKEN);
            console.log(access)
            return res.send({
                access
            });
        } else {
            return res.send('User or password incorrect')
        }
    })
  

    /**
     * await users.forEach(async user => {
        if (user.username == username && user.password == password) {
            const accessToken = await jwt.sign({ username: user.username, role: user.role }, envToken);
            console.log(user.username)
            return res.send({
                accessToken
            });
        }
        return res.send('User or password incorrect')
    })
     */
}


module.exports = {
    showNotes,
    showNote,
    addNote,
    editNote,
    removeNote,
    loginUser,
}