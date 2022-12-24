import { Wall } from "./object.js";
import { Player, playerInput } from "./player.js";

export const canvas = document.getElementById("canvas");
export const context = canvas.getContext("2d");
export const width = (canvas.width = window.innerWidth);
export const height = (canvas.height = window.innerHeight);

//game variables
let frames;
let player;
let walls = [];

function step() {
  player.step();
  drawEngine();
}

function drawEngine() {
  context.fillStyle = "aliceblue";
  context.fillRect(0, 0, width, height);
  player.draw();

  for (let i = 0; i < walls.length; i++) {
    walls[i].draw();
  }
}

window.addEventListener("load", () => {
  player = new Player(10, 10);
  walls.push(new Wall(0, 380, width, 20, 1));
  frames = setInterval(step, 1000 / 120);
  playerInput();
});
