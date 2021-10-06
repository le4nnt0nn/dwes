/**Write a function that converts an object into an array, 
 * where each element represents a key-value pair in the form of an array. */

const persona = {
    nombre: 'antonio',
    apellido: 'cortes',
    edad: 19,
}

// Transformar un objeto en un array, cada elemento será clave-valor:
function toArray(obj) {
    const entries = Object.entries(obj);

    return entries;
}

console.log(toArray(persona));

// Transformar un objeto en un array con dos elementos [claves, valores] :
function keysAndValues(obj) {
	const keys = Object.keys(obj);
    const values = Object.values(obj);

    let arrayDevuelto = [keys, values];

    return arrayDevuelto;
}

console.log(keysAndValues(persona));
