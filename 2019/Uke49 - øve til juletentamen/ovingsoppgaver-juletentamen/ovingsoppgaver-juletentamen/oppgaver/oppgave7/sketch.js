const knapp = document.querySelector("#knapp");
const divResultat = document.querySelector("#divResultat");
const imgBilde = document.querySelector("#imgBilde");

knapp.onclick = tilfeldigPerson;

function tilfeldigPerson() {
  let alder = Math.floor(Math.random()*70) + 1; //random tall mellom 1 og 70

  if(alder < 15){
//a
    divResultat.innerHTML = `Alderen er ${alder}. Denne berg- og dalbanen er ikke for smårollinger, minst 15 år!`
    imgBilde.src = "../vedlegg-ovingsoppgaver-juletentamen/ung.jpg";
  }
//b
  else if(alder > 60){
      divResultat.innerHTML = `Alderen er ${alder}. Denne berg- og dalbanen er ikke for gamlinger, maks 60 år!!`
      imgBilde.src = "../vedlegg-ovingsoppgaver-juletentamen/gammel.jpg";
  }
  else{
      divResultat.innerHTML = `${alder} år! gratulrerer, du er akkurat passe gammel!`

  }
}
