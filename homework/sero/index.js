function createRiverBattle () {
   const river = createRiverShips();

   return function (x, y) {
      try {
         if ((typeof x !== 'number' || typeof y !== 'number') || (x < 0 || x > river.length - 1) || (y < 0 || y > 0)) {
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
      } else if (river[x] === 1) {
         river[x] = 'shot';
         return 1; // kill
      }

      river[x] = 'shot';
      return -1; // miss
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

module.exports = {
   createRiverBattle: createRiverBattle

};
