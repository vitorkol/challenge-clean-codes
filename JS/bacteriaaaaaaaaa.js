/*
 * ## 🌱 Sobre o Desafio
 * Por conta do extrativismo e a presença humana na região, o rio Jacará-Mirim está com níveis altíssimos de plástico
 * em todas as suas formas, em sua maioria originados de descartes irregulares da Oil Corp. Para isso, a coordenadora 
 * da expedição Camila (uma ecologista engajada e expert em Java), criou uma ecobarreira com sua equipe. Essa ecobarreira, 
 * como a palavra já diz, barra o plástico e o mantém acumulado em uma porção do rio para que depois ele seja coletado  
 * e retirado da água.
 * 
 * Nesse contexto, o plástico é degradado sempre pela metade a cada dia. Então se temos 1000kg em um dia, no próximo 
 * teremos 500kg, no seguinte 250kg e assim por diante.
 * 
 * ## O que deve ser feito?
 * Crie um código que, dependendo da quantidade de plástico, nos diga em quantos dias teremos 1kg ou menos de plástico 
 * (viabilizando a coleta manual).
 * 
 * ## 🌅 Entradas automatizadas e Saídas esperadas
 * A entrada será a quantidade de plástico em quilogramas. A saída deverá ser a quantidade de dias que levará para que 
 * essa quantidade de plástico chegue a 1kg ou menos.
 * 
 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let plastico = parseInt(gets());
let diasNecessarios = 0;

// A resolução deste problema tem várias códificações, todavia o bom código é aquele que é menos verboso.

/* 
 * Bloco de código com a solução mais verbosa
 *
 * while (plastico > 1) {
 *  plastico = (plastico / 2);
 *  diasNecessarios++;
 * }
 * print(`Serão necessários ${diasNecessarios} dias`);
 *
 */

// CodeClean - bloco de código com a solução menos verbosa, usando funções próprias do JS 
console.log(`Serão necessários ${ Math.ceil(Math.log2(plastico)) } dias`);