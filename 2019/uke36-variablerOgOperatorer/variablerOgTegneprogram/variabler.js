//Variabler i javascript

//Deklarere en variabel (opprette), med nøkkelordet let
let minAlder = 18;

let minAlder = 99;
//Variabel navn, tilordningsoperatoren, verdi (Gir et bestemt navn til et verdi)

/*minAlder = minAlder + 1

const favorittLag = 24
ittLag = 66;

kan ikke gjøre dette

const = for å ikke oppdatere
let = for å oppdatere

kan ikke ha flere "let" med minAlder fordi det allerede har blitt definert en variabel med det navnet

windowWidth, windowHeight


stjernehimmel (fargerik)
lager en objekt for "stjerne"
let stjerne = {
  x:50,
  y:150,
  radius: 10,
  r:0,
  g:0,
  b:0,
};

function setup() {
  createCanvas(windowWidth, windowHeight); (canvas for hele skjermen)
  background(0);
  frameRate(1); (setter av hvor mange draws det skal være i sekundet)
}

function draw() {
lager en stjerne hver sekund, innebygd variabel fra p5js (plusser med 1 hver gang)
console.log(frameCount);

forandrer på verdiene til stjerne/legger til
  stjerne.x = random(0,width);
  stjerne.y = random(0,height);
  stjerne.r = random(0,255);
  stjerne.g = random(0,255);
  stjerne.b = random(0,255);
  console.log(stjerne.x);

  fill(stjerne.r,stjerne.g,stjerne.b);
  circle(stjerne.x,stjerne.y,stjerne.radius);
}



Ny sketch (plassering av mus endrer og holder farge)
mappe det 0 er sort 255 er hvitt (over blir hvitt)
gå fra 0-255 enn 0-500

function setup() {
  createCanvas(400, 400);
}

function draw() {
  console.log(mouseX);
  let nyMouseX = map(mouseX,0,500,0,255);
  console.log("mouseX:", mouseX, "nyMouseX:", nyMouseX);
  background(nyMouseX);
}



tegneprogram (større sirkler mot høyre)
endrer farge etter klikk
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  let nyX = map(mouseX,0,500,0,100);

    circle(mouseX,mouseY,mouseX);
      console.log(mouseX);

  if(mouseIsPressed){
    fill(random(0,255),random(0,255),random(0,255));
    background(200);
    }
}



med bilder

*/
