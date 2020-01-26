

function createArea() {
   let arr = [10];
   for (let i = 0; i < 10; i++) {
      arr[i] = [10];
      for (let j = 0; j < 10; j++) {
         arr[i][j] = 0;
      }
   }
   return arr;
}


function checkCoordinates(x, y, kx, ky, length, area) {
   let startX, endX, startY, endY;
   startX = (x === 0) ? x : x - 1;
   // если условие истинно - это значит, что корабль расположен вертикально и его последняя палуба примыкает
   // к нижней границе игрового поля
   // поэтому координата 'x' последней палубы будет индексом конца цикла
   if (x + kx * length === 9 && kx === 1) endX = x + kx * length;
   // корабль расположен вертикально и между ним и нижней границей игрового поля есть, как минимум, ещё
   // одна строка, координата этой строки и будет индексом конца цикла
   else if (x + kx * length < 9 && kx === 1) endX = x + kx * length + 1;
   // корабль расположен горизонтально вдоль нижней границы игрового поля
   else if (x === 9 && kx === 0) endX = x + 1;
   // корабль расположен горизонтально где-то по середине игрового поля
   else if (x < 9 && kx === 0) endX = x + 2;

   // формируем индексы начала и конца цикла для столбцов
   // принцип такой же, как и для строк
   startY = (y === 0) ? y : y - 1;
   if (y + ky * length === 9 && ky === 1) endY = y + ky * length;
   else if (y + ky * length < 10 && ky === 1) endY = y + ky * length + 1;
   else if (y === 9 && ky === 0) endY = y + 1;
   else if (y < 9 && ky === 0) endY = y + 2;
   // запускаем циклы и проверяем выбранный диапазон ячеек
   // если значение текущей ячейки равно 1 (там есть палуба корабля)
   // возвращаем false
   for (let i = startX; i < endX; i++) {
      for (let j = startY; j < endY; j++) {
         if (area[i][j] !== 0) return false;
      }
   }
   return true;
}



function createSeaBattle() {
   let area = createArea();
   let ships = [{
      length: 4,
      count: 1
   }, {
      length: 3,
      count: 2,
   }, {
      length: 2,
      count: 3
   }, {
      length: 1,
      count: 4
   }];
   let setShips = function () {

      let n = 0;

     // выбираем тип корабля
      for (let ship of ships) {
         //количество кораблей данного типа

         for (let i = ship.count; i > 0; i--) {
            //маркер удачного располоения корабля
            let set = false;

            do {
               let kx = Math.round(Math.random()), ky = +!kx;
               let x, y;

               if (kx) {
                  x = Math.round(Math.random() * (10 - ship.length));
                  y = Math.floor(Math.random() * 9);
               } else {
                  x = Math.round(Math.random() * 9);
                  y = Math.floor(Math.random() * (10 - ship.length));
               }

               let length = ship.length;

               set = checkCoordinates(x, y, kx, ky, length, area);

               if (set) {
                  for (let i = 1; i <= ship.length; i++) {
                     area[x][y] = ship.length;
                     x += kx;
                     y += ky;
                  }
               }


            }
            while (!set);

         }

      }

      return area;
   };
   let aliveShips = 10;
   setShips();


   return function (x) {
      return function (y) {
         if (typeof x !=="number" || typeof  y !=="number") throw Error("Wrong type of coordinates");
         if (x>9 || x<0 || y>9 || y<0) throw Error("Wrong range of coordinates");
         if (!aliveShips) throw Error ("There are no more ships");

         if (area[x][y] === 0) {return -1;}

         else
         console.log(x, y);

      };
   };
}

let seaBattle = createSeaBattle();

seaBattle(10)(-5);
