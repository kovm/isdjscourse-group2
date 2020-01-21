function createSeaBattle () {
   const usedX = [];
   const usedY = [];
   let killsCounter = 0;
   const ships = [[[0, 0, 0, 0], [0, 1, 2, 3]], [[2, 3, 4], [0, 0, 0]], [[6, 7, 8], [0, 0, 0]], [[2, 2], [2, 3]], [[4, 4], [4, 5]], [[6, 6], [6, 7]], [[4], [2]], [[6], [2]], [[2], [5]], [[2], [7]]];

   return function (x = -1) {
      return function (y = -1) {
         if (x < 0 || x > 9 || x !== parseInt(x)) {
            return console.log('Введен некорректный х.');
         }
         if (y < 0 || y > 9 || y !== parseInt(y)) {
            return console.log('Введен некорректный y.');
         }

         for (let i = 0; i < usedX.length; i++) {
            if (usedX[i] === x && usedY[i] === y) {
               return console.log('Выстрел в этот квадрат уже был.');
            }
         }

         usedX.push(x);
         usedY.push(y);

         for (let i = 0; i < ships.length; i++) {
            for (let k = 0; k < ships[i].length; k++) {
               for (let j = 0; j < ships[i][k].length; j++) {
                  if (ships[i][0][j] === x && ships[i][1][j] === y) {
                     ships[i][0].splice(j, 1);
                     ships[i][1].splice(j, 1);
                     if (ships[i][0].length === 0) {
                        killsCounter++;
                        if (killsCounter === 10) {
                           return console.log('Вы уничтожили все корабли!');
                        }
                        return console.log(1);
                     } else {
                        return console.log(0);
                     }
                  } else {
                     return console.log(-1);
                  }
               }
            }
         }
      };
   };
}

const seaBattle = createSeaBattle();
seaBattle(-1)(0);
seaBattle(0)('asds');
seaBattle(0)(0);
seaBattle(0)(0);
seaBattle(0)(1);
seaBattle(0)(2);
seaBattle(0)(3);
seaBattle(2)(0);
seaBattle(3)(0);
seaBattle(4)(0);
seaBattle(6)(0);
seaBattle(7)(0);
seaBattle(8)(0);
seaBattle(2)(2);
seaBattle(2)(3);
seaBattle(4)(4);
seaBattle(4)(5);
seaBattle(6)(6);
seaBattle(6)(7);
seaBattle(4)(2);
seaBattle(6)(2);
seaBattle(2)(5);
seaBattle(2)(7);
