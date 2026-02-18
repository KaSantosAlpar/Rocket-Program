const prompt = require("prompt-sync")();

let usuarios = [];

function adicionarUsuario(nome, idade, email) {

    let existe = usuarios.find(u => u.email === email);

    if (existe) {

        console.log("Email já cadastrado!");
        return;

    }

    let usuario = {

        nome: nome,
        idade: idade,
        email: email

    };

    usuarios.push(usuario);

    console.log("Usuário adicionado!");

}

function removerUsuario(email) {

    let indice = usuarios.findIndex(u => u.email === email);

    if (indice !== -1) {

        usuarios.splice(indice, 1);

        console.log("Usuário removido!");

    }

    else {

        console.log("Usuário não encontrado!");

    }

}

function listarUsuarios() {

    console.log("\nUsuários cadastrados:");

    for (let usuario of usuarios) {

        console.log(usuario.nome, "-", usuario.idade, "-", usuario.email);

    }

}

let opcao = 0;

while (opcao !== 4) {

    console.log("\n1 - Adicionar");
    console.log("2 - Remover");
    console.log("3 - Listar");
    console.log("4 - Sair");

    opcao = Number(prompt("Escolha: "));

    switch (opcao) {

        case 1:

            let nome = prompt("Nome: ");
            let idade = prompt("Idade: ");
            let email = prompt("Email: ");

            adicionarUsuario(nome, idade, email);

            break;

        case 2:

            let emailRemover = prompt("Email: ");

            removerUsuario(emailRemover);

            break;

        case 3:

            listarUsuarios();

            break;

        case 4:

            console.log("Encerrado");

            break;

        default:

            console.log("Opção inválida");

    }

}
