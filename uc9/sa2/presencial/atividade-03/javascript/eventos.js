function clickElemento(e){
  e.stopPropagation()
  alert("O elemento " + this.nodeName + " foi clicado!")
}
function focusElemento(e){
  //e.stopPropagation()
  this.classList.add('cor-fundo-crimson')
}
function blurElemento(e){
  //e.stopPropagation()
  this.classList.remove('cor-fundo-crimson')
}
/* Esse evento vai ser disparado somente no término do carregamento da página */
function bodyLoad() {
  document.querySelector("#msg-footer").innerText="Formulário Carregado com sucesso!"
}
/* Função que será disparado de tempo em tempo */
function atualizaSpan(){
  let data=new Date()
  document.querySelector("#temporizado").innerText=data.toString()
}

//Buscando o elemento a ser atribuido o evento
var els=document.querySelectorAll(".clicavel")
/* Usando forEach */
els.forEach(el=>{
  el.addEventListener("click",clickElemento)
})
/* Outra forma de amarrar o elemento usando o for ao invés o forEach */
/*
for (let i=0;i<els.length;i++){
  let el=els[i]
  el.addEventListener("click",clickElemento)
}
*/
//Buscando focavel
els=document.querySelectorAll(".focavel")
/* Usando forEach */
els.forEach(el=>{
  el.addEventListener("focus",focusElemento)
  el.addEventListener("blur",blurElemento)
})
//Buscando focavelin
els=document.querySelectorAll(".focavelin")
/* Usando forEach */
els.forEach(el=>{
  el.addEventListener("focusin",focusElemento)
  el.addEventListener("focusout",blurElemento)
})
//Amarrando o evento para ser disparado de tempo em tempo 
setInterval(atualizaSpan, 1000)


