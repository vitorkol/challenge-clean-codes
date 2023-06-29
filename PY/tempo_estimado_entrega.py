'''
## Sobre o Desafio

Imagine que você está criando um aplicativo de entrega de comida e precisa informar ao usuário o tempo estimado de 
entrega de um restaurante. A mensagem deve conter o nome do restaurante e o tempo estimado de entrega em minutos.

### Entrada

1. A entrada deverá receber os valores abaixo:
    - nomeRestaurante (string): o nome do restaurante desejado.
    - tempoEstimadoEntrega (number): o tempo estimado de entrega em minutos.

### Saída

1. Deverá retornar uma mensagem (string) informando ao usuário o tempo estimado de entrega do restaurante. Por exemplo,
para o restaurante Bar do Zinho com o tempo estimado de entrega sendo 20, imprima:
    - O restaurante Bar do Zinho entrega em 20 minutos.

## Desafio Bônus:
Utilize interpolação de strings para formatar sua saída ao invés da concatenação de strings tradicional.

### Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de 
testar seu programa com esses exemplos e com outros casos possíveis.

|Entrada a ser lida|Saída esperada|
|:------------------|:--------------|
|McDonalds <br /> 10	   |O restaurante McDonalds entrega em 10 minutos.|
|KFC <br /> 25	           |O restaurante KFC entrega em 25 minutos.|
|Burger King <br /> 5	   |O restaurante Burguer King entrega em 5 minutos.|

'''

import sys

'''
Como foi identificado que havia espaço entre as informações da coluna Entrada 
esse caracter em cada ocorrência imprimia uma quebra de linha. Sendo assim 
utilizei a função rstrip() para remover os espaços em branco.
'''
nomeRestaurante = str(sys.stdin.readline().rstrip('\n'));
tempoEstimadoEntrega = int(sys.stdin.readline());

#TODO: Imprimir a saída no padrão definido no enunciado deste desafio.
print('O restaurante %s entrega em %s minutos.'%(nomeRestaurante,tempoEstimadoEntrega));

# Dica: Para simplificar a formatação, utilize o conceito de interpolação de strings.
'''
Outra forma de utilizar a interpolação de strings é:
 print(f"O restaurante {nomeRestaurante} entrega em {tempoEstimadoEntrega} minutos.");
'''
### Este código foi desenvolvido por @vitorkol