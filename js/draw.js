function setup() {
  //Lets the canvas be the size of the screening causing it to be resonsive
  var canvas = createCanvas(windowWidth, windowHeight);
  //Allows the P5.js code to show in the HTML
  canvas.parent("canvasContainer");
}

function mouseMoved() {
  //setting the colour to red
  fill('red');
  //no outline
  noStroke();
  //A circle to follow your mouse to allow you to draw
  circle(mouseX, mouseY, 30);
}

//WITH THANKS TO.....
//https://www.geeksforgeeks.org/p5-js-erase-function/ 
