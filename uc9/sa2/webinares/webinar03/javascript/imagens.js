/* Nesse exemplo estou relacionando todas as imanges de jogos 
   disponíveis no diretório */
var imgsLst=[
            "dead-space.png",
            "diablo-iii.png",
            "ff-xvi.png",
            "forza-horizon.png",
            "gears-of-war.png",
            "halo.png",
            "horizon_zero_dawn.png",
            "injustice2.png",
            "killzone-shadow-fall.png",
            "metalgear-solid.png",
            "mk11.png",
            "naruto.png",
            "transistor.png"
            ]
/* Descritivo dos jogos */
var imgDesc=
[
  "Dead Space é um jogo eletrônico de terror de sobrevivência desenvolvido pela EA Redwood Shores para Xbox 360, Microsoft Windows e PlayStation 3 e lançado pela EA em outubro de 2008. O jogo foi liberado para Steam em 20 de outubro de 2008.",
  "Diablo III é um RPG de ação hack and slash desenvolvido pela Blizzard Entertainment, o terceiro título da série Diablo. Sua produção foi revelada em 28 de junho de 2008, na Blizzard Entertainment Worldwide Invitational. O jogo foi lançado oficialmente em 15 de maio de 2012.",
  "Final Fantasy XIV, também chamado de Final Fantasy XIV Online, é um jogo eletrônico MMORPG desenvolvido pela Square Enix exclusivamente para Microsoft Windows. É o décimo quarto jogo principal da série Final Fantasy e o segundo MMORPG da franquia após Final Fantasy XI.",
  "Forza Horizon 4 é um jogo de corrida em mundo aberto desenvolvido pela Playground Games em colaboração com a Turn 10 e publicado pela Xbox Game Studios, que na época do lançamento ainda era conhecida como Microsoft Studios. É o quarto da franquia Forza Horizon e o décimo primeiro da edição Forza.",
  "Gears of War é uma franquia de jogos eletrônicos criada e originalmente propriedade da Epic Games, desenvolvida e gerenciada pela The Coalition, e agora a Xbox Game Studios tem seus direitos e publica-a.",
  "Halo Infinite é um futuro jogo eletrônico de tiro em primeira pessoa desenvolvido pela 343 Industries e publicado pela Xbox Game Studios, para as plataformas Microsoft; será lançado para o Xbox One, Windows 10 e Xbox Series X|S.",
  "Horizon Zero Dawn é um jogo eletrônico de RPG de ação desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment. Foi lançado em 28 de fevereiro de 2017 para PlayStation 4 e em 7 de agosto de 2020 para Microsoft Windows.",
  "Injustice 2 é um jogo de luta produzido pela NetherRealm Studios e publicado pela Warner Bros. Games em 16 de maio de 2017, para PlayStation 4 e Xbox One com versão para PC disponível em 14 de novembro de 2017.",
  "Killzone: Shadow Fall é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Guerrilla Games em exclusivo para a PlayStation 4. É o sexto jogo da série de jogos eletrônicos Killzone.",
  "Metal Gear Solid V: The Phantom Pain é um jogo eletrônico de ação-aventura furtiva desenvolvido pela Kojima Productions, co-produzido pela Kojima Productions Los Angeles e realizado, desenhado, co-produzido e co-escrito por Hideo Kojima.",
  "Mortal Kombat 11 é um jogo eletrônico de luta desenvolvido pela NetherRealm Studios e publicado pela Warner Bros. Interactive Entertainment. É a décima primeira edição principal da série de jogos eletrônicos de luta, Mortal Kombat, e uma continuação direta de Mortal Kombat X.",
  "Naruto Shippuden: Ultimate Ninja Storm 4, é o quarto jogo da série Ultimate Ninja Storm. É um jogo de luta, desenvolvido pelo CyberConect2 e publicado pela Namco-Bandai games para PC, PlayStation 4, Xbox One e Nintendo Switch baseado na franquia de anime e mangá Naruto.",
  "Transistor é um videogame de ação desenvolvido e publicado pela Supergiant Games. O jogo foi lançado em maio de 2014 para Microsoft Windows e PlayStation 4, e para OS X e Linux em outubro de 2014 e dispositivos iOS em junho de 2015."
]
/* Títulos dos jogos */
var imgTitulo=
[
  "Dead Space",
  "Diablo III",
  "Final Fantasy XIV",
  "Forza Horizon 4",
  "Gears of War",
  "Halo Infinite",
  "Horizon Zero Dawn",
  "Injustice 2",
  "Killzone: Shadow Fall",
  "Metal Gear Solid V: The Phantom Pain",
  "Mortal Kombat 11",
  "Naruto Shippuden: Ultimate Ninja Storm 4",
  "Transistor"
]
//Selecionando todos os elementos que usam a classe carousel-item            
var elementos=document.querySelectorAll(".carousel-item")
var itensSorteados=[]
//Percorrendo todos os elementos selecionados
for (var i=0;i<elementos.length;i++)
{
  //Colocandos na variavel item a referência ao elemento de indice i
  var item=elementos[i]
  //iniciando a variável indiceAleatorio com zero
  var indiceAleatorio=0
  //criando um laço de repetição para gerar valores aleatórios até que não tenha sido sorteado
  do {
    //Gerando um número aleatório de zero ao tamanho da lista de títulos de imagens
    indiceAleatorio=Math.floor(Math.random() * imgTitulo.length)
  } while (itensSorteados.indexOf(indiceAleatorio)>-1) //se o número não foi sorteado ainda, sai do laço
  //Adicionamos o valor sorteado para a lista de valores sorteados
  itensSorteados.push(indiceAleatorio)
  //jogamos na console o valor original do caminho da imagem
  console.log(item.querySelector("img").src)
  //trocaremos o caminho para o caminho do item sorteado
  item.querySelector("img").src="imagens/jogos/"+imgsLst[indiceAleatorio]
  //trocamos o conteúdo do h5 que está no div
  var divItem=item.querySelector("div")
  divItem.querySelector("h5").innerText=imgTitulo[indiceAleatorio]
  //trocamos o conteúdo do p que está no div
  divItem.querySelector("p").innerText=imgDesc[indiceAleatorio]
}