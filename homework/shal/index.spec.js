const a = require('./index');
let b = a.createSeaBattle();


test('Правильные значения', () => {
  expect(b(0)(0)).toBe(0);
  expect(b(5)(0)).toBe(0);
  expect(b(1)(0)).toBe(1);
  expect(b(9)(0)).toBe(1);
  expect(b(2)(0)).toBe(-1);
  expect(b(7)(0)).toBe(-1);

});
test('Неправильные значения', () => {
    expect(() => {
        b(11)(0);
     }).toThrow();
     expect(() => {
        b(-1)(0);
     }).toThrow();
     expect(() => {
        b(11)(1);
     }).toThrow();
     expect(() => {
        b("STRING")(0);
     }).toThrow();
     expect(() => {
        b({})(0);
     }).toThrow();
     expect(() => {
        b(0)("str");
     }).toThrow();
     expect(() => {
        b(0)(-1);
     }).toThrow();
  });
