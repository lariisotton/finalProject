# Apresentação do Sistema de Estoque

Este documento explica cada parte do projeto de Sistema de Estoque, detalhando os arquivos, pastas e funcionalidades principais.

## Visão Geral

O sistema foi desenvolvido para gerenciar produtos em estoque, permitindo cadastro, edição, exclusão e listagem. Utiliza Node.js, Express, MySQL, Handlebars e recursos de PWA para funcionamento offline.

---

## Explicação dos Arquivos e Pastas

### Arquivos Principais

- **connect.js**: Responsável pela conexão com o banco de dados MySQL. Contém as configurações de acesso (host, usuário, senha, banco).
- **consultaBanco.js**: Implementa rotas e funções para consulta de dados no banco, geralmente exposto como uma API REST.
- **package.json**: Gerencia as dependências do projeto, scripts de inicialização e metadados da aplicação.
- **server.js**: Arquivo principal do backend. Configura o servidor Express, rotas para cadastro, edição, exclusão e listagem de produtos, além de integrar o Handlebars para renderização das views.

### Pasta `frontend/`

Contém os arquivos de interface do usuário, escritos em Handlebars:
- **cadastro.hbs**: Formulário para cadastrar novos produtos.
- **editar.hbs**: Formulário para editar produtos existentes.
- **listar.hbs**: Página para listar todos os produtos cadastrados.

### Pasta `public/`

Arquivos estáticos e recursos para PWA:
- **manifest.json**: Define o comportamento do app como PWA (ícone, nome, cor, etc).
- **sw.js**: Service Worker para funcionamento offline e cache dos recursos.
- **icons/**: Ícones utilizados pelo PWA, em diferentes tamanhos e formatos.

---

## Fluxo de Funcionamento

1. O usuário acessa o sistema via navegador.
2. Pode cadastrar, editar, excluir e listar produtos.
3. As ações são processadas pelo backend (`server.js`), que interage com o banco de dados via `connect.js`.
4. As páginas são renderizadas usando Handlebars, com dados dinâmicos do banco.
5. O Service Worker garante funcionamento offline e instalação como aplicativo.

---

## Tecnologias

- **Node.js**: Ambiente de execução JavaScript no backend.
- **Express**: Framework para criação de APIs e rotas HTTP.
- **MySQL2/Knex**: Conexão e manipulação do banco de dados relacional.
- **Express-Handlebars**: Template engine para renderização das views.
- **Bootstrap**: Estilização responsiva da interface.
- **Service Worker/Manifest**: Recursos de PWA para experiência offline.

---

## Observações

- Para rodar o sistema, siga as instruções do README principal.
- Personalize os arquivos de interface conforme sua necessidade.
- O sistema pode ser expandido para incluir autenticação de usuários, relatórios, etc.

---

Para dúvidas, consulte o README ou abra uma issue no repositório.
