import os

def cadastrar():
    pass


def listar():
    pass


def excluir():
    pass


def descrever():
    pass


def editar():
    pass

diretorio_base = 'C://Temp//caprichapp'

os.mkdir(diretorio_base)


menu = {
    '1': cadastrar,
    '2': listar,
    '3': excluir,
    '4': descrever,
    '5': editar
}


def show_menu():
    message = '''
    Selecione uma das opções:
        1) Cadastrar um questionário
        2) Listar todos os questionários
        3) Excluir um questionário
        4) Descrever um questionário
        5) Editar um questionário
    '''

    while True:
        opcoes = menu.keys()
        opcao_selecionada = input(message)

        if opcao_selecionada in opcoes:
            input(menu[opcao_selecionada])
            break


def main():
    show_menu()


# main()
