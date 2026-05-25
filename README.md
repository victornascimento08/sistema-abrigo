# Sistema Abrigo

Sistema web desenvolvido para gerenciamento de um abrigo, com controle de acolhidos, funcionários, estoque, doações, atendimentos e relatórios.

O projeto foi construído utilizando *Node.js, **Express, **HTML, **CSS* e *JavaScript, com armazenamento em arquivos **JSON*.

---

## Status do Projeto

- Versão: *1.0.0 — Finalizado*
- Sistema rodando localmente em http://127.0.0.1:3000
- Backend e frontend integrados e funcionando
- Todos os módulos operacionais

---

## Banco de Dados

O projeto utiliza *arquivos JSON* como banco de dados, armazenados na pasta database/:

- acolhidos.json
- funcionarios.json
- estoque.json
- doacoes.json
- atendimento.json
- relatorios.json

---

## Módulos do Sistema

| Módulo | Descrição |
|---|---|
| Acolhidos | Gestão de moradores do abrigo |
| Funcionários | Controle da equipe |
| Estoque | Itens e suprimentos |
| Doações | Registro de entradas |
| Atendimento | Serviços prestados |
| Relatórios | Visão geral com totais do sistema |

---

## Estrutura do Projeto

sistema-abrigo/
├── database/        → arquivos JSON (banco de dados)
├── js/              → scripts do frontend
├── pages/           → páginas HTML
├── server.js        → backend com Express
├── style.css        → estilos globais
└── package.json

---

## Backend

Desenvolvido com *Express.js*:

- Servidor rodando na porta 3000
- Rotas para servir as páginas HTML
- APIs REST para cada módulo

*Rotas de páginas:*

GET /
GET /acolhidos
GET /funcionarios
GET /estoque
GET /doacoes
GET /atendimento
GET /relatorios

 *APIs:*

 GET/POST/PUT/DELETE /api/acolhidos
 GET/POST/PUT/DELETE /api/funcionarios
 GET/POST/PUT/DELETE /api/estoque
 GET/POST/PUT/DELETE /api/doacoes
 GET/POST/PUT/DELETE /api/atendimento
 GET                  /api/relatorios

 ---

## Frontend

- index.html — menu principal
- acolhidos.html
- funcionarios.html
- estoque.html
- doacoes.html
- atendimento.html
- relatorios.html

Comunicação com o backend via *fetch API*.

---

## Como Rodar o Projeto

1. Instale as dependências:
```bash
 npm install
 node server.js
 http://127.0.0.1:3000
 Funcionalidades 

    •	Cadastrar, editar e excluir acolhidos
	•	Cadastrar, editar e excluir funcionários
	•	Cadastrar, editar e excluir itens do estoque
	•	Registrar e gerenciar doações
	•	Registrar e gerenciar atendimentos
	•	Visualizar relatórios com totais em tempo real
	•	Navegação entre módulos com botão voltar