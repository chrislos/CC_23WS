let counter = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(220,);

  counter = counter +0.01;

}

function mousePressed(){

  fill(random(255),100,100);

  push();
  translate(mouseX,mouseY);
  rect(-2,10,5,100);
  rotate(counter);
  ellipseMode(CORNER);
  ellipse(0,0,60,20);
  rotate(QUARTER_PI);
  ellipse(0,0,60,20);
  rotate(QUARTER_PI);
  ellipse(0,0,60,20);
  rotate(QUARTER_PI);
  ellipse(0,0,60,20);
  rotate(QUARTER_PI);
  ellipse(0,0,60,20);
  rotate(QUARTER_PI);
  ellipse(0,0,60,20);
  rotate(QUARTER_PI);
  ellipse(0,0,60,20);
  rotate(QUARTER_PI);
  ellipse(0,0,60,20);
  pop();

}
//
// rotate();
// translate();
// push();
// pop();

