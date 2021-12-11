const fs = require('fs');
require('dotenv').config({ path: '../../.env' });
const { dirNotes } = require('../helper')

const folderName = 'notes';
let files;
let content;

// Leer notas
function findNotes() {
    files = fs.readdirSync(`${dirNotes}/${folderName}`)
    return files;
};

// Encontrar nota específica
function findContentNotes(f) {
    content = fs.readFileSync(`${dirNotes}/${folderName}/${f}`)
    return content;
}

// Añadir nota a directorio a través de body
async function addNoteDir(name, content) {
    fs.writeFile(`${dirNotes}/${folderName}/${name}.note`, content, function (err) {
        if (err) throw err;
    })
}

// Validar existencia de usuario si existe
async function findUser(username, password) {
    if (username == process.env.ADMIN_USER && password == process.env.ADMIN_PASSWORD) {
        return { username: username, password: password };
    }

}

module.exports = {
    findNotes,
    findContentNotes,
    addNoteDir,
    findUser,
}