var a = [4, 10, 125, 65, 2, 16, 27, 47];

document.write(a + "</br>");

for(var i = 0; i < a.length; i++){
  for(var j = i; j < a.length; j++){
    if(a[j] < a[i]){
        var t = a[j];
        a[j] = a[i];
        a[i] = t;
    }
  }
}

document.write(a);