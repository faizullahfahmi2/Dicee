var randomdice1 = Math.floor(Math.random() * 6) + 1;

var randomImages = "dice" + randomdice1 + ".png";//concatinated process.

var randomimagesdice1 = "images/" + randomImages;//link to the images folder

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", randomimagesdice1);

var randomdice2 = Math.floor(Math.random() * 6) + 1;

var randomImages2 = "images/dice" + randomdice2 + ".png";//concatinated process.


document.querySelectorAll("img")[1].setAttribute("src", randomImages2);

if(randomdice1>randomdice2){
  document.querySelector("h1").innerHTML = "player1 win";
}
else if(randomdice1<randomdice2){
  document.querySelector("h1").innerHTML = "player2 win";
}
else{
    document.querySelector("h1").innerHTML = "draw";
}
