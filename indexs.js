var randomnumber1;
var randomnumber2;
document.querySelector(".b1").addEventListener("click", function () {
  randomnumber1 = Math.floor(Math.random() * 6)+1;
  console.log(randomnumber1);
  var dice1img = "./images/dice" + randomnumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", dice1img);
});
document.querySelector(".b2").addEventListener("click", function () {
  randomnumber2 = Math.floor(Math.random() * 6) + 1;
  console.log(randomnumber2);
  var dice2img = "./images/dice" + randomnumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", dice2img);
});
document.querySelector(".Result").addEventListener("click", function () {
  if (randomnumber1 > randomnumber2) {
    document.querySelector("div h1").innerHTML = "Player 1 Wins";
  } else if (randomnumber1 < randomnumber2) {
    document.querySelector("div h1").innerHTML = "Player 2 Wins";
  } else {
    document.querySelector("div h1").innerHTML = "Draw";
  }
});
