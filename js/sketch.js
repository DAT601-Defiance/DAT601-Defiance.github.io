//
document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);

//Assigning the variabels
var black;
var alphaC;
var layer;
var rad = 100;
//starting the mouse as false
var mouseIsDragged = false;

//inital setup
function setup() {
  //Lets the canvas be the size of the screening causing it to be resonsive
  var canvas = createCanvas(windowWidth, windowHeight);
  //Allows the P5.js code to show in the HTML
  canvas.parent("canvasContainer");
  //Defining that W and H should also be responsive to the window size
  var w = windowWidth, h = windowHeight;
  pixelDensity(1);
  black = color(400);
  alphaC = color(0,0);
  layer = createGraphics(w, h);
  background(220);
  layer.fill("green");
  layer.rect(0,0,width,height);
}

function draw() {
  noStroke();
  for (var i = 0; i < 10; i++) {
    fill(i*25);
    rect(i*width/10, 0, width/10, height)
  }
  image(layer, 0, 0);

  if (mouseIsPressed) {
    noFill();
    stroke("gray");
    ellipse(mouseX, mouseY, rad*2, rad*2);
    line(mouseX - 10, mouseY, mouseX+10, mouseY);
    line(mouseX, mouseY-10, mouseX, mouseY+10);
  }
}

function mouseDragged() {
  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
        layer.set(x,y,alphaC);
      }
    }
  }
  layer.updatePixels();
}
