const { myNotas } = require('../src/controllers/notas')

test('should work', () => {
    expect(myNotas()).toStrictEqual();
});
