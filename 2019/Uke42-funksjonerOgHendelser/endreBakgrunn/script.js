const inpFarge = document.querySelector("#inpFarge"); //oppretter en variabel som refererer til html-elementet med id inpFarge

function byttBakgrunn() {//oppretter en funksjon som endrer bakgrunnsfarge på hele nettsiden til verdien til input feltet
  document.body.style.transition = "0.8s"; //setter på en liten overgang
  document.body.style.backgroundColor = inpFarge.value;//endrer bakgrunnsfarge
}

inpFarge.oninput = byttBakgrunn; //knytter funksjonen byttFarge til hendelsen på onput på input.feltet
