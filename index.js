var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceImageResult = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImageResult);


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDice2Image = "dice" + randomNumber2 + ".png";
var randomDiceImageResult2 = "images/" + randomDice2Image;

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageResult2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "Tie!"
}else{
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}