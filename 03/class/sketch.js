let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill(255, 0, 100);
  noStroke();
  stroke(0,0,565);
  //translate(width / 2, height / 2);
  //rotateY(1);

  // rectMode(RADIUS);
  // rect(width/2, height/2, 100, 55);

  let offset = 0.3;


  arc(width/2+10, height/2+25, width/2, width/2, 0, counter);

  counter = counter + 0.01;

  counter = counter % TWO_PI;










  console.log(counter)



  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}