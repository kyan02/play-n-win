


var number1= Math.floor(Math.random()*6)+1;

var diceImage1=("result/" +number1+ ".png");

document.querySelector(".dice1").setAttribute("src",diceImage1);

var number2=Math.floor(Math.random()*6)+1;

var diceImage2=("result/" +number2+ ".png");

document.querySelector(".dice2").setAttribute("src",diceImage2);

if (diceImage1>diceImage2) {

	document.querySelector("h1").innerHTML="player1 won 🤩";
}
 else if (diceImage2>diceImage1) {
 	document.querySelector("h1") .innerHTML="player2 won 🤩";
 }

 else{
 	document.querySelector("h1") .innerHTML="Its a DRAW 😑";
 }