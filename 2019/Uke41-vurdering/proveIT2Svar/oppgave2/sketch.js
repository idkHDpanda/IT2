function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);
  textSize(30)
//Oppgave 2.a
  for (let i = 1; i<= 25; i++){
    circle(i * 35,25,30)
  }

//Oppgave 2.b
for(let j = 2; j <= 30; j++){
  if(j % 2 === 0){
    text(j,j*30,60,20,)
    }
  }
}
