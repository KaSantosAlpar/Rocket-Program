// ========== 1. meuMap() ==========
Array.prototype.meuMap = function(callback, thisArg) {
    const resultado = [];
    
    for (let i = 0; i < this.length; i++) {
        if (i in this) { // Verifica se o índice existe (ignora buracos)
            // Chama callback com: valor, índice, array original
            const valorMapeado = callback.call(thisArg, this[i], i, this);
            resultado[i] = valorMapeado;
        }
    }
    
    return resultado;
};

// ========== 2. meuFilter() ==========
Array.prototype.meuFilter = function(callback, thisArg) {
    const resultado = [];
    let indiceResultado = 0;
    
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            // Chama callback com: valor, índice, array original
            const passaNoFiltro = callback.call(thisArg, this[i], i, this);
            if (passaNoFiltro) {
                resultado[indiceResultado] = this[i];
                indiceResultado++;
            }
        }
    }
    
    return resultado;
};

// ========== 3. meuReduce() ==========
Array.prototype.meuReduce = function(callback, valorInicial) {
    let acumulador;
    let inicio = 0;
    
    // Se não tem valorInicial, usa o primeiro elemento
    if (arguments.length < 2) {
        if (this.length === 0) {
            throw new TypeError('Reduce de array vazio requer valor inicial');
        }
        acumulador = this[0];
        inicio = 1;
    } else {
        acumulador = valorInicial;
    }
    
    for (let i = inicio; i < this.length; i++) {
        if (i in this) {
            // Chama callback com: acumulador, valorAtual, índice, array
            acumulador = callback.call(undefined, acumulador, this[i], i, this);
        }
    }
    
    return acumulador;
};

// ========== meuForEach() ==========
Array.prototype.meuForEach = function(callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            callback.call(thisArg, this[i], i, this);
        }
    }
};

// ========== meuFind() ==========
Array.prototype.meuFind = function(callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            // Retorna o primeiro elemento que satisfaz a condição
            if (callback.call(thisArg, this[i], i, this)) {
                return this[i];
            }
        }
    }
    // Retorna undefined se não encontrar
    return undefined;
};

console.log(' MÉTODOS PERSONALIZADOS IMPLEMENTADOS COM SUCESSO!');