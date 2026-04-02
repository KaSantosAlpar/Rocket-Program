var app = angular.module('EscolaApp', []);

//  CONTROLLER PAI: Gerencia a base de dados e a mensagem principal
app.controller('AppController', function($scope) {
    var vm = this;
    
    const mensagemPadrao = "Bem-vindo ao sistema de cadastro escolar";
    vm.mensagem = mensagemPadrao;

    // Array de usuários (Requisito do Desafio 5)
    vm.usuarios = [
        { nome: "João Silva", tipo: "Aluno", dataCadastro: new Date(2024, 0, 15), status: "Matriculado" },
        { nome: "Maria Santos", tipo: "Aluno", dataCadastro: new Date(2024, 1, 20), status: "Matriculado" },
        { nome: "Carlos Oliveira", tipo: "Professor", dataCadastro: new Date(2023, 11, 1), status: "Contratado" },
        { nome: "Ana Costa", tipo: "Professor", dataCadastro: new Date(2024, 0, 10), status: "Contratada" },
        { nome: "Pedro Lima", tipo: "Aluno", dataCadastro: new Date(2024, 2, 5), status: "Novo" },
        { nome: "Fernanda Souza", tipo: "Professor", dataCadastro: new Date(2024, 1, 28), status: "Substituta" }
    ];

    // Função para resetar a mensagem quando um filtro ou seleção ocorrer
    vm.restaurarMensagem = function() {
        vm.mensagem = mensagemPadrao;
    };
});

//  CONTROLLER FILHO: Gerencia a exibição e seleção
app.controller('ListaUsuariosController', function($scope) {
    var vm = this;
    vm.filtroNome = '';
    vm.filtroTipo = '';
    vm.usuarioSelecionado = null;

    vm.selecionar = function(usuario) {
        vm.usuarioSelecionado = usuario;
        // Acessa o pai para resetar a mensagem caso estivesse "Usuário removido"
        $scope.app.restaurarMensagem();
    };
});