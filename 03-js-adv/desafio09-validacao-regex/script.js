// EXPRESSÕES REGULARES
const regexPatterns = {
    nome: /^[A-Za-zÀ-Úà-ú\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
};

// Elementos do DOM
const form = document.getElementById('formValidacao');
const inputs = {
    nome: document.getElementById('nome'),
    email: document.getElementById('email'),
    cpf: document.getElementById('cpf')
};
const status = {
    nome: document.getElementById('status-nome'),
    email: document.getElementById('status-email'),
    cpf: document.getElementById('status-cpf')
};
const btnValidar = document.getElementById('btnValidar');
const resultado = document.getElementById('resultado');

// Função para validar campo individual
function validarCampo(campo, valor) {
    const regex = regexPatterns[campo];
    const isValid = regex.test(valor);
    
    // Remove classes anteriores
    inputs[campo].classList.remove('valido', 'invalido');
    status[campo].className = 'status';
    status[campo].textContent = '';
    
    if (valor.trim() === '') {
        status[campo].textContent = 'Campo obrigatório';
        inputs[campo].classList.add('invalido');
        return false;
    }
    
    if (isValid) {
        inputs[campo].classList.add('valido');
        status[campo].className = 'status valido-status';
        status[campo].innerHTML = '✅ Válido';
        return true;
    } else {
        inputs[campo].classList.add('invalido');
        status[campo].className = 'status invalido-status';
        status[campo].innerHTML = '❌ Inválido';
        return false;
    }
}

// Validação em tempo real (input)
Object.keys(inputs).forEach(campo => {
    inputs[campo].addEventListener('input', function() {
        validarCampo(campo, this.value);
        atualizarBotao();
    });
});

// Máscara CPF
inputs.cpf.addEventListener('input', function(e) {
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = valor;
});

// Função para atualizar estado do botão
function atualizarBotao() {
    const todosValidos = Object.keys(inputs).every(campo => {
        const valor = inputs[campo].value.trim();
        return valor !== '' && inputs[campo].classList.contains('valido');
    });
    
    btnValidar.disabled = !todosValidos;
}

// Submit do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita refresh
    
    // Valida todos os campos
    let todosValidos = true;
    Object.keys(inputs).forEach(campo => {
        const valido = validarCampo(campo, inputs[campo].value);
        if (!valido) todosValidos = false;
    });
    
    // Mostra resultado final
    if (todosValidos) {
        resultado.innerHTML = `
            <div class="resultado sucesso">
                 <strong>TODOS OS DADOS VÁLIDOS!</strong><br>
                Nome: ${inputs.nome.value}<br>
                Email: ${inputs.email.value}<br>
                CPF: ${inputs.cpf.value}
            </div>
        `;
    } else {
        resultado.innerHTML = `
            <div class="resultado erro">
                 <strong>Existem campos inválidos!</strong><br>
                Corrija os campos em vermelho e tente novamente.
            </div>
        `;
    }
    
    // Scroll suave para resultado
    resultado.scrollIntoView({ behavior: 'smooth' });
});

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    atualizarBotao();
});