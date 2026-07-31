# Pablo Danilo — Portfolio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/start)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Portfólio pessoal — minimalista, multilíngue (PT/EN), com dark/light mode e foco em tipografia, performance e acessibilidade.

## ✨ Features

- 🌓 **Dark / Light mode** com persistência em `localStorage`
- 🌍 **Multilíngue** (PT-BR / EN) com troca instantânea
- 📱 **Totalmente responsivo** (mobile, tablet, desktop)
- ⚡ **Performance-first** — imagens otimizadas, lazy loading
- ♿ **Acessível** — semântica HTML, `aria-label`, contraste WCAG
- 🎨 **Design system** com tokens em `oklch` no `src/styles.css`

## 🛠 Stack

- **React 19** + **TypeScript**
- **TanStack Start** (SSR/SSG + file-based routing)
- **Vite 7** (build tool)
- **Tailwind CSS 4**
- **Lucide** + **React Icons** (iconografia)

## 🚀 Como rodar localmente

Pré-requisitos: [Bun](https://bun.sh) (recomendado) ou Node.js 20+.

```bash
# 1. Clonar o repositório
git clone https://github.com/pdanilodev/pdanilodev-portfolio.git
cd pdanilodev-portfolio

# 2. Instalar dependências
bun install
# ou: npm install

# 3. Rodar em modo desenvolvimento
bun dev
# ou: npm run dev
```

O projeto abre em `http://localhost:5173`.

## 📦 Scripts

| Comando | O que faz |
|---|---|
| `bun dev` | Servidor de desenvolvimento com HMR |
| `bun run build` | Build de produção |
| `bun run preview` | Preview do build de produção |
| `bun run lint` | Roda o ESLint |
| `bun run format` | Formata com Prettier |

## 📁 Estrutura

```
src/
├── assets/          # Imagens (avatar, fotos de robótica)
├── components/ui/   # Componentes shadcn/ui
├── routes/          # Rotas (file-based routing)
│   ├── __root.tsx   # Layout raiz
│   └── index.tsx    # Home (portfólio)
├── styles.css       # Design tokens + Tailwind
└── router.tsx       # Config do router
```

## 🌐 Deploy

O projeto é compatível com **Cloudflare Workers** (via `wrangler.jsonc`), **Vercel**, **Netlify** e qualquer host que suporte Node.js/SSR.

## 📫 Contato

- **Email:** pablodanilo2007@gmail.com
- **GitHub:** [@pdanilodev](https://github.com/pdanilodev)
- **LinkedIn:** [pdanilodev](https://www.linkedin.com/in/pdanilodev/)

---

© 2026 Pablo Danilo · Feito com cuidado e profissionalismo.
