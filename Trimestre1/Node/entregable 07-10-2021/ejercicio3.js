
/**Descomponer una URL extrayendo: protocol, ipAdress, subDomain, domainName, folderTree,
targetFile, argumentsFile. */

/**
 * 
 * protocol: "https",
  ipAdress: null,
  subDomain: null,
  domainName: "edabit.com",
  folderTree: (1) […],
  targetFile: "challenge",
  argumentsFile: null
 */
const { fileURLToPath } = require('url');

function decomposeUrl(urli) {
	const myURL = new URL(urli);
    const objectURL = {
        protocol: myURL.protocol,
        ipAdress: null,
        subDomain: myURL.hostname,
        domainName: myURL.host,
        folderTree: myURL.pathname,
        targetFile: fileURLToPath(urli),
        argumentsFile: myURL.search,
    }

    return objectURL;
}

console.log(decomposeUrl('https://edabit.com/new/challenge/test.html'));
console.log(decomposeUrl('file:///C:/Users/Usuario/OneDrive/Documentos/DAW 2º/Tareas/DWES/Node/Apuntes/Objetos/export/data.txt'));