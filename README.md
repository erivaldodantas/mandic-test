# Prova de JavaScript - Mandic

## Executar o Projeto:

Abra dois terminais e em cada um deles entre nas pastas ```backend``` e ```frontend``` pelo terminal, execute o compando ```npm install``` ou ```yarn``` para instalar todas as dependencias e em seguida execute ```npm start```ou ```yarn start```, o frontend estará sendo executando em ```localhost:3000``` e a API estará em ```localhost:3030```.

## API

- Toda a implementação lógica do jogo está na API, inclusive a validação do campo das mãos, ele verifica se foi informado a quantidade correta de cartas e se foi informado as cartas correspondentes as duas mãos. 

- A lógica básica do jogo está em ```backend/src/services/PokerGame.js``` onde é possível verificar o Ranking da mão e comparar qual é a vecedora.

- A jogada é preparada em ```backend/src/services/PokerTable.js```, aqui ele verifica se a mão é válida e separa as mãos e as cartas no método ```prepareGame(hands)``` para serem verificadas, e em seguida deve chamar o método ```rankingGame(handsGame)``` com o array das mãos e já contendo a nomeclatura do Ranking para informar a mão vencedora ou o empate. 

- Utilizei expressão regular (Regex) para validar e separar as cartas da mão.

- A entrada é um objeto JSON no Body da request contento um string. 
Ex:
```
{
    "game": "JEJOJC5E8P KOJP10C6C3O"
}
```

- A saída caso não seja um erro, retornará a mão ganhadora e o nome da jogada, e caso a ```hand``` retornada seja ```-1``` o jogo está empatado.
Ex: 
```
{
  "hand": 1,
  "rankingGame": "Dois Pares"
}
```

- Caso seja um erro e não seja um erro de servidor retorna no ```body``` uma mensagem que deve ser apresentada direto ao usuário.


## FrontEnd

- Foi feita com ```reactstrap``` para auxiliar no layout, assim separei todos os componentes da tela principal em componentes separados para facilitar manutenção e entendimento. 

- Usei a arquitetura de Context para centralizar os processos no frontend e os states. 

- Utilizei o React Hooks no header para controlar o Toggle do menu quando aberto em pequenas telas. 

- Por conta de tempo, não consegui implementar as cartas em cada mão do usuário, preparei os paineis mas não consegui achar as cartas a tempo para colocalas.