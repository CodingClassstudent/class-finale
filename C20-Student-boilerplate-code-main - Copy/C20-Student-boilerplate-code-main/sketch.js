var person
var zombie
function preload() {
  person = loadImage("./assests/personrunning.png")
  zombie = loadImage()

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}