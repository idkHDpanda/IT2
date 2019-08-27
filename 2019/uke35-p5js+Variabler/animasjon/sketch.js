let xPosition = -50 //eller lage 4 forskjellige variabler her

function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
  xPosition = xPosition + 1

  fill(40,100,50);
  rect(xPosition*15,50,50,50);

  fill(255,90,20);
  rect(xPosition*50,200,50,50);

  fill(5,40,90);
  rect(xPosition*150,150,50,50);

  fill(69,239,255);
  rect(xPosition*4,260,50,50);

  fill(0,126,255);
  rect(xPosition*9,350,50,50);
}
