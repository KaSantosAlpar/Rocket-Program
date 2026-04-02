var app = angular.module('EscolaApp', []);

//  SERVICE: Única fonte de verdade para os dados
app.service('UsuarioService', function() {
    var _usuarios = [
        { nome: "João Silva", tipo: "Aluno", dataCadastro: new Date() },
        { nome: "Carlos Oliveira", tipo: "Professor", dataCadastro: new Date() }
    ];

    this.listar = function() {
        return _usuarios;
    };

    this.adicionar = function(usuario) {
        usuario.dataCadastro = new Date();
        _usuarios.push(usuario);
    };

    this.remover = function(index) {
        _usuarios.splice(index, 1);
    };
});

//  APPCONTROLLER (Pai)
app.controller('AppController', ['UsuarioService', function(UsuarioService) {
    var vm = this;
    // Vincula a lista do service diretamente ao controller pai
    vm.usuarios = UsuarioService.listar();
}]);

//  LISTACONTROLLER (Filho - Formulário e Ações)
app.controller('ListaController', ['UsuarioService', '$scope', function(UsuarioService, $scope) {
    var vm = this;
    
    vm.novoUsuario = { nome: '', tipo: '' };

    vm.adicionarUsuario = function() {
        if (vm.novoUsuario.nome && vm.novoUsuario.tipo) {
            // Usamos angular.copy para não limpar o que já foi enviado
            UsuarioService.adicionar(angular.copy(vm.novoUsuario));
            vm.limparForm();
        }
    };

    vm.removerUsuario = function(index) {
        UsuarioService.remover(index);
    };

    vm.limparForm = function() {
        vm.novoUsuario = { nome: '', tipo: '' };
    };
}]);