const chalk = require('chalk');
// changed var to consts with npx eslint --fix ejercicio3-4.js

// created nonExistingVar
const nonExistingVar = 'no existo';

const youShouldNeverUseVar = 'This is my very long line that eslint should check as an error ............................................';
function myFunction(used, nonUsed) {
  // used nonUsed
  if (used || nonUsed) {
    console.log(chalk.yellow(used));
  }
}

// exported functions and consts
module.exports = {
  youShouldNeverUseVar,
  myFunction,
  nonExistingVar,
};
