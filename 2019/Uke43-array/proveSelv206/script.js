//Oppgave 1
//a oppretter en array som viser en handleliste med disse fire matvarene på skjermen
let handleliste = ["ost", "paprika", "brød", "kaviar"];
//document.write(handleliste);

//b legg til en matvare først i arrayet
handleliste.unshift("smør");
console.log(handleliste);

//c ta ut den siste matvaren fra arrayet
handleliste.pop();
console.log(handleliste);

//d bytt ut matavren brød med knekkebrød
handleliste.splice(3,1,"knekkebrød");
console.log(handleliste);


//Oppgave 2 bruk metoden splice() og endre et arrayet som inneholder ulike trær
let trær = ["lønn", "hassel", "bjørk" ,"eik", "blodlønn", "furu", "gran"];

//a ta bort eik
trær.splice(3,1);
console.log(trær);

//b bytt ut bjørk med hengebjørk
trær.splice(2,1,"hengebjørk");
console.log(trær);

//c ta bort furu og gran
trær.splice(4,2);
console.log(trær);

//d legge til to nye verdier sist i arrayet: fjellbjørk, dvergbjørk
trær.push("fjellbjørk", "dvergbjørk");
console.log(trær);

//e sorter trærne alfabetisk
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

trær.sort(alfabetisk);
console.log(trær);

//Oppgave 3 lager en applikasjon som viser bilder. lag to knapper som blar fram og tilbake
const imgSlide = document.querySelector("#imgSlide");
const btnNeste = document.querySelector("#btnNeste");

const bilder = ["bilder/bilde1.png", "bilder/bilde2.png", "bilder/bilde3.jpg"];
let bildeNr = 0;

btnNeste.onclick = nesteBilde;

function nesteBilde(){
  if(bildeNr >= bilder.length - 1){ //må ta minus fordi 0 er med i lengden
    bildeNr = 0;
  }
  else{
    bildeNr += 1;
  }

  imgSlide.src = bilder[bildeNr];
}

//Oppgave 4 sorter navnet på bildene i 3 alfabetisk. bruk en sammenligningsfunksjon slik at man tar høyde for både store og små bokstaver

//Oppgave 5 oprett en array med fem tall. sorter tallene med metoden sort()
let mineTall = [69, 420, 90, 100, 1];
mineTall.sort(tall);
console.log(mineTall);

function tall (a,b){
  return a-b;
}

//Oppgave 6
//a
const inpList = document.querySelector("#inpList");
const btnList = document.querySelector("#btnList");
const txt = document.querySelector("#txt");

let fyllArray = [];

btnList.onclick = leggTil;

function leggTil(){
  fyllArray.push(inpList.value);
  txt.innerHTML = fyllArray.join("<p>");
}
console.log(fyllArray);

//b
