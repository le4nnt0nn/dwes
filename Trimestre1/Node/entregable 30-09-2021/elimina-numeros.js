/**Eliminar todos los elementos inferiores a 18 de un array de números */

const numbers = [12,16,19,18,22,78,1];

const result = numbers.filter(number => number > 18);

console.log(result);
