// Comprobar si dos objetos son iguales de manera recursiva.

function isSimilar(arrX, arrY) {

	// Si las keys de ambos no son iguales, return false
	if (Object.keys(arrX).toString() !== Object.keys(arrY).toString()) {
		return false
	} else if (arrX.length !== arrY.length) {
		return false
	};
	// Recorre cada elemento de arrX
	for (let element in arrX) {
		// Si el tipo de los elementos son object y los elementos de ambos arrays no son iguales, return false
		// Uso del método isSimilar de forma recursiva
		if (typeof(arrX[element]) === 'object' && !isSimilar(arrX[element], arrY[element])) {
			return false
		};
		// Si el tipo de los elementos no son objetos y los elementos no coinciden, return false
		if (typeof(arrX[element]) !== 'object' && arrX[element] !== arrY[element]) {
			return false
		};
	};

	return true;
}

console.log(isSimilar(['Gabri', 'Antonio', 'Bob'], ['Gabri', 'Antonio', 'Bob']));
