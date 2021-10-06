/**Write a function that converts an object into an array, 
 * where each element represents a key-value pair in the form of an array. */

const persona = {
    nombre: 'antonio',
    apellido: 'cortes',
    edad: 19,
}

function toArray(obj) {
	const propertyValues = Object.values(obj);
    const entries = Object.entries(obj);

    return entries;
}

console.log(toArray(persona));