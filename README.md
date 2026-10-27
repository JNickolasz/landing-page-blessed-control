# 🥋 Blessed Control — Landing Page

Landing page oficial do **Blessed Control**, o app da **Blessed Academy Jiu-Jitsu** (Serra Talhada, PE) para check-in no tatame via QR Code, acompanhamento de faixas e graus, grade de horários e gestão de alunos pelo professor.

A página apresenta o app, mostra suas telas (aluno e professor), a grade de horários, o sistema de graduação e disponibiliza o **download direto do APK Android**.

## Stack

- **Node.js + Express** — servidor para desenvolvimento local
- **EJS** — template da página (`views/index.ejs`)
- **Tailwind CSS 3 (CLI)** — CSS compilado e minificado, com tokens Material 3 em `tailwind.config.js`
- **JavaScript vanilla** — interações (menu mobile, simulador, abas, seletor de faixas, lightbox)
- **GitHub Actions + GitHub Pages** — build e deploy automáticos

## Como funciona

O projeto tem dois modos de execução, ambos alimentados pela mesma fonte de dados (`src/data.js`):

| Modo | Arquivo | O que faz |
| :--- | :--- | :--- |
| **Dinâmico** | `server.js` | Servidor Express que renderiza `views/index.ejs` a cada requisição e serve `media/` e `public/`. O APK é entregue com `Content-Type` e `Content-Disposition` corretos para forçar o download. |
| **Estático** | `build.js` | Compila o Tailwind para `public/css/styles.css` e gera um `index.html` na raiz com o CSS embutido em `<style>`, pronto para hospedagem estática. |

## Começando

Pré-requisito: **Node.js 20+** (versão usada no CI; `npm run dev` depende do `--watch`, disponível a partir do Node 18.11).

```bash
npm install
npm run dev
```

Acesse <http://localhost:3000>. A porta pode ser alterada com a variável de ambiente `PORT`.

### Scripts

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Roda o build e inicia o Express em modo `--watch` |
| `npm start` | Inicia o servidor Express |
| `npm run build` | Compila o CSS e gera o `index.html` estático |
| `npm run build:css` | Compila apenas o CSS do Tailwind |

> O `node --watch` reinicia o servidor quando arquivos JS mudam, mas não recompila o CSS. Ao adicionar novas classes Tailwind no template, rode `npm run build:css` (ou `npm run build`) novamente.

## Estrutura

```text
.
├── .github/workflows/deploy.yml   # CI/CD para o GitHub Pages
├── docs/                          # Documentação técnica, melhorias e roadmap
├── media/
│   ├── apk/                       # APK Android para download (~54.6 MB)
│   └── screens/                   # Telas do app e logo em .webp
├── public/css/styles.css          # CSS gerado pelo Tailwind (não editar)
├── src/
│   ├── css/input.css              # Diretivas Tailwind e animações customizadas
│   └── data.js                    # Todo o conteúdo da página
├── views/
│   ├── index.ejs                  # Template principal
│   └── partials/phone-frame.ejs   # Moldura de smartphone reutilizável
├── build.js                       # Gera o index.html estático
├── server.js                      # Servidor Express
├── tailwind.config.js             # Tokens de design (cores, tipografia, espaçamentos)
└── index.html                     # Saída do build (gerado)
```

## Editando o conteúdo

Textos, estatísticas, telas, horários, faixas, depoimentos e FAQ ficam em **`src/data.js`**, sem precisar mexer no HTML:

| Chave | Conteúdo |
| :--- | :--- |
| `meta` | Título, descrição, versão, dados do APK, logo, professor e local |
| `navItems` | Itens do menu de navegação |
| `hero` | Seção inicial e mockups |
| `stats` | Números em destaque |
| `simulator` | Simulador interativo do app (aluno/professor) |
| `showcase` | Galeria de telas por perfil |
| `features` | Recursos do app |
| `schedule` | Grade de horários |
| `belts` | Faixas adulto e kids, com regras de idade e graus (CBJJ/IBJJF) |
| `testimonials` | Depoimentos |
| `faqs` | Perguntas frequentes |

### Publicando uma nova versão do APK

1. Coloque o arquivo novo em `media/apk/`.
2. Atualize `apkDownloadUrl`, `apkFileName`, `apkSize` e `version` em `meta` no `src/data.js`.
3. Rode `npm run build` e faça o commit.

## Deploy

Cada `push` na branch `main` (ou execução manual via `workflow_dispatch`) dispara o workflow [`deploy.yml`](.github/workflows/deploy.yml), que:

1. Instala as dependências com `npm ci` e roda `npm run build`;
2. Copia `index.html`, `media/` e `public/` para `_site/`;
3. Publica o resultado no **GitHub Pages**.

Como o CI sempre regenera o `index.html`, o site publicado reflete o estado atual de `views/` e `src/data.js`.

## Documentação

Mais detalhes em [`docs/`](docs/README.md):

- [Arquitetura, comandos e deploy](docs/01-arquitetura-e-comandos.md)
- [Melhorias implementadas](docs/02-melhorias-implementadas.md)
- [Roadmap: SEO, Open Graph e PWA](docs/03-roadmap-capitulo-2-seo-pwa.md)
