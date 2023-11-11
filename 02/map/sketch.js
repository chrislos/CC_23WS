let midi = 0;
let normalized = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background(220);
  fill(255, 0, 200);
  rect(0, mouseY, width, height);

  stroke(255);

  textSize(80);
  textAlign(CENTER);

  midi = map(mouseY, 0, height, 127, 0);
  midi = int(midi);

  normalized = map(mouseY, 0, height, 1, 0);

  // 1.1 1.2 1.3 <-- floating point zahlen. 
  // 1 2 3 4 <-- integer zahlen -->int() 

  text("mouseY " + mouseY + " / " + "MIDI " + midi, width/2, height/2);
  text("normalized " + normalized, width/2, height/2+100);
}
