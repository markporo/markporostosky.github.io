
//Set a default dice image of the 6 dots
document.getElementsByTagName("img")[0].src ="images/dice6.png";
document.getElementsByTagName("img")[1].src ="images/dice6.png";

//set img1 and img2 to random numbers that generate the photo between img 1 and 6
var randomNum = Math.floor(Math.random()*6) + 1;

document.getElementById("img1").addEventListener("load", firstDiceImg());

function firstDiceImg() {
    if (randomNum == 1) {document.getElementsByTagName("img")[0].src ="images/dice1.png";}
    else if (randomNum == 2) {document.getElementsByTagName("img")[0].src ="images/dice2.png";}
    else if (randomNum == 3) {document.getElementsByTagName("img")[0].src ="images/dice3.png";}
    else if (randomNum == 4) {document.getElementsByTagName("img")[0].src ="images/dice4.png";}
    else if (randomNum == 5) {document.getElementsByTagName("img")[0].src ="images/dice5.png";}
    else if (randomNum == 6) {document.getElementsByTagName("img")[0].src ="images/dice6.png";}
}

var randomSecondNum = Math.floor(Math.random()*6) +1;

document.getElementById("img2").addEventListener("load", secondDiceImg());

function secondDiceImg() {
    if (randomSecondNum == 1) {document.getElementsByTagName("img")[1].src ="images/dice1.png";}
    else if (randomSecondNum == 2) {document.getElementsByTagName("img")[1].src ="images/dice2.png";}
    else if (randomSecondNum == 3) {document.getElementsByTagName("img")[1].src ="images/dice3.png";}
    else if (randomSecondNum == 4) {document.getElementsByTagName("img")[1].src ="images/dice4.png";}
    else if (randomSecondNum == 5) {document.getElementsByTagName("img")[1].src ="images/dice5.png";}
    else if (randomSecondNum == 6) {document.getElementsByTagName("img")[1].src ="images/dice6.png";}
}

if (randomSecondNum == randomNum) {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("div p").innerText = "(Whoa! Close One. Refresh to Break the Tie!)";
    document.querySelector("div p").style.fontSize = "1.3rem";
}

if (randomSecondNum < randomNum) {
  document.querySelector("h1").innerHTML = "<img style='display: inline-block; width: 9%;' src='images/thumbsuptrans.png'> Player1 Wins!";
}

if (randomSecondNum > randomNum) {
  document.querySelector("h1").innerHTML = "Player2 Wins!  <img style='display: inline-block; width: 9%;' src='images/thumbsuptrans.png'>";
}
