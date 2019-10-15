const inpTotal = document.querySelector("#inpTotal");
const inpTimer = document.querySelector("#inpTimer");
const resultat = document.querySelector("#resultat");
const btnRegn = document.querySelector("#btnRegn");

function regnUtFravær() {
  let prosent = (Number(inpTimer.value) / Number(inpTotal.value)) *100;
  //resultat.innerHTML = prosent.toFixed(2) + "%"
  resultat.innerHTML = `Fraværet ditt er: ${prosent.toFixed(2)} %`

  if(prosent >= 10){
    document.body.style.transition = "0.8s";
    document.body.style.backgroundColor = "red";
  }
  else if (prosent >= 5){
    document.body.style.transition = "0.8s";
    document.body.style.backgroundColor = "yellow";
  }
  else{
    document.body.style.backgroundColor = "green";
  }
}

btnRegn.onclick = regnUtFravær;
