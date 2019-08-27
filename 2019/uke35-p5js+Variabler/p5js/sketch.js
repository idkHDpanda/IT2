let xPosisjon = 200;
let yPosisjon = 100;

function setup() {
  // put setup code here
  createCanvas(600, 500);
}

function draw() {
  // put drawing code here

  //oppdaterer xPosisjon og yPosisjon
  xPosisjon = xPosisjon + 1;  
  yPosisjon = yPosisjon +1;

  background(500,20,100); //0 er helt sort, 255 er helt hvitt, bruker RGB (rødt, grønt, blått) og greyscale. Med tre verdier får du andre farger. Kan også skrive navnet,hex til fargen. 8-bits farge systen 2^8 = 256 (0-255 teller med 0)
  background(mouseX, mouseY, 100); //Endrer farge etter plassering av musen

  //vegg
    fill(20,100,240);
    stroke(10,10,10);
    strokeWeight(5);
    rect(100,150,150,100);

    //tak
    fill(250,20,20);
    triangle(80,150,270,150,175,40);

    //dør
    rect(113,160,40,90);

    //dørknob
    ellipse(xPosisjon,yPosisjon,10); //endrer posisjon etter musen

    /*
    Dette er en kommentar over
    flere linjer
    */

    //vinduer
    rect(170,170,25,25)
    rect(210,170,25,25)
}
