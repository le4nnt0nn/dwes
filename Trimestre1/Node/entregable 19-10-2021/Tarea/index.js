const faker = require("faker");
const chalk = require("chalk");
const { DateTime } = require("luxon");

function changeWow() {
    if(DateTime.now().get('second') === 00 || DateTime.now().get('second') % 10 == 0) {
        return chalk.green(DateTime.fromISO(DateTime.now()).toFormat("dd-MM-yyyy HH:mm:ss"))
    } else {
        return DateTime.fromISO(DateTime.now()).toFormat("dd-MM-yyyy HH:mm:ss")
    }
}

const randomColor = faker.commerce.color();

console.log(`

    ${chalk.keyword(randomColor)('MegaCl0ck')} !
`)
setInterval(() => process.stdout.write(`${changeWow()}\r`), 1000);




