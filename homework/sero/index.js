/* ===============
   RIVER BATTLE
================ */
function createRiverBattle () {
   // initialise the array with ships in it
   const river = createRiverShips();

   return function (x) {
      return function (y) {
         if ((typeof x !== 'number' || typeof y !== 'number') || (x < 0 || x > river.length - 1) || (y < 0 || y > 0) || Math.trunc(y) !== y || Math.trunc(x) !== x) {
            throw new Error('invalid coordinates');
         } else if (river[x] === 'shot') {
            throw new Error('You\'ve already took a shot there');
         } else if (!river.includes(1)) {
            throw new Error('all ships were destroyed');
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
   // every call of createSeaBattle generates randomly placed ships
   const { sea, shipsCoordinates } = createSeaMap();

   return function (x) {
      return function (y) {
         if ((typeof x !== 'number' || typeof y !== 'number') || (x < 0 || x > sea.length - 1) || (y < 0 || y > sea.length - 1) || Math.trunc(y) !== y || Math.trunc(x) !== x) {
            throw new Error('invalid coordinates');
         } else if (sea[y][x] === 'shot') {
            throw new Error('You\'ve already took a shot there');
         } else if (sea.every(row => !row.includes(1))) {
            throw new Error('all ships were destroyed');
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

// map and ships' positioning generator
function createSeaMap () {
   const ships = getShips();
   const shipsCoordinates = [];

   const sea = [];
   // initialize empty map
   for (let i = 0; i < 10; i++) {
      sea.push(new Array(10).fill(0));
   }

   let ship;
   let randomX;
   let randomY;
   let rotation;

   while (Object.keys(ships).length !== 0) {
      // get ship's name to refer to it in ships' properties
      ship = Object.keys(ships)[0];

      // position of a ship in x
      randomX = Math.round(Math.random() * (sea.length - ships[ship].size - 1));
      // position of a ship in y
      randomY = Math.round(Math.random() * (sea.length - ships[ship].size - 1));

      if (ships[ship].size > 1) {
         rotation = isRotate();
      }
      if (rotation) {
         rotate(sea, true);
      }

      // check if ship is not about to be positioned close to another ship
      if (isItClearAround(ships, ship, sea, randomX, randomY)) {
         // add ship on the map
         sea[randomY].splice(randomX, ships[ship].size, ...new Array(ships[ship].size).fill(1));
         ships[ship].amount--;

         // calculate coordinates of a ship
         // and add coordinates of a ship into global array of coordinates
         shipsCoordinates.push(calculateShipCoordinates(ships, ship, randomX, randomY, rotation));
      }

      // rotate it back to initial state
      if (rotation) {
         rotate(sea);
         rotation = false;
      }

      // if the specific ship is no longer need to be positioned delete it from ships obj and move to another ship
      if (ships[ship].amount === 0) {
         delete ships[ship];
      }
   }

   return {
      sea,
      shipsCoordinates
   };
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

// 90 degree rotation clockwise and counterclockwise for positioning ships vertically as well
function rotate (matrix, isClockwise) {
   // reverse the rows
   if (isClockwise) {
      matrix = matrix.reverse();
   } else {
      matrix = matrix.map((row) => row.reverse());
   }

   // swap the symmetric elements
   for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
         [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
   }
};

// a switcher to randomly set ships in vertical or horizontal way
function isRotate () {
   return Math.random() - 0.5 > 0;
}

function getShips () {
   return {
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
}

function calculateShipCoordinates (ships, ship, randomX, randomY, rotation) {
   const coordinates = [];
   for (let i = randomX; i < randomX + ships[ship].size; i++) {
      coordinates.push(rotation ? `${9 - i}-${randomY}` : `${randomY}-${i}`);
   }

   return coordinates;
}

module.exports = {
   createRiverBattle,
   createSeaBattle
};
