const prompt = require('prompt-sync')({sigint: true});

/* Hace chequeo de un login */
const usuario = prompt('Inserta un nombre de usuario: ')
const pass = prompt('Inserta la password: ');

if(!pass.includes('xxx')) {
    console.log('La password no contiene al menos 3 x, no es segura');
    process.exit();
} else {
    console.log('---------------------');
    console.log('Registro completado! Ahora, logueate')
    console.log('---------------------');   
}


const usuarioInput = prompt('Inserta tu nombre de usuario: ')
const passInput = prompt('Inserta tu password: ');

if(usuarioInput!==usuario || passInput!==pass) {
    console.log('Uno de los datos son erroneos, saliendo del programa...');
} else {
    console.log('Bienvenid@, '+String(usuario));
}




