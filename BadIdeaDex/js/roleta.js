let girando = false;
let ideiasRestantes = [...ideias];
let rotacaoAtual = 0; // O segredo está aqui: acumular o valor!

function girar() {
    if (girando) return;
    
    const roleta = document.getElementById("roleta");
    if (ideiasRestantes.length === 0) {
        alert("A radiação acabou! Todas as ideias foram sorteadas.");
        return;
    }

    girando = true;

    // 1. Sorteio
    const indexAleatorio = Math.floor(Math.random() * ideiasRestantes.length);
    const ideiaSorteada = ideiasRestantes[indexAleatorio];
    ideiasRestantes.splice(indexAleatorio, 1);

    // 2. Cálculo de Ângulo
    const totalFatias = 10;
    const grausPorFatia = 360 / totalFatias;
    
    // Descobrimos a posição original da ideia no array principal de 10 itens
    const posicaoNaRoleta = ideias.findIndex(i => i.nome === ideiaSorteada.nome);

    // Cálculo para centralizar a fatia no ponteiro (topo)
    // Damos 5 voltas completas (1800deg) + o deslocamento da fatia
    const voltas = 1800; 
    const deslocamentoFatia = (totalFatias - posicaoNaRoleta) * grausPorFatia;
    
    // IMPORTANTE: Somamos ao que já tinha rotacionado antes
    rotacaoAtual += voltas + deslocamentoFatia;

    // 3. Animação
    roleta.style.transition = "transform 5s cubic-bezier(0.15, 0, 0.15, 1)";
    roleta.style.transform = `rotate(${rotacaoAtual}deg)`;

    // 4. Finalização
    setTimeout(() => {
        girando = false;
        // Chama a função que criamos para abrir o modal
        mostrarSuspense(ideiaSorteada); 
    }, 5100);
}

function mostrarSuspense(ideia) {
    const modalElement = document.getElementById('modalIdeia');
    const modalBody = document.getElementById("modalBody");
    
    // Se o bootstrap não estiver abrindo, garantimos a instância aqui
    const instanciaModal = bootstrap.Modal.getOrCreateInstance(modalElement);
    
    // Passo 1: Nível de Toxicidade
    modalBody.innerHTML = `
        <div class="text-center p-4">
            <h2 class="text-warning mb-4">☢️ NÍVEL DE TOXICIDADE ☢️</h2>
            <div class="display-1 fw-bold mb-4" style="color:var(--cor-neon, #39FF14); text-shadow: 0 0 20px currentColor;">
                ${ideia.nivel}/5
            </div>
            <button class="btn btn-lg w-100" style="background:#39FF14; color:#000; font-weight:bold;" onclick="revelarCardFinal('${ideia.nome}')">
                REVELAR DELÍRIO
            </button>
        </div>
    `;
    
    instanciaModal.show();
}

function revelarCardFinal(nome) {
    const ideia = ideias.find(i => i.nome === nome);
    const modalBody = document.getElementById("modalBody");

    // Forçamos o caminho que funcionou no seu navegador
    const path = `BadIdeaDex/${ideia.imagem}`;

    modalBody.innerHTML = `
        <div class="card-revelado-neon" style="border-color: ${ideia.cor === 'red' ? '#ff3c3c' : '#39FF14'}">
            <img src="${path}" class="img-fluid rounded mb-3" style="border: 2px solid #333">
            <h3>${ideia.emoji} ${ideia.nome}</h3>
            <p class="small text-uppercase">Nível: ${ideia.nivel}/5</p>
            <hr>
            <p><strong>📝 DELÍRIO:</strong> ${ideia.descricao}</p>
            <p><strong>💀 DANO:</strong> ${ideia.efeito}</p>
            <button class="btn btn-outline-light w-100 mt-2" data-bs-dismiss="modal">FECHAR</button>
        </div>
    `;
}