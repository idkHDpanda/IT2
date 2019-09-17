let figur = { //lager en objekt
  x: 50,
  y: 50,
  xFart: 0,
  yFart: 2,
  hoyde: 25, //æøå ikke bruk
  bredde: 25,
  hopp: 50
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);

  figur.x = figur.x + figur.xFart;
  figur.y = figur.y + figur.yFart;

  if(figur.y > height){ //lager en game over
    text("du er død",width/2,height/2);
    noLoop();
  }

  rect(figur.x,figur.y,figur.bredde,figur.hoyde);
}

window.onkeydown = hopp; //knyttet til funksjonen

function hopp(event){ //sender inn et event
  if(event.key === "ArrowUp"){ //hopper bare når du trykker på opp knappen
      figur.y = figur.y -figur.hopp;
      figur.yFart = figur.yFart + 1
  }
  else if(event.key === "Enter"){ //restarter etter game over
    location.reload();
  }
}
