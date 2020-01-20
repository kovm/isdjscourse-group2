const shooter = require('./index.js')();

test('first test', () => expect(shooter(1)(1)).toBe(0));
test('second test', () => expect(shooter(2)(1)).toBe(1));
test('second test', () => expect(shooter(1)(2)).toBe(-1));