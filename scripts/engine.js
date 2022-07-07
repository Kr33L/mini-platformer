//screen drawing variables
var canvas;
var context;

//game variables
var frames;
var player;
var walls = [];

window.onload = function () {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  player = new Player(10, 10);
  walls.push(new Wall(0, 380, 800, 20, 1));
  frames = setInterval(step, 1000 / 120);
  playerInput();
}

function step() { 
  player.step(); 
  drawEngine(); 
}

function drawEngine() { //clear canvas(no ghosting)
  context.fillStyle = "aliceblue";
  context.fillRect(0, 0, 800, 400);
  player.draw();

  for (let i = 0; i < walls.length; i++) {
    walls[i].draw();
  }
}