let cols = 10;
let rows = 10;

function setup() {
  // put setup code here
  createCanvas(400, 400);
}

  function draw() {
  // put drawing code here
  background(220);

  //oppgave 6.1 og 6.2
/*
  for (let i = 1; i<= 10; i++){
    circle(i * 35,25,30) //35px ganger mellom hver sirkel
    circle(25, i*35, 30)
  }
*/

  //oppgave 6.3
//rutenett
for (let x = 0; x < width; x += width / 10) {
  for (let y = 0; y < height; y += height / 10) {
    stroke(0);
    strokeWeight(1);
    line(x, 0, x, height);
    line(0, y, width, y);
    }
  }

  for (let i = 0.5; i <= windowWidth; i += 1){
    for (let j = 0.5; j <= windowHeight; j += 1){
      circle(i * 40,j*40,30) //40px ganger mellom hver sirkel
      circle(i*40, j*40, 30)
    }
  }
}
