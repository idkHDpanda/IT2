let gjett = Number(prompt("hvilken tall tenker jeg på?"));
let tall;
let riktig = false;

function setup() {
  // put setup code here
  createCanvas(400, 400);

  tall = Math.floor(random(0,100));

  while(riktig === false){
    if(gjett > 100 || gjett < 0){
      gjett = Number(prompt("tallet må vøre mellom 0 og 100"));
    }
    else if(gjett < tall){
      gjett = Number(prompt("for lavt"));
    }
    else if(gjett > tall){
      gjett = Number(prompt("for høyt"));
    }
    else if(gjett === tall){
      alert("gratulerer")
      riktig = true;
    }
    else{
      gjett = Number(prompt("tallet må vøre mellom 0 og 100"));
    }
  }
}

function draw() {
  // put drawing code here
  background(220);
}
