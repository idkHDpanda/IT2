//Oppgave a, b, c
const inpTemp = document.querySelector("#inpTemp");
const btnTemp = document.querySelector("#btnTemp");
const divTemp = document.querySelector(".divTemp");
const sortering = document.querySelector("#sortering")

let temperaturer = [];

btnTemp.onclick = registrerTemp;
sortering.onchange = function(){
  nySortering();
  skrivUttemp();
};


function registrerTemp() {
  temperaturer.push(Number(inpTemp.value)); //Pusher temperaturen i input-feltet til arrayen temperaturer
  nySortering(); //Sorterer temperaturer-arrayen avhengig av verdien i sortering-select
  skrivUttemp(); //skriver ut temperaturene på siden
}

function nySortering() {
  if (sortering.value === "lavTilHoy") {
    temperaturer.sort(tallLavTilHoy);
  } else if (sortering.value === "hoyTilLav") {
    temperaturer.sort(tallHoyTilLav);
  }
}

function skrivUttemp() {
  divTemp.innerHTML = ``;
  for (let temp of temperaturer) {
    if (temp > 0) {
      divTemp.innerHTML += `
        <div class="soyle positiv" style="height:${temp * 10 + 100}px">${temp}</div>
      `;
    } else {
      divTemp.innerHTML += `
          <div class="soyle negativ" style="height:${temp * 10 + 100}px">${temp}</div>
        `;
    }
  }
}

//Sorteringsfunksjoner
function tallLavTilHoy(a, b) {
  return a - b;
}

function tallHoyTilLav(a, b) {
  return b - a;
}
