let bubble = [];

function setup() {
  createCanvas(600, 400);
//  for(let i = 0; i < 40; i++){
//    let x = 20 + 100*i;
//    bubble[i] = new Bubble(x, 200, 20);
  }

function mousePressed() { //mouseDragged
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY,r)
  bubble.push(b);
}

function draw() {
  background(0);
  for(let i = 0; i < bubble.length; i++){
    bubble[i]. move();
    bubble[i]. show();
//    bubble[i].sprett();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r*2);
  }

//  sprett(){
//    this.x += Math.random()*10-5;
//  }
//}
