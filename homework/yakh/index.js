let count = 0;

const Ship = function (hitPoints, name) {
   this.hitPoints = hitPoints;
   this.name = name;
};

const boat1 = new Ship(1, 'Однопалубный');
const boat2 = new Ship(1, 'Однопалубный');
const boat3 = new Ship(1, 'Однопалубный');
const boat4 = new Ship(1, 'Однопалубный');

const cruiser1 = new Ship(2, 'Двухпалубный');
const cruiser2 = new Ship(2, 'Двухпалубный');
const cruiser3 = new Ship(2, 'Двухпалубный');

const liner1 = new Ship(3, 'Трёхпалубный');
const liner2 = new Ship(3, 'Трёхпалубный');

const aircraftCarrier1 = new Ship(4, 'Четырёхпалубный');

const battleField = [
   [0, boat1, 0, 0, 0, 0, 0, boat2, 0, 0],
   [0, 0, 0, 0, liner1, 0, 0, 0, 0, 0],
   [0, cruiser1, cruiser1, 0, liner1, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, liner1, 0, 0, 0, 0, 0],
   [0, cruiser2, 0, 0, 0, 0, liner2, liner2, liner2, 0],
   [0, cruiser2, 0, 0, 0, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, aircraftCarrier1, 0, 0],
   [cruiser3, cruiser3, 0, 0, 0, 0, 0, aircraftCarrier1, 0, 0],
   [0, 0, 0, 0, 0, 0, 0, aircraftCarrier1, 0, 0],
   [boat3, 0, 0, 0, 0, 0, 0, aircraftCarrier1, 0, boat4]
];

module.exports.createSeaBattle = function () {
   return function (firstData) {
      if (typeof firstData !== 'number' || firstData < 0 || firstData > 9) {
         throw new Error('Не корректный ввод координаты Х');
      }
      const x = battleField[firstData];
      return function (secondData) {
         if (typeof secondData !== 'number' || secondData < 0 || secondData > 9) {
            throw new Error('Не корректный ввод координаты Y');
         }
         const y = x[secondData];
         if (count === 10) {
            throw new Error('Корабли закончились');
         }
         if (y === 5) {
            throw new Error('Вы уже стреляли сюда');
         }
         if (typeof y === 'object') {
            if (y.hitPoints === 1) {
               x.splice(secondData, 1, 5);
               y.hitPoints -= 1;
               count++;
               return 1;
            } else {
               x.splice(secondData, 1, 5);
               y.hitPoints -= 1;
               return 0;
            }
         }
         if (y === 0) {
            x.splice(secondData, 1, 5);
            return -1;
         }
      };
   };
};
