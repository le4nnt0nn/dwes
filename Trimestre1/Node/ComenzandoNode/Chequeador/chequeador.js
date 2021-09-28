const prompt = require('prompt-sync')({sigint: true});

/* Chequea si la cadena de texto contiene al menos 3 "x" */

const cadena = prompt('Inserta la cadena: ');

if(!cadena.includes('xxx')) {
    console.log('La cadena no incluye 3 x');
} else {
    console.log('Hay 3 X!')
}