var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var criaMosquitoTempo = 1500;
var nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
  //tempo 1500
  criaMosquitoTempo = 1500;
} else if (nivel === "dificil") {
  //1000
  criaMosquitoTempo = 1000;
} else if (nivel === "chuck") {
  //750
  criaMosquitoTempo = 750;
}
function ajustaTamanho() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
}
ajustaTamanho();
var cronometro = setInterval(() => {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosca);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);
function posicaoRandon() {
  //remover mosquito anterior (caso exista)

  if (document.getElementById("mosquito")) {
    if (vidas > 3) {
      window.location.href = "fim_de_jogo.html";
    } else {
      document.getElementById("mosquito").remove();
      document.getElementById("v" + vidas).src =
        "/imagens/imagens/coracao_vazio.png";
      vidas++;
      console.log(vidas);
    }
  }
  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoy = Math.floor(Math.random() * altura) - 90;
  console.log(posicaoX, posicaoy);

  //retirando as posicões negativas
  // if (posicaoX < 0) {
  // posicaoX = 0;
  //}
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  //if (posicaoy < 0) {
  //posicaoy = 0;
  //}
  posicaoy = posicaoy < 0 ? 0 : posicaoy;
  //criar elemento html
  var mosquito = document.createElement("img");
  mosquito.src = "./imagens/imagens/mosca.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoy + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
  ladoAleatorio();
}

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
