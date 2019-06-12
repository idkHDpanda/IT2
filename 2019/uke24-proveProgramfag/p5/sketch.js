function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(220, 0, 200);
  rect(100,50,40,220);
  rect(70, 10, 200, 60);
  line(0, 0, 200, 200);
  ellipse(200, 200, 200);

  background("pink");
  fill("cyan");
  rect(100,100,200,200);//hus
  fill("coral");
  triangle(300, 100, 200, 12, 100, 100);//tak
  fill("white");
  rect(120,200,50,100)//dør
  ellipse(160,250,10)//dørknop
  fill("lightblue");
  rect(190,200,40,40)//vindu
  rect(250,200,40,40)
}
