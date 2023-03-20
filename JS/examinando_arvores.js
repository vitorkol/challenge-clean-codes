/*
 * ## 🌱 Sobre o Desafio
 * Chegando no Vale, ao lado do rio Jacará-Mirim, a natureza se mostra exuberante. Porém, é necessário verificar 
 * as árvores da região estão saudáveis ou necessitando de cuidados. Para isso, durante nossa jornada até o vale,
 * utilizamos um dispositivo de ultrassom desenvolvido por uma das CleanTechs parceiras, a Cleanduino
 * (especializada em projetos com Arduino e JavaScript, usando o Framework Johnny-Five). Através desse
 * dispositivo coletamos uma lista de amostras, onde cada registro tem o percentual de saúde da árvore avaliada.
 * 
 * ## O que deve ser feito?
 * Crie um código que, para cada item dessa lista, verifique se a amostra está com um nível: Bom, Aceitável
 * ou Inaceitável. Para cada nível, imprima a ação que deve ser realizada considerando as seguintes regras:
 *     1. Bom (mais de 75% de saúde na amostra)
 *        1.1 Imprima "Descartar da lista"
 *     2. Aceitável (mais de 50% e menos de 75%) 
 *        2.1 Imprima "Manter sob observação"
 *     3. Inaceitável (menos de 50%) 
 *        3.1 Imprima "Isolar e iniciar protocolo de cuidados"
 * 
 * Obs.: Lembrando que todas as amostras são de exatamente 100g e as listas terão tamanhos variados.
 * 
 * ## 🌅 Entradas automatizadas e Saídas esperadas
 * 
 * As entradas será uma lista com as porcentagens de saúde das árvores. Para a saída esperamos que seja printado no
 * console, dependendo da porcentagem, se a árvore deve: "Ser descartada da lista", "Manter sob observação" ou 
 * "Isolar e iniciar protocolos de cuidados". Essas frases devem ser printadas para cada item da lista.
 * 
 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let amostra = gets().split(',')

/*
 * Neste desafio foi utilizada a técnica de estrutura de repetição
 * no caso de amostra, também foi associada a função length para obter
 * o tamanho da string contada em cada iteração do for. Uma vez que a entrada cuidados
 * dados não era do tipo inteiro, e sim string. Motivo pelo qual foi utilizado .split(',')
 *
 */
 
for (let i = 0; i < amostra.length; i++) {
  if (amostra[i] >= 75) {
    console.log("Descartar da lista"); // Se o elemento for maior ou igual a 75, descartar
  } else if (amostra[i] >= 50) {
    console.log("Manter sob observação"); // Se o elemento for maior ou igual a 50 e menor que 75, manter sob observação
  } else {
    console.log("Isolar e iniciar protocolo de cuidados"); // Se o elemento for menor que 50, isolar e iniciar protocolo de cuidados
  }
}