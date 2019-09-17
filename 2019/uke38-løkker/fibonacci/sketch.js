function setup() {
  // put setup code here
  createCanvas(400, 400);
  noLoop(); //draw kjører ikke fordi den vanligvis går i evig loop

  let a = 1; //oppretter variabler som skal holde på det tallet som er før det forrige
  let b = 1;
  for (let i = 0; i < 100; i = i + 1){ // i har ikke noe med rekken å gjøre
    let c = a + b; // c er lik de to forrige tallene
    text (c, i*20, i*20);
    a = b;
    b = c;
    }
}

function draw() {
  // put drawing code here
  //background(220);
}
