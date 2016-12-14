var s;
// scale variable for the size of the gride or square into which the snake is moving to (this is a global variable when written like this)
var scl = 10;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  // so it doesn't move that fast?
  frameRate(10);
}

function draw(){
  background(51);
  s.update();
  s.show();
}

function keyPressed() {
  // up arrow
  if (keyCode === 38) {
    s.dir(0, -1);
    //  down arrow
  } else if (keyCode === 40) {
    s.dir(0, 1);
    // right arrow
  } else if (keyCode === 39) {
    s.dir(1,0);
    // left arrow
  } else if (keyCode === 37) {
    s.dir(-1,0);
  }
}
