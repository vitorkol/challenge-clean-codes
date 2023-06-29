'''
## Sobre o Desafio
Crie um programa que informe ao usuário se ele pode receber um brinde especial de acordo 
om o valor total do pedido. Se o valor total do pedido for maior ou igual a R$ 50.00, o 
usuário receberá uma sobremesa grátis. Caso contrário, o usuário não receberá nenhum brinde.

### Entrada
1. A entrada deverá receber o valor total do pedido em uma variável numérica:

 - valorPedido: o valor do pedido.

### Saída
1. Deverá retornar uma mensagem (string) que informa se o usuário ganhou uma sobremesa ou não:

 1. Se valorPedido >= 50, a mensagem deve ser:
  - Parabens, você ganhou uma sobremesa gratis!
 2. Caso contrário, a mensagem deve ser:
  - Que pena, você nao ganhou nenhum brinde especial.

### Desafio Bônus: 
Utilize interpolação de strings para formatar sua saída ao invés da concatenação de strings tradicional.

### Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. 
Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

|Entrada a ser lida|Saída esperada|
|:------------------|:--------------|
|60	| Parabens, você ganhou uma sobremesa gratis!|
|30	| Que pena, você nao ganhou nenhum brinde especial.|
|90	| Parabens, você ganhou uma sobremesa gratis!|
'''
import sys
valorPedido = int(sys.stdin.readline());

#TODO: Criar as condições necessárias para impressão da saída conforme o enunciado.
if valorPedido >= 50:
  print('Parabens, você ganhou uma sobremesa gratis!');
else:
  print('Que pena, você nao ganhou nenhum brinde especial.')

'''
Outra forma de fazer o mesmo código utilizando a técnica de clean code seria:
mensagem = 'Parabens, você ganhou uma sobremesa gratis!' if valorPedido >= 50 else 'Que pena, você nao ganhou nenhum brinde especial.'
print(mensagem);

'''
### Este código foi desenvolvido por @vitorkol