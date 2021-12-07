const fs = require("fs/promises");
require('dotenv').config({ path: '../../.env' });
const { users } = require('../utils/stored')
const jwt = require('jsonwebtoken');

const folderName = 'notes';
var allNotes = [];
let files;
let content;
let user;
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

async function findUser() {
    const username = "antonio"
    const password = "mypass"
    user = users.find(async u => { return u.username === username && u.password === password });
    console.log(user)
    if(user){
        const access = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN);
        console.log(access)
        return access
    }
}

findUser()

module.exports = {
    findNotes,
    currentNotes,
    findContentNotes,
    addNoteDir,
}