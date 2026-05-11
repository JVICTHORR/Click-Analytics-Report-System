# 📊 Click Analytics System
<img width="1919" height="904" alt="Captura de tela 2026-05-11 002715" src="https://github.com/user-attachments/assets/f7017b45-4fdd-49aa-ba0e-185c198b7f81" />
<img width="446" height="139" alt="Captura de tela 2026-05-11 002744" src="https://github.com/user-attachments/assets/d161078f-7cb3-4837-97d5-d3c5b5093ef8" />
<img width="1919" height="908" alt="Captura de tela 2026-05-11 002922" src="https://github.com/user-attachments/assets/63b5582f-5726-44be-8a74-b9ebf984177f" />
<img width="183" height="124" alt="Captura de tela 2026-05-11 002817" src="https://github.com/user-attachments/assets/b2de2b2c-be5d-433f-a391-4d88773e5350" />
<img width="444" height="960" alt="665038319_959059730200101_1554045310604781107_n" src="https://github.com/user-attachments/assets/7ccdb57c-6099-4ca8-b0de-3ed33b9788aa" />
<img width="444" height="960" alt="688006374_1442919990938593_5634089263552337822_n" src="https://github.com/user-attachments/assets/91e576d6-ac11-44c0-a843-512445bfeade" />


Sistema Fullstack de monitoramento de cliques e geração automática de relatórios desenvolvido com Next.js App Router, Prisma ORM e PostgreSQL.

---

# 🚀 Tecnologias Utilizadas

- Next.js App Router
- React
- TypeScript
- Prisma ORM
- PostgreSQL
- Resend API
- REST API

---

# ⚡ Funcionalidades

✅ Rastreamento de cliques em links e páginas  
✅ Armazenamento de métricas em PostgreSQL  
✅ Captura de User Agent do navegador  
✅ API backend integrada com App Router  
✅ Contagem automática de cliques  
✅ Geração de relatórios  
✅ Envio automatizado de emails com Resend  
✅ Arquitetura Fullstack moderna  

---

# 🧠 Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de estudar arquitetura Fullstack moderna utilizando Next.js App Router, integração com banco de dados relacional e automação de relatórios.

O sistema registra interações dos usuários, armazena métricas em banco de dados e envia relatórios automáticos por email contendo a quantidade total de cliques registrados.

---

# 📁 Estrutura do Projeto

```bash
app/
 ├── api/
 │    ├── click/
 │    │     └── route.js
 │    └── report/
 │          └── route.js
 │
 ├── globals.css
 ├── layout.tsx
 └── page.tsx

lib/
 ├── prisma.js
 └── email.js

prisma/
 └── schema.prisma
```

---

# 🔥 Fluxo da Aplicação

```text
Frontend
   ↓
API Routes
   ↓
Prisma ORM
   ↓
PostgreSQL
   ↓
Relatórios automáticos
   ↓
Envio de emails com Resend
```

---

# 🔒 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="SUA_DATABASE_URL"
RESEND_API_KEY="SUA_API_KEY"
```

---

# ▶️ Executando o Projeto

```bash
npm run dev
```

Aplicação disponível em:

```text
http://localhost:3000
```

---

# 📧 Relatórios Automáticos

A rota abaixo gera um relatório e envia automaticamente um email contendo a quantidade total de cliques registrados:

```text
/api/report
```

---

# 📌 Possíveis Melhorias Futuras

- Dashboard administrativo
- Gráficos de métricas
- Integração com Google Analytics 4
- Integração com Vercel Analytics
- Relatórios mensais automatizados
- Sistema de autenticação
- Heatmap de cliques
- Inteligência artificial para análise de métricas

---

# 👨‍💻 Autor

Desenvolvido por: João Victhor Rodrigues Freitas Pinto.

---
# ⚠️ Aviso
Este código está disponível apenas para visualização e testes pessoais. O uso comercial, redistribuição ou modificação para fins lucrativos é proibido sem autorização prévia. Para licenciamento comercial, entre em contato em: [jvrodriguesfreitas@gmail.com].
