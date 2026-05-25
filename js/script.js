const form = document.getElementById('formAcolhido');

const lista = document.getElementById('listaAcolhidos');

let editandoId = null;



// ======================================
// CARREGAR
// ======================================

async function carregarAcolhidos() {

    const resposta = await fetch('/api/acolhidos');

    const acolhidos = await resposta.json();



    lista.innerHTML = '';



    acolhidos.forEach(acolhido => {

        lista.innerHTML += `

            <tr>

                <td>${acolhido.nome}</td>

                <td>${acolhido.idade}</td>

                <td>${acolhido.quarto}</td>

                <td>

                    <button onclick="editarAcolhido(${acolhido.id})">

                        Editar

                    </button>

                    <button onclick="excluirAcolhido(${acolhido.id})">

                        Excluir

                    </button>

                </td>

            </tr>

        `;
    });
}



// ======================================
// SALVAR
// ======================================

form.addEventListener('submit', async (e) => {

    e.preventDefault();



    const nome = document.getElementById('nome').value;

    const idade = document.getElementById('idade').value;

    const quarto = document.getElementById('quarto').value;



    const dados = {

        nome,

        idade,

        quarto
    };



    // EDITAR

    if (editandoId !== null) {

        await fetch(`/api/acolhidos/${editandoId}`, {

            method: 'PUT',

            headers: {

                'Content-Type': 'application/json'
            },

            body: JSON.stringify(dados)
        });

        editandoId = null;
    }



    // CRIAR

    else {

        await fetch('/api/acolhidos', {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'
            },

            body: JSON.stringify(dados)
        });
    }



    form.reset();

    carregarAcolhidos();
});



// ======================================
// EXCLUIR
// ======================================

async function excluirAcolhido(id) {

    await fetch(`/api/acolhidos/${id}`, {

        method: 'DELETE'
    });

    carregarAcolhidos();
}



// ======================================
// EDITAR
// ======================================

async function editarAcolhido(id) {

    const resposta = await fetch('/api/acolhidos');

    const acolhidos = await resposta.json();



    const acolhido = acolhidos.find(a => a.id == id);



    document.getElementById('nome').value =
        acolhido.nome;

    document.getElementById('idade').value =
        acolhido.idade;

    document.getElementById('quarto').value =
        acolhido.quarto;



    editandoId = id;
}



// ======================================
// INICIAR
// ======================================

carregarAcolhidos();