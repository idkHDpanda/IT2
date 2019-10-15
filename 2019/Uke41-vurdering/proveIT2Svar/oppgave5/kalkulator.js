let k = prompt("Velg en regneopperasjon! Velg mellom PLUSS, MINUS, GANGER eller DELER");
let tall1 = Number(prompt("Skriv det første tallet i regneopperajonen"));
let tall2 = Number(prompt("Skriv det andre tallet i regneopperasjonen"));

if(k === "PLUSS"){
  alert("summen (pluss) av tallene blir " + (tall1 + tall2));
}

else if(k === "MINUS"){
  alert("differansen (minus) av tallene blir " + (tall1 - tall2));
}

else if(k === "GANGER"){
  alert("produkte (gange) av tallene blir " + (tall1 * tall2));
}

else if(k === "DELER"){
    alert("faktoren (dele) av tallene blir " + (tall1 / tall2));
}

else{
  alert("feil skrevet av regneopperasjon. Skrev du alt i store bokstaver?")
}
