let map = [1,1,0,0,0,1,1,0,0,1];
function atack(x) {
    if(map[x] == 1){
        throw true;
    }
}
function checkfunc(x,y) {
    if (x > 9 || x < 0 || y > 0 || typeof x !== "number" ||typeof y !== "number") {
        throw Error("Invalid value!!");
    }
}
function checkships() {
    let checkShip = false;
            for(let i = 0; i < map.length; i++){
                if(map[i] == 1){
                    checkShip = true;
                }
            }
            if(checkShip == false) {
                throw Error("Кораблей нет");
            } 
}
function createSeaBattle () {
    return function (x = 0){
        return function (y = 0) {
            
                checkfunc(x,y);
                checkships();
                if(map[x] == 0) {
                    map[x] = -1;
                    return -1;
                }
                else if(map[x] == -1 || map[x] == 2) {
                    throw Error("Вы уже сюда стреляли");
                }
            try {
                if(map[x] == 1){
                    atack(x+1);
                    atack(x-1);
                    map[x] = 2;
                    return 1;
                } 

            }
            catch(e) {
                    map[x] = 2;
                    return 0;
            }
        };
    };
}
 module.exports.createSeaBattle = createSeaBattle;

