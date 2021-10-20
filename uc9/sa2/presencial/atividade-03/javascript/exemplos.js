/* Percorrendo componentes com a class clicavel */
function clickItem() {
  alert("Você me clicou! Elemento:" + this.nodeName)
}
function focusItem(){
  var divPai=this.parentNode
  var lbl=divPai.querySelector('label')
  if (lbl==null){
    lbl=document.createElement('label')
    divPai.appendChild(lbl)
  }
  lbl.innerText = "O elemento " + this.nodeName + " Recebeu foco";
}
/* Atribuindo evento click */
var els=document.querySelectorAll(".clicavel")
els.forEach(el=>{
  el.addEventListener("click",clickItem)
})
/* Atribuindo o evento focus  */
els=document.querySelectorAll(".focavel")
els.forEach(el=>{
  el.addEventListener("focus",focusItem)
})

/* Atribuindo o evento focusin  */
els=document.querySelectorAll(".focavelin")
els.forEach(el=>{
  el.addEventListener("focusin",focusItem)
})
