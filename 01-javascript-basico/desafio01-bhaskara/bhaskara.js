// Valores de a, b e c
let a = 1;
let b = 4;
let c = 12;

// 1° PASSO: Verificar o "a" antes de qualquer conta
if (a === 0) {
    console.log("O valor de 'a' não pode ser zero.");
} 
else {
    // Se o 'a' for válido, calcula-se o delta.
    
    let delta = (b * b) - (4 * a * c);
    console.log(`O valor de delta é: ${delta}`);

    // 2° PASSO: Verificar o Delta antes de calcular a Raiz
    if (delta < 0) {
        // Alínea B: Se for negativo, não existem raízes reais.
        console.log("Não existem raízes reais.");
    } 
    else if (delta === 0) {
        // Alínea C: Delta zero, existe apenas uma raiz real.
        let x = -b / (2 * a);
        console.log(`Existe apenas uma raiz real: ${x}`);
    } 
    else {
        // Alínea D: Delta positivo e calculamos as duas raízes.
        let raizDelta = Math.sqrt(delta);
        let x1 = (-b + raizDelta) / (2 * a);
        let x2 = (-b - raizDelta) / (2 * a);

        console.log(`O valor da raiz quadrada de delta é: ${raizDelta}`);
        console.log(`O valor de x1 é: ${x1}`);
        console.log(`O valor de x2 é: ${x2}`);
    }
}