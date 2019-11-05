class Boble{
  constructor(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  tegn(){
    circle(this.x, this.y, this.radius);
  }
  flytt(){
    this.x += 1;
  }
}

let boble1 = new Boble(100,200, 25);
let boble2 = new Boble(250,300, 25);

function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
  boble1.flytt();
  boble1.tegn();
  boble2.tegn()

}
