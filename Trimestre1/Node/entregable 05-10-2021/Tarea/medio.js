// Función que invierta clave y valor { 'z': 'q', 'w': 'f'})--> { 'q': 'z', 'f': 'w'}

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

/**Función que recoge un array de objetos con el nombre del alumno y un array de notas { name:
'John', notes: [3, 5, 4]} , y devuelve el nombre y la nota más alta { name: "John"
, topNote: 5 } */

function getStudentsWithNamesAndTopNotes(students) {
	let maxNotes = students.map(x => {
        return Math.max(x);
    });
}

console.log(getStudentsWithNamesAndTopNotes([
    { "name": "Gabri", "notes": [10, 7, 4] },
    { "name": "Richard", "notes": [8, 9, 6] },
    { "name": "Yisus", "notes": [4, 5, 1] }
  ]));

