const inpVare = document.querySelector("#inpVare");
const inpPris = document.querySelector("#inpPris");
const inpAntall = document.querySelector("#inpAntall");
const btnLeggTilVare = document.querySelector("#btnLeggTilProdukt");
const handleliste = document.querySelector("#handleliste");
const btnSlett = document.querySelector("#btnSlett");
const divTotal = document.querySelector("#divTotal");

btnLeggTilVare.onclick = leggTilVare;
btnSlett.onclick = slettListe;

let varer = [];

function leggTilVare() {
  varer.push({
    vare: inpVare.value, //ikke ; fordi dette er en objekt
    pris: inpPris.value,
    antall: inpAntall.value
  });

handleliste.innerHTML = "";

for(let mat of varer){
  handleliste.innerHTML += ` <li> ${mat.vare}, Pris; ${mat.pris}, Antall: ${mat.antall} </li>`;
  }
}

function slettListe() {
  handleliste.innerHTML = "";
  varer = [];
}

let totalPris = 0;

//
for(let i = 0; i<varer.length; i++){
  totalPris = i + inpPris.value;
}

divTotal.innerHTML = "Totalsummen er " + totalPris;
