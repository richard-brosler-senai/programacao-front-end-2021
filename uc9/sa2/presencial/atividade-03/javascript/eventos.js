function clickElemento(e) {
  e.stopPropagation()
  alert("O elemento " + this.nodeName + " foi clicado!")
}
function focusElemento(e) {
  //e.stopPropagation()
  this.classList.add('cor-fundo-crimson')
}
function blurElemento(e) {
  //e.stopPropagation()
  this.classList.remove('cor-fundo-crimson')
}
/* Esse evento vai ser disparado somente no término do carregamento da página */
function bodyLoad() {
  document.querySelector("#msg-footer").innerText = "Formulário Carregado com sucesso!"
}
/* Função que será disparado de tempo em tempo */
function atualizaSpan() {
  let data = new Date()
  document.querySelector("#temporizado").innerText = data.toString()
}

//Buscando o elemento a ser atribuido o evento
var els = document.querySelectorAll(".clicavel")
/* Usando forEach */
els.forEach(el => {
  el.addEventListener("click", clickElemento)
})
/* Outra forma de amarrar o elemento usando o for ao invés o forEach */
/*
for (let i=0;i<els.length;i++){
  let el=els[i]
  el.addEventListener("click",clickElemento)
}
*/
//Buscando focavel
els = document.querySelectorAll(".focavel")
/* Usando forEach */
els.forEach(el => {
  el.addEventListener("focus", focusElemento)
  el.addEventListener("blur", blurElemento)
})
//Buscando focavelin
els = document.querySelectorAll(".focavelin")
/* Usando forEach */
els.forEach(el => {
  el.addEventListener("focusin", focusElemento)
  el.addEventListener("focusout", blurElemento)
})
//Amarrando o evento para ser disparado de tempo em tempo 
setInterval(atualizaSpan, 1000)

/* Função disponível em https://github.com/clovisdasilvaneto/fadein-fadeout-com-javascript-puro 
  Aqui adaptada */
function processaFade(element, time, initial, end, cb=null) {
  if (initial == 0) {
    increment = 2;
    element.style.display = "block";
  } else {
    increment = -2;
  }
  opc = initial;
  intervalo = setInterval(function () {
    if ((opc == end)) {
      if (end == 0) {
        element.style.display = "none";
      }
      clearInterval(intervalo);
      if(cb && typeof cb === "function") {
        cb(element)
      }
    } else {
      opc += increment;
      element.style.opacity = opc / 100;
      element.style.filter = "alpha(opacity=" + opc + ")";
    }
  }, time * 10);
}
function fadeInx(el, time=1, cb=null) {
  processaFade(el,time,0,100,cb);
}
function fadeOutx(el,time=1, cb=null) {
  processaFade(el,time,100,0,cb);
}
function alertar(el){
  alert("O evento acabou do elemento " + el.nodeName)
}

document.querySelector("#btnFadeIn").addEventListener("click", () => {
  let el = document.querySelector(".evtFade")
  fadeInx(el,1,alertar);
})
document.querySelector("#btnFadeOut").addEventListener("click", () => {
  let el = document.querySelector(".evtFade")
  fadeOutx(el,1,alertar);
})
