import { CriadorDeConteudo } from "./capitulo3.js";

`C:\temp\caprichapp\


`

class Menu{
    constructor(){
        this.caminho = "C:\\temp\\caprichapp\\"
    }
    // listar()
    // excluir()
    // descrever()
    // editar()

    formatar(texto){
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "") + '.json'
    }

    salvar_em_arquivo(){
        console.log("Arquivo salvo, parabéns!")
    }

    cadastrar(){
        const conteudo = new CriadorDeConteudo()
        const nome_do_arquivo = this.formatar(conteudo.titulo)
        console.log(this.caminho + nome_do_arquivo);
        this.salvar_em_arquivo()
    }
}


const main = ()=>{
    const menu = new Menu();
    menu.cadastrar()
}

export default main;