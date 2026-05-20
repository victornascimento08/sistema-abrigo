document.addEventListener("DOMContentLoaded", () => {

  const formularios = document.querySelectorAll("form");

  formularios.forEach(formulario => {

    formulario.addEventListener("submit", (e) => {

      e.preventDefault();

      const campos = formulario.querySelectorAll("input, textarea, select");

      let vazio = false;

      campos.forEach(campo => {

        if (campo.value.trim() === "") {
          vazio = true;
        }

      });

      if (vazio) {

        alert("Preencha todos os campos!");

      } else {

        alert("Operação realizada com sucesso!");

        formulario.reset();

      }

    });

  });

});