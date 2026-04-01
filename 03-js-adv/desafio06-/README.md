Desafio 6 
JS Adv. 

Essa é uma continuação do desafio anterior. 
Hora de separar responsabilidades no app! Vamos criar um Service para lidar com os dados dos usuários e usar injeção de dependência no controller. 

Objetivo: 
Delegar a lógica de manipulação dos usuários para um service, mantendo o controller 
mais limpo. 

Requisitos: 
 Crie um módulo AngularJS com um service chamado UsuarioService. 
 No UsuarioService, implemente: 
 Um array privado de usuarios ;
 Um método listar() que retorna esse array ;
 Um método adicionar(usuario) para adicionar um novo usuário ;

No AppController, injete o UsuarioService e use ele para: 
 Listar os usuários no scope ;
 Adicionar um novo usuário (pode ser um botão com função) ;
 Na tela, mostre os usuários com ng-repeat e adicione um formulário simples para ;

*adicionar novos (nome e tipo). 
*Adicione um método remover(index) no service 
*Crie um botão "Remover" para excluir usuários da lista 

Dica: use .controller() e .service() na mesma app 
Ex: angular.module('app', []).service('UsuarioService', function() { ... })