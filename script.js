// Menu de navegação
function abrirPagina(pagina) {
    window.location.href = pagina;
}

// ===============================
// ACOLHIDOS
// ===============================

async function carregarAcolhidos() {
    try {
        const resposta = await fetch('/api/acolhidos');
        const dados = await resposta.json();

        const tabela = document.getElementById('tabela-acolhidos');

        if (!tabela) return;

        tabela.innerHTML = '';

        dados.forEach(acolhido => {
            tabela.innerHTML += `
                <tr>
                    <td>${acolhido.nome || '-'}</td>
                    <td>${acolhido.idade || '-'}</td>
                    <td>${acolhido.quarto || '-'}</td>
                </tr>
            `;
        });

    } catch (erro) {
        console.error('Erro ao carregar acolhidos:', erro);
    }
}

// ===============================
// ESTOQUE
// ===============================

async function carregarEstoque() {
    try {
        const resposta = await fetch('/api/estoque');
        const dados = await resposta.json();

        const lista = document.getElementById('lista-estoque');

        if (!lista) return;

        lista.innerHTML = '';

        dados.forEach(item => {
            lista.innerHTML += `
                <div class="card">
                    <h3>${item.nome || '-'}</h3>
                    <p>Quantidade: ${item.quantidade || 0}</p>
                </div>
            `;
        });

    } catch (erro) {
        console.error('Erro ao carregar estoque:', erro);
    }
}

// ===============================
// FUNCIONÁRIOS
// ===============================

async function carregarFuncionarios() {
    try {
        const resposta = await fetch('/api/funcionarios');
        const dados = await resposta.json();

        const lista = document.getElementById('lista-funcionarios');

        if (!lista) return;

        lista.innerHTML = '';

        dados.forEach(funcionario => {
            lista.innerHTML += `
                <div class="funcionario">
                    <h3>${funcionario.nome || '-'}</h3>
                    <p>Cargo: ${funcionario.cargo || '-'}</p>
                </div>
            `;
        });

    } catch (erro) {
        console.error('Erro ao carregar funcionários:', erro);
    }
}

// ===============================
// RELATÓRIOS
// ===============================

function carregarRelatorios() {

    const totalAcolhidos = document.getElementById('total-acolhidos');
    const totalFuncionarios = document.getElementById('total-funcionarios');

    if (totalAcolhidos) {
        totalAcolhidos.innerText = '25';
    }

    if (totalFuncionarios) {
        totalFuncionarios.innerText = '8';
    }
}

// ===============================
// INICIALIZAÇÃO
// ===============================

document.addEventListener('DOMContentLoaded', () => {

    carregarAcolhidos();
    carregarEstoque();
    carregarFuncionarios();
    carregarRelatorios();

});