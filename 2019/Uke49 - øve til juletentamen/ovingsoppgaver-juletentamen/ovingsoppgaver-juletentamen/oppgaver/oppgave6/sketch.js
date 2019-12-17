const inpVerdi = document.querySelector("#inpVerdi");
const btnRegn = document.querySelector("#btnRegn");
const divResultat = document.querySelector("#divResultat");

btnRegn.onclick = regnMVA

function regnMVA() {
  let verdi = Number(inpVerdi.value);
 if (verdi >= 350){
    verdi = verdi * 1.25 + 158
  }
  */
//a
  else if(verdi > 0){
    verdi = verdi * 1.25
  }
//b
  else if(verdi < 360){
    verdi = verdi
  }
//c
  if else(verdi > 350){
    verdi = verdi * 158
  }

  divResultat.innerHTML = `
  Varens totalverdi: ${verdi} kr
  `
}
