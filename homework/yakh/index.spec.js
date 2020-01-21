/* global
   expect
   test
*/

const game = require('./index.js');
const testItem = game.createSeaBattle();

test('Неправильный ввод', () => {
   expect(() => {
      testItem('0')('0');
   }).toThrow();

   expect(() => {
      testItem([])({});
   }).toThrow();

   expect(() => {
      testItem(42)(-19);
   }).toThrow();

   expect(() => {
      testItem('эфыв')('sd');
   }).toThrow();
});

test('Правильный ввод', () => {
   expect(() => {
      testItem(4)(7);
   }).not.toThrow();

   expect(() => {
      testItem(0)(1);
   }).not.toThrow();
});
