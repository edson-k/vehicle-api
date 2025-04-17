
# 🚗 Vehicle API

[![Node.js](https://img.shields.io/badge/node.js-18.x-green)](https://nodejs.org)
[![Mocha Tests](https://img.shields.io/badge/tests-Mocha%20%2B%20Chai-yellow)](https://mochajs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

API REST simples e organizada para gerenciamento de veículos. Desenvolvida com **Node.js**, **Express** e validação com **Zod**, com persistência em arquivos `.json` e testes automatizados com **Mocha** e **Chai**.

---

## ✨ Funcionalidades

✅ CRUD completo de veículos com os campos:

- `id` (UUID gerado automaticamente)
- `placa`
- `chassi`
- `renavam`
- `modelo`
- `marca`
- `ano`

✅ Validação com Zod  
✅ Armazenamento local em arquivo JSON  
✅ Testes unitários + integração  
✅ Isolamento do ambiente de testes

---

## 📦 Endpoints da API

| Método | Rota            | Descrição                     |
| ------ | --------------- | ----------------------------- |
| GET    | `/vehicles`     | Lista todos os veículos       |
| GET    | `/vehicles/:id` | Retorna um veículo por ID     |
| POST   | `/vehicles`     | Cria um novo veículo          |
| PUT    | `/vehicles/:id` | Atualiza um veículo existente |
| DELETE | `/vehicles/:id` | Remove um veículo             |

---

## 🛠 Tecnologias

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [Zod](https://zod.dev)
- [Mocha](https://mochajs.org)
- [Chai](https://www.chaijs.com)
- [Chai HTTP](https://www.chaijs.com/plugins/chai-http/)
- [cross-env](https://github.com/motdotla/cross-env)

---

## ▶️ Instalação

```bash
git clone https://github.com/edson-k/vehicle-api.git
cd vehicle-api
npm install
```

---

## 🚀 Executar a API

```bash
npm start
```

A API será executada em:

```
http://localhost:3000/vehicles
```

---

## 🧪 Executar os Testes

```bash
npm test
```

- Utiliza `NODE_ENV=test`
- Cria `vehicles.test.json` temporariamente
- Remove o arquivo ao final automaticamente
- Totalmente isolado do ambiente de produção

---

## 📁 Estrutura de Pastas

```
vehicle-api/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── schemas/
│   ├── utils/
│   └── app.js
├── data/
│   ├── vehicles.json              # produção
│   └── vehicles.test.json         # gerado automaticamente em testes
├── doc/
│   └── README.md
├── test/
│   └── vehicle.test.js
├── package.json
├── README.md
├── LICENSE
├── vehicle-api-requests.http
└── .gitignore
```

---

## 📄 Licença

Este projeto está licenciado sob os termos da [MIT License](LICENSE).

