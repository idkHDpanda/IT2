//Tall
function tallLavTilHoy(a, b) {
  return a - b;
}

function tallHoyTilLav(a, b) {
  return b - a;
}

//bokstaver
function bokstaverAtilAA(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b)
    return 1; //positiv tall betyr å bytte
} else {
  return -1;
  }
}

function bokstaverAAtilA(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a < b)
    return 1; //positiv tall betyr å bytte
} else {
  return -1;
  }
}

//sortere objekter inni en array
//OBS Her kan vi ikke are klippe og lime, her må vi vite hvilken egenskap vi skal sortere etter

let personer = [
  {navn: "Jay",
  alder:17},

  {navn: "Dan",
  alder:18},

  {navn: "Cam",
  alder:17},

  {navn: "Ann",
  alder:16},
];

//sorterer etter alder
function sorterObjektPersoner(a,b) {
  return a.alder - b.alder;
}
