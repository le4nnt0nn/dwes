const fizzBuzz = require("../src/fizzbuzz");

const n = 100;
const condition = {
  2: "poo",
  3: "fizz",
  5: "buzz",
  15: "foo",
};

// FUNCIONA

test("Should return 1", () => {
  expect(fizzBuzz(1)).toBe(1);
});

test("Should be 2 and return poo", () => {
  expect(fizzBuzz(2)).toBe(2);
  expect(condition).toEqual(expect.objectContaining({ 2: "poo" }));
});

test("Should be 3 and return fizz", () => {
  expect(fizzBuzz(3)).toBe("fizz");
  expect(condition).toEqual(expect.objectContaining({ 3: "fizz" }));
});

test("Should be 5 and return buzz", () => {
  expect(fizzBuzz(5)).toBe("buzz");
  expect(condition).toEqual(expect.objectContaining({ 5: "buzz" }));
});

test("Should be 15 and return fizzbuzz", () => {
  expect(fizzBuzz(15)).toBe("fizzbuzz");
  expect(condition).toEqual(expect.objectContaining({ 15: "foo" }));
});


// NO FUNCIONA 
/**
 * 
 * test("Should return 1", () => {
  expect(fizzBuzz(n)).toBe(1);
});

test("Should be 2 and return poo", () => {
  expect(fizzBuzz(n)).toBe(2);
  expect(condition).toEqual(expect.objectContaining({ 2: "poo" }));
});

test("Should be 3 and return fizz", () => {
  expect(fizzBuzz(n)).toBe("fizz");
  expect(condition).toEqual(expect.objectContaining({ 3: "fizz" }));
});

test("Should be 5 and return buzz", () => {
  expect(fizzBuzz(n)).toBe("buzz");
  expect(condition).toEqual(expect.objectContaining({ 5: "buzz" }));
});

test("Should be 15 and return fizzbuzz", () => {
  expect(fizzBuzz(n)).toBe("fizzbuzz");
  expect(condition).toEqual(expect.objectContaining({ 15: "foo" }));
});
 * 
 * 
 */
