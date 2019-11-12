let bubble = [];

function setup() {
  createCanvas(600, 400);
    for(let i = 0; i < 40; i++){
    let x = 20 + 15*i;
    let r = random(10, 50);
    bubble[i] = new Bubble(x, 200, r);
  }
}
/*
function mousePressed() { //mouseDragged
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY,r)
  bubble.push(b);
}*/

function draw() {
  background(0);
  for(let i = 0; i < bubble.length; i++){
    bubble[i]. move();
    bubble[i]. show();
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
      if (this.x <0){
        this.x = 0;
      }
      else if(this.x>width){
        this.x = width
      }

    this.y = this.y + random(-5,5);
      if (this.y <0){
        this.y = 0;
      }
      else if(this.y>height){
        this.y = height;
      }
    }

  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r*2);
  }
}
