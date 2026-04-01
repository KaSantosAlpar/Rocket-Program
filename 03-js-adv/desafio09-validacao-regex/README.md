Desafio 9
JS Adv.
Você vai implementar um validador de dados usando expressões regulares em JavaScript
puro, dentro de um formulário HTML.
Objetivo:
Validar os seguintes campos usando expressões regulares:
 Nome (apenas letras e espaços)
 Email (formato padrão de email)
 CPF (formato 000.000.000-00)
Requisitos:
Crie um formulário com os três campos:
 nome
 email
 cpf
Ao clicar em validar, verifique cada campo com regex e mostre mensagens:
“Válido 脥�” ou “Inválido ” abaixo de cada input
Use test() das expressões regulares para fazer a checagem.
Pinte a borda do input de verde ou vermelho conforme a validação
Bloqueie o envio do formulário se houver campos inválidos
Dica: Use addEventListener('submit', e => e.preventDefault()) pra evitar refresh da página.
Guarde esse desafio no repositório de sempre na pasta: validacao-regex