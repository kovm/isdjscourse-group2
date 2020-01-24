/* ===============
   RIVER BATTLE
================ */
function createRiverBattle () {
   // initialise the array with ships in it
   const river = createRiverShips();

   return function (x) {
      return function (y) {
         try {
            if ((typeof x !== 'number' || typeof y !== 'number') || (x < 0 || x > river.length - 1) || (y < 0 || y > 0) || Math.trunc(y) !== y || Math.trunc(x) !== x) {
               throw new Error('invalid coordinates');
            } else if (river[x] === 'shot') {
               throw new Error('You\'ve already took a shot there');
            } else if (!river.includes(1)) {
               throw new Error('all ships were destroyed');
            }
         } catch (e) {
            return e.message;
         }

         // shot two-deck ship
         if (river[x] === 1 && (river[x - 1] === 1 || river[x + 1] === 1)) {
            river[x] = 'shot';
            return 0; // shot
            // shot on-deck ship
         } else if (river[x] === 1) {
            river[x] = 'shot';
            return 1; // kill
         }

         river[x] = 'shot';
         return -1; // miss
      };
   };
}
function createRiverShips () {
   const river = new Array(10).fill(0);

   let randomIndex = Math.round(Math.random() * (river.length - 1));
   let shipsPlaced = 0;

   while (shipsPlaced !== 3) {
      // place two-deck ship
      if (shipsPlaced === 0 && randomIndex + 1 < river.length) {
         river[randomIndex] = 1;
         river[randomIndex + 1] = 1;
         shipsPlaced++;
      }

      // check whether surrounded indeces are part of some ship
      // place one-deck ships
      if (!river.slice(Math.max(randomIndex - 1, 0), randomIndex + 2).includes(1) && shipsPlaced !== 0) {
         river[randomIndex] = 1;
         shipsPlaced++;
      }

      randomIndex = Math.round(Math.random() * (river.length - 1));
   }

   return river;
}

/* ===============
    SEA BATTLE
================ */
function createSeaBattle () {
   const shipsCoordinates = [];
   // every call of createSeaBattle generates randomly placed ships
   // set ships coordinates in passing array;
   const sea = createSeaMap(shipsCoordinates);

   return function (x) {
      return function (y) {
         try {
            if ((typeof x !== 'number' || typeof y !== 'number') || (x < 0 || x > sea.length - 1) || (y < 0 || y > sea.length - 1) || Math.trunc(y) !== y || Math.trunc(x) !== x) {
               throw new Error('invalid coordinates');
            } else if (sea[y][x] === 'shot') {
               throw new Error('You\'ve already took a shot there');
            } else if (sea.every(row => !row.includes(1))) {
               throw new Error('all ships were destroyed');
            }
         } catch (e) {
            return e.message;
         }

         if (sea[y][x] === 0) {
            sea[y][x] = 'shot';
            return -1;
         }
         // find the ship which was shot
         const ship = shipsCoordinates.find(s => s.includes(`${y}-${x}`));

         // get the index of coordinates in ship
         const coordinatesIndex = ship.indexOf(`${y}-${x}`);
         ship[coordinatesIndex] = 'shot';
         sea[y][x] = 'shot';

         // check if all coordinates in a ship are shot and return 1(kill) or 0 (just shot)
         return ship.every(coordinate => coordinate.includes('shot')) ? 1 : 0;
      };
   };
}

function createSeaMap (shipsCoordinates) {
   const ships = {
      'four-deck': {
         amount: 1,
         size: 4
      },
      'three-deck': {
         amount: 2,
         size: 3
      },
      'two-deck': {
         amount: 3,
         size: 2
      },
      'one-deck': {
         amount: 4,
         size: 1
      }
   };

   let sea = [];
   for (let i = 0; i < 10; i++) {
      sea.push(new Array(10).fill(0));
   }

   let ship;
   let randomX;
   let randomY;
   let position;
   let coordinates = [];

   while (Object.keys(ships).length !== 0) {
      // get ship's name to refer to it in ships' properties
      ship = Object.keys(ships)[0];
      coordinates = [];

      randomX = Math.round(Math.random() * (sea.length - ships[ship].size - 1));
      randomY = Math.round(Math.random() * (sea.length - ships[ship].size - 1));

      if (ships[ship].size > 1) {
         position = getPosition();
      }
      if (position === 'rotate') {
         sea = rotateClockwise(sea);
      }

      // check if ship is not about to be positioned close to another ship
      if (isItClearAround(ships, ship, sea, randomX, randomY)) {
      // add ship on the map
         sea[randomY].splice(randomX, ships[ship].size, ...new Array(ships[ship].size).fill(1));
         ships[ship].amount--;

         // calculate coordinates of a ship
         for (let i = randomX; i < randomX + ships[ship].size; i++) {
            if (position === 'rotate') {
               coordinates.push(`${9 - i}-${randomY}`);
            } else {
               coordinates.push(`${randomY}-${i}`);
            }
         }

         // add coordinates of a ship into global array of ships
         shipsCoordinates.push(coordinates);
      }

      // rotate it back to initial state
      if (position === 'rotate') {
         sea = rotateCounterClockwise(sea);
      }

      // if the specific ship is no longer need to be positioned delete it from ships obj and move to another ship
      if (ships[ship].amount === 0) {
         delete ships[ship];
      }
   }

   return sea;
}

// checker for empty space to put a ship
function isItClearAround (ships, ship, sea, randomX, randomY) {
   // cells around ship
   const surroundings = [
      // top row
      ...sea[Math.max(randomY - 1, 0)].slice(Math.max(randomX - 1, 0), Math.min(randomX + ships[ship].size + 1, sea.length)),
      // middle row
      ...sea[randomY].slice(Math.max(randomX - 1, 0), Math.min(randomX + ships[ship].size + 1, sea.length)),
      // bottom row
      ...sea[Math.min(randomY + 1, sea.length - 1)].slice(Math.max(randomX - 1, 0), Math.min(randomX + ships[ship].size + 1, sea.length))
   ];

   return !surroundings.includes(1);
}

// 90 degree rotation for positioning ships vertically as well
function rotateClockwise (matrix) {
   const arr = [...matrix];
   const N = arr.length - 1;

   return arr.map((row, i) => row.map((val, j) => arr[N - j][i])
   );
}
function rotateCounterClockwise (matrix) {
   let arr = [...matrix];
   // reverse the individual rows
   arr = arr.map((row) => row.reverse());
   // swap the symmetric elements
   for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < i; j++) {
      // swap the elements
         [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
      }
   }

   return arr;
};

// a switcher to randomly set ships in vertical or horizontal way
function getPosition () {
   return Math.random() - 0.5 > 0 ? 'rotate' : null;
}

module.exports = {
   createRiverBattle,
   createSeaBattle
};
