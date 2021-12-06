const fs = require("fs/promises");

const folderName = 'notes';
var allNotes = [];
let files;

async function findNotes() {
    files = await fs.readdir(`${__dirname}/${folderName}`)
    return files;
};

module.exports = {
    findNotes,
}