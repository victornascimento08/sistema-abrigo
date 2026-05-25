const form = document.getElementById("formDoacao");

const lista = document.getElementById("listaDoacoes");

let editandoId = null;



async function carregarDoacoes() {

    const resposta = await fetch("/api/doacoes");

    const doacoes = await resposta.json();

    lista.innerHTML = "";



    doacoes.forEach(function(doacao) {

        lista.innerHTML +=
        "<tr>" +
        "<td>" + doacao.doador + "</td>" +
        "<td>" + doacao.item + "</td>" +
        "<td>" + doacao.quantidade + "</td>" +

        "<td>" +

        "<button onclick='editarDoacao(" + doacao.id + ")'>" +
        "Editar" +
        "</button>" +

        "<button onclick='excluirDoacao(" + doacao.id + ")'>" +
        "Excluir" +
        "</button>" +

        "</td>" +

        "</tr>";

    });

}



form.addEventListener("submit", async function(e) {

    e.preventDefault();



    const dados = {

        doador: document.getElementById("doador").value,

        item: document.getElementById("item").value,

        quantidade: document.getElementById("quantidade").value

    };



    if (editandoId !== null) {

        await fetch("/api/doacoes/" + editandoId, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(dados)

        });

    }

    else {

        await fetch("/api/doacoes", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(dados)

        });

    }



    form.reset();

    editandoId = null;

    carregarDoacoes();

});



async function excluirDoacao(id) {

    await fetch("/api/doacoes/" + id, {

        method: "DELETE"

    });



    carregarDoacoes();

}



async function editarDoacao(id) {

    const resposta = await fetch("/api/doacoes");

    const doacoes = await resposta.json();



    const doacao = doacoes.find(function(d) {

        return d.id == id;

    });



    document.getElementById("doador").value =
        doacao.doador;

    document.getElementById("item").value =
        doacao.item;

    document.getElementById("quantidade").value =
        doacao.quantidade;



    editandoId = id;

}



carregarDoacoes();
