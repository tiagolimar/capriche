https://aleatorio.dev.br/posts/ideias-programar/

# Capítulo 1: Prova de conceito

* Escreva um programa em linha de comando para fazer questionário com o tema "Você está afim do seu melhor amigo?";
* Esse programa fará várias perguntas diferentes e aceitará apenas as entradas 'S' e 'N';
* Para cada pergunta respondida 'S', ele deve somar um ponto. Cada pergunta respondida 'N' ele não soma nada;
* Ao final da execução, o programa responderá o usuário de acordo com a soma dos pontos. 
+ A lista de perguntas é:

1. "Você já sonhou que seu melhor amigo era um unicórnio voando sobre arco-íris cor-de-rosa enquanto segurava um buquê de salsichas?"
1. "Você já se viu dançando a dança do frango em homenagem ao aniversário do seu melhor amigo, vestida de pinguim?"
1. "Se seu melhor amigo fosse um sorvete, ele seria o sorvete de pistache?"
1. "Você pensa em patos de borracha quando olha para o seu melhor amigo?"
1. "Você já escreveu um poema de amor épico para o seu melhor amigo usando apenas emojis de vegetais?"
1. "Você acha que seu melhor amigo seria um bom companheiro numa luta contra zumbis alienígenas usando almofadas como armas?"

* E a pontuação:
1. De 0 a 2 pontos: você colocou seu melhor amigo na friendzone. O que é ótimo porque talvez ele seja apenas seu amigo
1. De 3 a 4 pontos: Talvez haja amor, talvez seja hormônios. Vale a pena experimentar uns cinco minutos de trocação de beijo sem estragar a amizade.
1. 5 ou mais pontos: É o amor /Que mexe com minha cabeça e me deixa assim/ Que faz eu pensar em você e esquecer de mim/ Que faz eu esquecer que a vida é feita pra viver

# Capítulo 2: Evolução

* Altere o programa para consultar as perguntas do banco de perguntas
* A aplicação deverá escolher apenas 5 perguntas aleatórias desse banco, de tal forma que duas execuções seguidas tenham perguntas diferentes;
* A aplicação não pode repetir a pergunta, caso a pergunta escolhida já exista, a aplicação deverá escolher outra;
* Para cada pergunta respondida 'S', ele deve somar um ponto. Cada pergunta respondida 'N' ele não soma nada;
* Ao final da execução, o programa deve responder de acordo com a nota dada. 
* Você pode utilizar a mesma pontuação do Capítulo anterior.
+ A lista para o banco de perguntas é:
1. "Você já sonhou em fazer uma viagem à Lua com seu melhor amigo?"
1. "Você acha que seu amigo é a reencarnação de um unicórnio?"
1. "Você já considerou mudar seu nome para Geleca apenas para combinar com o apelido do seu amigo?"
1. "Você acredita que seu amigo é secretamente um super-herói disfarçado?"
1. "Você já planejou uma festa surpresa de aniversário para o seu amigo no dia errado, só para ver a reação?"
1. "Você acha que seu amigo é a única pessoa capaz de decifrar porque o cocô das cabras é redondo e o do wombat é quadrado?"
1. "Você já pensou em criar um clube exclusivo para pessoas que usam pijamas de abacaxi nas segundas-feiras?"
1. "Você consegue segurar o tchan?"
1. "Você já considerou tatuar uma imagem de batata frita no braço em homenagem ao seu amigo?"
1. "Você já pensou em criar um podcast sobre teorias da conspiração envolvendo a vida secreta do seu melhor amigo?"
1. "Você acredita que seu amigo é a verdadeira inspiração por trás das músicas de karaokê?"
1. "Você acha que seu amigo possui um diploma honorário em Mímica Avançada?"
1. "Você acha que seu amigo é o verdadeiro criador das terríveis baratas voadas?"

# Capítulo 3: Promoção

Altere o programa para ter 5 fases:

* Fase 0) O programa perguntará qual é o título do questionário.
* Fase 1) O programa perguntará quantas perguntas você deseja fazer.
* Fase 2) Para cada pergunta, o programa perguntará quais são as opções e o peso da resposta de cada uma delas.
* Fase 3) Em seguida, o programa perguntará quais são as respostas e quais são as faixas de valores utilizadas.
* Fase 4) Por fim, o programa realizará a enquete ao usuário, usando como entrada os dados fornecidos nas etapas anteriores e respondendo ao que foi perguntado.

# Capítulo 4: Utilização em arquivo

* Adicione um menu iterativo na sua aplicação. O menu terá as seguintes opções:
A) Cadastrar um questionário
B) Listar todos os questionários
C) Excluir um questionário
D) Descrever um questionário
E) Editar um questionário

* Todo questionário terá um id numérico, único e incremental
* Os questionários serão salvos em um diretório temporário (/tmp/caprichapp ou C://temp/caprichapp) chamado de *diretório base*
* Cada questionário será salvo em formato json como um arquivo separado
* No começo da execução, o aplicativo vai percorrer todos os arquivos do diretório base para saber qual é o valor atual do id
* Quando o usuário selecionar a opção cadastrar, ele terá que entrar com os dados para criar o questionário, após isso a aplicação transformará o questionário em um json e irá salvar no diretório base informando que a operação ocorreu com sucesso
* Quando o usuário selecionar a opção listar todos os questionários, a aplicação listar apenas o id e o nome do questionário
* Quando o usuário selecionar a opção excluir, ele informará um id. Após isso, a aplicação vai excluir o arquivo do diretório base e informar que o questionário foi excluído com sucesso
* Quando o usuário selecionar a opção descrever um questionário a aplicação pedirá um id. Tendo esse id, ela irá abrir o arquivo do questionário e escrever na tela o arquivo json
* Quando o usuário selecionar a opção editar, precisará informar um id. Após isso, ele terá que cadastrar as informações de um questionário como se fosse cadastrar, a aplicação excluirá o questionário e cadastrará um novo