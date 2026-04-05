var app = angular.module('EscolaApp', []);

// ✅ USUARIOSERVICE COM PROMISE
app.service('UsuarioService', function($q, $timeout) {
    var vm = this;
    var _usuarios = [
        {
            nome: "João Silva",
            email: "joao@email.com",
            tipo: "Aluno",
            dataCadastro: new Date(Date.now() - 86400000) // Ontem
        },
        {
            nome: "Maria Santos",
            email: "maria@email.com", 
            tipo: "Professor",
            dataCadastro: new Date()
        }
    ];
    
    // ✅ MÉTODO salvar() COM PROMISE
    vm.salvar = function(usuario) {
        var deferred = $q.defer();
        var timeoutId;
        
        console.log('🔄 Salvando usuário:', usuario);
        
        // ✅ SIMULA API (1-3 segundos aleatórios)
        var delay = Math.random() * 2000 + 1000; // 1-3s
        timeoutId = $timeout(function() {
            try {
                // ✅ ADICIONA AO ARRAY
                usuario.dataCadastro = new Date();
                _usuarios.push(usuario);
                
                console.log('✅ Usuário salvo com sucesso!');
                deferred.resolve({
                    sucesso: true,
                    mensagem: 'Usuário cadastrado com sucesso!',
                    usuario: usuario,
                    total: _usuarios.length
                });
            } catch (error) {
                console.error('❌ Erro ao salvar:', error);
                deferred.reject({
                    sucesso: false,
                    mensagem: 'Erro no servidor. Tente novamente.'
                });
            }
        }, delay);
        
        // ✅ CANCELA se necessário
        deferred.promise.cancel = function() {
            $timeout.cancel(timeoutId);
        };
        
        return deferred.promise;
    };
    
    // ✅ listar()
    vm.listar = function() {
        return _usuarios;
    };
    
    console.log('🔧 UsuarioService com Promise pronto!');
});

// ✅ APPCONTROLLER
app.controller('AppController', ['UsuarioService', function(UsuarioService) {
    var vm = this;
    vm.usuarios = UsuarioService.listar();
    
    console.log('✅ AppController inicializado');
}]);

// ✅ CADASTROCONTROLLER - VALIDAÇÃO + PROMISE
app.controller('CadastroController', ['UsuarioService', '$scope', function(UsuarioService, $scope) {
    var vm = this;
    
    // ✅ DADOS DO FORMULÁRIO
    vm.novoUsuario = { nome: '', email: '', tipo: '' };
    vm.salvando = false;
    vm.mensagem = { status: false };
    
    // ✅ SALVAR COM PROMISE
    vm.salvarUsuario = function(formValido) {
        if (!formValido) {
            vm.mensagem = {
                status: true,
                tipo: 'erro',
                icone: 'fas fa-times-circle',
                texto: 'Corrija os erros no formulário!'
            };
            return;
        }
        
        vm.salvando = true;
        vm.mensagem.status = false;
        
        // ✅ CHAMA SERVICE COM PROMISE
        UsuarioService.salvar(angular.copy(vm.novoUsuario))
            .then(function(resposta) {
                // ✅ SUCESSO
                vm.mensagem = {
                    status: true,
                    tipo: 'sucesso',
                    icone: 'fas fa-check-circle',
                    texto: resposta.mensagem + ' (Total: ' + resposta.total + ')'
                };
                
                // ✅ ATUALIZA LISTA PAI
                vm.app.usuarios = UsuarioService.listar();
                
                // ✅ LIMPA FORMULÁRIO
                vm.limparFormulario();
            })
            .catch(function(erro) {
                // ❌ ERRO
                vm.mensagem = {
                    status: true,
                    tipo: 'erro',
                    icone: 'fas fa-exclamation-triangle',
                    texto: erro.mensagem
                };
            })
            .finally(function() {
                vm.salvando = false;
            });
    };
    
    // ✅ LIMPAR
    vm.limparFormulario = function() {
        vm.novoUsuario = { nome: '', email: '', tipo: '' };
        vm.mensagem.status = false;
        if (vm.formCadastro) {
            vm.formCadastro.$setPristine();
            vm.formCadastro.$setUntouched();
        }
    };
    
    console.log('✅ CadastroController com validação pronto!');
}]);