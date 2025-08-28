# Personal Trainer

Landing Page (LP) para um personal trainer 

projeto para aperfeiçoar as habilidades de web design

- html
- css
- javascript

atendendo os requisitos de produtos digitais

- ux
- responsividade

## Esse projeto Inteiro

1️⃣ Estrutura geral

HTML bem organizado, usando tags semânticas (header, section, footer) que favorecem SEO.

Estilos inline com CSS no <style> — simples, funcional e suficiente para um projeto inicial, mas pode ser melhor modularizado futuramente (separar em um style.css).

Layout responsivo, com media queries para telas menores.

2️⃣ Integrações e variáveis

Variáveis de configuração criadas no <script> (VARS), permitindo fácil customização de:

GA_ID → Google Analytics 4

DOMAIN → domínio do site

FORM_ENDPOINT → endpoint Formspree

Isso deixa o código escalável e fácil de manter, porque só troca no topo do arquivo.

3️⃣ Funcionalidades

✅ Google Analytics 4

O script do GA4 está bem adicionado.

Configuração dinâmica puxando VARS.GA_ID → bom para ambientes diferentes (produção/homologação).

✅ Formulário (Formspree)

Função handleContact() usa fetch com método POST.

Tratamento de erro com try/catch e mensagens claras para o usuário.

Já inclui reset do formulário ao sucesso.

Ponto de atenção: só precisa confirmar se o endpoint do action no <form> está igual ao VARS.FORM_ENDPOINT.

✅ Botão de WhatsApp

Função openWhatsApp(message) gera link dinâmico com número e mensagem customizada.

Abre nova aba (_blank) → boa prática para não fechar a página.

✅ Evento de clique no WhatsApp

Seleciona todos os links com wa.me e envia evento click_whatsapp para o GA4.

Bom para acompanhar métricas de conversão.

✅ Teste A/B do Hero

Randomização simples com Math.random().

Envia evento para GA4 (view_hero_ab) indicando qual variação o usuário viu.

Estrutura funcional, mas limitada (sem persistência para manter a mesma versão ao recarregar).

✅ JSON-LD para SEO

Schema.org configurado como Person com ofertas (OfferCatalog).

Ajuda no SEO e em rich snippets do Google.

✅ Responsividade

Mobile-first bem implementado com breakpoints para até 960px.

Layout fluido e adaptável.

4️⃣ Pontos fortes

Estrutura clara, fácil de entender.

Scripts organizados e separados por funcionalidade.

Integrações já preparadas para rastreamento e automação.

Sem uso de bibliotecas externas → site rápido.

## Detalhes do Projeto

Uma landing page para um personal trainer com HTML/CSS/JS.
Um starter completo no canvas com design moderno, CTA de WhatsApp, planos, formulário (Formspree), SEO/OG e JSON-LD.

### Plano de ação

para ajustar uma personalização, segue as orientações:

1) Ajustes rápidos no código (5–15 min)

a - Troque:

- Telefone do WhatsApp (phone = '55XXXXXXXXXXX') no script → use DDI+DDD+número.
- Links de redes sociais e endereço no bloco de contato.
- Formspree: crie um endpoint e substitua https://formspree.io/f/SEU_ENDPOINT.
- Título, descrição e og:image (suba uma imagem 1200×630).

b - Conteúdo:

- Edite headline (“Resultados reais…”) para a proposta do seu personal.
- Ajuste os planos e preços (Start/Pro/Elite) conforme a oferta real.
- Atualize os testemunhos (ou deixe 1 fictício + 1 real assim que tiver).

2) Organização de assets

- favicon.ico: gere no realfavicongenerator.net (ou similar).
- og-image.jpg: exporte 1200×630.
- Logo: pode manter o placeholder por agora (troque depois).

3) Publicação (duas opções fáceis)

- Opção A — GitHub Pages (grátis e simples)
    - No GitHub: New repository → personal-trainer-lp.
    - Suba apenas o index.html (o canvas já tem tudo inline).
    - Settings → Pages → Source: Deploy from a branch → branch main → /root.
    - A URL sai como https://seuusuario.github.io/personal-trainer-lp/.

- Opção B — Vercel (rápido e com domínio custom)
    - Crie conta no Vercel.
    - New Project → importe o repositório do GitHub.
    - Build settings: é estático, sem build step.
    - Deploy. Depois aponte seu domínio: app.vercel.com > Settings > Domains.

- Dica: Se for usar domínio próprio (tipo seudominio.com), registre na Namecheap/Registro.br e aponte para a Vercel. No GitHub Pages, crie CNAME no repositório com o domínio.

4) Analytics e base de SEO (20 min)

- Crie uma propriedade no Google Analytics 4 → cole o script no <head>.
- Crie e envie sitemap.xml e robots.txt (posso gerar para você depois).
- Use Search Console para indexar a landing.

5) Validação rápida de UX (checklist)

- LP carrega em < 2s no mobile (testar no Lighthouse).
- CTA de WhatsApp visível no hero e flutuante.
- Seção “Planos” com 1 plano recomendado.
- Formulário simples (nome, email, mensagem) + fallback pelo WhatsApp.

### Networking aplicado a este projeto

#### Quem abordar

- Devs front-end júnior e pleno que já publicaram LPs no GitHub/Vercel.
- Designers que fazem protótipos para LPs (podem dar dicas de hero/copy).
- Personais que já vendem pelo Instagram (validar proposta e ofertas).

#### Mensagem inicial (copie e cole)

Oi [NOME], tudo bem?
Estou construindo uma landing page para personal trainer com HTML/CSS/JS, focada em conversão (WhatsApp + Formspree) e publicação no Vercel/GitHub Pages.
Você já publicou LPs assim? Posso te perguntar 2–3 pontos rápidos sobre melhorias de hero e planos? Em troca, te mostro o código aberto e as métricas que eu coletar.

#### Perguntas objetivas

1. O hero está claro e com benefício direto? O que você mudaria na headline/CTA?
2. Planos: a ancoragem “Pro (Recomendado)” está convincente?
3. Algum bloqueio visual no mobile (acima da dobra) que você removeria?
4. Sugestão de prova social mínima (selo/indicação/resultado) para subir agora?

#### O que compartilhar (e pedir feedback)

- Link do deploy (Vercel/GitHub Pages).
- Prints de Lighthouse (Mobile).
- Print do Scrollmap (se usar Hotjar/Clarity depois).

### Próximos passos (curtíssimo prazo)

1. Editar o arquivo do canvas com seus dados reais (telefone, redes, planos).
2. Criar repositório e publicar (GitHub Pages ou Vercel).
3. Me mandar a URL publicada aqui. Eu faço uma review objetiva: performance, SEO, copy e layout (sem frescura).
4. Enviar a mensagem de networking para 1 pessoa hoje (validação do hero + planos).

#### Quer que eu gere:

- robots.txt e sitemap.xml?
- O script do GA4 com evento de click no WhatsApp?
- Uma variação de hero (copy A/B) para você testar?
- Manda a URL assim que publicar que eu destrincho os ajustes finos.

#### robots.txt

Esse arquivo diz aos buscadores o que eles podem ou não indexar.

#### sitemap.xml

Esse arquivo ajuda os buscadores a entender a estrutura da sua página.

#### Script do GA4 com evento de clique no WhatsApp

- Passo 1: Adicionar o GA4

No <head> do seu index.html, adicione substituindo G-XXXXXXX pelo seu ID de medição:

- Passo 2: Evento de clique no botão WhatsApp

Logo antes do fechamento da tag <body>, adicione:

#### Variação de Hero (copy A/B)

A ideia é ter uma versão alternativa para testar qual copy converte melhor.
- Original

````html
Transforme seu corpo com treinos personalizados e acompanhamento profissional.
````
- Variação A/B
````html
Resultados rápidos, treinos inteligentes: seu personal trainer online e acessível.
````

##### Como testar

Duplique a seção <header> e crie uma classe hero-b para a variação.

Com JavaScript, alterne entre hero-a e hero-b em cada atualização de página ou com uma porcentagem randômica.

No GA4, crie um evento view_hero_ab para acompanhar impressões de cada versão.

Exemplo rápido: 

## Próximos passos para esse projeto

5️⃣ O que pode melhorar

Separar o CSS e scripts em arquivos externos para melhor manutenção.

Implementar persistência no teste A/B (ex.: localStorage) para o usuário não ver versões diferentes a cada reload.

Confirmar que o endpoint do Formspree no action do formulário é dinâmico (VARS.FORM_ENDPOINT) para evitar divergências.

Adicionar alt descritivo em todas imagens (algumas estão genéricas).