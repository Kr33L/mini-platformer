import { context } from "./engine.js";

let leftKey;
let rightKey;
let upKey;
let downKey;

export function Player(xPos, yPos) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.width = 10;
  this.height = 10;
  this.speedX = 0;
  this.speedY = 0;
  this.maxSpeedX = 1;
  this.friction = 0.25;
  this.gravity = 0.1;
  this.active = true;

  this.step = function () {
    if (this.active) {
      this.xPos += this.speedX;
      this.yPos += this.speedY;
      this.speedY += this.gravity;

      if (upKey) this.speedY--;
      if (rightKey) this.speedX++;
      if (leftKey) this.speedX--;

      if ((!leftKey && !rightKey) || (leftKey && rightKey)) {
        this.speedX *= this.friction;
      }

      if (this.xPos < 0) {
        this.xPos = 0;
        this.speedX = 0;
      } else if (this.xPos > 790) {
        this.xPos = 790;
        this.speedX = 0;
      }

      if (this.yPos < 0) {
        this.yPos = 0;
        this.speedY = 0;
      } else if (this.yPos > 370) {
        this.yPos = 370;
        this.speedY = 0;
      }
    }
  };

  this.draw = function () {
    context.fillStyle = "purple";
    context.fillRect(this.xPos, this.yPos, this.width, this.height);
  };
}

export function playerInput() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") upKey = true;
    if (event.key === "a" || event.key === "ArrowLeft") leftKey = true;
    if (event.key === "s" || event.key === "ArrowDown") downKey = true;
    if (event.key === "d" || event.key === "ArrowRight") rightKey = true;
  });

  document.addEventListener("keyup", function (event) {
    if (event.key === "w" || event.key === "ArrowUp") upKey = false;
    if (event.key === "a" || event.key === "ArrowLeft") leftKey = false;
    if (event.key === "s" || event.key === "ArrowDown") downKey = false;
    if (event.key === "d" || event.key === "ArrowRight") rightKey = false;
  });
}
