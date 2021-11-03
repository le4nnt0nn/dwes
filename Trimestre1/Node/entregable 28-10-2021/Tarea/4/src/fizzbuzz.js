function fizzBuzz(n, condition) {
  let result = "";
  if (n % 2 === 0 && condition === 'poo') result += "poo";
  if (n % 3 === 0 && condition === 'fizz') result += "fizz";
  if (n % 5 === 0 && condition === 'buzz') result += "buzz";
  if (n % 15 === 0 && condition === 'foo') result += "foo";

  return result || n;
}

module.exports = fizzBuzz;
