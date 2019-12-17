const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");
const slideshow = document.querySelector("#slideshow");
const imgSlide = document.querySelector("#imgSlide");
const btnNeste = document.querySelector("#btnNeste");

const partier = {
  "SP": {
    representanter: 19,
    slagord: "Vi tror på hele Norge!",
    bilder: ["../vedlegg-ovingsoppgaver-juletentamen/sp01.jpg", "../vedlegg-ovingsoppgaver-juletentamen/sp02.jpg", "../vedlegg-ovingsoppgaver-juletentamen/sp03.jpg"]
  },
  "MDG": {
    representanter: 1,
    slagord: "Ta vare på fremtiden!",
    bilder: ["../vedlegg-ovingsoppgaver-juletentamen/mdg01.jpg", "../vedlegg-ovingsoppgaver-juletentamen/mdg02.jpg", "../vedlegg-ovingsoppgaver-juletentamen/mdg03.jpg"]
  }
};

let valgtParti = "";
let bildeNr = 0;

imgSp.onclick = function() {
  visParti("SP");
  valgtParti = "SP";
  visSlideshow();
}
imgMdg.onclick = function() {
  visParti("MDG");
  valgtParti = "MDG";
  visSlideshow();
}

btnNeste.onclick = nesteBilde;

function visParti(partiNavn) {
  divInfo.innerHTML = `
    <div>Navn: ${partiNavn}.</div>
    <div>Representanter: ${partier[partiNavn].representanter}.</div>
    <div>Slagord: ${partier[partiNavn].slagord}.</div>
  `
}

function nesteBilde() {
  if(bildeNr >= partier[valgtParti].bilder.length - 1){
    bildeNr = 0;
  }
  else{
    bildeNr += 1; // Øker bildenummer med 1
  }
  console.log(bildeNr);
  imgSlide.src = partier[valgtParti].bilder[bildeNr]; // Setter imgSlide sin src til å vise riktig bilde fra arrayen bilder.
}

function visSlideshow() {
  slideshow.style.display = "block"; // Viser slideshowet på nettsiden
  bildeNr = 0;
  imgSlide.src = partier[valgtParti].bilder[bildeNr]; // Setter imgSlide sin src til å vise riktig bilde fra arrayen bilder.
}
/*
const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");

const partier = [
  {
    navn: "SP",
    representanter: 19,
    slagord: "Vi tror på hele Norge!"
  },
  {
    navn: "MDG",
    representanter: 1,
    slagord: "Ta vare på fremtiden!"
  }
];

//Alternativt:
//const imgSp = document.getElementById("imgSp");

imgSp.onclick = function(){
  visParti("SP");
}
imgMdg.onclick = function(){
  visParti("MDG");
}

function visParti(partiNavn){
  for(let i = 0; i < partier.length; i += 1){
    if(partiNavn === partier[i].navn){
      divInfo.innerHTML = `Navn: ${partier[i].navn}. Representanter: ${partier[i].representanter}. Slagord: ${partier[i].slagord}.`
    }
  }
}


/* Alternativ funksjon med for of
function visPartiForOf(partiNavn){
  for(let parti of partier){
    if(partiNavn === parti.navn){
      divInfo.innerHTML = `Navn: ${parti.navn}. Representanter: ${parti.representanter}. Slagord: ${parti.slagord}.`
    }
  }
}

Enkel

const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");
//Alternativt:
//const imgSp = document.getElementById("imgSp");

imgSp.onclick = visSp;
imgMdg.onclick = visMdg;

function visSp(){
  console.log("Du trykket på SP");
  divInfo.innerHTML = `Navn: Senterpartiet. Antall representanter: 19. Slagord: Vi tror på hele Norge!`;
}

function visMdg(){
  console.log("Du trykket på MDG");
  divInfo.innerHTML = `Navn: MDG. Antall representanter: 1. Slagord: Ta vare på fremtiden!`;
}
*/
