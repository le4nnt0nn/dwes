const fs = require('fs');
require('dotenv').config({ path: '../../.env' });
const { users } = require('../utils/stored')
const jwt = require('jsonwebtoken');

const envToken = process.env.ACCESS_TOKEN
const jojo = "patata"
const folderName = 'notes';
var allNotes = [];
let files;
let content;
//let user;
const currentNotes = __dirname;

function findNotes() {
    files = fs.readdirSync(`${__dirname}/${folderName}`)
    return files;
};

function findContentNotes(f) {
    content = fs.readFileSync(`${__dirname}/${folderName}/${f}`)
    return content;
}

async function addNoteDir(name, content) {
    fs.writeFile(`${__dirname}/${folderName}/${name}.note`, content, function(err){
        if(err) throw err;
    })
}

async function findUser(username, password) {
    if(username == process.env.ADMIN_USER && password == process.env.ADMIN_PASSWORD) {
        return {username: username, password: password};
    }
    
}

//findUser('gabri', 'cucu')
//findUser('antonio', 'mypass')

module.exports = {
    findNotes,
    currentNotes,
    findContentNotes,
    addNoteDir,
    findUser,
}