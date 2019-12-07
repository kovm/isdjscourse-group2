let arr = document.getElementsByClassName("elements");
let mousePosition = 0;

document.getElementById("area").onmousedown = function() {
    mousePosition++;
    console.log(mousePosition)
    if(mousePosition === 1){
        for(let i=0; i<=arr.length; i++)( function (i) {
            arr[i].onmouseover = function (){
                if(mousePosition === 0) {
                    return;
                }
                arr[i].style.background = "red";
            }
        })(i);
    }
  }

document.onmouseup = function() {
	mousePosition = 0;
}

for(let i=0; i<=arr.length; i++) ( function (i) {
	arr[i].onclick = function(){
  	    arr[i].style.background = "red";
    }
})(i);

document.getElementById("button").onclick = function() {
	alert("hi");
 }