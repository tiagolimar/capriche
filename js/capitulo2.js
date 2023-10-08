import read from 'readline-sync';
import clear from 'clear-console';

read.setEncoding('utf-8');

const introducao = ()=>{
    console.log("\nDescubra se você está afim do seu melhor amigo, responda cada pergunta a seguir com S ou N.\n");
    console.log("Vamos começar? (pressione enter)\n\n");
    
    read.question("");
}

const choice_index = list=>{
    const index = Math.floor(Math.random()*list.length)
    return index
}

const nChoice = (list,num)=>{
    list = [...list]
    let list_choiced = []
    for (let i = 0; i < num; i++){
        console.log(i);
        const index = choice_index(list)
        const item = list.splice(index,1)
        
        list_choiced.push(item)
    }
    return list_choiced
}

const criar_perguntas = ()=>{
    const perguntas = [
        "Você já sonhou em fazer uma viagem à Lua com seu melhor amigo?",
        "Você acha que seu amigo é a reencarnação de um unicórnio?",
        "Você já considerou mudar seu nome para Geleca apenas para combinar com o apelido do seu amigo?",
        "Você acredita que seu amigo é secretamente um super-herói disfarçado?",
        "Você já planejou uma festa surpresa de aniversário para o seu amigo no dia errado, só para ver a reação?",
        "Você acha que seu amigo é a única pessoa capaz de decifrar porque o cocô das cabras é redondo e o do wombat é quadrado?",
        "Você já pensou em criar um clube exclusivo para pessoas que usam pijamas de abacaxi nas segundas-feiras?",
        "Você consegue segurar o tchan?",
        "Você já considerou tatuar uma imagem de batata frita no braço em homenagem ao seu amigo?",
        "Você já pensou em criar um podcast sobre teorias da conspiração envolvendo a vida secreta do seu melhor amigo?",
        "Você acredita que seu amigo é a verdadeira inspiração por trás das músicas de karaokê?",
        "Você acha que seu amigo possui um diploma honorário em Mímica Avançada?",
        "Você acha que seu amigo é o verdadeiro criador das terríveis baratas voadas?"
    ]

    const perguntas_selecionadas = nChoice(perguntas,5);
    return perguntas_selecionadas
}

const perguntar = (perguntas)=>{
    let pontuacao_total = 0;
    for (const pergunta of perguntas){
        clear()
        const pontuacao = read.keyInYN(pergunta) ? 1 : 0;
        pontuacao_total += pontuacao;
    }
    return pontuacao_total
}

const criar_resultados = ()=>{
    const resultados = new Map()
    resultados.set(
        2,"Você colocou seu melhor amigo na friendzone. O que é ótimo porque talvez ele seja apenas seu amigo.\n",
    );
    resultados.set(
        4,"Talvez haja amor, talvez seja hormônios. Vale a pena experimentar uns cinco minutos de trocação de beijo sem estragar a amizade.\n",
    );
    resultados.set(
        6,"É o amor \nQue mexe com minha cabeça e me deixa assim \nQue faz eu pensar em você e esquecer de mim \nQue faz eu esquecer que a vida é feita pra viver.\n",
    );

    return resultados
}

const analisar = (pontuacao)=>{
    clear();
    console.log('Pontuação Total = ',pontuacao, '\n');

    const resultados = criar_resultados();

    for (const [resultado,descricao] of resultados){
        if (pontuacao <= resultado){
            console.log(descricao)
            return null
        }
    }

}

const main = ()=>{
    introducao();
    const perguntas = criar_perguntas();
    const pontuacao = perguntar(perguntas);
    analisar(pontuacao);
}

export default main;