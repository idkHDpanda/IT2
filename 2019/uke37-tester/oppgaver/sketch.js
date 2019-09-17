/*/
//OPPGAVE 1 (bytte mellom farger med posisjonen av musen)
function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background(220);

  circle(mouseX,mouseY,30);
//else er avhengig av if
  if(mouseX > 400){
    fill("red");
  }
//hvis mouseX er større enn 400px så er sirkelen rød (når betingelsen er sann)
  else{
    fill("blue");
  }
//hvis mouseX ikke er større enn 400px er sirkelen blå (når betingelsen er usann)
}
*/



//OPPGAVE 2 (tegninger av firgurer på bestemte områder)
// Oppretter to variabler x og y. Jeg trenger ikke gi de en verdi, fordi det skal jeg gjøre i draw.
let x;
let y;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(220);
}

function draw() {
  // put drawing code here

  x = random(0,width); //setter x til å være et tilfeldig tall mellom 0 og bredden til canvaset

  y = random(0,height); //setter y til å være et tilfeldig tall mellom 0 og bredden til canvaset

  if(x > width/2 && y > height/2){ // Hvis x er større enn halve bredden og y er større enn høyden av halve canvaset gjør følgende:
    ellipse(x,y,10,20); // Tegn en ellipse i posisjonen x,y med bredde 10 og høyde 20.
    }

  else if(x > width/2 && y < height/2){ // Hvis x er større enn halve bredden og y er mindre enn høyden av halve canvaset gjør følgende:
    rect(x,y,10,10); // Tegn firkant
    }

  else if(x < width/2 && y > height/2){ // Hvis x er mindre enn halve bredden og y er større enn høyden av halve canvaset gjør følgende:
    triangle(x, y, x+5, y+10, x+10, y); // Tegn trekant
    }

  else{
    // Hvis x er mindre enn halve bredden av canvaset kjøres denne koden:
    // (Legg merke til at jeg ikke har en betingelse her, det er fordi hvis ikke
    // noen av de andre betingelsene er true må x og y være i øverste venstre hjørne)
    circle(x,y,10); // Tegn sirkel i posisjonen x,y med radius 10.
  }
}
*/



//OPPGAVE 3 (ball som "bouncer")
/*
let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r,g,b;

function preload(){
  dvd = loadImage("dvd.png");
}

function setup() {
  createCanvas(800, 600);
  x = random(widt);
  y = random(height);
  xspeed = 10;
  yspeed = 10;
  pickColor();
}

function pickColor(){
   r = random(100,255);
   g = random(100,255);
   b = random(100,255);
}

function draw() {
  background("gray");
  //rect(x,y,80,60);
  //regne dvd logoen
  tint(r,g,b);
  image(dvd,x,y,100,100);

  x = x + xspeed;
  y = y + yspeed;

  //hvordan koden kan skrives for at formatet til logoen skal passe og treffe kanten ordentlig (får den ikke til å virke) endrer farge når den treffer kanten (får den ikke til å virke)
   if(x + dvd.width >= width){
      xspeed = -xspeed;
      x = width - dvd.width;
      pickColor();
    }
    else if(x <= 0){
      xspeed = -xspeed;
      x = 0;
      pickColor();
    }

    if(y + dvd.height >= height){
      yspeed = -yspeed;
      y = height - dvd.height;
      pickColor();
    }

    else if(y <= 0){
      yspeed = -yspeed;
      y = 0;
      pickColor();
    }
*/
/*
    if(x + 80 == width || x == 0){
      xspeed = -xspeed;
    }

    if(y + 60 == height || y == 0){
      yspeed = -yspeed;
    }
    */
}
