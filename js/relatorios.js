async function carregarRelatorios() {

    // ACOLHIDOS

    const respostaAcolhidos =
        await fetch('/api/acolhidos');

    const acolhidos =
        await respostaAcolhidos.json();

    document.getElementById('totalAcolhidos').innerText =
        acolhidos.length;



    // FUNCIONARIOS

    const respostaFuncionarios =
        await fetch('/api/funcionarios');

    const funcionarios =
        await respostaFuncionarios.json();

    document.getElementById('totalFuncionarios').innerText =
        funcionarios.length;



    // ESTOQUE

    const respostaEstoque =
        await fetch('/api/estoque');

    const estoque =
        await respostaEstoque.json();

    document.getElementById('totalEstoque').innerText =
        estoque.length;



    // DOACOES

    const respostaDoacoes =
        await fetch('/api/doacoes');

    const doacoes =
        await respostaDoacoes.json();

    document.getElementById('totalDoacoes').innerText =
        doacoes.length;



    // ATENDIMENTO

    const respostaAtendimento =
        await fetch('/api/atendimento');

    const atendimento =
        await respostaAtendimento.json();

    document.getElementById('totalAtendimento').innerText =
        atendimento.length;

}



carregarRelatorios();