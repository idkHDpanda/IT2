/*
for(let x = 10; x < 100; x =  x + 10){ //oppretter en variabel (teller); betingelse; det som skjer etter hver runde
  kode som gjennomføres
}
*/

function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background(220);

  for (let x = 10, y = 10; x < 1000 && y < 1000; x = x + 10, y = y + 10){
    circle(x,20,20);
    circle(20, y, 20);
    circle(x,y,20);
  }
}
