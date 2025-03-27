# 💻 Frontend - Sistema de Login com Dashboard

Este é o frontend do sistema de login e gerenciamento de usuários. Desenvolvido com **React + Vite**, utiliza **Chakra UI** para estilização e está integrado com uma API desenvolvida em Node.js + Prisma.

---

## 🚀 Tecnologias

- React + Vite
- TypeScript
- Chakra UI
- Axios
- React Router DOM

---

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com) ou [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- A API (backend) rodando – veja abaixo.

---

## 🔗 Backend

O backend está disponível neste repositório:

👉 [Acessar repositório do backend](https://github.com/kenzowx/backend-hmz)

Certifique-se de rodá-lo antes de iniciar o frontend.

---

## ⚙️ Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/kenzowx/hmz-web.git
cd hmz-web

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

> O projeto estará disponível em: http://localhost:5173

---

## 🔐 Login

- O login é feito com base na API do backend (via JWT).
- O token é salvo no localStorage.
- A rota `/dashboard` é protegida e só pode ser acessada se o usuário estiver logado.

---

## 📁 Estrutura do projeto

```
vite-project
├── src
│   ├── components
│   ├── pages
│   ├── services
│   ├── routes
│   └── main.tsx
└── README.md
```

---

## 📚 Funcionalidades

- [x] Login de administrador
- [x] Proteção de rotas
- [x] Listagem de usuários
- [x] Criação, edição e exclusão de usuários
- [x] Responsividade com Chakra UI
- [x] Feedback visual com Toasts

---

## 🧑‍💻 Autor

Desenvolvido por **Eric** ✨  
🚀 [LinkedIn](https://linkedin.com/in/eric-kenzo-wakasugi)  
📬 ekenzow@hotmail.com
