//Usando Javascript puro
document.querySelector("#clicar").addEventListener("click",()=>{
  var ele=document.querySelector("#hello")
  if (ele.style.display=="none")
    ele.style.display="block"
  else
    ele.style.display="none"
})
//Usando Javascript puro
// Adicionando evento no botão clicar 2, ele irá chamar a função mostrar elemento
document.querySelector("#clicar2").addEventListener("click",mostrarElemento)
//Função utilizada para mostrar o elemento hello2
function mostrarElemento() {
  var ele=document.querySelector("#hello2")
  if (ele.classList.contains("div-invisivel"))
    ele.classList.remove("div-invisivel")
  else
    ele.classList.add("div-invisivel")
}
//Usando jquery
$("#clicar3").click(()=>{
  if ($("#hello3").hasClass("div-invisivel"))
    $("#hello3").removeClass("div-invisivel")
  else
    $("#hello3").addClass("div-invisivel")
})