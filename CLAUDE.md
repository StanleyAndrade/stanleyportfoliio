# stanleyportfolio — landing page de vendas (EUA)

Landing page **só em inglês** para prospectar pequenos negócios americanos sem site (Craigslist e Google Maps). O Stanley manda e-mail com a copy de venda e o link do site. **Não é SaaS**: uma página só, sem login nem banco.

- No ar: https://stanleyandrade.vercel.app (projeto Vercel `stanleyportfolio`, conta stanleyandrade95@gmail.com, time `stanleyandrades-projects`).
- GitHub: `StanleyAndrade/stanleyportfoliio` (com dois "i"). **Push na `main` publica sozinho** (ligação refeita em 21/10/2026, depois de o repositório ser recriado).
- A pasta já está ligada à Vercel (`.vercel/`). Publicar sem GitHub: `npx vercel deploy --prod --yes`.

## Estrutura
- `index.html`, `styles.css`, `app.js`: HTML/CSS/JS puro, sem build. Classes e comentários em português; textos da tela em inglês.
- `api/checkout.js`: função da Vercel que cria a sessão do **Stripe Checkout** (mesmo jeito do ServerFall/`managesystem-backend`). Os **preços ficam só aqui** (`PLANOS`); o navegador manda só o id do plano. Resposta `{ success, data, message }`.
- `STRIPE_SECRET_KEY` (chave **live**) já está nas variáveis da Vercel. `SITE_URL` é opcional.
- `CONFIG` no topo do `app.js`: `youtubeId` (vazio = "Video coming soon"), `agendaUrl` (Google Agenda, agenda de horários com Google Meet), ids do Tawk.to, e-mail e WhatsApp. Tudo preenchido, **menos o `youtubeId`**: o Stanley vai gravar um vídeo se apresentando e mandar o link.
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

Ao mudar preço: alterar no `api/checkout.js` **e** no texto/botão do `index.html`.

## Página (ordem)
Topo (nav + temas) → hero curto focado na dor → **planos logo no início** → faixa "Secure payment by Stripe" → "Sound familiar?" (dores) → How it works (4 passos) → About (vídeo + Stanley Andrade, Software Engineer, dev desde 2021, clientes nos EUA, Brasil e Espanha) → FAQ → Contato (Google Meet, e-mail stanleyclientes@gmail.com, WhatsApp e Telegram +55 21 99200-2356, chat Tawk.to) → rodapé.

Volta do Stripe: `?checkout=success` ou `?checkout=cancel` mostra um aviso no topo.

## Padrões
- Copy na língua do cliente americano dono de pequeno negócio: simples, direta, focada na dor (sem site = cliente liga para o concorrente). Sem depoimentos inventados.
- Três temas (claro, rosa, escuro) + automático, tokens em `styles.css`, `localStorage` `theme-preference`. Celular primeiro, sem rolagem horizontal, respeita "reduzir movimento".
- Teste de mudança pequena: `node --check app.js` basta. Mexeu no checkout: testar o `api/checkout.js` com req/res simulados (a chave é live: não pagar de verdade).
