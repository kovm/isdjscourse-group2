function createArea () {
   let arr = [10];
   for (let i = 0; i < 10; i++) {
      arr[i] = [10];
      for (let j = 0; j < 10; j++) {
         arr[i][j] = 0;
      }
   }
   return arr;
}

function setShips (area) {
   let ships = [{
      length: 4,
      count: 1
   }, {
      length: 3,
      count: 2
   }, {
      length: 2,
      count: 3
   }, {
      length: 1,
      count: 4
   }];

   let n = 0;
   let set = false;
   for (let ship of ships) {
      set = false;

      for (let i = ship.count; i > 0; i--) {

         do {
            let kx = Math.round(Math.random() * 1), ky = +!kx;
            let x, y;
            let coordinates = [];
            if (kx) {x = Math.round(Math.random() * (10 - ship.length)), y = Math.floor(Math.random() * 10);}
            else {x = Math.round(Math.random() * 10), y = Math.floor(Math.random() * (10-ship.length));}
            for (let j = 0; j < ship.length; j++) {

               if (area[x+=kx][y+=ky] !== 0 ) break;
               coordinates.push[x+=kx][y+=ky];
            }
            if (coordinates.length===0) continue;
            if (kx) {
               if ()
            }
            else {

            }



            }
         while (!set);

      }

   }
   console.log(area);
   return area;
}

function createSeaBattle () {
   let area = createArea();
   area = setShips(area);
   return function (x) {
      return function (y) {
         console.log(x, y);

      };
   };
}

let seaBattle = createSeaBattle();

seaBattle(3)(5);
