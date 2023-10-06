import readline from 'readline';
import read from 'readline-sync';
import clear from 'clear-console';

read.setDefaultOptions({encoding:"utf-8"})

const introducao = ()=>{
    console.log("\nDescubra se você está afim do seu melhor amigo, responda cada pergunta a seguir com S ou N.\n");
    console.log("Vamos começar? (pressione enter)\n\n");
    
    read.question("",(out)=>{
        console.log(out);
    });
    // clear()
}

const criar_perguntas = ()=>{
    const perguntas = [
        "A) Você já sonhou que seu melhor amigo era um unicórnio voando sobre arco-íris cor-de-rosa enquanto segurava um buquê de salsichas?",
        "B) Você já se viu dançando a dança do frango em homenagem ao aniversário do seu melhor amigo, vestida de pinguim?",
        "C) Se seu melhor amigo fosse um sorvete, ele seria o sorvete de pistache?",
        "D) Você pensa em patos de borracha quando olha para o seu melhor amigo?",
        "E) Você já escreveu um poema de amor épico para o seu melhor amigo usando apenas emojis de vegetais?",
        "F) Você acha que seu melhor amigo seria um bom companheiro numa luta contra zumbis alienígenas usando almofadas como armas?"
    ]
    return perguntas
}

const perguntar = (perguntas)=>{
    let pontuacao_total = 0;
    for (const pergunta of perguntas){
        // clear()
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

main()

export default main;