
function createSeaBattle (f) {
   const arr = [0, 2, 2, 0, 1, 0, 0, 0, 1, 0];
   let count = 0;

   return function (x) {
      return function (y) {
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
                  console.log('Ранил');
                  return 0;
               } else if (arr[x - 1] === 3) {
                  console.log('Убит');
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
                  console.log('Ранил');
                  return 0;
               } else if (arr[x + 1] === 3) {
                  console.log('Убит');
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
            throw new Error('Уже стрелял');
         }

         return f(x, y);
      };
   };

   function isDead () {
      if (count === 3) {
         throw new Error('Корабли закончились');
      }
   }

   function checkValid (x, y) {
      if (x === undefined || y === undefined) {
         throw new Error('Введите значение!');
      } else if (y !== 0) {
         throw new Error('Значение у должно быть 0!');
      } else if (x < 0 || x >= arr.length) {
         throw new Error('Введите корректное значение');
      } else if (typeof x !== 'number' || typeof y !== 'number') {
         throw new Error('Введите число');
      }
   }
}
const seaBattle = createSeaBattle();
seaBattle(1)(0);
