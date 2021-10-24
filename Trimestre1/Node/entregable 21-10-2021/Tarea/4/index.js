const chalk = require("chalk");

module.exports.impresorBlue = function () {
    const arg = process.argv
    console.log(chalk.blue(arg[1]))
};

module.exports.impresorRed = function () {
    const arg = process.argv
    console.log(chalk.red(arg[1]))
};

module.exports.impresorGreen = function () {
    const arg = process.argv
    console.log(chalk.green(arg[1]))
};