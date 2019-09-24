function setup() {
  // put setup code here
  createCanvas(400, 400);
}
//oppgave 6.1 og 6.2
function draw() {
  // put drawing code here
  background(220);
  for (let i = 1; i<= 10; i++){
    circle(i * 35,25,30) //35px ganger mellom hver sirkel
    circle(25, i*35, 30)
  }


  //oppgave 6.3
}
