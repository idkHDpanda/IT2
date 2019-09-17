/*
let variabel (lager en variabel for løkken)

while(betingelse){
  kode som gjennomføres (kjører koden på nytt, om betingelsen fortsatt er sann, mens "if" gjør det bare en gang - legger til fra siste)
}
*/

function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

  let y1 = 10
  let y2 = 10
  let x1 = 10
  let x2 = 50

  while( x1 < 110 && x2 < 110){
    x1 = x1 + 10
    x2 = x2 + 10
    line(x1, 10, x2, 10);
  }

  while( y1 < 110 && y2 < 110){
    y1 = y1 + 10
    y2 = y2 + 10
    line(30, y1, 50, y2);
  }


/*  let x = 10;
  let y = 10;

  while(x < 1000){ //øker med 10 i x
    x = x + 10
    circle(x,10,25);
  }

  while(y < 1000){ //øker med 10 i x
    y = y + 10
    circle(10,y,25);
  }
*/
}

/*
let gange = 1; //gangetabellen i console - tegner en gang, legger den utenfor draw
  while(gange <= 10){
    console.log(gange*8);
    gange = gange + 1;
}
*/
