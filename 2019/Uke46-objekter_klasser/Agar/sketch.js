let player1;
let matbiter = [];

function setup() {
  // put setup code here
  createCanvas(400, 400);
  player1 = new Spiller(100,100);
    for(let i = 0; i < 40; i++){
      matbiter[i]= new Matbit();
    }
}

function draw() {
  // put drawing code here
  background(220);
  for(let i = matbiter.length - 1; i > 0; i -= 1){
  let avstand = dist(player1.x, player1.y, matbiter[i].x, matbiter[i].y);
  if(avstand < (player1.r + matbiter[i].r) / 2){
    player1.spis();
    matbiter.splice(i, 1);
  }
  else{
    matbiter[i].tegn();
    }
  }
  player1.tegn();
  player1.flytt();
}
