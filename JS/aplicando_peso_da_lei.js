/*
 * ## 🌱 Sobre o Desafio
 * A equipe jurídica que está acompanhando vocês sugeriu que aplicassem, através da justiça, multas para a Oil Corp
 * caso eles não comecem a tratar todas as formas que estão poluindo a região.
 * Além de realizar protocolos de reflorestamento e cuidados com a fauna e a flora do vale, respeitando a natureza.
 * 
 * As atividades que demandam tratamento e atenção são: Reflorestamento, Esgoto Tratado, Emissão de Carbono e Energia 
 * Sustentável. Para cada uma delas existem três critério: Não feito, Em progresso e Feito. O que não foi feito deve  
 * receber multa, o que está em progresso avaliação de progresso e o que está feito não multar.
 * 
 * ## O que deve ser feito?
 * Crie um código que analise cada uma dessas atividades e print no console o que deverá ser feito.
 * Nosso amigo e CleanCoder Felipão nos ajudou com um pedaço do código. Ele criou a ```Arrow Function findItem```.
 * O que ela faz é criar um filtro para encontrar as chaves no nosso objeto. Podemos notar que os parâmetros dela não 
 * estão exatamente ao lado como uma função normal: ```function exemplo(parametros)```, mas funciona exatamente do mesmo jeito.
 * 
 * A utilização dela é feita da mesma forma: ```findItem(objeto, index)```. Porém isso irá nos retornar a chave. 
 * Para termos o valor da chave precisamos fazer dessa forma: ```list[findItem(objeto, index)]```.
 * 
 * ## 🌅 Entradas automatizadas e Saídas esperadas
 * As entradas serão: Uma lista de objetos a serem verificados e os valores das chaves de um objeto. A saída deverá ser "Multa",
 * "Avaliação de progresso" ou "Não multar" dependendo do valor de cada uma das chaves a serem verificadas.
 *
 */

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let entradas = gets().split(', ')

const listaAtividades = {
    Reflorestamento: gets(),
    EsgotoTratado: gets(),
    EmissaoDeCarbono: gets(),
    EnergiaSustentavel: gets(),
}

const messages = {
  'Feito': 'Não multar',
  'Não feito': 'Multa',
  'Em progresso': 'Avaliação de progresso',
}

const findItem = (object, index) => Object.keys(object).filter(item => item.toString() == index);

/*
 * Para o desenvovimento desta atividade tendo em vista foi utilizado a estrutura de repetição
 * switch case para avaliar os valores de entradas na lista de atividades definidos em cada bloco
 * do swtich.
 *
 */

entradas.forEach(key => {
  switch (listaAtividades[key]) {
    case undefined:
      console.log();
      break;
    case 'Não feito':
      console.log("Multa");
      break;
    case 'Em progresso':
      console.log("Avaliação de progresso");
      break;
    default:
      console.log("Não multar");
  }
});