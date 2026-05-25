const form = document.getElementById("formAtendimento");

const lista = document.getElementById("listaAtendimento");

let editandoId = null;



async function carregarAtendimento() {

    const resposta = await fetch("/api/atendimento");

    const atendimento = await resposta.json();

    lista.innerHTML = "";



    atendimento.forEach(function(item) {

        lista.innerHTML +=
        "<tr>" +
        "<td>" + item.acolhido + "</td>" +
        "<td>" + item.descricao + "</td>" +
        "<td>" + item.data + "</td>" +

        "<td>" +

        "<button onclick='editarAtendimento(" + item.id + ")'>" +
        "Editar" +
        "</button>" +

        "<button onclick='excluirAtendimento(" + item.id + ")'>" +
        "Excluir" +
        "</button>" +

        "</td>" +

        "</tr>";

    });

}



form.addEventListener("submit", async function(e) {

    e.preventDefault();



    const dados = {

        acolhido: document.getElementById("acolhido").value,

        descricao: document.getElementById("descricao").value,

        data: document.getElementById("data").value

    };



    if (editandoId !== null) {

        await fetch("/api/atendimento/" + editandoId, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(dados)

        });

    }

    else {

        await fetch("/api/atendimento", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(dados)

        });

    }



    form.reset();

    editandoId = null;

    carregarAtendimento();

});



async function excluirAtendimento(id) {

    await fetch("/api/atendimento/" + id, {

        method: "DELETE"

    });



    carregarAtendimento();

}



async function editarAtendimento(id) {

    const resposta = await fetch("/api/atendimento");

    const atendimento = await resposta.json();



    const item = atendimento.find(function(a) {

        return a.id == id;

    });



    document.getElementById("acolhido").value =
        item.acolhido;

    document.getElementById("descricao").value =
        item.descricao;

    document.getElementById("data").value =
        item.data;



    editandoId = id;

}



carregarAtendimento();
