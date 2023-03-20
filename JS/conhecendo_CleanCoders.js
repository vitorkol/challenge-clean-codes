/* 
 * ## 🌱 Sobre o Desafio
 * Buscando planejar as ações para conter a Oil Corp, um acampamento foi criado e muitos CleanCoders  
 * (inclusive novos adeptos da causa) estão chegando. Com isso, para faciliar a comunicação e interação,
 * precisamos imprimir cartões de identificação para todas as pessoas.
 *
 * ## O que deve ser feito?
 * Crie um código que com três entradas (NOME, SOBRENOME e ID) que imprima essas informações no seguinte 
 * padrão: "Nome: NOME SOBRENOME ID: ID"
 * ``` print(`String e ${variavel}`); ```
 * 
 * ## ⛺ Entradas automatizadas e Saídas esperadas
 * As entradas serão: o nome, o sobrenome e o ID de cada CleanCoder. A saída deverá ser essas três variáveis
 * concatenadas em uma única String.
 *
 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let nome = gets()
let sobrenome = gets();
let id = parseInt(gets());

/*
 * Realizando os primeiros teste após live.
 * Trabalhando interpolação de strings.
 */
print(`Nome: ${nome} ${sobrenome} ID: ${id}`);