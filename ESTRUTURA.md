# 📂 Estrutura do Projeto — Portfolio

Guia explicando cada pasta e arquivo importante do projeto.

---

## 🗂️ Raiz do Projeto

| Arquivo | O que é |
|---|---|
| `package.json` | Lista de dependências e scripts (`dev`, `build`, `start`) |
| `bun.lock` | Lockfile do Bun (versões exatas das libs) |
| `bunfig.toml` | Configuração do Bun |
| `tsconfig.json` | Configuração do TypeScript |
| `vite.config.ts` | Configuração do Vite (bundler) |
| `wrangler.jsonc` | Configuração do Cloudflare Workers (deploy edge) |
| `eslint.config.js` | Regras de lint do código |
| `.prettierrc` / `.prettierignore` | Formatação automática |
| `components.json` | Configuração do shadcn/ui |
| `.gitignore` | Arquivos que o Git deve ignorar (node_modules, .env, etc) |
| `.env.example` | Modelo das variáveis de ambiente |
| `LICENSE` | Licença MIT |
| `README.md` | Apresentação do projeto |

---

## 📁 `src/` — Código-fonte

```
src/
├── assets/          → Imagens, fontes, ícones estáticos
├── components/      → Componentes React reutilizáveis
│   └── ui/          → Componentes shadcn/ui (Button, Card, Input...)
├── hooks/           → React hooks customizados
├── lib/             → Funções utilitárias e helpers
├── routes/          → Páginas (file-based routing TanStack)
│   ├── __root.tsx   → Layout raiz (html, head, body)
│   └── index.tsx    → Página inicial (/) — o portfolio
├── routeTree.gen.ts → AUTO-GERADO — não editar
├── router.tsx       → Configuração do roteador
├── server.ts        → Entry point do servidor (SSR)
├── start.ts         → Configuração TanStack Start
└── styles.css       → Tailwind v4 + design tokens (cores, fontes)
```

### Pontos-chave

- **`src/routes/index.tsx`** → Onde está todo o conteúdo do seu portfolio (hero, sobre, projetos, contato).
- **`src/styles.css`** → Cores, fontes e tokens de design. Edite aqui para mudar o tema.
- **`src/components/ui/`** → Não edite manualmente — são componentes do shadcn.

---

## 🚀 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/SEU_REPO.git
cd SEU_REPO

# 2. Instale as dependências (usando Bun — mais rápido)
bun install
# ou com npm:
npm install

# 3. Rode em modo desenvolvimento
bun dev
# ou:
npm run dev

# 4. Abra http://localhost:5173
```

---

## 📦 Build para produção

```bash
bun run build      # gera os arquivos otimizados em .output/
bun run start      # roda a versão de produção localmente
```

---

## ☁️ Deploy

Você pode hospedar gratuitamente em:

- **Vercel** → conecte o repo do GitHub → deploy automático
- **Cloudflare Pages** → suporta o `wrangler.jsonc` já incluso
- **Netlify** → também funciona

Não precisa configurar nada — eles detectam o framework sozinho.

---

## 🛠️ Stack utilizada

- **React 19** + **TypeScript**
- **TanStack Start** (framework full-stack baseado em React)
- **Vite 7** (bundler)
- **Tailwind CSS v4** (estilização)
- **shadcn/ui** (componentes)
- **Framer Motion** (animações)
- **Bun** (gerenciador de pacotes — mais rápido que npm)
