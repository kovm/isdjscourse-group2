const seaBattle = require('./index').createSeaBattle();

test('shooting on valid coordinates returns one of range [ -1 , 0 , 1]', () => {
   let x = [0, 9, 5, 4];
   let y = [0, 9, 5, 3];
   for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
         expect([-1, 0, 1]).toContain(seaBattle(i)(j));
      }
   }
});

test('shooting on wrong types coordinates throws Exception', () => {
   expect(() => {
      seaBattle('0')('0');
   }).toThrowError();
   expect(() => {
      seaBattle([])({});
   }).toThrowError();
});

test('shooting out of the range throws Exception', () => {
   expect(() => {
      seaBattle(42)(-19);
   }).toThrowError();
});

test('shooting with empty coordinates throws Exception', () => {
   expect(() => {
      seaBattle()();
   }).toThrowError();
});

test('shooting twice on the same coordinates throws Exception', () => {
   let x = [0, 9, 5, 4];
   let y = [0, 9, 5, 3];
   for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < y.length; j++) {
         expect(() => {
            seaBattle(0)(0);
         }).toThrowError();
      }
   }
});
