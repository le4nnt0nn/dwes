/** Seven Boom
 * 
 * Create a function that takes an array of numbers and return "Boom!" 
 * if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
 */
function sevenBoom(array) {
    let cadenaNumeros = array.join('');
    cadenaNumeros.includes('7') ? console.log('Boom!') : console.log('there is no 7 in the array');
}

sevenBoom([7,1,2,4,5,6]);



