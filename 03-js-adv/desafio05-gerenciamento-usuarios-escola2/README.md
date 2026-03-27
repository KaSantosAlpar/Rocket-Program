Desafio 5 
JS Adv. 

Essa é uma continuação do desafio anterior. 
-> Agora que já temos o AngularJS rodando, vamos trabalhar com escopos aninhados e aplicar filtros diretamente na visualização. 

Objetivo: 
Listar vários usuários na tela, filtrá-los por tipo (Aluno ou Professor) e exibir dados 
formatados com filtros. 

Requisitos: 
No seu AppController, crie um array chamado usuarios, contendo pelo menos 5 objetos 
com as propriedades: 

 nome 
 tipo ("Aluno" ou "Professor") 
 dataCadastro (use new Date()) 
Mostre todos os usuários na tela usando ng-repeat. 

Acima da lista, adicione um campo de busca com ng-model="filtro" e filtre os usuários em tempo real com | filter:filtro. 

Adicione outro campo ng-model="filtroTipo" para filtrar por tipo (Aluno ou Professor). 

-> Use | filter:{ tipo: filtroTipo }. 
-> Use filtros AngularJS para: 
-> Mostrar o nome com uppercase 
-> Mostrar dataCadastro com date:'dd/MM/yyyy' 
-> Separe a lista em um ng-controller diferente e veja como os escopos funcionam. 
-> Mostre o total de alunos e professores com {{ (usuarios | filter:{tipo:'Aluno'}).length }}