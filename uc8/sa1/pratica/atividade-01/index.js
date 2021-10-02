let listaPecas=[]
let nomePeca='Peça teste'
let pesoPeca=300
let podeCadastrar=true

const fg_red='\x1b[31m'
const fg_green='\x1b[32m'
const fg_blue='\x1b[34m'
const reset_color='\x1b[0m'

if (pesoPeca<100){
  console.log(fg_red,'Não há possibilidade de cadastrar!',reset_color)
  podeCadastrar=false
}

if (listaPecas.length > 10){
  console.log(fg_red,'Limite de peças atingido!',reset_color)
  podeCadastrar=false
}

if (nomePeca.length<3){
  console.log(fg_red,'Quantidade de letras inferior ao permitido!',reset_color)
  podeCadastrar=false
}

if (podeCadastrar){
  listaPecas.push(nomePeca)
  console.log(fg_green,'Peça cadastrada com sucesso!',reset_color)
} else {
  console.log(fg_red,'Ocorreu um problema para cadastrar a peça!',reset_color)
}

console.log(fg_blue,'Listando as peças!',reset_color)

for(let i=0;i<listaPecas.length;i++){
  console.log(listaPecas[i])
}