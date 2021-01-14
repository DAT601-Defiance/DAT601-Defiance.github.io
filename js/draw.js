function setup() {
  //Lets the canvas be the size of the screening causing it to be resonsive
  // var canvas = createCanvas(windowWidth, windowHeight);
  //Allows the P5.js code to show in the HTML
  createCanvas(400, 400);
  canvas.parent("canvasContainer");
  //setting the pixel density
}

function mouseMoved() {
  fill('red');
  noStroke();
  circle(mouseX, mouseY, 50);
}
