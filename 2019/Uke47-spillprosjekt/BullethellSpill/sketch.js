let score = document.querySelector("#score");
let highScore = 0;
let player;
let enemies = [];
let bullets = [];

function setup() {
  // put setup code here
  createCanvas(400, windowHeight);
  player = new Player();
//  bullets = new Bullets(width/2,500);
  for(let i = 0; i < 6; i++){
    enemies.push(new Enemies(70*i + 40, 50));
  }
}

function draw() {
  // put drawing code here
  background(0);
  //spilleren og spilleren sin bevegelse
  popUp.tegn();
  player.tegn();
  player.flytt();

  //kullen, fjerning av fienden
  for(let i = 0; i < bullets.length; i++){
    bullets[i].tegn();
    bullets[i].flytt();
    for(let j = 0; j < enemies.length; j++){
      if(bullets[i].treffer(enemies[j])){
        enemies[j].fjerne();
        bullets[i].fjerne();
      }
    }
  }

//bevegelse til fienden
  for(let i = 0; i < enemies.length; i++){
    enemies[i].flytt();
      if(enemies[i].x > width){
        enemies[i].ned();
      }
      else if(enemies[i].x < 1){
        enemies[i].ned2();
      }
    }

  /*
  let vegg = false;

  for(let i = 0; i < enemies.length; i++){
  enemies[i].tegn();
  enemies[i].flytt();
  if(enemies[i].x > width || enemies[i].x < 0){
    vegg = true;
    }
  }

  if (vegg) {
    for(let i = 0; i < enemies.length; i++){
      enemies[i].ned();
  }
}
*/

//fjerning av fiender
  for(let i = 0; i < enemies.length; i++){
  enemies[i].tegn();
    if(enemies[i].borte){
      enemies.splice(i, 1);
  }
}

//fjerning av kulen og  score
  for(let i = bullets.length - 1; i >= 0; i--){
    if(bullets[i].borte){
      bullets.splice(i,1);
      highScore = highScore + 100;
    }
  }

  score.innerHTML = highScore;

  //beseiring eller tap fra fienden
    for(let i = 0; i < enemies.length; i++){
      if(enemies[i].y > player.y - 40){
        alert("GAME OVER: Din score ble " + highScore);
      }
    }
    if(enemies.length == 0 && frameCount > 30){
       alert("VICTORY: Din score ble " + highScore);
       window.location.reload();
     }
    //vegg
    //if(player.x > width){
//       player.x = player.x + 100;
  //}else if(){

//}
    //reset
}



//skyting av kuler
function keyPressed() {
  if (key === ' '){
     let bullet = new Bullets(player.x,player.y - 40);
      bullets.push(bullet);
      }
    }
