# 02. Melhorias Implementadas (Performance & UX)

Este documento detalha todas as melhorias técnicas aplicadas no projeto referentes aos **Capítulos 1 (Performance & Produção)** e **Capítulo 3 (UX, Interatividade & Acessibilidade)**.

---

## 1. Performance & Produção (Capítulo 1)

### 1.1. Substituição do Tailwind CDN por Build Estático via Tailwind CLI
- **Problema Anterior:** A página carregava `<script src="https://cdn.tailwindcss.com"></script>` em tempo de execução no navegador do usuário (~100 KB+ de JavaScript bloqueante, causando *Flash of Unstyled Content* em conexões móveis).
- **Solução Aplicada:**
  - Criação do `tailwind.config.js` com todos os tokens Material 3 da Blessed Academy e do arquivo `src/css/input.css`.
  - Atualização do `build.js` para compilar e minificar o CSS em `public/css/styles.css` (~30.3 KB bruto / ~6 KB gzip) e injetá-lo diretamente em `<style id="compiled-tailwind">` no `index.html`, eliminando qualquer requisição externa de runtime do Tailwind.

### 1.2. Subset de Ícones na Fonte Material Symbols Outlined
- **Problema Anterior:** O link do Google Fonts carregava a fonte variável completa (`opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200`), transferindo centenas de kilobytes de glifos não utilizados.
- **Solução Aplicada:**
  - Fixação dos eixos em `opsz,wght,FILL,GRAD@24,400,0,0` e uso do parâmetro oficial `&icon_names=...` contendo em ordem alfabética **apenas os 53 ícones efetivamente usados na página**, reduzindo o tamanho da fonte de ícones em mais de 90%.

### 1.3. Limpeza de Duplicatas e Conversão de Imagens para WebP
- **Problema Anterior:**
  - A raiz da pasta `media/` continha 15 arquivos `WhatsApp Image 2026-10-21...jpeg`, `logo.jpeg` e `image.png` duplicados (~1.7 MB sem uso).
  - A pasta `media/screens/` somava **1.5 MB** em arquivos `.jpeg`, sendo que `media/screens/logo.jpeg` tinha `1220x1016px` (**303 KB**) para ser exibido em `44x44px`.
- **Solução Aplicada:**
  - Remoção de todos os arquivos duplicados na raiz de `media/`.
  - Redimensionamento da logo para `256x256px` e conversão de todas as 15 telas + logo em `media/screens/` para formato `.webp` (qualidade 82, sem metadados EXIF).
  - **Resultado:** O peso total das imagens caiu de **~3.2 MB** (somando duplicatas) / **1.5 MB** (telas ativas) para apenas **608 KB** (redução de **60% a 81%** no peso de mídia), com a logo caindo de **303 KB para 9 KB**.

---

## 2. UX, Interatividade & Acessibilidade (Capítulo 3)

### 2.1. Navegação Completa no Lightbox (`<dialog id="screen-lightbox">`)
- **Melhorias Aplicadas:**
  - Adicionados botões **Anterior (`←`)** e **Próxima (`→`)** no cabeçalho do modal, acompanhados de um contador de posição (`1 / 15`) e badge dinâmico da tela.
  - Suporte a navegação por teclado com as teclas `ArrowLeft` e `ArrowRight` enquanto o modal estiver aberto.
  - Implementação declarativa de `closedby="any"` no `<dialog>` com fallback em JavaScript para fechar ao clicar no `::backdrop` em navegadores que ainda não suportam `closedBy`.
  - Trava automática de rolagem do `body` (`overflow-hidden`) sincronizada sempre que o Lightbox ou o menu mobile estão abertos.

### 2.2. Inclusão da 15ª Tela (`prof-editar-perfil.webp`) na Vitrine
- **Problema Anterior:** A tela de edição de perfil/credencial do professor existia em `media/screens/`, mas não estava listada em `src/data.js`.
- **Solução Aplicada:** Adicionada em `showcase.professorExtras` com o título *"Dados do Mestre & Filiação"* (badge `CREDENCIAL`), totalizando todas as **15 telas nativas** do aplicativo disponíveis na vitrine e no carrossel do Lightbox (6 telas do Aluno + 9 telas do Professor).

### 2.3. QR Code SVG Real e Escaneável na Seção de Download
- **Problema Anterior:** O SVG do QR Code na seção de download era apenas decorativo e não podia ser lido pela câmera do celular.
- **Solução Aplicada:** Substituído por um QR Code SVG vetorial real (Matriz Nível M `31x31`) que decodifica nativamente nas câmeras de smartphones Android e iOS.

### 2.4. Acessibilidade por Teclado e Semântica ARIA
- Todos os cards interativos de telas (Hero, Simulador, Vitrine do Aluno e Vitrine do Professor) receberam `role="button"`, `tabindex="0"`, `aria-label` descritivo, estilos de foco visíveis (`focus-visible:ring-2`) e suporte às teclas `Enter` e `Espaço` via `handleCardKeydown`.
- Botões de filtro de horários, seletor de perfil do simulador e seletor de faixas CBJJ agora atualizam dinamicamente o atributo `aria-pressed="true/false"`.

### 2.5. Download Direto do APK Oficial (`app-blessed-control-v1.apk`)
- **Integração Completa:** Todos os botões de CTA de download da página (Header, Menu Mobile, Hero, Seção de Download, CTA Final e Barra Fixa Mobile) foram conectados ao arquivo `media/apk/app-blessed-control-v1.apk` (~54.6 MB) usando o atributo nativo `download` combinado ao feedback visual do toast (`#apk-toast`).
- **Headers HTTP no Servidor Express (`server.js`):** Configurado `Content-Type: application/vnd.android.package-archive` e `Content-Disposition: attachment` para entregas via Node.js.
