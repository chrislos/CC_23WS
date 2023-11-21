let counter = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,20);

  fill(0);

  push();
  translate(100,100);
  rotate(counter);
  rectMode(CENTER);
  rect(0,0,50,50);
  rect(100,50,10,10);
  pop();

  

  push();
  translate(300,300);
  rotate(-counter);
  ellipse(0,0,60,20);
  pop();

  push();
  translate(100,300);
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

  counter = counter +0.01;

}

function mousePressed(){



}
//
// rotate();
// translate();
// push();
// pop();

