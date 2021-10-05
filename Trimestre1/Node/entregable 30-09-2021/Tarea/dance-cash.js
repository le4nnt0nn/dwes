/**Create a program that converts a customer's PIN number to its dance equivalent.
 *  There is one dance move per digit in the PIN number. A list of dance moves is given in the code. */

const MOVES = [
  "Shimmy",
  "Shake",
  "Pirouette",
  "Slide",
  "Box Step",
  "Headspin",
  "Dosado",
  "Pop",
  "Lock",
  "Arabesque",
];

function danceConvert(pin) {
  // Regex que chequea si el pin lleva cualquier caracter que no sea numero
  //y exceda la longitud de 4
  let regex = new RegExp(/^[0-9]{4}$/);
  if (!regex.test(pin)) return "Invalid input.";
  /**
   * Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value.
   * If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
   */

  // Array a devolver
  const dancePin = [];

  for (let i = 0; i < pin.length; i++) {
    // Transformo el indice de pin en numero para que se pueda ser sumado
    let ind = Number(pin[i]) + i;
    if (ind > 9) {
      // resta el indice ind = ind - 10
      ind -= 10;
    }
    // Agrega a dancePin
    dancePin.push(MOVES[ind]);
  }
  return dancePin;
}

console.log(danceConvert("9912"));
