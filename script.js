let images = [
  "images/dice-one.png",
  "images/dice-two.png",
  "images/dice-three.png",
  "images/dice-four.png",
  "images/dice-five.png",
  "images/dice-six.png"
];

let dice = document.querySelectorAll("img");

function roll() {
  dice.forEach(function(die){
    die.classList.add("shake");
  });
  setTimeout(function(){
    dice.forEach(function(die) {
      die.classList.remove("shake");
    });

    let dieOneValue = Math.floor(Math.random() * 6);
    let dieTwoValue = Math.floor(Math.random() * 6);
    console.log(dieOneValue, dieTwoValue);
    document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
    document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
    document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue + 1) + (dieTwoValue + 1) );
  },
  1000
  );
}
roll();
