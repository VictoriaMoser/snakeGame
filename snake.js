// constructor function to add the snake object

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.dir = function(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(postion) {
    var distance = dist(this.x, this.y, postion.x, postion.y);
    // if it is the food the tall should increase by one
    if (distance < 1) {
      total++;
      return true;
    } else {
      return false;
    }
  }
  this.update = function() {
    if (this.total === this.tail.length) {
    // as it moves and eats something, shifts all the spots and add it to the end of the array or beginning of the array?
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
      // we want the last spot to = createVector
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    // the function constrain -- take a value and constrain it between some other values in this case btw 0 and the width
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }


  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}
