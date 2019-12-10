let numbArray = [46.67, 31.89, 16.02, 88.51];

changeArray (numbArray,"round");

function changeArray (anyArray,method){

    for (let i = 0; i < anyArray.length; i++) {   

   if (method == "round") {
   anyArray[i] = Math.round (anyArray[i]);
   console.log (anyArray[i]); 
}
else if (method == "ceil") {
   anyArray[i] = Math.ceil (anyArray[i]);
   console.log (anyArray[i]);
}
else if (method == "floor") {
   anyArray[i] = Math.floor (anyArray[i]);
   console.log (anyArray[i]);
}
else {
    console.log ('Вы ввели не правельный метод ');
}
}
}
