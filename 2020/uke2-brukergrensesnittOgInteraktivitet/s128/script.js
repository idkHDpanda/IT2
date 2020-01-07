//1
let btn = document.querySelector("#btn");
let svar = document.querySelector("#svar");

btn.onclick = trykket;

function trykket(){
  svar.innerHTML += `
  <div>
    "Du trykket på meg"
  </div>`;
}

//2a
let btn2 = document.querySelector("#btn2");
let svar2A = document.querySelector("#svar2A");

btn2.onclick = leggTilElev;
let elev = 0;

function leggTilElev() {
  elev = elev + 100;
  svar2A.innerHTML = "";
  svar2A.innerHTML += `
    ${elev}
    `;
//2b
    if(elev >= 300){
      alert("Det er nå 300 elever i lokalet");
      /*
      if(elev<300){
      svar2A.innerHTML="det er nå +elev+ elever i lokalet"

    }
    else{
    svar2A.innerHTML="det er nå +elev+ elever i lokalet"

  }
      */
    }
}

//3
let btn3 = document.querySelector("#btn3");
let bilde = document.querySelector("#bilde");

 btn3.onclick = visBilde

 function visBilde() {
   bilde.src = "raccoon.jpg"
 }

 //4
 let btn4A = document.querySelector("#btn4A");
 let btn4B = document.querySelector("#btn4B");
 let bilde2 = document.querySelector("#bilde2");

  btn4A.onclick = visBilde2;
  btn4B.onclick = visBilde2;

  function visBilde2(evt) {
    let knapp = evt.target;
    if(knapp.id === "btn4A"){
      bilde.src = "raccoon.jpg"
    }
    else{
      bilde.src = "panda.jpg"

    }
  }
