/** Función que invierta clave y valor { 'z': 'q', 'w': 'f'})--> { 'q': 'z', 'f': 'w'
} */

const persona = {
  nombre: 'antonio',
  apellido: 'cortes',
  edad: 19,
};

function invert(o) {
  var ret = {};
  for (var key in o) {
    ret[o[key]] = key;
  }
  return ret;
}
console.log(invert(persona));
