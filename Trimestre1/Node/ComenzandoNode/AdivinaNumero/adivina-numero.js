const prompt = require('prompt-sync')({sigint: true});
console.log('Bienvenido a adivina el numero !');
let juegoGanado = false;
const numeroAdivinar = Math.round(Math.random() * 5);
let contador = 1;


const nombre = prompt('Como te llamas?: ');
const nombreJugador = String(nombre);
while (juegoGanado===false) {
    const num = prompt('Di un numero: ');
    if(Number(num) === numeroAdivinar) {
        console.log('-------------------------');
        console.log('Has acertado, '+nombreJugador+' !!');
        console.log('Numero de intentos => '+contador)
        return juegoGanado===true;
    }
    console.log('No has acertado -.-');
    contador++;
}
