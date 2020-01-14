let bilde = document.querySelector("#bilde");
let bilderamme = document.querySelector(".bilderamme");

bilde.onmousemove = function (event) {
  console.log("x:",event.clientX);
  console.log("y:",event.clientY);
  console.log(bilderamme.offsetLeft); //hvor langt rammen/bilde er fra venstre side

  bilde.style.width = 4000 + "px";
  bilde.style.marginLeft = 3 *(-event.clientX + bilderamme.offsetLeft) + "px"; //3 ganger
  bilde.style.marginTop = 3 * (-event.clientY + bilderamme.offsetTop) + "px";

}

bilderamme.onmouseout = function(){
  bilde.style.width = 100 + "%"; //setter bilderammens bilde tilbake til 1000 bredde
  bilde.style.marginLeft = 0;
  bilde.style.marginTop = 0;
}

//to hovedttyper datagrafikk, punktgrafikk og vektorgrafikk
