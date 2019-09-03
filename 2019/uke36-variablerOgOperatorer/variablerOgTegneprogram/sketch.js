function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  let img;
}

function preload(){
  img = loadImage("hi.jpg");
}

function draw() {
  let nyX = map(mouseX,0,500,0,100);

    //circle(mouseX,mouseY,mouseX);
      console.log(mouseX);

      image(img,mouseX,mouseY,25,25);
  if(mouseIsPressed){
    fill(random(0,255),random(0,255),random(0,255));
    background(200);
    }
}
