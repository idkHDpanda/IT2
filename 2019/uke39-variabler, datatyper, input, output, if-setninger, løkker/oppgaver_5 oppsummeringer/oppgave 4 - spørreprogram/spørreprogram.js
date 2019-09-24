//oppgave 4.1
/*
let svar = prompt("Hva heter hovedkarakteren i ST?");

if (svar === "Jay" || svar === "Jay Tann" ){
  alert("Riktig")
}
else{
 alert("feil")
}
*/

//4.2
let riktige = 0;
let galt = 0

let svar1 = prompt ("Hvor mange aliens hjelper menneskene i ST?")
if (svar1 == 7 || svar1 === "syv" || svar1 === "Syv"){
  alert("riktig!");
  riktige = riktige + 1
}
else {
  alert("feil");
  galt = galt + 1
}

let svar2 = prompt("Hva heter spillet hovedkarakterene spiller?")
if (svar2 === "request" || svar2 ==="ReQuest" || svar2 === "reQuest"){
  alert("riktig!");
  riktige = riktige + 1
}
else{
  alert("feil")
  galt = galt + 1
}

let svar3 = prompt("Hva heter alienen som hjelper Jay")
if (svar3 === "Teekon" || svar3 === "teekon"){
  alert("riktig!")
  riktige = riktige + 1
}
else{
  alert("feil")
  galt = galt + 1
}

let svar4 = prompt("Hvor gammel er Ann?")
if (svar4 == 16){
  alert("riktig!")
  riktige = riktige + 1
}
else{
  alert("feil")
  galt = galt + 1
}

alert("du fikk: " + riktige + " poeng riktig og " + galt + " feil " );
