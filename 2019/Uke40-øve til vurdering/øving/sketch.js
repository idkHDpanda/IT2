/*
-------- Øveprøve IT2 ----------
Dato: 24 sep. 2019
Pensum: Input, output, variabler, valg og løkker.
Hjelpemidler: Se vedlegg siste side.
*/

// Oppgave 1
/*
a. Lag et program hvor brukeren først skriver inn navnet sitt,
   og deretter dukker det opp en melding på skjermen som starter
   med "Hei" og navnet på brukeren.
*/

let navn = prompt("Hva heter du?");

alert("Hei " + navn);

/*
b. Utvid programmet slik at brukeren også skriver inn alder,
   deretter skal det dukke opp en beskjed med en melding og hvor mange år
   det er igen til brukeren er 50.
*/

let navn = prompt("Hva heter du?");

let alder = Number(prompt("Hvor gammel er du?"));

alert("Hei " + navn + ". Du er " + (50 - alder) + "år fra 50");

// Oppgave 2 - Tester
/*
Lag et program tar input fra brukeren og sjekker:
Skriv svarene ut i konsollen eller i en alert - boks.
Tips: For å logge i konsollen: console.log("beskjed" + variabel);
*/
//Ekstempel: Om et tall er lik 10.
let tall = Number((prompt("Skriv et tall")));

if(tall === 10){
  console.log("Tallet er lik 10!");
}
else{
  console.log("Tallet er IKKE lik 10!");
}

//1. Om et tall er større enn 6.

let tall = Number(prompt("Skriv et tall"));

if(tall > 6){
  console.log("Større enn 6");
}
else{
  console.log("Mindre enn 6");
}


//2. Om et tall er større enn 5 OG mindre eller lik 15.

let tall = Number(prompt("Skriv et tall"));

if (tall > 5 && tall <= 15) {
  console.log("Større enn 5 OG mindre eller lik 15");
} else {
  console.log("Ikke større enn 5 OG mindre eller lik 15");
}

//3. Om en tekst er lik "Per".

let tekst = prompt("Skriv et navn");

if (tekst === "Per") {
  console.log("Hei Per!");
} else {
  console.log("Du er ikke Per!");
}

/*
Oppgave 3 - Løkker
*/
// 1. Lag en løkke som skriver ut tallene fra 1 til 10 i konsollen.
/* Tips: For å logge i konsollen i JS: console.log(variabel) */

for (let i = 1; i<=10; i = i + 1) {
  console.log(i);
}

// 2. Lag en løkke og skriv ut 7 gangen i konsollen.

for (let i = 1; i<=10; i = i + 1) {
  console.log(i * 7);
}


// 3. Lag kode som skriver ut summen av alle tallene mellom 1 og 1000 i konsollen.

let sum = 0;
for(let i = 1; i<=1000; i = i + 1){
  sum = sum + 1;
}
console.log(sum);

// 4. Skriv ut alle partallene mellom 1 og 100 i konsollen.
// Tips: for å sjekke om et tall er partall: tall % 2 === 0.

for(let i = 1; i <= 100; i = i + 1){
  if(i % 2 === 0){
    console.log(i);
  }
}

// 5. Tegn ti sirkler ved siden av hverandre på et P5 - canvas

function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(220);

  for(let i = 1; i<=10; i = i + 1){
    circle(i * 10, 50, 25);
  }
}


//6. Tegn 100 sirkler i et rutenett med ti i bredden og ti i høyden.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let i = 1; i <= 10; i = i + 1){
    for(let j = 1; j <=10; j = j + 1){
      circle(i * 10, j * 10, 25);
    }
  }
}

/* Oppgave 3 - Den lille gangetabellen
Lag den lille gangetabellen med en dobbel
for-løkke, og skriv ut tallene på et P5-canvas.
*/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i = 1; i <= 10; i = i + 1) {
    for (let j = 1; j <= 10; j = j + 1) {
      text(i * j,i * 10, j * 10);
    }
  }
}

// Oppgave 4 - Arealkalkulator
/*
   a. Areal av et rektangel. Lag et program der brukeren kan
   skrive inn bredde og høyde, så skal programme gange
   sammen sidene og gi en melding om arealet av rektangelet.
*/
let hoyde = Number(prompt("Hva er høyden?"));
let bredde = Number(prompt("Hva er bredden?"));

alert("Arealet er: " + (hoyde * bredde));

/*
  b. Arealkalkulator med flere figurer:
  Lag en arealkalkulator hvor brukeren først kan skrive inn
  om figuren er et rektangel eller en sirkel, deretter
  bredde, høyde eller radius og til slutt skal brukeren
  få en beskjed med arealet av figuren sin.
  Tips: Arealet av en sirkel er pi*r^2.
        Pi i javascript er Math.PI
        r^2 er enten r*r eller Math.pow(r,2)
*/
// Skriv koden til programmet på linjene under, her må du skrive alt selv.

let figur = prompt("Skal du beregne areal av rektangel eller sirkel?");

if(figur === "sirkel"){
  let r = prompt("Hva er radius?");
  alert("Arealet er: " + (Math.PI * r * r));
}
else if(figur === "rektangel"){
  let hoyde = prompt("Hva er høyden?");
  let bredde = prompt("Hva er bredden?");

  alert("Arealet er: " + (hoyde * bredde));
}
else{
  alert("Ukjent figur");
}


/*
Ekstraoppgaver på PC
### Oppgave 6 - Spørreprogram
Du skal lage et spørreprogram som stiller spørsmål du velger selv.
1. Lag et spørreprogram som har et spørsmål, bruk alert til å gi brukeren
beskjed om svaret var riktig eller galt.
2. Lag minst fire spørsmål og opprett en variabel som holder kontroll på
hvor mange riktige brukeren har. Når brukeren har svart på alle spørsmålene
skal det dukke opp en beskjed med hvor mange poeng brukeren fikk sammen
med en kommentar på hvor bra det gikk.
Oppgave 7 - Hour of code
Bruk 30 min på hour of code, http: //silentteacher.toxicode.fr/hourofcode
Oppgave 8 - Sprettende boble
Lag et canvas med en boble som beveger seg bortover skjermen og snur retning når den treffer en kant.
Oppgave 9 - Bruk javascript til å endre nettsiden
Søk på nettet og finn ut hvordan du kan lage input-elemeneter, hente ut verdier fra dem
og gjøre ting med nettsiden avhengig av hva som står i input-elementene
*/

/*
---- Vedlegg ----
for-løkke:
for(variabel; betingelse; endring){
  // kode som kjøres hver gang
}
---
if-setning:
if(betingelse){
  // kode
}
else if(betingelse2){
  // kode
}
else{
  // kode
}
*/
