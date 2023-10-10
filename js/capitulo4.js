import clear from 'clear-console';
import { CriadorDeConteudo } from "./capitulo3.js";
import fs from 'fs';

class Menu {
    constructor() {
        this.caminho = "C:\\temp\\caprichapp\\";
        this.arquivos = this.obter_arquivos();
        this.id = this.obter_id();
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
            clear();
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
        conteudo.id = this.id;
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
            return arquivos
        }else{
            return []
        }
    }

    obter_conteudo_de_arquivo(arquivo){
        let conteudo = fs.readFileSync(this.caminho+arquivo)
        conteudo = JSON.parse(conteudo);
        return conteudo;
    }

    listar_arquivos(){
        if(this.arquivos.length > 0){
            for (const arquivo of this.arquivos){
                const conteudo = this.obter_conteudo_de_arquivo(arquivo)
                console.log(`ARQUIVO ${conteudo.id} - ${conteudo.titulo}`);
            }
        }else{
            console.log("Não há arquivos para serem listados.");
        }
    }

    obter_id() {
        if(this.arquivos.length>0){
            const ids = this.arquivos.map((arq) => this.obter_conteudo_de_arquivo(arq).id);
            const ultimo_id = Math.max(...ids);
            const id = ultimo_id+1;
            return id;
        }else{
            return 1;
        }
    }
}

const main = async () => {
    const menu = new Menu();
    menu.listar_arquivos();
    // await menu.cadastrar();
};

export default main;
