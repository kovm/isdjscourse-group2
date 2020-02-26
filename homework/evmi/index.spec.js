const seaBattleModule = require('./index');

test('Убит 1 палубный', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(8)(0)).toBe(1);
});

test('Убит 2 палубный', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(1)(0)).toBe(0) && expect(seaBattle(2)(0)).toBe(1);
});

test('ранил', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(1)(0)).toBe(0);
});

test('мимо', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(0)(0)).toBe(-1);
});

test('большой у', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle(0)(1)).toThrow(Error);
});

test('большой x', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle(11)(0)).toThrow(Error);
});

test('Nan y', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle(0)('')).toThrow(Error);
});

test('Nan x', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(() => seaBattle('')(0)).toThrow(Error);
});

test('уже стрелял', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(0)(0)).toBe(-1) && expect(seaBattle(0)(0)).toThrow(Error);
});

test('все умерли', () => {
   const seaBattle = seaBattleModule.createSeaBattle();
   expect(seaBattle(1)(0)).toBe(0) && expect(seaBattle(2)(0)).toBe(1) && expect(seaBattle(8)(0)).toBe(1) && expect(() => seaBattle(4)(0)).toTrow(Error);
});
