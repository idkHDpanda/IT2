function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

  for(let i = 1; i <= 10; i++){ //går opp igjen (dette kalles nøstaløkker)
    for (let j = 1; j <= 10; j++){
      rect(i*35,j*35,35,35);
      stroke(1);
      text(i*j,i*36,j*38)//gange med 20 i x for hver runde
    }
  }
}
