//1
let frmBok = document.querySelector("#frmBok");
let forfatter = document.querySelector("#forfatter");
let tittel = document.querySelector("#tittel");
let info1 = document.querySelector("#info1");

frmBok.onsubmit = function(evt){
  evt.preventDefault();//forhindrer at data sendes til en annen nettside
  info1.innerHTML = `Forfatter: ${forfatter.value} <br>`;
  info1.innerHTML += `Tittel: ${tittel.value}`;
}

//2
let frmRegistrerTing = document.querySelector("#frmRegistrerTing");
let inpTing = document.querySelector("#inpTing");
let huskeliste = document.querySelector("#huskeliste");
frmRegistrerTing.onsubmit = function(evt){
  evt.preventDefault();
  huskeliste.innerHTML += `<li>${inpTing.value}</li>`
  inpTing.value = "";//tømmer inp feltet
}

//3
let info = document.querySelector("#info");
let frmFlyreise = document.querySelector("#frmFlyreise");
let velgFlyplassUtreise = document.querySelector("#velgFlyplassUtreise");
let valgtType = document.querySelector("#input[name=rbgType]:checked");
frmFlyreise.onsubmit = function (evt) {
  evt.preventDefault();
  info.innerHTML = `Utreise fra: ${velgFlyplassUtreise.value}<br>`;

  info.innerHTML += `Utreise: ${inpUtdato.value} <br>`;
  info.innerHTML += `Retur: ${inpReturdato.value} <br>`;
  
  info.innerHTML += `Reisetype: ${valgtType.value} -`
  info.innerHTML += valgtType.getAttribute("data-tekst");
}
