// Program som sier hei hvis navn er Jens

let navn = "Per";

if (navn === "Jens") { //Variablen (navnet) navn er ikke Jens så det skal dukke opp "Hei ukjent person" og ikke "hei + navn"
  alert("Hei " + navn);
}
else {
  alert("Hei ukjente person");
}
