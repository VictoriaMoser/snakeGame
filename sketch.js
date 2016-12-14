var s;
// scale variable for the size of the gride or square into which the snake is moving to (this is a global variable when written like this)
var scl = 10;
var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  // so it doesn't move that fast?
  frameRate(10);
  // create a vector for the food
  pickLocation();

}

//  function for the location of the food, so it is properly set up in the grid
function pickLocation() {
  // decide number of columns - width of the window, divided by the scl
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  // multiply the food by the scale to expand it back
  food.mult(scl);
}

function draw(){
  background(51);
  s.update();
  s.show();

  if (s.eat(food)){
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
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
