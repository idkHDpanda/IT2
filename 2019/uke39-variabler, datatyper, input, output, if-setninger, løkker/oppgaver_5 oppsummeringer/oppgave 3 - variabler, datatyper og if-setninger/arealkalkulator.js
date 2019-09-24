//oppgave 3.1
/*
let bredde = Number(prompt("Skriv inn bredden rektangelet"));
let lengde = Number(prompt("Skriv inn lengden for rektangelet"))
alert("Arealet er " + (lengde * bredde));
*/

//oppgave 3.2
let figur = prompt("Firkant eller sirkel?");

if (figur === "firkant" || figur === "Firkant"){
  let bredde = Number(prompt("Skriv inn bredden rektangelet"));
  let lengde = Number(prompt("Skriv inn lengden for rektangelet"))
  alert("Arealet er " + (lengde * bredde));
}
else if (figur === "sirkel" || figur === "Sirkel"){
  let r = Number(prompt("Skriv inn radiusen til sirkelen"));
  alert("Arealet er " + (Math.PI * Math.pow(r,2)));
}
else{
  alert("feil")
}
