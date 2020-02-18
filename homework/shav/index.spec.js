// Работает всё, кроме проверки на возврат функцией исключения. :(
const { seaBattle } = require('./index');

test('Function should return the result of shot', () => {
   expect(seaBattle(0)(0)).toBe(0);
   expect(seaBattle(0)(1)).toBe(0);
   expect(seaBattle(0)(2)).toBe(0);
   expect(seaBattle(0)(3)).toBe(1);

   expect(seaBattle(2)(0)).toBe(0);
   expect(seaBattle(3)(0)).toBe(0);
   expect(seaBattle(4)(0)).toBe(1);

   expect(seaBattle(6)(0)).toBe(0);
   expect(seaBattle(7)(0)).toBe(0);
   expect(seaBattle(8)(0)).toBe(1);

   expect(seaBattle(2)(2)).toBe(0);
   expect(seaBattle(2)(3)).toBe(1);

   expect(seaBattle(4)(4)).toBe(0);
   expect(seaBattle(4)(5)).toBe(1);

   expect(seaBattle(6)(6)).toBe(0);
   expect(seaBattle(6)(7)).toBe(1);

   expect(seaBattle(4)(2)).toBe(1);

   expect(seaBattle(6)(2)).toBe(1);

   expect(seaBattle(2)(5)).toBe(1);

   expect(seaBattle(2)(5)).toThrow(); // выстрел в тот же квадрат

   expect(seaBattle(2)(7)).toThrow(); // уничтожение последнего корабля
});
