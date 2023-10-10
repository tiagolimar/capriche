import { CriadorDeConteudo } from "./capitulo3.js";
import { exists } from 'node:fs';
import fs from 'fs';

class Menu {
    constructor() {
        this.caminho = "C:\\temp\\caprichapp\\";
        this.id = 0;
    }

    formatar(texto) {
        const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\/\-="']/g;
        texto = texto.replace(regex, "");
        return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") + ".json";
    }

    salvar_em_arquivo(conteudo, nome_do_arquivo) {
        try {
            const caminho_completo = this.caminho + nome_do_arquivo;
            conteudo = JSON.stringify(conteudo, null, 2);

            fs.writeFileSync(caminho_completo, conteudo, "utf8");
            console.log("Arquivo salvo, parabéns!");
        } catch (erro) {
            console.error("Erro ao salvar o arquivo:", erro);
        }
    }

    async gerar_conteudo() {
        let criador = new CriadorDeConteudo();
        await criador.criarConteudo();

        const conteudo = criador.get_conteudo;
        conteudo.respostas = Array.from(conteudo.respostas);

        return conteudo;
    }

    async cadastrar() {
        try {
            let conteudo = await this.gerar_conteudo();
            const titulo = conteudo.titulo;

            const nome_do_arquivo = this.formatar(titulo);
            this.salvar_em_arquivo(conteudo, nome_do_arquivo);
        } catch (erro) {
            console.error("Erro ao cadastrar:", erro);
        }
    }

    obter_arquivos() {
        if (fs.existsSync(this.caminho)) {
            const arquivos = fs.readdirSync(this.caminho);
            console.log(arquivos);
        }
    }

    async gerar_id() {
        const id = 0;
    }
}

const main = async () => {
    const menu = new Menu();
    // await menu.cadastrar();
    // menu.obter_arquivos();
};

export default main;
