  //variables
  var x = 0;// base x location
  var y = 0;//base y location
  var l = 90;//length of bricks
  var w = 40;//width of bricks
  var d = 10;//difference between bricks

  //setup occurs once
  function setup() {
    //canvas
    var canvas = createCanvas(windowWidth, windowHeight); // the canvas siz
    canvas.parent("canvasContainer");
  }

  function draw() {
    ///Make the background many times or the bricks will overlap
    background(220);

    //the colour
    fill(150, 25, 25)
    //brick 1 (top left)
    rect(x, y, l, w);
    //brick 2 (next)
    rect(x + l + d, y, l, w);
    //brick 3 (next)
    rect(x + d * 2 + l * 2, y, l, w);
    //brick 4 (next)
    rect(x + d * 3 + l * 3, y, l, w);
    //brick 5 (1st brick on second line)
    fill(0)
    rect(x + (d *6), y + w + d, l, w);
    //brick 6 (next)
    fill(150, 25, 25)
    rect(x + (l / 2), y + w + d, l, w);
    //brick 7 (next)
    rect(x + l + (l / 2) + d, y + w + d, l, w);
    //brick 8 (next)
    rect(x + l * 2 + (l / 2) + d * 2, y + w + d, l, w);
    //brick 9 (next)
    rect(x + l * 3 + (l / 2) + d * 3, y + w + d, l, w);
    //brick 9 (next)
    rect(x + l * 4 + (l / 2) + d * 4, y + w + d, l, w);
    //brick 10 (1st brick on third line)
    rect(x, y + d + w + d + w, l, w);
    //brick 11 (next)
    rect(x + l + d, y + d + w + d + w, l, w);
    //brick 12 (next)
    rect(x + l + d + l + d, y + d + w + d + w, l, w);
    //brick 12 (next)
    rect(x + l + d + l + d + l + d, y + d + w + d + w, l, w);
    //brick 13 (1st brick on forth line)
    rect(x + (l / 2), y + d + w + d + w + d + w, l, w);
     //brick 14 (next)
    rect(x + l + (l / 2) + d, y + d + w + d + w + d + w, l, w);
    //brick 15 (next)
    rect(x + l * 2 + (l / 2) + d * 2, y + d + w + d + w + d + w, l, w);
     //brick 16 (next)
    rect(x + l * 3 + (l / 2) + d * 3, y + d + w + d + w + d + w, l, w);
    //brick 17 (1st brick on fifth line)
    rect(x, y + d + w + d + w + d + w + d + w, l, w);
     //brick 18 (next)
    rect(x + l + d, y + d + w + d + w + d + w + d + w, l, w);
    //brick 19 (next)
    rect(x + l + d + l + d, y + d + w + d + w + d + w + d + w, l, w);
    //brick 20 (next)
    rect(x + l + d + l + d + l + d, y + d + w + d + w + d + w + d + w, l, w);
    //brick 21 (1st brick on sixth line)
    rect(x + (l / 2), y + d + w + d + w + d + w + d + w + d + w, l, w);
    //brick 22 (next)
    rect(x + l + (l / 2) + d, y + d + w + d + w + d + w + d + w + d + w, l, w);
    //brick 23 (next)
    rect(x + l * 2 + (l / 2) + d * 2, y + d + w + d + w + d + w + d + w + d + w, l, w);
    //brick 24 (next)
    rect(x + l * 3 + (l / 2) + d * 3, y + d + w + d + w + d + w + d + w + d + w, l, w);
    //brick 25 (1st brick on seventh line)
    rect(x, y + d + w + d + w + d + w + d + w + d + w + d + w, l, w);
     //brick 26 (next)
    rect(x + l + d, y + d + w + d + w + d + w + d + w + d + w + d + w, l, w);
     //brick 27 (next)
    rect(x + l + d + l + d, y + d + w + d + w + d + w + d + w + d + w + d + w, l, w);
    //brick 28 (next)
    rect(x + l + d + l + d + l + d, y + d + w + d + w + d + w + d + w + d + w + d + w, l, w);
     //brick 29 (1st brick on sixth line)
    rect(x + (l / 2), y + d + w + d + w + d + w + d + w + d + w + d + w + d + w, l, w);
    //brick 30 (next)
    rect(x + l + (l / 2) + d, y + d + w + d + w + d + w + d + w + d + w + d + w + d + w, l, w);
    //brick 31 (next)
    rect(x + l * 2 + (l / 2) + d * 2, y + d + w + d + w + d + w + d + w + d + w + d + w + d + w, l, w);
    //brick 32 (next)
    rect(x + l * 3 + (l / 2) + d * 3, y + d + w + d + w + d + w + d + w + d + w + d + w + d + w, l, w);

  }
