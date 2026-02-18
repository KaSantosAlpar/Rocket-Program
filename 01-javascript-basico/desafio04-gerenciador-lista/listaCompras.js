const prompt = require("prompt-sync")();

let listaDeCompras = [];

function adicionarItem(item) {

    listaDeCompras.push(item);

    console.log("Item \"" + item + "\" adicionado!");

}

function removerItem(item) {

    let indice = listaDeCompras.indexOf(item);

    if (indice !== -1) {

        listaDeCompras.splice(indice, 1);

        console.log("Item \"" + item + "\" removido!");

    }

    else {

        console.log("Item não encontrado!");

    }

}

function exibirLista() {

    console.log("\nLista de Compras:");

    for (let i = 0; i < listaDeCompras.length; i++) {

        console.log(i + 1 + ". " + listaDeCompras[i]);

    }

}

let opcao = 0;

while (opcao !== 4) {

    console.log("\n1 - Adicionar item");
    console.log("2 - Remover item");
    console.log("3 - Exibir lista");
    console.log("4 - Sair");

    opcao = Number(prompt("Escolha: "));

    switch (opcao) {

        case 1:

            let itemAdicionar = prompt("Digite o item: ");

            adicionarItem(itemAdicionar);

            break;

        case 2:

            let itemRemover = prompt("Digite o item: ");

            removerItem(itemRemover);

            break;

        case 3:

            exibirLista();

            break;

        case 4:

            console.log("Programa encerrado");

            break;

        default:

            console.log("Opção inválida");

    }

}
