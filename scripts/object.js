import { context } from "./engine.js";

export function Wall(xPosition, yPosition, width, height, type) {
  this.xPosition = xPosition;
  this.yPosition = yPosition;
  this.width = width;
  this.height = height;
  this.type = type;

  this.draw = function () {
    if (this.type === 1) context.fillStyle = "green";
    if (this.type === 2) context.fillStyle = "red";
    if (this.type === 3) context.fillStyle = "blue";

    context.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  };
}
