// option 1: directly set on the HTML Element
// <button onclick="document.body.style.backgroundColor='yellow'">make yellow</button> ----> use korbo nah

// option 2--------->and click one the HTML Element
// IMPORTANT : WE will use this
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3---------------->
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3- Another--------->
const makePurples = document.getElementById("make-purple");

makePurples.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}

// option 4------------>
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", pinkButton1);
function pinkButton1() {
  document.body.style.backgroundColor = "pink";
}
// option 4 another
// IMPORTANT :  WE WILL USE THIS SOMETIME ******------->
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});


