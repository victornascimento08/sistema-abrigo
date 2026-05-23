const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// arquivos estáticos
app.use(express.static(path.join(__dirname, 'pages')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

// página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// páginas HTML
app.get('/acolhidos', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'acolhidos.html'));
});

app.get('/estoque', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'estoque.html'));
});

app.get('/funcionarios', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'funcionarios.html'));
});

app.get('/relatorios', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'relatorios.html'));
});

app.get('/doacoes', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'doacoes.html'));
});

app.get('/atendimento', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'atendimento.html'));
});

// APIs JSON
app.get('/api/acolhidos', (req, res) => {
    const dados = fs.readFileSync('./database/acolhidos.json', 'utf8');
    res.json(JSON.parse(dados));
});

app.get('/api/estoque', (req, res) => {
    const dados = fs.readFileSync('./database/estoque.json', 'utf8');
    res.json(JSON.parse(dados));
});

app.get('/api/funcionarios', (req, res) => {
    const dados = fs.readFileSync('./database/funcionarios.json', 'utf8');
    res.json(JSON.parse(dados));
});

// iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});