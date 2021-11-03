const fizzBuzz = require('../src/fizzbuzz');

const n = 100;
const condition = {
  2: 'poo',
  3: 'fizz',
  5: 'buzz',
  15: 'foo',
};



test('Should return 1', () => {
  expect(fizzBuzz(1)).toBe(1);
});

test('Should be 2 and return poo', () => {
  expect(fizzBuzz(2, condition[2])).toBe('poo');
});

test('Should be 3 and return fizz', () => {
  expect(fizzBuzz(3, condition[3])).toBe('fizz');
});

test('Should be 5 and return buzz', () => {
  expect(fizzBuzz(5, condition[5])).toBe('buzz');
});

test('Should be 15 and return foo', () => {
  expect(fizzBuzz(15, condition[15])).toBe('foo');
});
