// Realizar programa que reciba por argumentos el nombre de un fichero e imprima su contenido

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Que fichero quieres imprimir? ', (file) => {
    try {
        const data = fs.readFileSync(`${file}`, 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error.code);
    };

  rl.close();
});