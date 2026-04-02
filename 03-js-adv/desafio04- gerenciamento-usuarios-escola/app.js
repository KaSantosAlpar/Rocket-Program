var app = angular.module('EscolaApp', []);

app.controller('AppController', function($scope) {
    
    // REQUISITO: Variável mensagem
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";

    // REQUISITO: Objeto usuario inicial
    $scope.usuario = {
        nome: "João",
        tipo: "Aluno"
    };

    // MÉTODOS BÔNUS (Para testar o ng-if na tela)
    $scope.definirAluno = function() {
        $scope.usuario = {
            nome: "João",
            tipo: "Aluno"
        };
    };

    $scope.definirProfessor = function() {
        $scope.usuario = {
            nome: "Carlos Oliveira",
            tipo: "Professor"
        };
    };

    $scope.limparUsuario = function() {
        $scope.usuario = {};
        $scope.mensagem = "Usuário removido.";
    };

    console.log(' AppController inicializado com sucesso!');
});