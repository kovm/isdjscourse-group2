let b1 = 3; // координаты корабля
let b2 = 4; // координаты корабля

let b3 = 6; // координаты корабля
let b4 = 9; // координаты корабля

let b1shot = false;
let b2shot = false;
let titanikKilled = false;

let shot; // выстрел
let pool = 0; // выстрелов
let hits = 0; // попадания

let ship = false;

while(!ship){
    shot = prompt("Ты готов мочкануть корабль? (введи от 0-9):");
if (shot < 0 || shot > 9){
       alert("Я же просил от 0 до 9 ввести!");
    }
    

else{
    pool++;
if (shot == b1){
  b1shot = true;
  hits = hits + 1;
  alert("Ранил");
}

if (shot == b2){
  b2shot = true;
  hits = hits + 1;
  alert("Ранил");
}  

if(b1shot && b2shot && !titanikKilled){
  alert("Потопил Титаник");
  titanikKilled = true;
}

if(shot == b3 || shot == b4){
  hits = hits + 1;
  alert("Убил");
}

if(hits === 4){
  ship = true;
  alert("Победа");
}
}}
