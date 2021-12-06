const fs = require("fs/promises");

const folderName = 'notes';
var allNotes = [];
let files;
let content;
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

module.exports = {
    findNotes,
    currentNotes,
    findContentNotes,
    addNoteDir,
}