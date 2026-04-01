class AppAutomacao {
    constructor() {
        this.central = CentralDeLuzes.getInstance();
        this.init();
    }

    init() {
        this._setupEventos();
        this._atualizarStatus();
        this._log(' Sistema iniciado!');
    }

    _setupEventos() {
        document.querySelectorAll('[data-acao][data-comodo]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const { acao, comodo } = e.target.dataset;

                const mensagem = acao === 'ligar'
                    ? this.central.ligar(comodo)
                    : this.central.desligar(comodo);

                this._log(mensagem);
                this._atualizarStatus();
            });
        });

        document.getElementById('tudoLigar').onclick = () => {
            this._log(this.central.tudoLigado());
            this._atualizarStatus();
        };

        document.getElementById('tudoDesligar').onclick = () => {
            this._log(this.central.tudoDesligado());
            this._atualizarStatus();
        };

        document.getElementById('statusBtn').onclick = () => {
            this._log('📊 STATUS:\n' + this.central.status());
        };
    }

    _atualizarStatus() {
        const total = Object.values(this.central.luzes).filter(Boolean).length;
        document.getElementById('status').textContent =
            `🟢 ${total}/5 luzes acesas`;
    }

    _log(msg) {
        const log = document.getElementById('logMensagens');
        const hora = new Date().toLocaleTimeString();

        log.innerHTML += `<div>[${hora}] ${msg}</div>`;
        log.scrollTop = log.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new AppAutomacao();
});