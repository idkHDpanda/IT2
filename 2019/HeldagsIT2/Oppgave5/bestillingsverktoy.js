const imgMiddag = document.querySelector("#imgMiddag");
const registering = document.querySelector("#registering");
const antall = document.querySelector("#antall");
const pris = document.querySelector("#pris");

imgMiddag.onclick = function(){
  visMatkasse2();
  visMatkasse3();
}

imgMatkasse2.onclick = visRegistrering2();

imgMatkasse3.onclick = visRegistrering3();;

function visMatkasse2() {
  imgMatkasse2.src = "../vedlegg/matkasse2.png";
  imgMiddag.style.display = "none";
}

function visMatkasse3() {
  imgMatkasse3.src = "../vedlegg/matkasse3.png";
  imgMiddag.style.display = "none";
}

function visRegistrering3() {

}
