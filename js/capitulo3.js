import read from 'readline-sync';
import clear from 'clear-console';

read.setDefaultOptions({encoding:"utf-8"});

class Quiz{
    constructor (conteudo_do_quiz){
        this.titulo = conteudo_do_quiz.titulo;
        this.perguntas = conteudo_do_quiz.perguntas;
        this.respostas = conteudo_do_quiz.respostas;

        this.introducao();
        this.pontuacao = this.perguntar(this.perguntas);
        this.analisar();
    }

    introducao (){
        console.log(`\n${this.titulo}, responda cada pergunta a seguir.\n`);
        console.log("Vamos começar? (pressione enter)\n\n");
        read.question("");
    }
    
    perguntar (){
        let pontuacao_total = 0;
        for (const pergunta of this.perguntas){
            clear()
            const index = read.keyInSelect(pergunta.descricao)-1;
            if (pergunta.opcoes[index] == pergunta.opcao_certa){
                pontuacao_total += pergunta.peso;
            }
        }
        return pontuacao_total
    }

    analisar (){
        clear();
        console.log('Pontuação Total = ',this.pontuacao, '\n');
    
        for (const [peso_maximo,descricao] of this.respostas){
            if (this.pontuacao <= peso_maximo){
                console.log(descricao)
                return null
            }
        }
    }
}

class CriadorDeConteudo{
    constructor(){
        this.titulo = read.question("Qual é o título do questionário? ",{encoding:'utf-8'})

        this.numero_de_perguntas = parseInt(read.question("Quantas perguntas serão feitas? "))
        this.perguntas = [];
        this.gerar_perguntas()
    
        this.numero_de_respostas = parseInt(read.question("Quantas respostas possíveis serão dadas? "))
        this.gerar_respostas()

        this.conteudo = {
            titulo: this.titulo,
            perguntas: this.perguntas,
            respostas: this.respostas
        }
    }

    obter_opcoes(){
        let continuar = true;
        let opcoes = [];
        const MAX_OPCOES = 5;
        
        for(let i=0;i<MAX_OPCOES;i++){
            clear()
            i>1 && console.log('Escreva "sair" para concluir');
            let opcao = read.question(`Escreva a opção ${i+1}: `);
    
            if (opcao.toLowerCase()=="sair" && i>1){
                return opcoes
            }
            opcoes.push(opcao)
        }
        return opcoes
    }
    
    gerar_perguntas(){
        for (let i=0; i<this.numero_de_perguntas;i++){
            let pergunta = {};
            pergunta.descricao = read.question("Qual é a pergunta? ");
            pergunta.peso = read.question("Qual é o peso da pergunta? ");
            pergunta.opcoes = this.obter_opcoes();
            pergunta.opcao_certa = read.question("Qual é a opção certa? ")
            this.perguntas.push({...pergunta})
        }
    }
    
    gerar_respostas(){
        this.respostas = new Map();
        
        for (let i=0; i<this.numero_de_respostas;i++){
            const descricao = read.question("Qual é a resposta? ");
            const peso_maximo = read.question("Qual é o peso máximo da resposta? ");
            this.respostas.set(peso_maximo,descricao);
        }
    }

    get get_conteudo (){
        return this.conteudo
    }
}

const main = ()=>{
    let criador = new CriadorDeConteudo();
    const conteudo = criador.get_conteudo;
    console.log("Concluído! ", conteudo);
    //new Quiz(conteudo);
}

export default main;