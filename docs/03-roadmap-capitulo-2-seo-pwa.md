# 03. Roadmap: Capítulo 2 — SEO, Compartilhamento no WhatsApp (Open Graph) & PWA

Conforme alinhado, as implementações referentes ao **Capítulo 2 (SEO, Open Graph para WhatsApp/Instagram e suporte completo a PWA no iOS/Android)** ficaram planejadas para a próxima etapa de evolução do projeto. Abaixo está o guia técnico detalhado do que será implementado.

---

## 1. Meta Tags Open Graph & Twitter Cards (Preview no WhatsApp / Instagram / Telegram)

### Objetivo
Garantir que, ao compartilhar o link da página nos grupos de WhatsApp da academia ou na bio do Instagram, seja gerado automaticamente um card rico com título, descrição e imagem de capa da **Blessed Academy**.

### O que será adicionado em `src/data.js`
```javascript
meta: {
  // ...campos existentes
  siteUrl: "https://blessedcontrol.app",
  ogImage: "https://blessedcontrol.app/media/screens/og-cover.webp",
  themeColor: "#121316"
}
```

### O que será adicionado no `<head>` de `views/index.ejs`
```html
<!-- Canonical & Theme Color -->
<link rel="canonical" href="<%= meta.siteUrl %>">
<meta name="theme-color" content="#121316">

<!-- Open Graph / WhatsApp / Facebook / Instagram -->
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Blessed Control | Blessed Academy">
<meta property="og:title" content="<%= meta.title %>">
<meta property="og:description" content="<%= meta.description %>">
<meta property="og:url" content="<%= meta.siteUrl %>">
<meta property="og:image" content="<%= meta.ogImage %>">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Blessed Control - O App Oficial do Tatame">

<!-- Twitter / X Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<%= meta.title %>">
<meta name="twitter:description" content="<%= meta.description %>">
<meta name="twitter:image" content="<%= meta.ogImage %>">
```

---

## 2. Suporte Real a PWA (Progressive Web App) no iOS Safari e Android

### Objetivo
Na seção de download da página, os alunos com iPhone (iOS) são orientados a usar a opção *"Compartilhar > Adicionar à Tela de Início"* no Safari. Para que o app realmente instale com ícone dedicado, nome curto e abra em tela cheia sem a barra de endereços do Safari, serão implementados os seguintes recursos:

### 2.1. Criação do `public/manifest.json`
```json
{
  "name": "Blessed Control | Blessed Academy Jiu-Jitsu",
  "short_name": "Blessed Control",
  "description": "Check-in via QR Code, evolução de faixa e gestão de tatame da Blessed Academy.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#121316",
  "theme_color": "#121316",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/media/screens/logo.webp",
      "sizes": "256x256",
      "type": "image/webp",
      "purpose": "any maskable"
    }
  ]
}
```

### 2.2. Tags Apple Web App no `<head>` de `views/index.ejs`
```html
<link rel="manifest" href="/manifest.json">
<link rel="apple-touch-icon" href="<%= meta.logo %>">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Blessed Control">
```

---

## 3. Dados Estruturados JSON-LD (`Schema.org`) para SEO Local e MobileApp

### Objetivo
Melhorar o ranqueamento orgânico no Google para buscas por *"Blessed Academy Jiu-Jitsu Serra Talhada"* e destacar a avaliação `4.9/5` do aplicativo nos resultados de busca.

### O que será adicionado em `views/index.ejs`
Bloco `<script type="application/ld+json">` combinando as entidades `SportsActivityLocation` (Sede da Blessed Academy em Serra Talhada, PE) e `SoftwareApplication` (Blessed Control App com `aggregateRating` 4.9/5).
