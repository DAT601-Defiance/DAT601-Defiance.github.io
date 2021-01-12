let eraseEnable = false;
//Assigning the variabels
var vid;

//inital setup
function setup() {
  //Lets the canvas be the size of the screening causing it to be resonsive
  var canvas = createCanvas(windowWidth, windowHeight);
clear();
  canvas.parent("canvasContainer");

  vid= createVideo(['assets/img/Code.mp4'],vidLoad);
  vid.hide();

  toggleBtn = createButton("Toggle erase");
  toggleBtn.position(30, 60);
  toggleBtn.mouseClicked(toggleErase);

}

function draw() {
  image(vid, 1, 1); // draw the video frame to canvas
}

function vidLoad() {
  vid.loop();
}

function toggleErase() {
  if (eraseEnable) {
    noErase();
    eraseEnable = false;
  }
  else {
    erase();
    eraseEnable = true;
  }
}

function mouseMoved() {
  fill('blue');
  noStroke();
  circle(mouseX, mouseY, 100);
}

function vidLoad() {
  vid.loop();
}
