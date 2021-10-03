/**Create a program that converts a customer's PIN number to its dance equivalent.
 *  There is one dance move per digit in the PIN number. A list of dance moves is given in the code. */

 const MOVES = ['Shimmy', 'Shake', 'Pirouette', 'Slide', 'Box Step', 'Headspin', 'Dosado', 'Pop', 'Lock', 'Arabesque'];

 function danceConvert(pin) {
    let arr = ('' + pin).split('').map(function(digit)  {return +digit;});
    // Convierte el pin en un array de String
    const pinStringArray = arr.map(x => x.toString());
    // Regex que chequea si el pin lleva cualquier letra
    let regex = new RegExp('[a-zA-Z]');
    const checkReg = pinStringArray.forEach(x => regex.test(x) === true ? console.log('Invalid input.') || process.exit(1) : false);
    // Si checkRegex es true, sale del programa
    if(checkReg === true) {
        process.exit(1);
    }
    /**
     * Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value. 
     * If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
     */
    // TODO lógica indice
    const newPinDance = pinStringArray.map(x => x = MOVES[parseInt(x)]);
    console.log(newPinDance);
}

danceConvert('9999');

 // Convierte los numeros pin en movimientos de baile aleatorios del array MOVES
//x = MOVES[Math.floor(Math.random()*MOVES.length)]