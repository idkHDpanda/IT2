// Oppgave 1
const listeMatvare = document.querySelector("#listeMatvare");
let matvarer = ["ost", "paprika", "brød", "kaviar"];
//a Traverser arrayet med en for og-løkke og vis matvarene i en nummerert liste
 for(let mat of matvarer){
   listeMatvare.innerHTML += "<li>" + mat +"</li>";
 }

//b
/*
for(let i=0 ; i<matvarer.length ; i++){
  let mat = matvarer[i];
  document.write(mat);
}
*/

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
/*
bøker.sort(alfabetisk);
document.write(bøker);
*/


// Oppgave 3 temperatur i februar
let txtAntall = document.querySelector("#txtAntall");
let dager = [3,4,5,6,5,5,6,4,4,5];
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


// Oppgave 4 opprett en array med fire objekter med egenskapene navn og alder
//a traverser arrayet med en for-løkke, og vis navn og alder for hvert objekt

//b sorter navnene etter alder

//c Snu rekkefølgen på objektene

/* Oppgave 5 bruk to input-elementer til å registrere navn og antall filmer elever i klassen har sett i år
Vis resultatet i en nummerert liste
Den som har sett flest filmer skal vises øverst
vis hvor mange filmer elevene har sett totalt
*/
