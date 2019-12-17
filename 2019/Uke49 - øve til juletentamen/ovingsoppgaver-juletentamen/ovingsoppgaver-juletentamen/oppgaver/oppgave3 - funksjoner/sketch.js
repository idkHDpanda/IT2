function yatzyKast(n){
  //en funksjon som kaster terninger i yatzy
  //input:antall terninger som skal kastes
  //output: en array med terningene som er kastet
  let resultat = [];//en tom array som resultatene skal legges inn i

  for(let i = 0; i < n; i++)
  resultat.push(Math.floor(Math.random()*6)+1);
}
  return resultat; //returnerer arrayen resultat
}
