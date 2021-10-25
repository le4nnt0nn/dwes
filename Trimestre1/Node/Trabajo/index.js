// Readline
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ! PARA PODER USAR prompt --> npm install prompt-sync
const prompt = require("prompt-sync")();

rl.question(
  `Selecciona una opción:
    1. Crear nueva nota
    2. Editar nota existente
    3. Eliminar nota 
    `,
  // TODO - Implementar "Adaptar
  // TODO  el proyecto de gestor de notas para que si le indicamos argumentos, acceda directamente
  // TODO  a la opción seleccionada"
  function (answer, arg = process.argv) {
    switch (answer || arg[1]) {
      case "1" || arg[1] === "1":
        try {
          name = prompt("[CREAR] Introduce el nombre de la nota: ");
          content = prompt("Escribe el contenido: ");
          fs.writeFile(`${name}.txt`, `${content}`, function (err) {
            if (err) throw err;
            console.log(`
                    La nota se ha creado correctamente.
                    `);
          });
        } catch (err) {
          console.error(err);
        }
        break;
      case "2":
        try {
          name = prompt("[EDITAR] Introduce el nombre de la nota: ");
          const oldData = fs.readFileSync(`${name}.txt`, "utf8");
          content = prompt("Escribe el contenido: ");
          fs.writeFileSync(`${name}.txt`, `${content}`);
          console.log(`
                La nota se ha editado correctamente.

                            Antes: ${oldData} 

                            Ahora: ${content}
                            `);
        } catch (error) {
          console.error(error.code);
        }
        break;
      case "3":
        name = prompt("[ELIMINAR] Introduce el nombre de la nota: ");
        try {
          fs.unlinkSync(`${__dirname}/${name}.txt`);
          console.log(`
                La nota se ha editado correctamente.
                `);
        } catch (err) {
          console.error(err);
        }
        break;
      default:
        console.log(`Comando inválido.`);
    }

    rl.close();
  }
);
