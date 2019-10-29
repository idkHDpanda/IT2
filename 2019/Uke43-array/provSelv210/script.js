/*
// Oppgave 1
const listeMatvare = document.querySelector("#listeMatvare");
let matvarer = ["ost", "paprika", "brød", "kaviar"];

//a Traverser arrayet med en for og-løkke og vis matvarene i en nummerert liste
 for(let mat of matvarer){
   listeMatvare.innerHTML += "<li>" + mat +"</li>";
 }

//b

//for-løkker med tall teller
for(let i=0 ; i<matvarer.length ; i++){
  let mat = matvarer[i];
  document.write(mat);
}

//for-løkker med tall teller
for(let i in matvarer){
  listeMatvare.innerHTML += `<li>${i}</li>`;
  console.log(i);
}
*/


/*
// Oppgave 2 array med fem bøker. traverser arrayet mde en for of-løkke og vis boktitlene i en nummerert liste
//a
const boksliste = document.querySelector("#bokliste");
let bøker = ["Harry Potter", "Gone", "Percy jackson","Six of crows", "Homestuck"]

for(let bok of bøker){
  bokliste.innerHTML += "<li>" + bok + "</li>";
}

//b sorter bøkene alfabetisk
function alfabetisk(a,b){
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a>b){
    return 1
  }
  else{
    return -1
  }
}

bøker.sort(alfabetisk);
document.write(bøker);
*/


/*
// Oppgave 3 temperatur i februar
let txtAntall = document.querySelector("#txtAntall");
let dager = [3,4,5,6,5,5,6,4,4,5]; //4.7
let antallDager = 0;
//a hvor mange dager hadde lavere temp enn 5 grader?
for(let dag of dager){
  if(dag<5){
    antallDager++;
  }
}
txtAntall.innerHTML = antallDager;

//b sorter temp fra lavest til høyest
dager.sort(tall);
console.log(dager);

function tall (a,b){
  return a - b;
}

rekke.innerHTML = dager;

//c finn gjennomsnittstemp
const txtSnitt = document.querySelector("#txtSnitt");
let count = dager.length;
let totalTemp = 0


for(let i = 0 ; i<dager.length ; i++){
  totalTemp += dager[i];
}

txtSnitt.innerHTML = totalTemp/dager.length;

let antall = 0
let total = 0

for(let dagTemp of dager){
  total += dagTemp
}

console.log("Gjennomsnittstemp var:"+ (total/dager.length));
*/


/*
// Oppgave 4 opprett en array med fire objekter med egenskapene navn og alder
let kids = [
  {navn:"Jay",alder:17},
  {navn:"Dan",alder:18},
  {navn:"Ann",alder:16},
  {navn:"Cam",alder:17},
];
//a traverser arrayet med en for-løkke, og vis navn og alder for hvert objekt
for(let kid of kids){
  document.write(kid.navn + " er " + kid.alder + " år gammel" + "<br>")
}
//b sorter navnene etter alder
kids.sort(sorterAlder);

function sorterAlder(a,b) {
  return a.alder - b.alder;
}
console.log(kids);

//c Snu rekkefølgen på objektene
kids.reverse()
*/


//Oppgave 5 bruk to input-elementer til å registrere navn og antall filmer elever i klassen har sett i år
//Vis resultatet i en nummerert liste
//Den som har sett flest filmer skal vises øverst
//vis hvor mange filmer elevene har sett totalt

const inpNavn = document.querySelector("#inpNavn");
const inpAntall = document.querySelector("#inpAntall");
const btnRegistrer = document.querySelector("#btnRegistrer");
const elevListe = document.querySelector("#elevListe");

let elever = [];

btnRegistrer.onclick = leggTilElev;

function leggTilElev() {
  elever.push({
    navn: inpNavn.value, //ikke ; fordi dette er en objekt
    antall: inpAntall.value
  });

elever.sort(sorterElever); //må være etter push

elevListe.innerHTML = "";

for(let elev of elever){
  elevListe.innerHTML += `<li>${elev.navn}: ${elev.antall}</li>`;
  }
}

function sorterElever(a,b) {
  return b.antall - a.antall; //fra høy til lav
  }
