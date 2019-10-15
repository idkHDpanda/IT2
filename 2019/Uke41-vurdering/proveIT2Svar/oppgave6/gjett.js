
let gjett = Number(prompt("hvilken tall tenker jeg på?"));
let riktig = false;

let forsøk = 0;
tall = Math.floor(Math.random()*20);

  while(riktig === false){
    if(gjett > 20 || gjett < 0){
      gjett = Number(prompt("tallet må være mellom 0 og 20"));
    }

    else if(gjett < tall){
      gjett = Number(prompt("for lavt"));
      forsøk = forsøk + 1
    }

    else if(gjett > tall){
      gjett = Number(prompt("for høyt"));
      forsøk = forsøk + 1
    }

    else if(gjett === tall){
      alert("gratulerer")
      riktig = true;
    }

    else{
      gjett = Number(prompt("tallet må være mellom 0 og 20"));
    }
}
alert("du brukte " + forsøk + " forsøk");
