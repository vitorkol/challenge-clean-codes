/*
 * ## 🌱 Sobre o Desafio 
 * Agora precisamos separar os CleanCoders em dois grupos, isso vai facilitar a execução de ações estratégicas. Para isso, foi
 * definido que os IDs pares devem ir para as barracas à direita da estrada que corta o acampamento e os ímpares para a esquerda.
 * Aproveite essa oportunidade para criar um código que verifique o ID do CleanCoder e indique para onde ele deve ir: Direita ou Esquerda.
 * 
 * ## O que deve ser feito?
 * Um jeito bem fácil de fazermos essa verificação é utilizando o operador %. Com ele conseguimos verificar o resto de divisões.
 * 
 * ## ⛺ Entradas automatizadas e Saídas esperadas
 * As entradas serão números inteiros positivos que representarão os IDs dos CleanCoders. A saída deve ser se, de acordo com o ID,
 * o CleanCoder deve ir para as barracas da direita ou da esquerda.
 * 
 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let id = parseInt(gets());

/*
 * Conforme a descrição do desafio, a aplicação do pensamento computacional
 * é validar se o resto da divisão é um número par ou impar.
 *
 */
 
if (id % 2 == 0) {
  print("Barraca da Direita");
} else {
  print("Barraca da Esquerda");
}