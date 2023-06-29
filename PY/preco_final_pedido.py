'''
## Sobre o Desafio

Você está criando um aplicativo de entrega de comida e precisa calcular o preço final do pedido do usuário. 
O usuário escolheu alguns itens do cardápio e é preciso calcular o preço total do pedido.

### Entrada:

1. A entrada deve receber os valores abaixo:

 1. valorHamburguer: o valor unitário de um hambúrguer.
 2. quantidadeHamburguer: a quantidade de hambúrgueres que o usuário deseja.
 3. valorBebida: o valor unitário de uma bebida.
 4. quantidadeBebida: a quantidade de bebidas que o usuário deseja.
 5. valorPago: o valor pago pelo usuário.

### Saída:

1. A saída deve retornar um texto informando o valor total do pedido e a quantidade de troco que será necessário. 
Por exemplo, se tivermos os seguintes valores de entrada:

 1. valorHamburguer = 10.00;
 2. quantidadeHamburguer = 2;
 3. valorBebida = 5.00;
 4. quantidadeBebida = 1;
 5. valorPago = 30.00;

2. De acordo com esses valores de entrada, o cálculo do preço final do pedido ficaria assim:

 1. Valor total dos hambúrgueres: 10.00 * 2 = 20.00
 2. Valor total da bebida: 5.00 * 1 = 5.00
 3. Preço total do pedido: 20.00 + 5.00 = 25.00
 4. Troco necessário: 30.00 - 25.00 = 5.00

3. Como o usuário pagou R$ 30.00 e o preço total do pedido ficou em R$ 25.00, o troco necessário é de R$ 5.00. 
Portanto, a saída esperada para esse exemplo seria:

 - O preço final do pedido é R$ 25.00. Seu troco é R$ 5.00.

### Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se 
de testar seu programa com esses exemplos e com outros casos possíveis.

|Entrada a ser lida|Saída esperada|
|:------------------|:--------------|
|10.00 <br /> 2 <br /> 5.00 <br /> 1 <br />30.00| O preço final do pedido é R$ 25.00. Seu troco é R$ 5.00.|
|15.00 <br /> 3 <br /> 6.00 <br /> 2 <br />60.00| O preço final do pedido é R$ 57.00. Seu troco é R$ 3.00.|
| 8.00 <br /> 1 <br /> 4.00 <br /> 4 <br />50.00| O preço final do pedido é R$ 24.00. Seu troco é R$ 26.00.|
'''
import sys

valorHamburguer = float(sys.stdin.readline());
quantidadeHamburguer = int(sys.stdin.readline());
valorBebida = float(sys.stdin.readline());
quantidadeBebida = int(sys.stdin.readline());
valorPago = float(sys.stdin.readline());

#TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
totalPedido = (quantidadeHamburguer * valorHamburguer) + (quantidadeBebida * valorBebida);

#TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
trocoNecessario = valorPago - totalPedido;

#TODO: Imprimir a saída no formato especificado neste desafio.
'''
Por se tratar de pontos flutuantes, para a resolução deste problema, na hora de fazer a impressão
dos resultados, na interpolção de string nas variáveis totalPedido e trocoNecessario foi utilizado
f na função print() para que fosse possível indicar que a string teria 2 pontos fluantes, ou seja,
duas casas decimais. print(f'texto {variavael:pontosFlutuantes}').
'''
print(f'O preço final do pedido é R$ {totalPedido:.2f}. Seu troco é R$ {trocoNecessario:.2f}.');
### Este código foi desenvolvido por @vitorkol