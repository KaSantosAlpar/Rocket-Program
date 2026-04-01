class CentralDeLuzes {
    static _instancia;

    constructor() {
        if (CentralDeLuzes._instancia) {
            return CentralDeLuzes._instancia;
        }

        this.luzes = {
            quarto: false,
            sala: false,
            cozinha: false,
            banheiro: false,
            garagem: false
        };

        CentralDeLuzes._instancia = this;
    }

    static getInstance() {
        if (!CentralDeLuzes._instancia) {
            CentralDeLuzes._instancia = new CentralDeLuzes();
        }
        return CentralDeLuzes._instancia;
    }

    ligar(comodo) {
        if (this.luzes.hasOwnProperty(comodo)) {
            this.luzes[comodo] = true;
            this.atualizarInterface(comodo);
            return `✅ Luz do ${comodo} LIGADA!`;
        }
        return `❌ Cômodo inválido!`;
    }

    desligar(comodo) {
        if (this.luzes.hasOwnProperty(comodo)) {
            this.luzes[comodo] = false;
            this.atualizarInterface(comodo);
            return `❌ Luz do ${comodo} DESLIGADA!`;
        }
        return `❌ Cômodo inválido!`;
    }

    atualizarInterface(comodo) {
        const div = document.querySelector(`[data-comodo="${comodo}"]`);
        if (!div) return;

        // controla CSS corretamente
        div.setAttribute('data-luz', this.luzes[comodo] ? 'ligada' : 'desligada');

        // atualiza texto
        const status = div.querySelector('.luz-status');
        if (status) {
            status.textContent = this.luzes[comodo] ? 'LIGADA' : 'DESLIGADA';
        }
    }

    status() {
        return Object.entries(this.luzes)
            .map(([c, e]) => e ? `🟢 ${c}` : `🔴 ${c}`)
            .join('\n');
    }

    tudoLigado() {
        Object.keys(this.luzes).forEach(c => this.ligar(c));
        return '🏠 Todas as luzes ligadas!';
    }

    tudoDesligado() {
        Object.keys(this.luzes).forEach(c => this.desligar(c));
        return '🏠 Todas as luzes desligadas!';
    }
}