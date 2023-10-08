import readline from 'readline';
import clear from 'clear-console';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Quiz {
    constructor(conteudo_do_quiz) {
        this.titulo = conteudo_do_quiz.titulo;
        this.perguntas = conteudo_do_quiz.perguntas;
        this.respostas = conteudo_do_quiz.respostas;
    }

    async introducao() {
        console.log(`\n${this.titulo}, responda cada pergunta a seguir.\n`);
        console.log("Vamos começar? (pressione enter)\n\n");
        await this.question(" "); // Aguarda a entrada do usuário
    }

    async question(prompt) {
        return new Promise((resolve) => {
            rl.question(prompt, (input) => {
                resolve(input);
            });
        });
    }

    obter_opcoes(){
        let opcoes = [];
        const MAX_OPCOES = 5;
        
        for(let i=0;i<MAX_OPCOES;i++){
            clear()
            i>1 && console.log('Escreva "sair" para concluir');

            let opcao = {}
            opcao.descricao = read.question(`Escreva a descrição da opção ${i+1}: `);
            if (opcao.descricao.toLowerCase()=="sair" && i>1){
                return opcoes
            }
            opcao.peso = read.question(`Escreva o peso da opção ${i+1}: `)
            opcoes.push({...opcao})
        }
        return opcoes
    }

    imprimir_opcoes(array){
        return array.map((opcao, indice) => `[${indice}] ${opcao.descricao}`).join('\n');
    }

    async perguntar() {
        let pontuacao_total = 0;
        for (const pergunta of this.perguntas) {
            clear();
            const { descricao, opcoes } = pergunta;
            let descricoes_opcoes = opcoes.map(op => op.descricao);
            this.imprimir_opcoes(opcoes)
            const index = await this.question(descricao + " " + descricoes_opcoes.join(", ") + ": ");
            let peso = opcoes[index].peso;
            pontuacao_total += +peso;
        }
        return pontuacao_total;
    }

    analisar() {
        clear();
        console.log('Pontuação Total = ', this.pontuacao, '\n');

        for (const [peso_maximo, descricao] of this.respostas) {
            if (this.pontuacao <= peso_maximo) {
                console.log(descricao);
                return null;
            }
        }
    }

    async iniciar() {
        await this.introducao();
        this.pontuacao = await this.perguntar();
        this.analisar();
        rl.close();
    }
}

export class CriadorDeConteudo {
    constructor() {
        this.titulo = "";
        this.numero_de_perguntas = 0;
        this.numero_de_respostas = 0;
        this.perguntas = [];
        this.respostas = new Map();
    }

    async question(prompt) {
        return new Promise((resolve) => {
            rl.question(prompt, (input) => {
                resolve(input);
            });
        });
    }

    async obter_opcoes(){
        let opcoes = [];
        const MAX_OPCOES = 5;
        
        for(let i=0;i<MAX_OPCOES;i++){
            clear()
            i>1 && console.log('Escreva "sair" para concluir');

            let opcao = {}
            opcao.descricao = await this.question(`Escreva a descrição da opção ${i+1}: `);
            if (opcao.descricao.toLowerCase()=="sair" && i>1){
                return opcoes
            }
            opcao.peso = await this.question(`Escreva o peso da opção ${i+1}: `)
            opcoes.push({...opcao})
        }
        return opcoes
    }

    async gerar_perguntas() {
        for (let i = 0; i < this.numero_de_perguntas; i++) {
            let pergunta = {};
            clear();
            pergunta.descricao = await this.question("Qual é a pergunta? ");
            pergunta.opcoes = await this.obter_opcoes();
            this.perguntas.push({ ...pergunta });
        }
    }

    async gerar_respostas() {
        clear();
        for (let i = 0; i < this.numero_de_respostas; i++) {
            const descricao = await this.question("Qual é a resposta? ");
            const peso_maximo = await this.question("Qual é o peso máximo da resposta? ");
            this.respostas.set(peso_maximo, descricao);
        }
    }

    async criarConteudo() {
        this.titulo = await this.question("Qual é o título do questionário? ");
        this.numero_de_perguntas = parseInt(await this.question("Quantas perguntas serão feitas? "));
        await this.gerar_perguntas();

        clear();
        this.numero_de_respostas = parseInt(await this.question("Quantas respostas possíveis serão dadas? "));
        await this.gerar_respostas();

        this.conteudo = {
            titulo: this.titulo,
            perguntas: this.perguntas,
            respostas: this.respostas
        };
    }

    get get_conteudo() {
        return this.conteudo;
    }
}

const main = async () => {
    let criador = new CriadorDeConteudo();
    await criador.criarConteudo();
    const conteudo = criador.get_conteudo;
    let quiz = new Quiz(conteudo);
    await quiz.iniciar();
};

export default main;