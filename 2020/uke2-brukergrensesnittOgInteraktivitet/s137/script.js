//1a
let inp = document.querySelector("#inp");
let txt = document.querySelector("#txt");
//1b
inp.oninput = function(){
  txt.innerHTML = inp.value;
}
//1c
inp.onfocus = function(){
  inp.value = "";
  txt.innerHTML = "";
}


//4a
let tall1 = document.querySelector("#tall1");
let tall2 = document.querySelector("#tall2");
let txtSum = document.querySelector("#txtSum");

function leggSammenTall() {
  let t1 = Number(tall1.value);
  let t2 = Number(tall2.value);
  let sum = t1 + t2;
  txtSum.innerHTML = sum;
}

tall1.oninput = leggSammenTall;
tall2.oninput = leggSammenTall;
//4b
let ms = document.querySelector("#ms");
let km = document.querySelector("#km");

function omRegning(){
  let msTall = Number(ms.value);
  let kmTall = 3.6 * msTall;
  km.innerHTML = kmTall + " km/h" ;
}

ms.oninput = omRegning;

//5
let tarot = document.querySelector("#tarot");
let rotasjonsvelger = document.querySelector("#rotasjonsvelger");
let fargevelger = document.querySelector("#fargevelger");

fargevelger.onchange = function(){
  document.body.style.background = fargevelger.value;
}

rotasjonsvelger.onchange = function(){
  tarot.style.transform = "rotate("+rotasjonsvelger.value + "deg)";
  //`rotate(${rotasjonsvelger.value}deg)`
}

//6
let bredde = document.querySelector("#bredde");
let hoyde = document.querySelector("#hoyde");
let fisk = document.querySelector("#fisk");

bredde.onchange = function(){
  fisk.width = bredde.value;
}
hoyde.onchange = function(){
  fisk.height = hoyde.value;
}
