import { CriadorDeConteudo } from "./capitulo3.js";
import fs from 'fs/promises'; // Importe o módulo fs.promises para operações de arquivo assíncronas.

class Menu {
    constructor() {
        this.caminho = "C:\\temp\\caprichapp\\";
    }

    formatar(texto) {
        const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\/\-="']/g;
        texto = texto.replace(regex, '')
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "") + '.json';
    }

    async salvar_em_arquivo(conteudo, nome_do_arquivo) {
        try {
            const caminho_completo = this.caminho + nome_do_arquivo;
            await fs.writeFile(caminho_completo, JSON.stringify(conteudo, null, 2), 'utf8');
            console.log("Arquivo salvo, parabéns!");
        } catch (erro) {
            console.error("Erro ao salvar o arquivo:", erro);
        }
    }

    async gerar_conteudo(){
        let criador = new CriadorDeConteudo();
        await criador.criarConteudo();
        return criador.get_conteudo;
    }

    async cadastrar() {
        try {
            let conteudo = await this.gerar_conteudo();
            conteudo.respostas = Array.from(conteudo.respostas)
            const titulo = conteudo.titulo;
            if(titulo){
                const nome_do_arquivo = this.formatar(titulo);
                console.log(this.caminho + nome_do_arquivo);
                await this.salvar_em_arquivo(conteudo, nome_do_arquivo);
            }
        } catch (erro) {
            console.error("Erro ao cadastrar:", erro);
        }
    }
}

const main = async () => {
    const menu = new Menu();
    await menu.cadastrar();
};

export default main;
