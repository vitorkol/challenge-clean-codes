/*
 * ## 🌱 Sobre o Desafio
 * A Oil Corp abriu o jogo e entregou para vocês uma lista contendo vários gases que eles liberam durante a extração de óleo.
 * Alguns desses gases são extremamente prejudiciais para a camada de ozônio e para a natureza local como: NO2, SO2, CO e FHO. 
 * 
 * ## O que deve ser feito?
 * Crie um código que, de acordo com a lista, verifique se há pelo menos UM desses gases. Se não houver, imprima que deverá
 * passar por um Filtro Simples. Se houver, imprima no console que deverá passar por um Filtro Especial e especifique qual gás.
 * 
 * ## 🏭 Entradas e Saídas  
 * A entrada será uma lista de listas com as moléculas que devem ser analisadas. A saída deve ser qual filtro deve ser utilizado
 * para filtrar. Caso tenha uma dessas moléculas prejudiciais, a saída deve ser um filtro específico para a molécula X.
 * 
 * Obs.: Nesse nosso desafio se houver a molécula prejudicial na entrada será apenas UMA. 
 * 
 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let lista1 = gets().split(', ');
let lista2 = gets().split(', ');
let lista3 = gets().split(', ')

let arr = [lista1, lista2, lista3]

let qualFiltro = false;
let qualMolecula;

/*
 * Neste exercício escolhi a utilização do switch case por ser uma questão de validação Simples
 * e permitir que eu utiliza-se somente uma única vez ```arr.flat()```. Evitando assim a repetição
 * desnecessária de código.
 *
 */

switch (true) {
  case arr.flat().includes("NO2"):
    console.log("Filtro Específico para a Molécula NO2");
    break;
  case arr.flat().includes("SO2"):
    console.log("Filtro Específico para a Molécula SO2");
    break;
  case arr.flat().includes("CO"):
    console.log("Filtro Específico para a Molécula CO");
    break;
  case arr.flat().includes("FHO"):
    console.log("Filtro Específico para a Molécula FHO");
    break;
  default:
    console.log("Filtro Simples");
}