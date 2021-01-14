//Assigning the variabels
//Allows the video
var vid;
//Layer overlay
var layer;
//the size of the circle that will delete one layer
var rad = 50;
//creates the erase effect
var alphaC;
//starting the mouse as false
var mouseIsDragged = false;


//inital setup
function setup() {
  //Lets the canvas be the size of the screening causing it to be resonsive
  var canvas = createCanvas(windowWidth, windowHeight);
  //Allows the P5.js code to show in the HTML
  canvas.parent("canvasContainer");
//setting the pixel density
  // pixelDensity(1);

  //Defining that W and H should also be responsive to the window size
  var w = windowWidth, h = windowHeight;

//calling in the video
  vid= createVideo(['assets/img/Code.mp4'],vidLoad);
  //stops the video from appearing twice
  vid.hide()

//this helps delete the colour information orund the mouse
alphaC = color(0,0)

  //this creates the layer that goes over the top of the background
  layer = createGraphics(w, h);
  //setting background colour and no stroke
  layer.background(29,112,184);
  layer.noStroke();
//setting the text to be displayed, with the size and colour
  var myText = "Thank you for      being compliant";
  layer.textSize(60);
  layer.fill(255);
  //calling on the text into the layer and setting it to the center.
  layer.text(myText, layer.width/2-250, layer.height/2-250,500,500);
}

//allows the video to load also setting it to continuously play as well as setting the volume to 0.
function vidLoad() {
  vid.loop();
  vid.volume(0);
}

// function goTolink(){
//   window.open('');
// }

function draw() {

  background(100);
  //Calling on the overlay image as one layer and then the video as another layer.
  image(vid,0,0);
  image(layer,0,0);
}

//sets the function to check if the mouse is being dragged
function mouseDragged(){

//double for loop to calculate the radius on x and y axis around the point of the mouse
  for (var x = mouseX - rad; x < mouseX+rad; x++) {
    for (var y = mouseY - rad; y < mouseY+rad; y++){
      //using the distance function to caculate distance around the mouse
      if ((dist(x,y, mouseX, mouseY) < rad) && x > 0 && x <= width) {
        //setting our layer pixels to the zero alpha colour at the x and y mouse location
        layer.set(x,y,alphaC);
      }
    }
  }
  //updating our pixels stored in the buffer in order to display the change
  layer.updatePixels();
}

//WITH THANKS TO....
//https://codepen.io/DanielHarty/details/jzGVWV
