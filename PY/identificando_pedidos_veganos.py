'''
## Sobre o Desafio
O objetivo deste programa é ajudar a equipe do Restaurante Veggieworld a identificar rapidamente os 
pedidos veganos e não veganos e informar as calorias de cada prato definido pelo cliente. O programa 
deve solicitar ao usuário o número de pedidos que serão feitos e, em seguida, pedir informações sobre 
cada pedido, incluindo se o prato é vegano ou não (usando as opções "s" para sim e "n" para não) e a 
quantidade de calorias. Ao final, o programa deve exibir uma lista de todos os pedidos com suas 
informações correspondentes.

### Entrada
1. Um inteiro n, que representa o número de pedidos que o usuário deseja fazer. Para cada pedido, o usuário deve inserir:
 1. O nome do prato;
 2. A quantidade de calorias do prato;
 3. Se o prato é vegano ou não (usando as opções "s" para sim e "n" para não).

### Saída
1. O programa deve exibir uma lista de todos os pedidos com suas informações correspondentes, incluindo o nome do prato, 
se é vegano ou não, e a quantidade de calorias, no seguinte formato:

 - Pedido X: NOME_DO_PRATO (EH_VEGANO?) - YYY calorias, onde "X" é o número do pedido, "NOME_DO_PRATO" é o nome do prato, "EH_VEGADO?"
   indica se o prato é vegano (escrever "Vegano" ou "Nao-vegano"), e "YYY" é a quantidade de calorias do prato.

### Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa
 com esses exemplos e com outros casos possíveis.

|Entrada a ser lida|Saída esperada|
|:------------------|:--------------|
|1 <br /> Hamburguer de lentilha <br /> 300 <br /> s <br /> Salada <br /> 60 <br /> s| Pedido 1: Hamburguer de lentilha (Vegano) - 300 calorias <br /> Pedido 2: Salada de frutas (Vegano) - 60 calorias|
|2 <br /> Pizza <br /> 450 <br /> n <br /> Sushi <br /> 200 <br /> n| Pedido 1: Pizza (Nao-vegano) - 450 calorias <br /> Pedido 2: Sushi (Nao-vegano) - 200 calorias|
'''

numPedidos = int(input())

for i in range(1, numPedidos + 1):
    prato = input()
    calorias = int(input())
    '''
    ~ehVegano = False~ -- Trecho do código foi substituido para melhorar a interpretação do pedido.
    Por causa da entrada de dados, foi necessário converte a entrada para minúsculas e verifica se 
    é igual a 's'
    '''
    ehVegano = input().lower() == 's'
    #TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
    '''
    Para verificar se o prato é vegano criei uma nova variável e atribui a string correta à variável tipoPrato
    '''
    tipoPrato = "Vegano" if ehVegano else "Não Vegano"
    # Como diferencial utilizei a interpolação de strings para que o códgio fique mais limpo.
    print("Pedido %s: %s (%s) - %s calorias" % (i, prato, tipoPrato, calorias))
### Este código foi desenvolvido por @vitorkol