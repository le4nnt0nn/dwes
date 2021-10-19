const faker = require('faker');
const chalk = require('chalk');

// Coge un nombre aleatorio de name
const randomName = faker.name.findName();

// Coge un color aleatorio de color (Estos colores son usados en CSS)
const randomColor = faker.commerce.color();

// Keyword permite colores disponibles en CSS
console.log(`Generador Aleatorio !

Nombre: ${randomName}
Color: ${randomColor}

Resultado:
${chalk.keyword(randomColor)(randomName)}`);




