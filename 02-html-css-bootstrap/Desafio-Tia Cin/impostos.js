// 1. Variáveis Iniciais
let precoOriginal = 150.50; // Exemplo em decimal
let temDireitoDesconto = false; // Altere para false/true para testar

// 2. Gerando ICMS randômico entre 12 e 25
// Math.random() gera entre 0 e 1. Multiplicamos pela diferença (13) e somamos o mínimo (12).
let icmsPercentual = Math.floor(Math.random() * (25 - 12 + 1)) + 12;

// 3. Processamento
let valorComDesconto = precoOriginal;
let descontoAplicado = "Não";

if (temDireitoDesconto) {
    valorComDesconto = precoOriginal * 0.90; // Retira 10%
    descontoAplicado = "Sim (10%)";
}

let valorFinalComImposto = valorComDesconto * (1 + (icmsPercentual / 100));

// 4. Retorno (Saída de Dados)
console.log(`--- CALCULADORA DE IMPOSTOS ---`);
console.log(`Valor Original: R$ ${precoOriginal.toFixed(2)}`);
console.log(`Teve Desconto? ${descontoAplicado}`);
console.log(`Valor com Desconto: R$ ${valorComDesconto.toFixed(2)}`);
console.log(`ICMS aplicado (Sorteado): ${icmsPercentual}%`);
console.log(`VALOR FINAL: R$ ${valorFinalComImposto.toFixed(2)}`);