const faker = require("faker");
const chalk = require("chalk");
const { DateTime } = require("luxon");

//* UTILS
// process.stdout.write("\r");
// const humanReadable = date.toLocaleString(DateTime.DATETIME_MED);
// const date = DateTime.fromISO(DateTime.now()).toFormat('dd-MM-yyyy HH:mm:ss');
// const date = DateTime.fromISO(DateTime.now().plus(1000)).toFormat("dd-MM-yyyy HH:mm:ss");
// setInterval(() => process.stdout.write(`${DateTime.fromISO(DateTime.now().plus(1000)).toFormat("dd-MM-yyyy HH:mm:ss")}\r`), 1000);
// setInterval(() => process.stdout.write(`${DateTime.now().plus(1000).toSeconds().toFixed()}\r`), 1000);

// TODO - Lógica de colorChange
function colorChange() {
    if(DateTime.fromISO(DateTime.now().toSeconds().toFixed()) === 0) {
        return chalk.green(DateTime.fromISO(DateTime.now().plus(1000)).toFormat("dd-MM-yyyy HH:mm:ss"));
    }else {
        return DateTime.fromISO(DateTime.now().plus(1000)).toFormat("dd-MM-yyyy HH:mm:ss");
    }
}

setInterval(() => process.stdout.write(`${colorChange()}\r`), 1000);




