const fizzBuzz = require("../src/fizzbuzz");

test("Should return 1", () => {
  expect(fizzBuzz(1)).toBe(1);
});

test("Should return fizz", () => {
  expect(fizzBuzz(3)).toBe('fizz');
});

test("Should return buzz", () => {
  expect(fizzBuzz(5)).toBe('buzz');
});

test("Should return fizzbuzz", () => {
  expect(fizzBuzz(15)).toBe('fizzbuzz');
});
