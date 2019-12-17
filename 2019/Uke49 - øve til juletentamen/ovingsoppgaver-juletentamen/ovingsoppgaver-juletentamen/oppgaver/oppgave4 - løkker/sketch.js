var tilfeldigtall = 0;

while(tilfeldigtall != 3){
  tilfeldigtall = Math.floor(Math.random()*10);
  console.log("Svaret er ikke 3");
}
console.log("Svaret er 3")

for(let i = 0; i < 50; i++){
  for (let j = 3; j <4; j++){
    document.write(i*j + " ");
    console.log(i*j);
  }
}
