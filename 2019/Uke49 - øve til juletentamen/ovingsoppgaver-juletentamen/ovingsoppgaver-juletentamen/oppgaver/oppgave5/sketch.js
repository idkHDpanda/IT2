const inpTemp = document.querySelector("#inpTemp");
const btnRegn = document.querySelector("#btnRegn");
const divTemp = document.querySelector("#divTemp");
const bilde = document.querySelector("#bilde");

btnRegn.onclick = skrivUtTemp

function skrivUtTemp() {
  let fahrenheit = inpTemp.value;
  let celsius = (fahrenheit - 32) * (5/8);
  divTemp.innerHTML = ` Temp er: ${celsius} grader.`;
}

// Alternativ løsning:
 //divTemp.innerHTML = "<div>Temp: " + celsius + " grader.</div>";

 // Svar på elevspørsmål:
 //divTemp.innerHTML = `<div style="background-color:blue; color: white; height:${celsius.toFixed(0)}px;">Temp: ${celsius} grader.</div>`;
