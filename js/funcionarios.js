const form = document.getElementById("formFuncionario");

const lista = document.getElementById("listaFuncionarios");

let editandoId = null;



async function carregarFuncionarios() {

    const resposta = await fetch("/api/funcionarios");

    const funcionarios = await resposta.json();

    lista.innerHTML = "";



    funcionarios.forEach(function(funcionario) {

        lista.innerHTML +=
        "<tr>" +
        "<td>" + funcionario.nome + "</td>" +
        "<td>" + funcionario.cargo + "</td>" +
        "<td>" + funcionario.turno + "</td>" +

        "<td>" +

        "<button onclick='editarFuncionario(" + funcionario.id + ")'>" +
        "Editar" +
        "</button>" +

        "<button onclick='excluirFuncionario(" + funcionario.id + ")'>" +
        "Excluir" +
        "</button>" +

        "</td>" +

        "</tr>";

    });

}



form.addEventListener("submit", async function(e) {

    e.preventDefault();



    const dados = {

        nome: document.getElementById("nome").value,

        cargo: document.getElementById("cargo").value,

        turno: document.getElementById("turno").value

    };



    if (editandoId !== null) {

        await fetch("/api/funcionarios/" + editandoId, {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(dados)

        });

    }

    else {

        await fetch("/api/funcionarios", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(dados)

        });

    }



    form.reset();

    editandoId = null;

    carregarFuncionarios();

});



async function excluirFuncionario(id) {

    await fetch("/api/funcionarios/" + id, {

        method: "DELETE"

    });



    carregarFuncionarios();

}



async function editarFuncionario(id) {

    const resposta = await fetch("/api/funcionarios");

    const funcionarios = await resposta.json();



    const funcionario = funcionarios.find(function(f) {

        return f.id == id;

    });



    document.getElementById("nome").value =
        funcionario.nome;

    document.getElementById("cargo").value =
        funcionario.cargo;

    document.getElementById("turno").value =
        funcionario.turno;



    editandoId = id;

}



carregarFuncionarios();
