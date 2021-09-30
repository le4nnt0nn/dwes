/** Oddish or Evenish
 * Oddish cuando es impar
 * Evenish cuando es par
 */


function oddishOrEvenish(numbers) {
    let arr = ('' + numbers).split('').map(function(digit)  {return +digit;});
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const sumaResultado = arr.reduce(reducer);
    return sumaResultado % 2 === 1 ? console.log('Oddish') : console.log('Evenish');
}

console.log(oddishOrEvenish(123))