document.addEventListener("DOMContentLoaded", () => {

  /* ACOLHIDOS */

  const formAcolhidos =
    document.getElementById("form-acolhidos");

  if (formAcolhidos) {

    formAcolhidos.addEventListener(
      "submit",
      async (e) => {

        e.preventDefault();

        const nome =
          document.getElementById("nome").value;

        const idade =
          document.getElementById("idade").value;

        const resposta = await fetch(
          "http://localhost:3000/acolhidos",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              nome,
              idade
            })
          }
        );

        const resultado =
          await resposta.json();

        alert(resultado.mensagem);

        formAcolhidos.reset();

      }
    );

  }

  /* FUNCIONARIOS */

  const formFuncionarios =
    document.getElementById(
      "form-funcionarios"
    );

  if (formFuncionarios) {

    formFuncionarios.addEventListener(
      "submit",
      async (e) => {

        e.preventDefault();

        const nome =
          document.getElementById(
            "nome-funcionario"
          ).value;

        const cargo =
          document.getElementById(
            "cargo"
          ).value;

        const resposta = await fetch(
          "http://localhost:3000/funcionarios",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              nome,
              cargo
            })
          }
        );

        const resultado =
          await resposta.json();

        alert(resultado.mensagem);

        formFuncionarios.reset();

      }
    );

  }

  /* DOACOES */

  const formDoacoes =
    document.getElementById(
      "form-doacoes"
    );

  if (formDoacoes) {

    formDoacoes.addEventListener(
      "submit",
      async (e) => {

        e.preventDefault();

        const item =
          document.getElementById(
            "item-doacao"
          ).value;

        const quantidade =
          document.getElementById(
            "quantidade-doacao"
          ).value;

        const resposta = await fetch(
          "http://localhost:3000/doacoes",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              item,
              quantidade
            })
          }
        );

        const resultado =
          await resposta.json();

        alert(resultado.mensagem);

        formDoacoes.reset();

      }
    );

  }

});