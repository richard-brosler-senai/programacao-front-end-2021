/*
Faça um programa que liste
os números primos 1 até 50
*/
for(let i=1;i<=50;i++){
  var qtdeDivisores=0
  for(let j=i;j>0;j--){
    if (i%j==0){
      qtdeDivisores++
    }
  }
  if (qtdeDivisores<=2){
    console.log(i)
  }
}