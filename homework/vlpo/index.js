function createSeaBattle () {
   const map = [];
   for (let i = 0; i < 10; i++) {
      map.push(Array(10).fill(0));
   }

   const shipsArray = [];
   for (let i = 0; i < 4; i++) {
      shipsArray.push(Array(0));
   }

   for (let i = 0; i < 4; i++) {
      for (let j = 0; j < i + 1; j++) {
         shipsArray[i].push(createShips({ x: [], y: [], decks: 4 - i }, map));
      }
   }

   const shots = {
      x: [],
      y: []
   };

   return function (x) {
      return function (y) {
         if (x < 0 || x > 9 || typeof x !== 'number') {
            throw new Error('Wrong data!');
         }
         if (y < 0 || y > 9 || typeof y !== 'number') {
            throw new Error('Wrong data!');
         }
         for (let i = 0; i < shots.x.length; i++) {
            if (shots.x[i] === x && shots.y[i] === y) {
               throw new Error('Such a shot was already!');
            }
         }

         // record shot
         shots.x.push(x);
         shots.y.push(y);

         // check all ships coords
         for (let i = 0; i < shipsArray.length; i++) {
            const currentShip = shipsArray[i];
            for (let j = 0; j < currentShip.length; j++) {
               for (let k = 0; k < currentShip[j].decks; k++) {
                  if (currentShip[j].x[k] === x && currentShip[j].y[k] === y) {
                     // hit the ship
                     currentShip[j].decks--;
                     // mark hit
                     map[y][x] = 2;
                     // if ship have 0 decks then it is sunk
                     if (currentShip[j].decks === 0) {
                        currentShip.splice(j, 1);

                        console.log('Killed');
                        // did the ships remain
                        if (currentShip.length === 0) {
                           shipsArray.splice(i, 1);
                           if (shipsArray.length === 0) {
                              throw new Error('Ships are over!');
                           }
                        }
                        return 1;
                     } else {
                        currentShip[j].x.splice(k, 1);
                        currentShip[j].y.splice(k, 1);
                        console.log('Wounded');
                        return 0;
                     }
                  }
               }
            }
         }
         console.log('Miss');
         return -1;
      };
   };
}

// Verifying that ships dont intersect
function checkCoordsForValid (x, y, direction, decks, map) {
   let fromX, toX, fromY, toY;

   // starting coordinates to check
   // ship on the left side
   if (x === 0) {
      fromX = x;
   // ship anywhere else
   } else {
      fromX = x - 1;
   }

   // ship on top of map
   if (y === 0) {
      fromY = y;
   // ship anywhere else
   } else {
      fromY = y - 1;
   }

   // final coordinates to check
   // ship is horizontal and last deck on the edge of map
   if (x === 5 && direction === 0) {
      toX = x + decks;
   // ship is horizontal anywhere else
   } else if (x < 5 && direction === 0) {
      toX = x + decks + 1;
   // ship on the right side
   } else if (x === 9) {
      toX = x;
   // ship anywhere else
   } else {
      toX = x + 1;
   }

   // same for vertical
   if (y === 5 && direction === 1) {
      toY = y + decks;
   } else if (y < 5 && direction === 1) {
      toY = y + decks + 1;
   } else if (y === 9) {
      toY = y;
   } else {
      toY = y + 1;
   }

   // if another ship is right next to the ship retrun false
   for (let i = fromX; i <= toX; i++) {
      for (let j = fromY; j <= toY; j++) {
         if (map[j][i] === 1) {
            return false;
         }
      }
   }
   return true;
}

function getRandomNumber (someNum) {
   return Math.floor(Math.random() * Math.floor(someNum + 1));
}

function createShips (ship, map) {
   // pretend that:
   // 0 - horizontally - x coord, 1 - vertical - y coord
   const direction = getRandomNumber(1);
   let x, y;

   if (direction === 0) {
      x = getRandomNumber(10 - ship.decks);
      y = getRandomNumber(9);
   } else {
      x = getRandomNumber(9);
      y = getRandomNumber(10 - ship.decks);
   }

   // if ships beside to each other generic new coords
   if (!checkCoordsForValid(x, y, direction, ship.decks, map)) {
      return createShips(ship, map);
   } else {
      if (direction === 0) {
         for (let i = x; i < ship.decks + x; i++) {
            ship.x.push(i);
            ship.y.push(y);
            map[y][i] = 1;
         }
      } else {
         for (let i = y; i < ship.decks + y; i++) {
            ship.x.push(x);
            ship.y.push(i);
            map[i][x] = 1;
         }
      }
      return ship;
   }
}

module.exports = {
   createSeaBattle
};
