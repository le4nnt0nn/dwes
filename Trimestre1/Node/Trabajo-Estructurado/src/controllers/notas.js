const { logger } = require("../utils");
const { findNotes, currentNotes, addNoteDir, findUser } = require('../utils/dir');
const { envToken, users } = require('../utils/stored');
const { filterObject, sortObject, paginateObject } = require('../utils/filter');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require("fs")
require('dotenv').config({ path: '../../.env' });


// Muestra todas las notas
async function showNotes(req, res) {

    const notes = findNotes();


    const { name } = req.query;
    const filters = { name };
    const allNotes = notes.map(note => {
        const noteContent = fs.readFileSync(`${currentNotes}/notes/${note}`, 'utf-8')
        return { name: note, content: noteContent };
    });

    // filtro
    const filteredNotes = filterObject(allNotes, filters);

    // sort
    if (Object.keys(req.query) == 'orderby' && Object.values(req.query) == 'name') {
        const sortedNotes = sortObject(filteredNotes)
        return res.status(200).send(sortedNotes)
    } else if (Object.keys(req.query) == 'orderby' && Object.values(req.query) == 'desc') {
        console.log('desc!!')
        return res.status(200).send(filteredNotes.reverse())
    } else if (Object.keys(req.query) == 'orderby' && Object.values(req.query) == 'asc') {
        return res.status(200).send(filteredNotes)
    }

    // pagination
    if (Object.keys(req.query) == 'limit') {
        const paginatedNotes = paginateObject(allNotes, Object.values(req.query), 1)
        return res.status(200).send(paginatedNotes)
    }

    logger.info('OK - Notas disponibles mostradas');
    return res.status(200).send(filteredNotes)

}

// Muestra la nota seleccionada por nombre
async function showNote(req, res) {
    const id = req.params.id
    let finded;
    // Manda cada uno de las notas
    const notes = findNotes()
    for (let index = 0; index <= notes.length; index++) {
        if (index == id) {
            let noteContent = fs.readFileSync(`${currentNotes}/notes/${notes[index]}`, 'utf-8')
            finded = { name: notes[index], content: noteContent }
        }
    }
    logger.info('OK - Nota disponible mostrada');
    return res.status(200).send(finded)
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
    const notes = findNotes()
    for (let index = 0; index <= notes.length; index++) {
        if (index == id) {
            fs.writeFileSync(`${currentNotes}/notes/${notes[index]}`, newContent.content, function (err) {
                if (err) throw err;
            });
        };
    };
    logger.info('OK - Nota editada');
    return res.status(200).send('Nota editada');
}

// Elimina una nota, cuya id se pasa por parámetro
async function removeNote(req, res) {
    const id = req.params.id;
    const notes = findNotes()
    for (let index = 0; index <= notes.length; index++) {
        if (index == id) {
            fs.unlinkSync(`${currentNotes}/notes/${notes[index]}`, function (err) {
                if (err) throw err;
            });
        }
    };
    logger.info('OK - Nota eliminada');
    return res.status(200).send('Nota eliminada');
}

// Logueo de usuario para recibir token
async function loginUser(req, res) {
    const { username, password } = req.body;
    await findUser(username, password).then(async function (user) {
        try {
            if (user.username == process.env.ADMIN_USER) {
                const access = await jwt.sign({ username: user.username }, process.env.ACCESS_TOKEN);
                console.log(access)
                return res.send({
                    access
                });
            }
        } catch (error) {
            res.status(404).send('Usuario o contraseña inválida')
        }
    })
}


module.exports = {
    showNotes,
    showNote,
    addNote,
    editNote,
    removeNote,
    loginUser,
}