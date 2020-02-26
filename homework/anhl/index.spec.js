const seaBattleModule = require('./index');

test('убил 1палубный', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(1)(0)).toBe(1);
});
test('ранил 2палубный', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(7)(0)).toBe(0);
});
test('убил 2палубный', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(7)(0)).toBe(0) && (seaBattle(8)(0)).toBe(1);
});
test('мимо', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(0)(0)).toBe(-1);
});
test('нет значения Х', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle(undefined)(0)).toThrow(Error);
});

test('не числовое значение х', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle('')(0)).toThrow(Error);
});
test('не числовое значение у', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle(0)('')).toThrow(Error);
});

test('слишком большой х', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle(11)(0)).toThrow(Error);
});
test('слишком большой у', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle(0)(1)).toThrow(Error);
});

test('убиты все корабли', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle(1)(0).toBe(1) && seaBattle(4)(0).toBe(1) && seaBattle(7)(0).toBe(1) && seaBattle(8)(0).toBe(1)).toThrow(Error);
});
test('сюда уже стреляли', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle(1)(0).toBe(1) && seaBattle(1)(0).toBe(1)).toThrow(Error);
});
