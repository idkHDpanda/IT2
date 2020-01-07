//1
let ja = document.querySelector("#ja");
let nei = document.querySelector("#nei");
let info = document.querySelector("#info");

ja.onclick = sjekkJaEllerNei;
nei.onclick = sjekkJaEllerNei;

function sjekkJaEllerNei() {
  if(ja.checked){
    info.innerHTML = "Takk for at du vil delta";
  }
  else{
    info.innerHTML = "Takk for nå!";
  }
}

//2
let blå = document.querySelector("#blå");
let rød = document.querySelector("#rød");
let grønn = document.querySelector("#grønn");
let gul = document.querySelector("#gul");
let gullfisk = document.querySelector("#gullfisk");

function skiftBilde(evt) {
  let rb = evt.target;
  let fiskebilde = rb.getAttribute("data-bilde");
  gullfisk.src = fiskebilde;
}
blå.onclick=rød.onclick=grønn.onclick=gul.onclick=skiftBilde;

//3
let cbAkseptert = document.querySelector("#cbAkseptert");
let cbInfo = document.querySelector("#cbInfo");

cbAkseptert.onchange = function(){
  if(cbAkseptert.checked){
    cbInfo.innerHTML = "Du valgte A";
  }
  else{
    cbInfo.innerHTML = "Du valgte ikke A";
  }
}

//4a
let velgDag = document.querySelector("#velgDag");
let infoDag = document.querySelector("#infoDag");

velgDag.onchange = function(){
  let index = velgDag.selectedIndex;
  let valtgDag = velgDag[index];
  infoDag.innerHTML = "du skal møte opp: " + valtgDag.innerHTML;
}
