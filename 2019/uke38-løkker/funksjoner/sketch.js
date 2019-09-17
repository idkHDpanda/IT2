//function definisjon - er kode snutter

function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  //background(220); //funksjons kall (innebygd i p5)
  //tegnGulSirkel(100,200,70); //tegner den gule sirkelen i canvaset
  //tegnGulSirkel(150,300,10);
  //tegnGulSirkel(50,70,50);
}

//lage function selv
function tegnGulSirkel(x,y){ //x, y or r blir som variabler som bare funker i funksjonen
  fill("yellow");
  circle(x,y,50); //(x,y,r)draw sirklene om igjen - denne funksjonen legges et sted i p5s innebygg funksjon
}

function mousePressed(){ //tegner sirkelen der du klikker
  tegnGulSirkel(mouseX,mouseY);
}

//window.onclick = tegnGulSirkel;
