//Definindo constantes para ficar melhor de visualizar
const celsius=1
const kelvin=2
const Fahrenheit=3
//Definindo as variáveis
var tempOrigem=Fahrenheit
var tempDestino=kelvin
var temperatura=36
var resultado=temperatura
//Celsius
if (tempOrigem==celsius){
  if (tempDestino==kelvin){
    resultado=temperatura+273
  } else if (tempDestino==Fahrenheit){
    resultado=(9*temperatura+160)/5
  }
//Kelvin
} else if (tempOrigem==kelvin){
  if (tempDestino==celsius){
    resultado=temperatura-273 
  } else if (tempDestino==Fahrenheit){
    resultado=(temperatura-273)*9/5+32
  }
//Fahrenheit
}else{
  if (tempDestino==celsius){
    resultado=(temperatura-32)*5/9
  } else if (tempDestino==kelvin){
    resultado=((temperatura-32)*5)/9+273
  }
}

console.log(resultado)