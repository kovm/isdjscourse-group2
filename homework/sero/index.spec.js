const seaBattle = require('./index').createSeaBattle();

test('Should be one of these: -1, 0, 1', () => {
   expect([-1, 0, 1]).toContain(seaBattle(0)(0));
   expect([-1, 0, 1]).toContain(seaBattle(9)(9));
   expect([-1, 0, 1]).toContain(seaBattle(1)(2));
   expect([-1, 0, 1]).toContain(seaBattle(1)(0));
   expect([-1, 0, 1]).toContain(seaBattle(1)(4));
});

test('Should be an exception', () => {
   expect(() => seaBattle(0)(0)).toThrow();
   expect(() => seaBattle(10)(0)).toThrow();
   expect(() => seaBattle()()).toThrow();
   expect(() => seaBattle(0)(-1)).toThrow();
   expect(() => seaBattle({})([])).toThrow();
   expect(() => seaBattle('abc')(0)).toThrow();
   expect(() => seaBattle(0)('abc')).toThrow();
});
