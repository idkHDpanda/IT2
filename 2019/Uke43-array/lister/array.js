// Array (Lister)

//definere Array

let minArray = ["Jay", "Dan" , "Ann" , "Cam" , 21];

//Hente ut verdi fra Array
minArray[1]; //Jay
console.log(minArray[1]);

//legge til verdi slutten av Array (start av array blir minArray.unshift();)
minArray.push("Teekon");
console.log(minArray);

//Fjerne en verdi fra et Array, det første tallet er start posisjonen og det andre tallet er antall som skal fjernes
minArray.splice(0,1);
console.log(minArray);

//Endre en verdi i et array
minArray[2] = "Boi";
console.log(minArray[2]);

//Lengden på et Array
minArray.length //
console.log() // (starter med 0-1-2-3-4)

//Sortere Array (det som står i boka funger ikke)
//sortere bokstaver
let bokstaver = ["q", "c" , "a" , "t" , "D"];
bokstaver.sort(sorterAlfabetisk); //stor bokstav blir sortert helt foran, må da lage en funksjon
console.log(bokstaver);

function sorterAlfabetisk(a,b){ //sender inn 2 bokstaver
  a = a.toLowerCase();
  b = b.toLowerCase();
  if(a>b){ //om a er større enn b så skal bostaven foran
    return 1;
  }
  else{ //om den ikke er det går den bak eller tilbake
    return -1;
  }
}

//sortere tall (lav til høy)
let mineTall = [7,2,5,19,1];
mineTall.sort(tall);
console.log(mineTall);

function tall (a,b){
  return a - b; //(b - a blir høy til lav tall)
}
