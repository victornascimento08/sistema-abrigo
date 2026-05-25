const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// ======================================
// CONFIGURAÇÕES
// ======================================

app.use(express.json());
app.use(express.static(path.join(__dirname, 'pages')));
app.use('/js', express.static(path.join(__dirname, 'js')));

// ======================================
// PÁGINA INICIAL
// ======================================

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// ======================================
// PÁGINAS HTML
// ======================================

app.get('/acolhidos', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'acolhidos.html'));
});

app.get('/funcionarios', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'funcionarios.html'));
});

app.get('/estoque', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'estoque.html'));
});

app.get('/doacoes', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'doacoes.html'));
});

app.get('/atendimento', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'atendimento.html'));
});

app.get('/relatorios', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'relatorios.html'));
});

// ======================================
// ACOLHIDOS
// ======================================

app.get('/api/acolhidos', (req, res) => {
    const dados = fs.readFileSync('./database/acolhidos.json', 'utf8');
    res.json(JSON.parse(dados));
});

app.post('/api/acolhidos', (req, res) => {
    const dados = fs.readFileSync('./database/acolhidos.json', 'utf8');
    const acolhidos = JSON.parse(dados);
    const novoAcolhido = {
        id: Date.now(),
        nome: req.body.nome,
        idade: req.body.idade,
        quarto: req.body.quarto
    };
    acolhidos.push(novoAcolhido);
    fs.writeFileSync('./database/acolhidos.json', JSON.stringify(acolhidos, null, 2));
    res.json(novoAcolhido);
});

app.put('/api/acolhidos/:id', (req, res) => {
    const dados = fs.readFileSync('./database/acolhidos.json', 'utf8');
    let acolhidos = JSON.parse(dados);
    acolhidos = acolhidos.map(acolhido => {
        if (acolhido.id == req.params.id) {
            return { ...acolhido, nome: req.body.nome, idade: req.body.idade, quarto: req.body.quarto };
        }
        return acolhido;
    });
    fs.writeFileSync('./database/acolhidos.json', JSON.stringify(acolhidos, null, 2));
    res.json({ mensagem: 'Atualizado' });
});

app.delete('/api/acolhidos/:id', (req, res) => {
    const dados = fs.readFileSync('./database/acolhidos.json', 'utf8');
    let acolhidos = JSON.parse(dados);
    acolhidos = acolhidos.filter(acolhido => acolhido.id != req.params.id);
    fs.writeFileSync('./database/acolhidos.json', JSON.stringify(acolhidos, null, 2));
    res.json({ mensagem: 'Removido' });
});

// ======================================
// FUNCIONARIOS
// ======================================

app.get('/api/funcionarios', (req, res) => {
    const dados = fs.readFileSync('./database/funcionarios.json', 'utf8');
    res.json(JSON.parse(dados));
});

app.post('/api/funcionarios', (req, res) => {
    const dados = fs.readFileSync('./database/funcionarios.json', 'utf8');
    const funcionarios = JSON.parse(dados);
    const novoFuncionario = {
        id: Date.now(),
        nome: req.body.nome,
        cargo: req.body.cargo,
        turno: req.body.turno
    };
    funcionarios.push(novoFuncionario);
    fs.writeFileSync('./database/funcionarios.json', JSON.stringify(funcionarios, null, 2));
    res.json(novoFuncionario);
});

app.put('/api/funcionarios/:id', (req, res) => {
    const dados = fs.readFileSync('./database/funcionarios.json', 'utf8');
    let funcionarios = JSON.parse(dados);
    funcionarios = funcionarios.map(funcionario => {
        if (funcionario.id == req.params.id) {
            return { ...funcionario, nome: req.body.nome, cargo: req.body.cargo, turno: req.body.turno };
        }
        return funcionario;
    });
    fs.writeFileSync('./database/funcionarios.json', JSON.stringify(funcionarios, null, 2));
    res.json({ mensagem: 'Atualizado' });
});

app.delete('/api/funcionarios/:id', (req, res) => {
    const dados = fs.readFileSync('./database/funcionarios.json', 'utf8');
    let funcionarios = JSON.parse(dados);
    funcionarios = funcionarios.filter(funcionario => funcionario.id != req.params.id);
    fs.writeFileSync('./database/funcionarios.json', JSON.stringify(funcionarios, null, 2));
    res.json({ mensagem: 'Removido' });
});

// ======================================
// ESTOQUE
// ======================================

app.get('/api/estoque', (req, res) => {
    const dados = fs.readFileSync('./database/estoque.json', 'utf8');
    res.json(JSON.parse(dados));
});

app.post('/api/estoque', (req, res) => {
    const dados = fs.readFileSync('./database/estoque.json', 'utf8');
    const estoque = JSON.parse(dados);
    const novoItem = {
        id: Date.now(),
        produto: req.body.produto,
        quantidade: req.body.quantidade
    };
    estoque.push(novoItem);
    fs.writeFileSync('./database/estoque.json', JSON.stringify(estoque, null, 2));
    res.json(novoItem);
});

app.put('/api/estoque/:id', (req, res) => {
    const dados = fs.readFileSync('./database/estoque.json', 'utf8');
    let estoque = JSON.parse(dados);
    estoque = estoque.map(item => {
        if (item.id == req.params.id) {
            return { ...item, produto: req.body.produto, quantidade: req.body.quantidade };
        }
        return item;
    });
    fs.writeFileSync('./database/estoque.json', JSON.stringify(estoque, null, 2));
    res.json({ mensagem: 'Atualizado' });
});

app.delete('/api/estoque/:id', (req, res) => {
    const dados = fs.readFileSync('./database/estoque.json', 'utf8');
    let estoque = JSON.parse(dados);
    estoque = estoque.filter(item => item.id != req.params.id);
    fs.writeFileSync('./database/estoque.json', JSON.stringify(estoque, null, 2));
    res.json({ mensagem: 'Removido' });
});

// ======================================
// DOACOES
// ======================================

app.get('/api/doacoes', (req, res) => {
    const dados = fs.readFileSync('./database/doacoes.json', 'utf8');
    res.json(JSON.parse(dados));
});

app.post('/api/doacoes', (req, res) => {
    const dados = fs.readFileSync('./database/doacoes.json', 'utf8');
    const doacoes = JSON.parse(dados);
    const novaDoacao = {
        id: Date.now(),
        doador: req.body.doador,
        item: req.body.item,
        quantidade: req.body.quantidade
    };
    doacoes.push(novaDoacao);
    fs.writeFileSync('./database/doacoes.json', JSON.stringify(doacoes, null, 2));
    res.json(novaDoacao);
});

app.put('/api/doacoes/:id', (req, res) => {
    const dados = fs.readFileSync('./database/doacoes.json', 'utf8');
    let doacoes = JSON.parse(dados);
    doacoes = doacoes.map(doacao => {
        if (doacao.id == req.params.id) {
            return { ...doacao, doador: req.body.doador, item: req.body.item, quantidade: req.body.quantidade };
        }
        return doacao;
    });
    fs.writeFileSync('./database/doacoes.json', JSON.stringify(doacoes, null, 2));
    res.json({ mensagem: 'Atualizado' });
});

app.delete('/api/doacoes/:id', (req, res) => {
    const dados = fs.readFileSync('./database/doacoes.json', 'utf8');
    let doacoes = JSON.parse(dados);
    doacoes = doacoes.filter(doacao => doacao.id != req.params.id);
    fs.writeFileSync('./database/doacoes.json', JSON.stringify(doacoes, null, 2));
    res.json({ mensagem: 'Removido' });
});

// ======================================
// ATENDIMENTO
// ======================================

app.get('/api/atendimento', (req, res) => {
    const dados = fs.readFileSync('./database/atendimento.json', 'utf8');
    res.json(JSON.parse(dados));
});

app.post('/api/atendimento', (req, res) => {
    const dados = fs.readFileSync('./database/atendimento.json', 'utf8');
    const atendimento = JSON.parse(dados);
    const novoAtendimento = {
        id: Date.now(),
        acolhido: req.body.acolhido,
        descricao: req.body.descricao,
        data: req.body.data
    };
    atendimento.push(novoAtendimento);
    fs.writeFileSync('./database/atendimento.json', JSON.stringify(atendimento, null, 2));
    res.json(novoAtendimento);
});

app.put('/api/atendimento/:id', (req, res) => {
    const dados = fs.readFileSync('./database/atendimento.json', 'utf8');
    let atendimento = JSON.parse(dados);
    atendimento = atendimento.map(item => {
        if (item.id == req.params.id) {
            return { ...item, acolhido: req.body.acolhido, descricao: req.body.descricao, data: req.body.data };
        }
        return item;
    });
    fs.writeFileSync('./database/atendimento.json', JSON.stringify(atendimento, null, 2));
    res.json({ mensagem: 'Atualizado' });
});

app.delete('/api/atendimento/:id', (req, res) => {
    const dados = fs.readFileSync('./database/atendimento.json', 'utf8');
    let atendimento = JSON.parse(dados);
    atendimento = atendimento.filter(item => item.id != req.params.id);
    fs.writeFileSync('./database/atendimento.json', JSON.stringify(atendimento, null, 2));
    res.json({ mensagem: 'Removido' });
});

// ======================================
// RELATORIOS
// ======================================

app.get('/api/relatorios', (req, res) => {
    const acolhidos = JSON.parse(fs.readFileSync('./database/acolhidos.json', 'utf8'));
    const funcionarios = JSON.parse(fs.readFileSync('./database/funcionarios.json', 'utf8'));
    const estoque = JSON.parse(fs.readFileSync('./database/estoque.json', 'utf8'));
    const doacoes = JSON.parse(fs.readFileSync('./database/doacoes.json', 'utf8'));
    const atendimento = JSON.parse(fs.readFileSync('./database/atendimento.json', 'utf8'));
    res.json({
        totalAcolhidos: acolhidos.length,
        totalFuncionarios: funcionarios.length,
        totalEstoque: estoque.length,
        totalDoacoes: doacoes.length,
        totalAtendimento: atendimento.length
    });
});

// ======================================
// INICIAR SERVIDOR
// ======================================

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:' + PORT);
});