const form = document.getElementById("formEstoque");

const lista = document.getElementById("listaEstoque");

let editandoId = null;



async function carregarEstoque() {

    const resposta = await fetch("/api/estoque");

    const estoque = await resposta.json();

    lista.innerHTML = "";



    estoque.forEach(function(item) {

        lista.innerHTML +=
        "<tr>" +
        "<td>" + item.produto + "</td>" +
        "<td>" + item.quantidade + "</td>" +

        "<td>" +

        "<button onclick='editarEstoque(" + item.id + ")'>" +
        "Editar" +
        "</button>" +

        "<button onclick='excluirEstoque(" + item.id + ")'>" +
        "Excluir" +
        "</button>" +

        "</td>" +

        "</tr>";

    });

}



form.addEventListener("submit", async function(e) {

    e.preventDefault();



    const dados = {

        produto: document.getElementById("produto").value,

        quantidade: document.getElementById("quantidade").value

    };



    if (editandoId !== null) {

        await fetch("/api/estoque/" + editandoId, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(dados)

        });

    }

    else {

        await fetch("/api/estoque", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(dados)

        });

    }



    form.reset();

    editandoId = null;

    carregarEstoque();

});



async function excluirEstoque(id) {

    await fetch("/api/estoque/" + id, {

        method: "DELETE"

    });



    carregarEstoque();

}



async function editarEstoque(id) {

    const resposta = await fetch("/api/estoque");

    const estoque = await resposta.json();



    const item = estoque.find(function(i) {

        return i.id == id;

    });



    document.getElementById("produto").value =
        item.produto;

    document.getElementById("quantidade").value =
        item.quantidade;



    editandoId = id;

}



carregarEstoque();