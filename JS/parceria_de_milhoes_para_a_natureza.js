/*
 * ## 🌱 Sobre o Desafio
 * Após vocês promoverem diversas atividades a favor da natureza, a liderança e a diretoria da Oil Corp convidaram 
 * vocês para os ajudarem a preservar a natureza e a serem uma empresa sustentável. Para isso, eles precisam de 
 * ajuda para criar o algoritmo que direciona os resíduos da água para a estação de tratamento correta antes de ser 
 * descartada no rio Jacará-Mirim.
 * 
 * Via de regra, as moléculas que possuem até 5 caracteres passam pelo Filtro Normal, as que possuem até 10  
 * caracteres passam pelo Filtro Específico e as que possuem mais que 10 caracteres passam pelo Filtro Duplo
 * Especifico. Essas moléculas estão misturadas nos resíduos, se houver ao menos uma que tenha o número específico 
 * de caracteres esse resíduo já deve passar pelo filtro correto.
 * 
 * ## O que deve ser feito?
 * Crie um código que implemente essas regras e imprima o filtro adequado para cada molécula:
 *   1. <= 5 - Imprimir "Filtro Normal";
 *   2. > 5 e <= 10 - Imprimir "Filtro Específico";
 *   3. > 10 - Imprimir "Filtro Duplo Específico";
 * 
 * ## 🏭 Entradas automatizadas e Saídas esperadas
 * 
 * As entradas serão listas contendo as moléculas contidas na água analisada. A saída deverá ser se o filtro 
 * utilizado deve ser o [b]"Filtro Normal"[/], o [b]"Filtro Específico"[/b] ou o [b]"Filtro Duplo Específico"[/b].
 * 
 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const arr = gets().split(",");
let quantidadeCaracteres = [];

/*
 * Para este código fiz uma alteração da varial [b]qualFiltro[/b] uma vez que ela é usada como um contador
 * Então substitui por um array qunatidadeCaracteres já que o objetivo maior era a contagem de quantidade
 * de caracteres; dessa forma faço a chamada da variável dentro do [b]for[/b] para percorrer o array. Por
 * fim, utilizei o operador spread ```...``` para passar os elementos do array como argumentos para a 
 * função Math.max(). 
 *
 */

for (let mol of arr) {
  quantidadeCaracteres.push(mol.length);
}

let max = Math.max(...quantidadeCaracteres);

if (max <= 5) {
  console.log("O filtro deve ser: Filtro Normal");
} else if (max < 10) {
  console.log("O filtro deve ser: Filtro Específico");
} else {
  console.log("O filtro deve ser: Filtro Duplo Específico");
}
