//Assigning the variabels
var vid;
var layer;
var rad = 100;
// var w = 850;
// var h = 480;
var alphaC;

//starting the mouse as false
var mouseIsDragged = false;

//inital setup
function setup() {
  //Lets the canvas be the size of the screening causing it to be resonsive
  var canvas = createCanvas(windowWidth, windowHeight);
  //Allows the P5.js code to show in the HTML
  canvas.parent("canvasContainer");

  pixelDensity(1);

  //Defining that W and H should also be responsive to the window size
  var w = windowWidth, h = windowHeight;

  vid= createVideo(['assets/img/Code.mp4'],vidLoad);
  vid.hide()

alphaC = color(0,0)

  //this creates the layer that goes over the top of the background
  layer = createGraphics(w, h);
  layer.background(29,112,184);
  layer.noStroke();

  var myText = "Thank you for being compliant";
  layer.textSize(50);
  layer.fill(255);
  layer.text(myText, layer.width/2-30, layer.height/2-30,100,100);
}

function vidLoad() {
  vid.loop();
  vid.volume(0);
}

function draw() {

  background(100);
  image(vid,0,0);
  image(layer,0,0);
}

function mouseDragged(){

  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++) {
      if ((dist(x,y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
        layer.set(x,y,alphaC);
      }
    }
  }
  layer.updatePixels();
}
