class Ship {
   constructor () {
      this.deckNumber = 1;
   }

   shootThis () {
      this.deckNumber--;
      return this.deckNumber <= 0 ? 1 : 0;
   }

   incrementDeck () {
      this.deckNumber++;
      return this;
   }
}

class SeaCell {
   constructor (ship) {
      this.ship = ship;
      this.isInGame = true;
   }

   shootThis () {
      if (this.isInGame) {
         this.isInGame = false;
         return this.hasShip() ? this.ship.shootThis() : -1;
      } else {
         throw new Error('This cell has been already shooted.');
      }
   }

   hasShip () {
      return this.ship !== undefined && this.ship !== null;
   }
}

function createSeaBattle () {
   const gamingSea = [
      [1, 1, 0, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 0]
   ];

   const shipList = [];

   for (let y = 0; y < gamingSea.length; y++) {
      for (let x = 0; x < gamingSea[y].length; x++) {
         const element = gamingSea[y][x];
         if (element === 0) {
            gamingSea[y][x] = new SeaCell();
         } else {
            if (x !== 0 && gamingSea[y][x - 1].hasShip()) {
               gamingSea[y][x] = new SeaCell(gamingSea[y][x - 1].ship.incrementDeck());
            } else if (y !== 0 && gamingSea[y - 1][x].hasShip()) {
               gamingSea[y][x] = new SeaCell(gamingSea[y - 1][x].ship.incrementDeck());
            } else {
               shipList.push(new Ship());
               gamingSea[y][x] = new SeaCell(shipList[shipList.length - 1]);
            }
         }
      }
   }

   console.log(`Game field dimensions are x:1..${gamingSea[0].length}, y:1..${gamingSea.length}`);
   console.log('Total ship number is ' + shipList.length);

   const shipIndex = new Map();

   for (const shipInList of shipList) {
      shipIndex.set(shipInList.deckNumber, shipIndex.has(shipInList.deckNumber) ? shipIndex.get(shipInList.deckNumber) + 1 : 1);
   }

   let totalDeckNumber = 0;

   for (const [key, value] of new Map([...shipIndex].sort())) {
      console.log(`Number of ${key} deck ships is ${value}`);
      totalDeckNumber += key * value;
   }

   return function (x) {
      return function (y) {
         if (totalDeckNumber < 1) {
            throw new Error('There is no ship to shoot.');
         }
         if (!(Number.isInteger(x) && Number.isInteger(y))) {
            throw new Error('Wrong type for coordinates. Use whole numbers only');
         }
         if (y < 1 || y > gamingSea.length) {
            throw new Error(`The value ${y} of y coordinate is out of range of gaming field.`);
         }
         if (x < 1 || x > gamingSea[0].length) {
            throw new Error(`The value ${x} of x coordinate is out of range of gaming field.`);
         }

         const shootResult = gamingSea[y - 1][x - 1].shootThis();
         if (shootResult === 0 || shootResult === 1) {
            totalDeckNumber--;
         }
         return shootResult;
      };
   };
}

module.exports = createSeaBattle;
