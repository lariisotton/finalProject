# Projeto Final - Sistema de Estoque

Este projeto é um sistema de cadastro e gerenciamento de produtos em estoque, desenvolvido com Node.js, Express, MySQL e Handlebars. A aplicação permite cadastrar, listar, editar e excluir produtos, além de funcionar como uma PWA (Progressive Web App) para acesso offline.

## Funcionalidades

- Cadastro de produtos com nome, gênero, categoria, quantidade e descrição
- Listagem dos produtos cadastrados
- Edição e exclusão de produtos
- Interface web responsiva com Bootstrap
- API REST para consulta de usuários e produtos
- Service Worker para funcionamento offline
- Manifesto para instalação como PWA

## Estrutura de Pastas

```
├── connect.js
├── consultaBanco.js
├── package.json
├── server.js
├── frontend/
│   ├── cadastro.hbs
│   ├── editar.hbs
│   └── listar.hbs
├── public/
│   ├── manifest.json
│   ├── sw.js
│   └── icons/
│       ├── icon-192.png
│       ├── icon-512.png
│       └── maskable-512.png
```

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o banco de dados MySQL conforme as credenciais em [`connect.js`](connect.js)
4. Execute o servidor:
   ```sh
   node server.js
   ```
   O servidor web estará disponível em `http://localhost:3030`  
   A API estará disponível em `http://localhost:8080` (ver [`consultaBanco.js`](consultaBanco.js))

## Tecnologias Utilizadas

- Node.js
- Express
- MySQL2
- Knex
- Express-Handlebars
- Bootstrap
- Service Worker (PWA)



