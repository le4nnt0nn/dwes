const { logger } = require("../utils");

const limitN = 12;

function myFibonacci(n) {
	let fib = [0,1];
    let array = [];

	for(i=2; i <= n; i++){
		fib.push(fib[i-1] + fib[i-2]);
        array.push(fib[i])
	}
    return array
}

function fibonacciController(req, res) {
    res.status(200).send(myFibonacci(limitN))
    logger.info('OK - Fibonacci Executed')
}

module.exports = {
    fibonacciController,
    myFibonacci,
};