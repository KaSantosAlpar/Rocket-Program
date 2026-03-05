// Valores de a, b e c para a fórmula de Bhaskara
let a = 1;
let b = 4;
let c = 12;

// A) Verificação 
if (a === 0) {
    console.log("A equação não é do segundo grau, pois o valor de a é igual a zero.");
}
let delta = (b * b) + (4 * a * c);

//2° Calculando a raiz quadrada  do delta
let raizDelta = Math.sqrt(delta);

// Calculando as possibilidades (x1 e x2)
let x1 = (-b + raizDelta) / (2 * a);
let x2 = (-b - raizDelta) / (2 * a);    

console.log(`O valor de delta é: ${delta}`);
console.log(`O valor da raiz quadrada de delta é: ${raizDelta}`);
console.log(`O valor de x1 é: ${x1}`);
console.log(`O valor de x2 é: ${x2}`);