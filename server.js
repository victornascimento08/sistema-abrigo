const express = require("express");

const cors = require("cors");

const fs = require("fs");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(__dirname));

// ======================

// TESTE

// ======================

app.get("/", (req, res) => {

    res.send("Servidor funcionando!");

});

// ======================

// ACOLHIDOS

// ======================

app.get("/acolhidos", (req, res) => {

    const dados = fs.readFileSync("./data/acolhidos.json");

    const acolhidos = JSON.parse(dados);

    res.json(acolhidos);

});

app.post("/acolhidos", (req, res) => {

    const novo = req.body;

    const dados = fs.readFileSync("./data/acolhidos.json");

    const acolhidos = JSON.parse(dados);

    acolhidos.push(novo);

    fs.writeFileSync(

        "./data/acolhidos.json",

        JSON.stringify(acolhidos, null, 2)

    );

    res.json({

        mensagem: "Acolhido cadastrado!"

    });

});

// ======================

// FUNCIONÁRIOS

// ======================

app.get("/funcionarios", (req, res) => {

    const dados = fs.readFileSync("./data/funcionarios.json");

    const funcionarios = JSON.parse(dados);

    res.json(funcionarios);

});

app.post("/funcionarios", (req, res) => {

    const novo = req.body;

    const dados = fs.readFileSync("./data/funcionarios.json");

    const funcionarios = JSON.parse(dados);

    funcionarios.push(novo);

    fs.writeFileSync(

        "./data/funcionarios.json",

        JSON.stringify(funcionarios, null, 2)

    );

    res.json({

        mensagem: "Funcionário cadastrado!"

    });

});

// ======================

// DOAÇÕES

// ======================

app.get("/doacoes", (req, res) => {

    const dados = fs.readFileSync("./data/doacoes.json");

    const doacoes = JSON.parse(dados);

    res.json(doacoes);

});

app.post("/doacoes", (req, res) => {

    const nova = req.body;

    const dados = fs.readFileSync("./data/doacoes.json");

    const doacoes = JSON.parse(dados);

    doacoes.push(nova);

    fs.writeFileSync(

        "./data/doacoes.json",

        JSON.stringify(doacoes, null, 2)

    );

    res.json({

        mensagem: "Doação cadastrada!"

    });

});

// ======================

// ATENDIMENTOS

// ======================

app.get("/atendimentos", (req, res) => {

    const dados = fs.readFileSync("./data/atendimentos.json");

    const atendimentos = JSON.parse(dados);

    res.json(atendimentos);

});

app.post("/atendimentos", (req, res) => {

    const novo = req.body;

    const dados = fs.readFileSync("./data/atendimentos.json");

    const atendimentos = JSON.parse(dados);

    atendimentos.push(novo);

    fs.writeFileSync(

        "./data/atendimentos.json",

        JSON.stringify(atendimentos, null, 2)

    );

    res.json({

        mensagem: "Atendimento cadastrado!"

    });

});

// ======================

// ESTOQUE

// ======================

app.get("/estoque", (req, res) => {

    const dados = fs.readFileSync("./data/estoque.json");

    const estoque = JSON.parse(dados);

    res.json(estoque);

});

app.post("/estoque", (req, res) => {

    const novo = req.body;

    const dados = fs.readFileSync("./data/estoque.json");

    const estoque = JSON.parse(dados);

    estoque.push(novo);

    fs.writeFileSync(

        "./data/estoque.json",

        JSON.stringify(estoque, null, 2)

    );

    res.json({

        mensagem: "Item adicionado ao estoque!"

    });

});

// ======================

// RELATÓRIOS

// ======================

app.get("/relatorios", (req, res) => {

    const acolhidos = JSON.parse(

        fs.readFileSync("./data/acolhidos.json")

    );

    const funcionarios = JSON.parse(

        fs.readFileSync("./data/funcionarios.json")

    );

    const doacoes = JSON.parse(

        fs.readFileSync("./data/doacoes.json")

    );

    const atendimentos = JSON.parse(

        fs.readFileSync("./data/atendimentos.json")

    );

    const estoque = JSON.parse(

        fs.readFileSync("./data/estoque.json")

    );

    res.json({

        totalAcolhidos: acolhidos.length,

        totalFuncionarios: funcionarios.length,

        totalDoacoes: doacoes.length,

        totalAtendimentos: atendimentos.length,

        totalItensEstoque: estoque.length

    });

});

// ======================

// LOGIN

// ======================

app.post("/login", (req, res) => {

    const email = req.body.email;

    const senha = req.body.senha;

    if(email === "admin@abrigo.com" && senha === "123456"){

        res.json({

            sucesso: true,

            mensagem: "Login realizado"

        });

    } else {

        res.json({

            sucesso: false,

            mensagem: "Login inválido"

        });

    }

});

// ======================

// PORTA

// ======================

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");

});