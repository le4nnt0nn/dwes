const { myFibonacci } = require('../src/controllers/fibonacci')

test('should 12 be [1,2,3,5,8,13,21,34,55,89,144]', () => {
    expect(myFibonacci(12)).toStrictEqual([1,2,3,5,8,13,21,34,55,89,144]);
});
