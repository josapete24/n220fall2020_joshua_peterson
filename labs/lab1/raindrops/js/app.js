
class Rectangle {
  constructor(rx,ry,rw,rh,rc) {
  this.x = rx;
  this.y = ry;
  this.width = rw;
  this.height = rh;
  this.color = rc;
  }

  update() {
    fill(this.color);
    rect(this.x,this.y,this.width,this.height);
  }
}


var b = 0;

class Raindrop {
  constructor(cx,cy,radius,color){
    this.x = cx;
    this.y = cy;
    this.radius = radius;
    this.color = color;
    this.speed = 1 + Math.random() * 20;
  }

  update() {
    this.y = this.y + this.speed;
    this.speed = this.speed + .1;
    fill(this.color);
    circle(this.x, this.y, this.radius, this.color);

    if (this.y >= 600) {
      this.x = 1 + Math.random() * 1500;
      this.y = 0;
      this.speed = 10;
      b = b  + .05;
      console.log(b);

    }
  }
}

var myRaindrop = [];

for (var i = 0; i < 150; i++) {
  var cx = 0;
  var cy = 0;
  cx = 1 + Math.random() * 1500;
  cy = 1 + Math.random() * 400;
  myRaindrop[i] = new Raindrop(cx,cy,25,[140, 189, 219]);

}



function setup() {
  createCanvas(1500,600);
  console.log("Setup");

}

function draw() {
  background(186, 202, 212);


  for (var i = 0; i < myRaindrop.length; i++) {
      myRaindrop[i].update();

      myRectangle = new Rectangle(0,570,1500,30,[0, 100, b]);


      myRectangle.update();
}



}