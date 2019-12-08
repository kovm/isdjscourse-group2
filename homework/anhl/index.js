//Игра - камень ножницы бумага
var compStep = Math.floor(Math.random()*10);
console.log("Цифра компа-" + compStep);

if (compStep < 3.33) {
  compStep = "камень";
} else if (compStep >= 3.33 && compStep <= 6.66 ) {
  compStep = "ножницы";
} else if (compStep > 6.66) {
  compStep = "бумага";
}
console.log("Комп выбрал-" +compStep);


var playerStep = prompt('Choose камень, ножницы или бумага :)');
console.log("Ввёл игрок-" +playerStep);

if (playerStep === null) {
  alert ("Choose AGAIN");
} else {
  playerStep = playerStep.toLowerCase();
}
console.log("Измена на мал.регистр-" +playerStep);
alert("Комп выбрал-" +compStep);

//4
if (compStep === playerStep) {
  alert ("Вы и комп выбрали "+compStep+" - НИЧЬЯ :)");
} else if (compStep === "камень" && playerStep === "ножницы") {
  alert("ПРОИГРАЛИ! Комп выбрал-камень, Вы-ножницы");
} else if (compStep === "камень" && playerStep === "бумага") {
  alert("УРА! WIN! Комп выбрал-камень, Вы-бумага");
} else if (compStep === "ножницы" && playerStep === "бумага") {
  alert("ПРОИГРАЛИ! Комп выбрал-ножницы, Вы-бумага");
} else if (compStep === "ножницы" && playerStep === "камень") {
  alert("УРА! WIN! Комп выбрал-ножницы, Вы-камень");
} else if (compStep === "бумага" && playerStep === "камень") {
  alert("ПРОИГРАЛИ! Комп выбрал-бумага, Вы-камень");
} else if (compStep === "бумага" && playerStep === "ножницы") {
  alert("УРА! WIN! Комп выбрал-бумага, Вы-ножницы");
}