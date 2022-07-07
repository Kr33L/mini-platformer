function Wall(xPos, yPos, width, height, type) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.width = width;
  this.height = height;
  this.type = type;

  this.draw = function () {
    if (this.type === 1) context.fillStyle = "green";
    if (this.type === 2) context.fillStyle = "red";
    if (this.type === 3) context.fillStyle = "blue";

    context.fillRect(this.xPos, this.yPos, this.width, this.height);
  };
}