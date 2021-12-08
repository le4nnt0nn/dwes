const fs = require("fs/promises");
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

async function findNotes() {
    files = await fs.readdir(`${__dirname}/${folderName}`)
    return files;
};

async function findContentNotes(f) {
    content = await fs.readFile(`${__dirname}/${folderName}/${f}`)
    return content;
}

async function addNoteDir(name, content) {
    fs.writeFile(`${__dirname}/${folderName}/${name}.note`, content, function(err){
        if(err) throw err;
    })
}

async function findUser(username, password) {
    const user = await users.find(async u => {return console.log(u.username === username && u.password === password)});
    console.log(user)
    if(user) {
        console.log('eziste')
    } else {
        console.log('no :(')
    }
   // return user;
}

//findUser('gabri', 'cucu')
findUser('antonio', 'mypass')

module.exports = {
    findNotes,
    currentNotes,
    findContentNotes,
    addNoteDir,
    findUser,
}