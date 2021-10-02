//Definindo constantes para ficar melhor de visualizar
const celsius=1
const kelvin=2
const Fahrenheit=3
//
var tempOrigem=kelvin
var tempDestino=Fahrenheit
var temperatura=36
var resultado=temperatura
switch(tempOrigem){
  case celsius: 
    if (tempDestino==kelvin){
      resultado=temperatura+273
    } else if (tempDestino==Fahrenheit){
      resultado=(9*temperatura+160)/5
    }
    break;
  case Fahrenheit:
    if (tempDestino==celsius){
      resultado=(temperatura*5-160)/9 
    } else if (tempDestino==kelvin){
      resultado=((temperatura-32)*5)/9+273
    }
    break;
  default:
    if (tempDestino==celsius){
      resultado=temperatura-273
    } else if (tempDestino==Fahrenheit){
      resultado=(temperatura-273)*9/5+32
    }    
}

console.log(resultado)