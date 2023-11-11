let move = 0;
let direction = 1;


function setup() {
  createCanvas(800, 800);
}

function draw() {
  // if (move > 800) {
  //   direction = -1;
  // } else if (move < 0) {
  //   direction = 1; 
  // }

  if (move > 800 || move < 0) {
    direction = direction * -1; 
  }  
 

  background(0,0,move);
  textSize(100);
  fill(255);
  textAlign(LEFT, BOTTOM);
  text(move,10,400);
  textSize(50);
  text('Hello MD',10,move);





  move = move + direction;

  
}
