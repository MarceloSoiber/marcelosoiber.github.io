# marcelosoiber.dev

Portfólio trilíngue de Marcelo Soiber, focado em arquitetura de software, sistemas inteligentes e IA aplicada.

## Stack

- Vue 3 e TypeScript
- Vite e Vite SSG
- HTML estático para português, inglês e espanhol
- GitHub Actions e GitHub Pages

## Desenvolvimento

```bash
npm install
npm run dev
```

## Qualidade

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

O planejamento e o backlog estão em [`docs/planejamento-portfolio.md`](docs/planejamento-portfolio.md) e [`docs/tarefas.md`](docs/tarefas.md).

## Publicação

O workflow `.github/workflows/deploy-pages.yml` valida e publica a pasta `dist` no GitHub Pages. O arquivo `public/CNAME` preserva o domínio personalizado `marcelosoiber.dev` no artefato final.

Antes do primeiro deploy, é necessário ativar **GitHub Actions** como fonte do Pages no repositório e configurar os registros DNS do domínio conforme indicado pelo GitHub.
