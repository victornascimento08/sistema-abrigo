# Sistema de Gestão de Abrigo

## Descrição do Projeto

Sistema web desenvolvido para gerenciamento de um abrigo, com controle de acolhidos, funcionários, estoque, doações, atendimentos e relatórios.

O projeto foi construído utilizando Node.js, Express, HTML, CSS e JavaScript, com armazenamento inicial em arquivos JSON.

---

## Status do Projeto

### Versão atual

- MVP funcional (protótipo completo)
- Sistema rodando localmente em localhost:3000
- Backend e frontend integrados
- Navegação entre módulos funcionando
- APIs básicas implementadas

---

## Módulos do Sistema

- Acolhidos (gestão de moradores do abrigo)
- Funcionários (controle da equipe)
- Estoque (itens e suprimentos)
- Doações (registro de entradas)
- Atendimento (serviços prestados)
- Relatórios (visão geral do sistema)

---

## Estrutura do Projeto

```plaintext
pages/
database/
js/
server.js
Backend

O backend foi desenvolvido com Express.js e possui:

Servidor rodando na porta 3000
Rotas para páginas do sistema
Servir arquivos HTML
APIs para leitura de dados em JSON
Rotas do Sistema
/
/acolhidos
/funcionarios
/estoque
/doacoes
/atendimento
/relatorios
APIs
/api/acolhidos
/api/funcionarios
/api/estoque
Frontend

Páginas do sistema:

index.html
acolhidos.html
funcionarios.html
estoque.html
doacoes.html
atendimento.html
relatorios.html
Integração
Comunicação entre frontend e backend via fetch
Dados armazenados em arquivos JSON
Navegação entre páginas via rotas Express
Script único para carregamento de dados
Problemas resolvidos
Erros de rota (Cannot GET)
Erros de arquivo (ENOENT)
Correção de caminhos de pastas (data → database)
Ajuste de nomes de arquivos
Integração frontend/backend
Versão atual (MVP)

Sistema funcional com:

Navegação entre módulos
Backend Express operacional
APIs funcionando
Estrutura organizada
Versão final (visão do projeto)
Backend avançado
CRUD completo (Create, Read, Update, Delete)
Banco de dados real (MySQL ou MongoDB)
Validação de dados
Arquitetura MVC (routes, controllers, services, models)
Autenticação
Sistema de login
Controle de acesso de usuários
Proteção de rotas
Funcionalidades avançadas
Dashboard com gráficos
Filtros e buscas
Histórico de registros
Notificações
Interface aprimorada
Interface responsiva
Melhor UX/UI
Formulários dinâmicos
Atualização sem recarregar página
Deploy
Hospedagem online
Backend em nuvem
Banco de dados remoto
Objetivo do Projeto

Criar um sistema completo de gestão de abrigo, evoluindo de um MVP funcional para uma aplicação profissional e escalável.