const prompt = require("prompt-sync")();

// gera número entre 1 e 100
let numeroSecreto = Math.round(Math.random() * 100);

let palpite = 0;
let tentativas = 0;

while (palpite !== numeroSecreto) {

    palpite = Number(prompt("Digite um número entre 1 e 100: "));

    tentativas++;

    if (palpite > numeroSecreto) {

        console.log("O número secreto é MENOR");

    } 
    
    else if (palpite < numeroSecreto) {

        console.log("O número secreto é MAIOR");

    } 
    
    else {

        console.log("PARABÉNS! Você acertou!");
        console.log("Tentativas:", tentativas);

    }

}
