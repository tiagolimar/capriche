import read from 'readline-sync';
import prompt from 'prompt-sync';
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
            const {descricao,opcoes} = pergunta;
            let descricoes_opcoes = opcoes.map(op=>op.descricao);

            const index = read.keyInSelect(descricoes_opcoes,descricao);
            let peso = opcoes[index].peso;
            pontuacao_total += +peso;
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

export class CriadorDeConteudo{
    constructor(){
        this.titulo = prompt("Qual é o título do questionário? ")

        this.numero_de_perguntas = parseInt(prompt("Quantas perguntas serão feitas? "))
        this.perguntas = [];
        this.gerar_perguntas()
    
        clear()
        this.numero_de_respostas = parseInt(prompt("Quantas respostas possíveis serão dadas? "))
        this.gerar_respostas()

        this.conteudo = {
            titulo: this.titulo,
            perguntas: this.perguntas,
            respostas: this.respostas
        }
    }

    obter_opcoes(){
        let opcoes = [];
        const MAX_OPCOES = 5;
        
        for(let i=0;i<MAX_OPCOES;i++){
            clear()
            i>1 && console.log('Escreva "sair" para concluir');

            let opcao = {}
            opcao.descricao = prompt(`Escreva a descrição da opção ${i+1}: `);
            if (opcao.descricao.toLowerCase()=="sair" && i>1){
                return opcoes
            }
            opcao.peso = prompt(`Escreva o peso da opção ${i+1}: `)
            opcoes.push({...opcao})
        }
        return opcoes
    }
    
    gerar_perguntas(){
        for (let i=0; i<this.numero_de_perguntas;i++){
            let pergunta = {};
            clear()
            pergunta.descricao = prompt("Qual é a pergunta? ");
            pergunta.opcoes = this.obter_opcoes();
            this.perguntas.push({...pergunta})
        }
    }
    
    gerar_respostas(){
        this.respostas = new Map();
        clear()
        for (let i=0; i<this.numero_de_respostas;i++){
            const descricao = prompt("Qual é a resposta? ");
            const peso_maximo = prompt("Qual é o peso máximo da resposta? ");
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
    new Quiz(conteudo);
}

export default main;