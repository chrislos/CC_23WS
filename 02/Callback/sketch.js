let x_w, y_h;
let rectColor;

let counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectColor = 0;
  x_w = 200;
  y_h = 400;
}

function draw() {

  // 1. Wert GRAUSTUFE, 
  // 2. Wert ALPHA 
  // ALPHA = TRANSPARENZ DES FARBWERTS

  background(200, 1);
  noStroke();
  fill(0);
  rect(mouseX+counter, mouseY+counter, x_w, y_h);
  counter = counter + 1;
}




function mousePressed(){
  console.log("MOUSE PRESSED");
  rectColor = random(100,255);

  counter = 0;

  x_w = random(200,300);
  y_h = random(100, 250); 

}
