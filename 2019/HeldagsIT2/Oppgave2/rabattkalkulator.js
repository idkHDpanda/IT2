const prisVare = document.querySelector("#prisVare");
const rabattVare = document.querySelector("#rabattVare");
const btnBeregn = document.querySelector("#btnBeregn");
const divSluttpris = document.querySelector("#divSluttpris");

btnBeregn.onclick = beregnRabatt;

function beregnRabatt() {
  let pris = Number(prisVare.value);
  let rabatt = Number(1 - (rabattVare.value / 100));
  let sluttpris = Number(pris * rabatt);
  if (rabatt <= 0) {
    divSluttpris.innerHTML = ` rabatten er over 100 %. Da er varen gratis`;
  }
  else {
    divSluttpris.innerHTML = ` Sluttpris: ${sluttpris} kr`;
  }
}
