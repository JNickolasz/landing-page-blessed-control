# 01. Arquitetura e Comandos do Projeto

## Visão Geral

A Landing Page do **Blessed Control** utiliza uma arquitetura híbrida que permite tanto rodar um servidor Node.js/Express dinâmico quanto compilar um arquivo `index.html` 100% autossuficiente (com CSS compilado embutido) pronto para hospedagem estática.

## Estrutura de Diretórios

```text
landing-page/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Pipeline CI/CD para publicação automática no GitHub Pages
├── docs/                        # Documentação técnica, changelog e roadmap
│   ├── README.md
│   ├── 01-arquitetura-e-comandos.md
│   ├── 02-melhorias-implementadas.md
│   └── 03-roadmap-capitulo-2-seo-pwa.md
├── media/
│   ├── apk/
│   │   └── app-blessed-control-v1.apk # Pacote oficial Android (.apk ~54.6 MB) para download direto
│   └── screens/                 # 15 telas do app + logo otimizados em formato .webp (~608 KB total)
├── public/
│   └── css/
│       └── styles.css           # CSS compilado e minificado pelo Tailwind CLI
├── src/
│   ├── css/
│   │   └── input.css            # Diretivas @tailwind e animações customizadas (scroll-reveal, mockup scroll)
│   └── data.js                  # Fonte única de verdade (textos, APK, estatísticas, telas, horários, faixas e FAQ)
├── views/
│   ├── index.ejs                # Template principal da Landing Page
│   └── partials/
│       └── phone-frame.ejs      # Componente reutilizável de chassi de smartphone (aspect-ratio 9:19.2)
├── .gitignore                   # Ignora node_modules/, _site/, .env e logs
├── build.js                     # Compila o Tailwind CSS e gera o index.html estático na raiz
├── server.js                    # Servidor Express para desenvolvimento e execução Node.js
├── tailwind.config.js           # Tokens de design Material 3 (cores, tipografia Outfit e espaçamentos)
├── package.json                 # Scripts e dependências do projeto
└── index.html                   # Bundle estático final gerado pelo comando `npm run build`
```

## Comandos Disponíveis

| Comando             | Descrição                                                                                                                      |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`     | Compila e minifica o CSS com Tailwind CLI (`public/css/styles.css`) e gera o `index.html` estático na raiz com o CSS injetado. |
| `npm run build:css` | Executa apenas a compilação minificada do Tailwind CSS a partir de `src/css/input.css`.                                        |
| `npm run dev`       | Executa o build inicial e inicia o servidor Express em modo `--watch` na porta `3000`.                                         |
| `npm start`         | Inicia o servidor Express em produção (`http://localhost:3000`).                                                               |

## Deploy Automático (GitHub Pages)

O workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) é acionado automaticamente a cada `push` nas branches `main` ou `master` (ou manualmente via `workflow_dispatch`):

1. Instala as dependências com `npm ci` e executa `npm run build` para garantir que o `index.html` e o CSS estejam sempre sincronizados com `views/index.ejs` e `src/data.js`.
2. Empacota apenas os artefatos públicos (`index.html`, `media/` e `public/`) no diretório `_site`.
3. Publica o bundle diretamente no **GitHub Pages**.
