const inpHusk = document.querySelector("#inpHusk"); //Lager variabel for input
const btnLeggTil = document.querySelector("#btnLeggTil"); //lager variabel for button

let huskeliste = []; //lager en variabel for listen. Er tom for det skal li lagt til verdier

btnLeggTil.onclick = leggTil; //lager en variabel for når knappen trykkes

function leggTil() { //lager en funskjon der når knappen trykkes legges verdien i input til listen
  huskeliste.push(inpHusk.value);
  console.log(huskeliste);
}
