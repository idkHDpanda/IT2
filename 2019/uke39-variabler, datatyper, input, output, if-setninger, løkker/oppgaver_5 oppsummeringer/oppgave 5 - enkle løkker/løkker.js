//oppgave 5.1 1-10
//løsning med for
/*for (let i = 1; i <= 10; i++) {
  document.write(i);
  console.log(i);
  i;
}

for(oppretter en teller; betingelsen, løkka kjører så lenge den er True; Hva som skal skje med telleren){
  koden i løkka
}

//løsning med while
let i = 1; //definerer en gloal variabel i, som skal fungere som telleren i løkka
while(i <= 10){ //så lenge 1 er mindre eller er lik 10, skal løkka kjøre
  console.log(i) //logger i i konsollen
  i = i + 1 //legger til en til 1
//  i += 1;
//  i++; Disse tre linjene gjør akkurat det samme, bare skrevet på forskjellige måter
}
*/



//oppgave 5.2 7 gangen
/*
//løsning med for
for(var i = 1; i <= 10; i++){
  console.log(i*7);
}

//løsning med while
let i = 1
while (i <= 10) {
  console.log(i*7);
  i++;
}
*/



//oppgave 5.3 summen av alle tall mellom 1 og 1000 i konsollen
/*
let sum = 0
for(let i = 1; i <= 1000; i++){
  sum += i; //sum = sum +1
  //om vi har console.log(sum) vil det bli printet ut flere ganger
}
console.log(sum) //printes ut bare en gang
*/



//oppgave 5.4 partallene mellom 1-100
/*
for (let i = 0; i<=100; i++){
  if(i % 2 === 0){ //skjekke om taller er delelig på 2 som blir 0, viser resten
    console.log(i);
  }
}
//ikke partallene
for (let i = 0; i<=100; i++){
  if(i % 2 !== 0){ //tallene som IKKE er delelig på 2
    console.log(i);
  }
}
*/
