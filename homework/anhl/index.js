function createSeaBattle () {
   const arr = [0, 1, 0, 0, 1, 0, 0, 2, 2, 0];
   let count = 0;

   function fire (x) {
      function fire (y) {
         checkValid(x, y);

         if (arr[x] === 1) {
            arr[x] = 4;
            if (x - 1 >= 0) {
               arr[x - 1] = 5;
            }
            if (x + 1 < arr.length) {
               arr[x + 1] = 5;
            }
            console.log('Вы убили однопалубный');
            count++;
            isDead();
            return 1;
         } else if (arr[x] === 2) {
            arr[x] = 3;
            if (x - 1 >= 0) {
               if (arr[x - 1] === 2) {
                  console.log('Ранили двухпалубный');
                  return 0;
               } else if (arr[x - 1] === 3) {
                  console.log('Корабль убит');
                  arr[x] = 4;
                  arr[x - 1] = 4;
                  if (x - 2 >= 0) {
                     arr[x - 2] = 5;
                  }
                  if (x + 1 < arr.length) {
                     arr[x + 1] = 5;
                  }
                  count++;
                  isDead();
                  return 1;
               }
            }
            if (x + 1 < arr.length) {
               if (arr[x + 1] === 2) {
                  console.log('Ранили двухпалубный');
                  return 0;
               } else if (arr[x + 1] === 3) {
                  console.log('Корабль убит');
                  arr[x] = 4;
                  arr[x + 1] = 4;
                  if (x + 2 < arr.length) {
                     arr[x + 2] = 5;
                  }
                  if (x - 1 >= 0) {
                     arr[x - 1] = 5;
                  }
                  count++;
                  isDead();
                  return 1;
               }
            }
         } else if (arr[x] === 0) {
            arr[x] = 5;
            console.log('Мимо');
            return -1;
         } else {
            throw new Error('Сюда уже стреляли');
         }
      }

      function isDead () {
         if (count === 3) {
            throw new Error('Кораблики кончились!');
         }
      }

      function checkValid (x, y) {
         // eslint-disable-next-line eqeqeq
         if (x === undefined) {
            throw new Error('Empty 1 number');
         }
         if (y === undefined) {
            y = 0;
         }
         if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('not a number!!');
         }
         if (x < 0 || x >= arr.length) {
            throw new Error('Enter number 0-10!');
         }
         if (y !== 0) {
            throw new Error('Enter 2 number - 0!');
         }
      }
      return fire;
   }
   return fire;
}

const seaBattle = createSeaBattle();
seaBattle(0)(0);
seaBattle(1)(0);
seaBattle(4)(0);
seaBattle(7)(0);
seaBattle(8)(0);
