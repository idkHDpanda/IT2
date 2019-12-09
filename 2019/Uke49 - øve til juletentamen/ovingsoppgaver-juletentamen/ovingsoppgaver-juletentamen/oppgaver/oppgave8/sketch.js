const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");

const partier = [
  {
    navn:"SP",
    representatner:"19",
    slagord:"Vi tror på hele Norge"
  },
  {
    navn:"MDG",
    representatner:"1",
    slagord:"Ta vare på fremtiden"
  }
];

//alt: imgSp = document.getElementById("imgSp");

imgSp.onclick = function () {
  visParti("SP");
};

imgMdg.onclick = function () {
  visParti("MDG");
};
function visPartiNavn(partiNavn) {
  for(let i = 0; i < partier.length; i++){
    if(partiNavn === partier[i].navn){
      divInfo.innerHTML = `Navn: ${partier[i].navn}. Representanter: ${partier[i].representatner}. Slagord: ${partier[i].slagord}`;

    }
  }
}


function visPartiNavn(partiNavn) {
  for(let parti of partier){
    if(partiNavn === parti.navn){
      divInfo.innerHTML = `Navn: ${parti.navn}. Representanter: ${parti.representatner}. Slagord: ${parti.slagord}`;

    }
  }
}

/*
function visSp() {
  console.log("Sp");
  divInfo.innerHTML = `Navn: Senterpartiet. Antall representatner: 19. Slagord: Vi tror på hele Norge`;
}

function visMdg() {
  console.log("Mdg");
  divInfo.innerHTML = `Navn. MDG. Antall representatner: 1. Slagord: Ta vare på fremtiden`;

}
*/
