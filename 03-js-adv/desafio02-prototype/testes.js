// Array de teste com números e strings
const numeros = [1, 2, 3, 4, 5];
const strings = ['a', 'b', 'c', 'd'];
const misturado = [1, 'dois', 3, null, 5, undefined, 7];
const comBuracos = [1, , 3, , 5]; // Array com buracos

// ========== TESTES MAP ==========
console.log('\n === TESTES meuMap() ===');
const dobrados = numeros.meuMap(n => n * 2);
const maiusculas = strings.meuMap(s => s.toUpperCase());

console.log('Números dobrados:', dobrados); 
console.log('  Nativo:', numeros.map(n => n * 2));
console.log('Strings maiúsculas:', maiusculas);
console.log('  Nativo:', strings.map(s => s.toUpperCase()));

// ========== TESTES FILTER ==========
console.log('\n === TESTES meuFilter() ===');
const pares = numeros.meuFilter(n => n % 2 === 0);
const comA = strings.meuFilter(s => s.includes('a'));

console.log('Números pares:', pares);
console.log('  Nativo:', numeros.filter(n => n % 2 === 0));
console.log('Strings com "a":', comA);
console.log('  Nativo:', strings.filter(s => s.includes('a')));

// ========== TESTES REDUCE ==========
console.log('\n === TESTES meuReduce() ===');
const soma = numeros.meuReduce((acc, n) => acc + n, 0);
const produto = numeros.meuReduce((acc, n) => acc * n);
const comprimentoTotal = strings.meuReduce((acc, s) => acc + s.length, 0);

console.log('Soma:', soma, '  Nativo:', numeros.reduce((acc, n) => acc + n, 0));
console.log('Produto:', produto);
console.log('Comprimento total:', comprimentoTotal);

// ========== TESTES FOREACH ==========
console.log('\n === TESTES meuForEach() ===');
let somaForEach = 0;
numeros.meuForEach(n => somaForEach += n);
console.log('Soma via forEach:', somaForEach);

// ========== TESTES FIND ==========
console.log('\n === TESTES meuFind() ===');
const primeiroPar = numeros.meuFind(n => n % 2 === 0);
const primeiraMaiuscula = ['a', 'B', 'c'].meuFind(s => s === s.toUpperCase());

console.log('Primeiro par:', primeiroPar);
console.log('  Nativo:', numeros.find(n => n % 2 === 0));
console.log('Primeira maiúscula:', primeiraMaiuscula);

// ========== TESTES COM BURACOS ==========
console.log('\n === TESTES COM BURACOS ===');
console.log('Array com buracos:', comBuracos);
console.log('meuMap ignora buracos:', comBuracos.meuMap(x => x * 2)); // [2, , 6, , 10]
console.log('  Nativo:', comBuracos.map(x => x * 2));

// ========== TESTE REDUCE SEM INICIAL ==========
console.log('\n === REDUCE SEM VALOR INICIAL ===');
const maximo = [3, 1, 4, 1, 5].meuReduce((max, atual) => atual > max ? atual : max);
console.log('Máximo:', maximo);

// ========== PERFORMANCE TEST ==========
console.log('\n === TESTE DE PERFORMANCE (1000 elementos) ===');
const grandeArray = Array.from({length: 1000}, (_, i) => i);

console.time('meuMap');
grandeArray.meuMap(n => n * 2);
console.timeEnd('meuMap');

console.time('map nativo');
grandeArray.map(n => n * 2);
console.timeEnd('map nativo');