/**Sumar todos los números de un array con reduce */
const numeros = [2,2,2,2];

const result = numeros.reduce((prev,current) => {
    return prev+current;
});

console.log(result);