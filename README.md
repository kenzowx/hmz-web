# 💻 Sistema de Login com Dashboard

Este é um projeto fullstack utilizando **React + Vite** no frontend, **Chakra UI** para estilização e **Node.js + Express + Prisma + PostgreSQL** no backend. Ele inclui autenticação de administrador, controle de sessão com JWT e um painel com CRUD de usuários.

---

## 🚀 Tecnologias

### Frontend
- React + Vite
- TypeScript
- Chakra UI
- Axios
- React Router DOM

### Backend
- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Bcrypt (para senhas)
- JWT (para autenticação)

---

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com) ou [npm](https://www.npmjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)
- [PGAdmin (opcional)](https://www.pgadmin.org/) – para gerenciar o banco graficamente

---

## ⚙️ Como rodar o projeto

### 🔁 Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

---

### 🔧 1. Configurando o backend

```bash
cd backend-hmz
npm install
```

#### ✨ Configure o banco no arquivo `.env`:
Crie um arquivo `.env` com base no exemplo:

```
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/NOME_DO_BANCO"
JWT_SECRET="seu_token_secreto_aqui"
```

#### ⚙️ Rode as migrations e crie o banco:
```bash
npx prisma migrate dev --name init
```

#### ▶️ Inicie o servidor:
```bash
npx ts-node src/server.ts
```

> O backend vai rodar por padrão em: http://localhost:3001

---

### 🎨 2. Rodando o frontend

```bash
cd ../vite-project
npm install
```

#### ▶️ Inicie o frontend:
```bash
npm run dev
```

> O frontend vai rodar por padrão em: http://localhost:5173

---

## 🔐 Login

- Para acessar o dashboard, você precisa estar autenticado.
- Crie um admin diretamente no banco ou via rota de cadastro (se disponível).
- O token é armazenado no `localStorage` e usado para verificar o acesso ao dashboard.

---

## 📁 Estrutura do projeto

```
├── backend-hmz
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── prisma
│   │   └── server.ts
│   └── .env
├── vite-project
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── services
│   │   └── main.tsx
```

---

## 📚 Funcionalidades

- [x] Login de administrador
- [x] Proteção de rotas
- [x] Listagem de usuários
- [x] Criação, edição e exclusão de usuários
- [x] Responsividade total
- [x] Feedback visual com Chakra Toasts

---

## 🧑‍💻 Autor

Desenvolvido por **Eric** ✨  
🚀 [LinkedIn](https://linkedin.com/in/seu-perfil)  
📬 eric@email.com
