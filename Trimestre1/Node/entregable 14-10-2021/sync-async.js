const fs = require("fs");

// Sync - Leer fichero

function readFichero(file) {
  const data = fs.readFileSync(`${file}`, "utf8");
  console.log(data);
}

// Async - Leer fichero

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log(`
            Se ha leído todo :)
            `);
    }, ms);
  });
}

async function logLineas(readable) {
  for await (const linea of readable) {
    console.log(linea);
    sleep(2000);
  }
}

const readable = fs.createReadStream("file.txt", { encoding: "utf8" });

console.log(`
Leído de forma síncrona: 
`);
readFichero("file.txt");
console.log(`
Leído de forma asíncrona:
`);
logLineas(readable);
