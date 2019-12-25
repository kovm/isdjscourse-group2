/* Third homework (Sea beattle) */
/*Game board: 
    2 - free, 
    3 - one deck, 
    4 - two deck, 
    5 - three deck, 
    6 - four deck
    -1 - past, 
    1 - killed, 
    0 - wounded*/
var matrix =    [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]];

//Random function
//Input data: max value
//Output data: random value from 0 and before max
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Function checks area before initialization ship
//Input data: first point coordinates (X and Y), second point coordinates (X and Y)
//Output data: bool value (area free or busy) 
function Inspection(X1, Y1, X2, Y2) {
    let buf;

    if (X1 > X2) {
        buf = X1;
        X1 = X2;
        X2 = buf;
    } 
    if (Y1 > Y2) {
        buf = Y1;
        Y1 = Y2;
        Y2 = buf;
    } 
    if (X1 == 0) {
        X1 += 1;
    }
    if (Y1 == 0) {
        Y1 += 1;
    }
    for (let i = X1 - 1; i <= X2 + 1 && i < 9; i++) {
        for (let n = Y1 - 1; n <= Y2 + 1 && n < 9; n++) {
            if (matrix[i][n] != 2) {
                return true;
            }
        }
    }
    return false;
}

//Random function initialization ship on game board
//Input data: - 
//Output data: - 
function Initialization() {
    let ship = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]; //size ship => ship id = size ship + 2
    let X = 0;
    let Y = 0;
    let direction = 0;
    let bool = true;

    for (let i = 0; i < ship.length; i++) {
        bool = true;
        while (bool) {
            X = getRandomInt(10);
            Y = getRandomInt(10);
            direction = getRandomInt(4);

            switch (direction) {
                case 0: {
                    if (X + ship[i] - 1 > 9) {
                        continue;
                    }
                    if (Inspection(X, Y, X + ship[i] - 1, Y)) {
                        continue;
                    }
                    for (let n = X; n < X + ship[i]; n++) {
                        matrix[n][Y] = ship[i] + 2;
                    }
                    bool = false;
                    break;
                }
                case 1: {
                    if (X - ship[i] + 1 < 0) {
                        continue;
                    }
                    if (Inspection(X, Y, X - ship[i] + 1, Y)) {
                        continue;
                    }
                    for (let n = X; n > X - ship[i]; n--) {
                        matrix[n][Y] = ship[i] + 2;
                    }
                    bool = false;
                    break;
                }
                case 2: {
                    if (Y + ship[i] - 1 > 9) {
                        continue;
                    }
                    if (Inspection(X, Y, X, Y + ship[i] - 1)) {
                        continue;
                    }
                    for (let n = Y; n < Y + ship[i]; n++) {
                        matrix[X][n] = ship[i] + 2;
                    }
                    bool = false;
                    break;
                }
                case 3: {
                    if (Y - ship[i] + 1 < 0) {
                        continue;
                    }
                    if (Inspection(X, Y, X, Y - ship[i] + 1)) {
                        continue;
                    }
                    for (let n = Y; n > Y - ship[i]; n--) {
                        matrix[X][n] = ship[i] + 2;
                    }
                    bool = false;
                    break;
                }
            }
        }
    }
}

//Function definitions ship size
//Input data: ship id (go to Initialization func.), coordinates (X and Y) place on board 
//Output data: exception if size is more than one 
function CheckShip(numberShip, X, Y) {
    if (X > 0 && X < 9 && Y > 0 && Y < 9) {
        if (matrix[X][Y] == numberShip) {
            throw true;
        }
    }
}

//Game function
//Input data: coordinates (X and Y) place on board 
//Output data: code operation (-1 - past, 1 - killed, 0 - wounded)
function createSeaBattle() {
    return function(X = NaN) {

        return function(Y  = NaN) {

            if (X > 9 || X < 0 || Y > 9 || X < 0 || typeof X !== 'number' || typeof Y !== 'number' || matrix[X][Y] < 2) {
                throw "Invalid value";
            }

            if (matrix[X][Y] == 2) {
                matrix[X][Y] = -1;
            }

            if (matrix[X][Y] > 2) {
                let numberShip = matrix[X][Y];

                try {
                    CheckShip(numberShip, X + 1, Y);
                    CheckShip(numberShip, X, Y + 1);
                    CheckShip(numberShip, X - 1, Y);
                    CheckShip(numberShip, X, Y - 1);
                    matrix[X][Y] = 1;

                } catch (flag) {
                    matrix[X][Y] = 0;
                }
            }
            return matrix[X][Y];
        }
    }
}

//Search first ship
//Input data: coordinates (X and Y) starting place 
//Output data: string of coordanates first ship
function Search(StartX, StartY) {
    for (let i = StartX; i < 9; i++) {
        for (let n = StartY; n < 9; n++) {
            if (matrix[i][n] > 2) {
                return String(i) + String(n);
            }
        }
    }
}

Initialization();
let seaBattle = createSeaBattle();
//module.exports = seaBattle; //for node

let X = 1;
let Y;
while (X != -1) {
    
    X = Number(prompt('Enter X', ''));
    Y = Number(prompt('Enter Y', ''));

    try {
        alert(seaBattle(X)(Y));

        //Error sets
        /*console.log(seaBattle('0')('0'));
        console.log(seaBattle([], {}));
        console.log(seaBattle(42)(-19));*/

        //Search first ship on sea
        /*let string = Search(3, 3);
        let X = Number(string[0]);
        let Y = Number(string[1]);
        console.log(seaBattle(X)(Y));*/

    } catch (error) {
        alert(error);
        //console.log(error);
    }
}

//An almost successful attempt, it’s a pity to delete, maybe I’ll finish it sometime
//PutShip(X, Y, X + ship[i] - 1, X + ship[i], ship[i] + 2, 'x');
//PutShip(X, Y, X - ship[i] + 1, X - ship[i], ship[i] + 2, 'x');
//PutShip(X, Y, Y + ship[i] - 1, Y + ship[i], ship[i] + 2, 'y');
//PutShip(X, Y, Y - ship[i] + 1, Y - ship[i], ship[i] + 2, 'y');
/*function PutShip(X, Y, expression, expressionFor, ship, char) {
    let ForFor;
    if (expression > 9 || expression < 0) {
        throw 1;
    }

    if (char == 'x') {
        if (Inspection(X, Y, expression, Y)) {
            throw 2;
        }
        ForFor = X;
    } else {
        if (Inspection(X, Y, X, expression)) {
            throw 2;
        }
        ForFor = Y;
    }

    if (ForFor > expressionFor) {
        let buf = ForFor;
        ForFor = expressionFor;
        expressionFor = buf;
    }

    for (let n = ForFor; n <= expressionFor; n++) {
        if (char == 'x') {
            matrix[n][Y] = ship;
        } else {
            matrix[X][n] = ship;
        }
    }
    
    return false;
}*/