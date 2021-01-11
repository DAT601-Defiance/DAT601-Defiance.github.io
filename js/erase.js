document.addEventListener("contextmenu", function (e) {
       e.preventDefault();
   }, false);

var black;
var alphaC;
var layer;
var rad = 100;

var w = 500, h = 600;

var mouseIsDragged = false;

function setup() {
canvas.parent("canvasContainer");
 pixelDensity(1);
 createCanvas(w, h);
 black = color(155);
 alphaC = color(0,0);
 layer = createGraphics(w, h);
 background(255);
 layer.fill("red");
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
