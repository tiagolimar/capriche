
import fs from 'fs';
import clear from 'clear-console';
import read from 'readline-sync';
import { CriadorDeConteudo } from "./capitulo3.js";

read.setDefaultOptions({ encoding: 'utf-8' });

class Menu{
    constructor(){
        this.caminho = "C:\\temp\\caprichapp\\";
        this.gerar_id();
    }
    // listar()
    // excluir()
    // descrever()
    // editar()

    gerar_id(){
        if (fs.existsSync(this.caminho)){
            const arquivos = fs.readdirSync(this.caminho);
            if (arquivos.length < 1){
                this.id = 1;
            }else{
                this.id = arquivos.length;
            }
        }else{
            fs.mkdirSync(this.caminho,{recursive:true});
            this.id = 1;
        }
    }

    formatar(texto){
        texto = texto.toLowerCase().replaceAll(' ','_');
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "") + '.json';
    }

    cadastrar(){
        const conteudo = new CriadorDeConteudo();
        conteudo.id = this.id;
        clear()
        console.log(conteudo.id);
        read.question("...")
        const nome_do_arquivo = this.caminho + this.formatar(conteudo.titulo);
        fs.writeFileSync(nome_do_arquivo,JSON.stringify(conteudo));
    }
}


const main = ()=>{
    const menu = new Menu();
    menu.cadastrar();
}

export default main;