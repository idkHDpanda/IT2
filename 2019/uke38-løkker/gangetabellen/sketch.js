// i = iteratoren
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);
  textSize(32);
  //text("hallo der",10,30);

  for(let i = 1; i <= 10; i = i + 1){ //går opp igjen (dette kalles nøstaløkker)
    for (let j = 1; j <= 10; j = j + 1){
      text(i*j,i*50,j*50)//gange med 20 i x for hver runde
      rect(i*50,j*50,10,10);
    }

  }

}
