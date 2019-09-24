//alert("javascriptet er lastet");
let mittTall = 10;

//Output, it fra programmet vårt
console.log(mittTall); //console.log(variabel); logger i konsollen
console.log("Mitt tall er", mittTall); //console.log("beskrivelse", variabel); tekst med variabel i konsollen
alert("Mitt tall er " + (mittTall + 52)); //allert(variabel); lager en popup-boks med en beskjed i konsollen

//Input
let brukerTall = Number(prompt("Skriver et tall")); //lager en promt-boks hvor brukeren kan skrive inn et tall, gjør dette talled til et tall med Number(tekst) (for å endre datatypen fra tekst til tall)
let brukerTall2 = Number(prompt("Skriver et annet tall")); //andre prompt boksen
console.log(brukerTall + brukerTall2); //logger variablet i konsollen, plusser den første prompten med den andre prompt boksen

//enkle datatyper
let tall = 25; //datatypen number
let desimaltall = 25.7; //datatypen number

let tekst = "hallo dette er en tekst"; //datatypen string
let tekst2 = "42"; //dette er også en string, må huske å konvertere til number

let tall3 = Number(tekst2); //datatypen Number

let bool1 = True; //datatypen boolean
let bool2= False; //datatypen boolean

//indekserte variabler / indekserte datatyper
let mittObjekt = { //objekter
  navn: "Anna",
  alder: 18,
}

let minListe = ["Jay", "Ann", "Dan", "Cam", 16, 18, True, mittObjekt] //array, liste med string, number, variabel, boolean
