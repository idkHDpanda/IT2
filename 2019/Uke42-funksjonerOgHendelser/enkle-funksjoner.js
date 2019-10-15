//---Funksjoner---

//---Skrivemåte---

//Funksjonsdefinisjon
function siHei() {
  console.log("Hei"); //Hver gang du skriver inn siHei() i konsollen vil teksten Hei dukke opp i konsollen
}

//Funksjons-kall
siHei(); //Slik kjører man funksjonen, kan da copy-paste dette og få flere rader av "Hei"

//2 grunner til å bruke Funksjoner
//1. Oppdeling av Funksjonsdefinisjon
//2. Gjenbruk av kode


//---Hendelser---
window.onclick = siHei; //kobla funksjonen til en hendelse/event der hver gang du trykker/oppdaterer siden dukker det opp enda en Hei, må ha det uten () for at den ikke skal henge sammen med siHei()

const overskrift1 = document.querySelector("#overskrift1"); //query er en spørring der vi spør etter noe, her da en selektor i dokumentet h1, #id

overskrift1.onclick = byttTekst;

function byttTekst() {
  let navn = "Anna"; //legger til navnet med ${variabel} kan også skrive 2+2 inni og det dukker opp 4 fordi det er javascript
  overskrift1.innerHTML += `
  <div>
    Hei på deg ${navn}!
  </div>`; //legge til + for å legge til flere tekst etter hverandre eller <br>/`` (en string literal) for linjeskift
}
