const fs = require("fs");

const folderName = '../notes/';
function findNotes() {
    let allNotes = [];

    fs.readdir('../notes', (err, files) => {
        files.forEach(file => {
          allNotes.push(file);
          console.log(file);
        });
      });
    return allNotes;
}

module.exports = {
    findNotes,
}