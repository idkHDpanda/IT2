let x;
let y;

let xspeed;
let yspeed;

let dvd;

function preload(){
  dvd = loadImage("dvd.png");
}

function setup() {
  // put setup code here
  createCanvas(800, 600);
  x = random(width);
  y = random(height);
  xspeed = 10;
  yspeed = 10;
}

function draw() {
  // put drawing code here
  background(0);
  //rect(x,y,80,60);
  image(dvd,x,y);

  x = x + xspeed;
  y = y + yspeed;

  if(x + dvd.width >= width{
    xspeed = -xspeed;
    x = width - dvd.width; //noe galt med denne delen av koden
  }
  else if (x <= 0){
    xspeed = -xspeed;
    x = 0;
  }


  if(y + dvd.height >= height{
    yspeed = -yspeed;
    y = height - dvd.height;
  }
  else if (y <= 0){
    yspeed = -yspeed;
    y = 0;
  }
}
