Desafio 1 
JS Adv. 

Você foi contratado para criar um sistema simples de exibição de perfis em um site de uma escola. Crie as seguintes classes em JavaScript: 
Uma classe base chamada Usuario, que possui: 

 propriedades: nome, email, senha ;
 método: exibirPerfil() que mostra na tela o nome e o email ;

Duas subclasses: 
 Aluno, que herda de Usuario e adiciona a propriedade turma ;
 Professor, que herda de Usuario e adiciona a propriedade matérias ;

Um arquivo adicional, pode ser ou não uma classe, para realizar o login e armazenar os usuários em um array. Crie alguns usuários alunos e professores e guarde nesse array. Ao usuário digitar o email e a senha em uma tela de login, você deve verificar se o email e a senha batem com um dos usuários no array. Se sim, guardar o usuário no localStorage e redirecionar para uma tela que exibirá dados, buscando no localStorage. Se não, mostrar 
um erro abaixo da senha.  Cada uma das subclasses deve sobrescrever o método exibirPerfil() para incluir suas informações adicionais. 

Depois, crie instâncias de Aluno e Professor e chame o método exibirPerfil() de cada uma 
para ver os diferentes comportamentos no console.

**Dica: você pode usar innerHTML += ‘...’ para mostrar os dados na página. **
**Dica: Use window.location.href para redirecionar entre páginas. Guarde esse desafio no repositório de sempre na pasta: sistema-escolar **