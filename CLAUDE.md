# stanleyportfolio — portfólio (emprego) + páginas de venda (EUA)

Duas partes, em **inglês, espanhol e português** (seletor EN/ES/PT no topo): o **portfólio** do Stanley para conseguir emprego (`index.html`) e as **páginas de venda** em `pages/` para prospectar pequenos negócios americanos (Craigslist e Google Maps): apps Android/iOS, software sob medida, sites, Perfil da Empresa no Google e monitoramento (ServerFall). **Não é SaaS**: páginas estáticas, sem login nem banco.

- No ar: https://stanleyandrade.vercel.app (projeto Vercel `stanleyportfolio`, conta stanleyandrade95@gmail.com, time `stanleyandrades-projects`).
- GitHub: `StanleyAndrade/stanleyportfoliio` (com dois "i"). **Push na `main` publica sozinho** (ligação refeita em 21/10/2026, depois de o repositório ser recriado).
- A pasta já está ligada à Vercel (`.vercel/`). Publicar sem GitHub: `npx vercel deploy --prod --yes`.

## Estrutura
- `index.html` = **portfólio para emprego** (dados do currículo: hero, números, sobre, experiência, projetos em cartões com foto em `img/projetos/` + "o que faz" (leigo) + "como foi feito" (técnico), habilidades, formação/idiomas, contato, faixa "freelance" levando a `pages/services.html`). Textos ES/PT em `portfolio.i18n.js` (chaves `pf.`). Currículo para baixar: `stanley-andrade-resume.pdf` (cópia do `~/Downloads/Stanley_Andrade_Resume.pdf`).
- `pages/services.html` = a antiga página principal de vendas (serviços, planos, checkout). `styles.css`, `app.js`: HTML/CSS/JS puro, sem build. Classes e comentários em português.
- Menu **"Services"** (`.menu-servicos`, `<details>`) no topo de todas as páginas, também no celular (só o ícone): lista `services.html` e as páginas de cada serviço. Página nova de serviço: incluir no menu das 5 páginas.
- `i18n.js`: traduções. O **inglês fica no HTML** (é o que o Google lê); espanhol e português ficam em `TRADUCOES` pela chave `data-i18n` (texto, aceita HTML) ou `data-i18n-aria` (aria-label/title). Textos que o `app.js` monta usam `t('js....')` e têm as três versões no `i18n.js`. **Texto novo ou alterado: mexer nos três idiomas.**
- Idioma escolhido por: `?lang=en|es|pt` no link (dá para mandar o link já em espanhol no e-mail) → `localStorage` `language-preference` → idiomas do aparelho (`navigator.languages`, o primeiro que o site tem) → inglês. A página fica escondida (`.i18n-pendente`) até traduzir, para não piscar em inglês. O checkout recebe o `idioma` e abre o Stripe nele, com as mensagens de erro traduzidas.
- `api/checkout.js`: função da Vercel que cria a sessão do **Stripe Checkout** (mesmo jeito do ServerFall/`managesystem-backend`). Os **preços ficam só aqui** (`PLANOS`); o navegador manda só o id do plano. Resposta `{ success, data, message }`.
- `STRIPE_SECRET_KEY` (chave **live**) já está nas variáveis da Vercel. `SITE_URL` é opcional.
- `CONFIG` no topo do `app.js`: `youtubeId` (vazio = "Video coming soon"), `agendaUrl` (Google Agenda, agenda de horários com Google Meet), ids do Tawk.to, e-mail e WhatsApp. Tudo preenchido, **menos o `youtubeId`**: o Stanley vai gravar um vídeo se apresentando e mandar o link.
- `pages/`: uma landing page por serviço (`website-google.html`, `apps.html`, `software.html`), com a estrutura de copy de venda: headline → dor (com imagem "sem x com") → solução (blocos imagem + texto) → preço (planos ou orçamento grátis) → como funciona → sobre → FAQ → chamada final → contato. Usam `../styles.css`, `../i18n.js` + `<página>.i18n.js` (textos só da página: `lpw.`, `lpa.`, `lps.`) e `../app.js`. Os cartões de `services.html` levam a elas ("Learn more"). O retorno do Stripe volta para `pages/services.html`.
- Imagens = ilustrações em HTML/CSS no `styles.css` (seção "Landing pages e ilustrações": navegador, celular, Google Maps, app, painel, planilha, notificações). Os textos delas (`mk.`, `mka.`, `mks.`) e os comuns às páginas (`orc.`, `lp.`) ficam no `i18n.js`.
- `component/`: sobra do site antigo, sem uso (perguntar antes de apagar).

## Planos (ids do `api/checkout.js`)
| id | Plano | Preço |
|---|---|---|
| `essential` | Essential Page (1 página) | $99 único |
| `standard` | Standard Website (até 5 páginas, "Most popular") | $499 único |
| `business` | Business Website (loja online) | $999 único |
| `gmb` | Google Business Profile Setup | $199 único |
| `serverfall` | ServerFall Website Monitoring (https://serverfall.vercel.app) | $19/mês (assinatura) |

Base dos planos e textos: https://webfor99.com/shop/ (lá os sites exigem $39/mês de hospedagem; **aqui não cobramos**, o cliente paga só o domínio, ~$12–20/ano). Prazo de entrega não é prometido.

Ao mudar preço: alterar no `api/checkout.js`, no texto/botão de `pages/services.html` e `pages/website-google.html` **e** nas traduções do `i18n.js`.

## Página de serviços (`pages/services.html`, ordem)
Topo (nav + temas) → hero com a **apresentação** (Stanley Andrade, Software Engineer, mais de 5 anos, clientes no Brasil e nos EUA, "várias empresas" ajudadas) → **Serviços** (`#services`: apps e software sob medida = só orçamento grátis, sem preço, pelo contato; site, Perfil Google e ServerFall levam aos planos) → planos de sites + extras (`#pricing`, `#extra`) → faixa "Secure payment by Stripe" → "Sound familiar?" (dores de todos os serviços) → How it works (4 passos) → About (vídeo + texto) → FAQ → Contato (Google Meet, e-mail stanleyclientes@gmail.com, WhatsApp e Telegram +55 21 99200-2356, chat Tawk.to) → rodapé.

Volta do Stripe: vai para `pages/services.html?checkout=success` ou `?checkout=cancel`, que mostra um aviso no topo.

## Padrões
- Copy (nos três idiomas) na língua do cliente americano dono de pequeno negócio: simples, direta, focada na dor (sem site = cliente liga para o concorrente). Sem depoimentos inventados.
- Três temas (claro, rosa, escuro) + automático, tokens em `styles.css`, `localStorage` `theme-preference`. Celular primeiro, sem rolagem horizontal, respeita "reduzir movimento".
- Teste de mudança pequena: `node --check app.js i18n.js` basta. Mexeu no checkout: testar o `api/checkout.js` com req/res simulados (a chave é live: não pagar de verdade).
