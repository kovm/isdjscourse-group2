/*function range(a,b,h = (a<b)?1:-1)
{
	var array=[];
	if (h>0) {
		for (var i = a; i <= b; i+=h) 
		{
			array.push(i);
		}
	}
	else
	{
		for (var i = a; i >= b; i+=h) 
		{
			array.push(i);
		}
	}
	return array;
}
function sum(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum+=arr[i];
	}
 return sum;	
}
console.log(range(10,1));
console.log(sum(range(10,1)));
 */
 let view ={
 	displayMessade : function(msg){
 		let message = document.getElementById('messageArea');
 		message.innerHTML = msg;
 	},
 	displayHit:function(Location){
 		let cell=document.getElementById(Location);
 		cell.setAttribute("class","hit");
 	},
 	displayMiss:function(Location){
 		let cell=document.getElementById(Location);
 		cell.setAttribute("class","miss");
 	}
 };

 let model = {
 	boardSize:10,
 	numShips:15,
 	shipSunk:0,
 	ships: [],

 	createShips : function(){
 		function ship_constructor(size) {
 			this.size=size;
 			this.location =[];
 			this.hits=[];
 			this.location.length=size;
 			this.hits.length=size;
 		}

 		for (var i = 0,j=5; i < this.numShips; i++) {

 			if (i==1||i==3||i==6||i==10) {
 				j--;
 			}
 			let ship = new ship_constructor(j);
 			this.ships.push(ship);
 		}
 	},

 	fire : function(guess){

 		for (let i = 0; i < this.numShips; i++) {

 			let ship = this.ships[i];

 			let index = ship.location.indexOf(guess);

 			if (index >= 0) {

 				ship.hits[index]='hit';

 				view.displayHit(guess);

 				view.displayMessade("Hit!!!")
 				if (this.isSunk(ship)) {
 					view.displayMessade("You sunk my ship!");
 					this.shipSunk++;
 				}
 				return true;
 			}
 		}
 		view.displayMiss(guess);
 		view.displayMessade("You missed!");
 		return false;
 	},

 	isSunk: function(ship){
 		for (let i = 0; i < ship.size; i++) {
 			if (ship.hits[i]!=='hit') {
 				return false;
 			}
 		}
 		return true;
 	},
 	generateShipLocation : function(){
 		this.createShips();
 		let location;
 		for (let i = 0; i < this.numShips; i++) {
 			do{
 				location = this.generateShip(this.ships[i].size);
 			}while(this.collision(location));
 			this.ships[i].location=location;
 			console.log(this.ships[i]);
 		}

 	},
 	generateShip : function(shipLength){

 		let direction = Math.floor(Math.random()*2);
 		let row,column;

 		if (direction===1) {//gorizontal
 			row = Math.floor(Math.random()*this.boardSize);
 			column = Math.floor(Math.random()*(this.boardSize-shipLength));
 		}

 		else{//vaertical
 			row = Math.floor(Math.random()*(this.boardSize-shipLength));
 			column = Math.floor(Math.random()*this.boardSize);
 		}
 		let newShipLocation=[];
 		for (let i = 0; i < shipLength; i++) {
 			if (direction===1) {
 				newShipLocation.push(row + "" + (column + i));
 			}
 			else{
 				newShipLocation.push((row + i) + "" + column);
 			}
 		}
 		return newShipLocation;
 	},
 	collision : function(location){
 		for (let i = 0; i < this.numShips; i++) {
 			for (let j = 0; j < location.length; j++) {

 				if (this.ships[i].location.indexOf(location[j])>=0||this.ships[i].location.indexOf(+location[j] + 1)>=0||this.ships[i].location.indexOf(+location[0] - 1)>=0||this.ships[i].location.indexOf(+location[0] - 10)>=0||this.ships[i].location.indexOf(+location[i] + 10)>=0) {
 					return true;
 				}
 			}
 		}

 		return false;
 	}
 };
 let controller ={
 	guesses : 0,
 	processGuess:function(guess){
 		let location=pGuess(guess);
 		if (location) {
 			this.guesses++;
 			let hit = model.fire(location);
 			if (model.shipSunk===model.numShips) {
 				view.displayMessade("You are win!!");
 			}
 		}
 	}
 };
 function pGuess(guess){

 	if (guess === null|| guess.length !==2 ) {
 		alert("you enter wrong coordinates!");
 	}else{
 		if ( isNaN(guess.charAt(0)) || isNaN(guess.charAt(1)) ) {
 			alert("you enter wrong coordinates!");
 		}
 		else if(guess.charAt(0) < 0||guess.charAt(0) >= model.boardSize || guess.charAt(1) < 0 || guess.charAt(1) >= model.boardSize){
 			alert("you enter wrong coordinates!");
 		}
 		else{
 			return (guess.charAt(0) + guess.charAt(1));
 		}
 	}
 	return null;
 }

function init(){
	let fireButton = document.getElementById('fireButton');
	fireButton.onclick = handleFireButton;

	let guessInput = document.getElementById('guessInput');
	guessInput.onkeypress = handleKeyPress;

	model.generateShipLocation();//!!!!!!!!!!!!!!<----------<-------
}
function handleFireButton(){
	let guessInput = document.getElementById('guessInput');
	let guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value = "";
}
function handleKeyPress(e){
	let fireButton = document.getElementById('fireButton');
	if (e.keyCode===13) {
		fireButton.click();
		return false;
	}
}
window.onload = init; 
