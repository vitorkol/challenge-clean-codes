/*
 * ## 🌱 Sobre o Desafio 
 * Pela manhã, com todos descansados, sua primeira missão será aumentar a plantação de jacarandás, árvore fundamental para a magia do vale.
 * Para isso, é necessário plantá-los a uma certa distância um pé do outro para que nenhuma muda roube o nutriente da outra, fazendo com que
 * algumas não se desenvolvam. Nesse sentido, é necessário que cada pé esteja a exatos 10 metros de distancia um do outro, assim conseguiremos
 * plantar todas as mudas e evitar que algumas não se desenvolvam.
 * 
 * ## O que deve ser feito?
 * Crie um código que, com as entradas de distancias dos buracos avaliadas pelo drone, verifique se o espaço entre um buraco e outro é igual  
 * a 10 metros. Se for, imprima no console "Plantar!". Se não for, imprima no console a distância que o buraco deve retroceder ou avançar para
 * chegar ao número ideal.
 * Obs.: Para esse desafio os métodos Math do Javascript podem ser muito úteis.
 * 
 * ## ⛺ Entradas automatizadas e Saídas esperadas
 * As entradas serão quantos metros o drone verificou entre um buraco e outro. A saída deverá ser, dependendo da distância dos buracos analisados
 * pelo drone, se os CleanCoders podem plantar ou se o buraco deve avançar ou retroceder uma quantia X de metros.
 * 
 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let distancia = parseInt(gets());
const distanciaIdeal = 10; // Nesta declaração seto o valor default para a distância ideal

/*
 * O código a seguir estou usando a função Math.abs para calcular a diferença
 * entre a distância atual e a distância ideal, conforme sugerido no enunciado 
 * do desafio.
 */

if (distancia !== distanciaIdeal) {
  const diferenca = Math.abs(distancia - distanciaIdeal);
  
  if (distancia > distanciaIdeal) {
    console.log(`O buraco deve retroceder ${diferenca} metros`);
  } else {
    console.log(`O buraco deve avançar ${diferenca} metros`)
  }
} else {
  console.log("Plantar!");
}