const inpAlder1 = document.querySelector("#inpAlder1");
const inpAlder2 = document.querySelector("#inpAlder2");
const btnRegn = document.querySelector("#btnRegn");
const divResultat = document.querySelector("#divResultat");

btnRegn.onclick = skrivUtAlder

function skrivUtAlder() {
  let alder1 = Number(inpAlder1.value);
  let alder2 = Number(inpAlder2.value);
  let sumAvAlder = alder1 + alder2;
  if(sumAvAlder <= 4){
    divResultat.innerHTML = ` Barn på tilsammen ${sumAvAlder} år kommer inn gratis.`;
  }
  else if (sumAvAlder > 4 && sumAvAlder < 18) {
    divResultat.innerHTML = ` Med alderen ${sumAvAlder} år må man betale barnebillett.`;
  }
  else if (sumAvAlder >= 18) {
    divResultat.innerHTML = ` Med alderen ${sumAvAlder} år må man betale voksenbilett.`;
  }

}
