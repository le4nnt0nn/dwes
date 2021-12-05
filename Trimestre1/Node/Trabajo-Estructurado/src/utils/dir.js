const fs = require("fs");

const folderName = 'notes';
var allNotes = [];

function findNotes() {
    fs.readdir(`${__dirname}/${folderName}`, (err, files) => {
        files.forEach(file => {
            console.log(file)
            allNotes.push(file);
        });
    });
    return allNotes;
};
console.log(allNotes)

module.exports = {
    findNotes,
}