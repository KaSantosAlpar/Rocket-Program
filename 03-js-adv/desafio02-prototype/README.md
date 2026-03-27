Desafio 2
JS Adv.

No JavaScript, arrays herdam métodos úteis através de Array.prototype, como map, filter,reduce e outros.
Neste desafio, sua missão é recriar alguns desses métodos manualmente, simulando como eles funcionam por trás dos panos.
Regras:

1. Crie um array qualquer com alguns números ou strings.

2. Recrie manualmente os seguintes métodos usando Array.prototype:

o meuMap()
o meuFilter()
o meuReduce()

Cada um deles deve funcionar da mesma forma que o original:
Exemplo esperado:

const numeros = [1, 2, 3];
const dobrados = numeros.meuMap(n => n * 2); // [2, 4, 6]

Dicas:

 Use Array.prototype.meuMap = function(callback) { ... }
 Use this para acessar o array dentro da função
 Teste comparando o resultado com os métodos nativos

**Desafio bônus: recrie também meuForEach() ou meuFind() 
Guarde esse desafio no repositório de sempre na pasta: prototipos**