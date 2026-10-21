# stanleyportfolio

Landing page em inglês (clientes dos EUA) com os planos e pagamento pelo Stripe. Publicada na Vercel (`stanleyandrade.vercel.app`): push na `main` publica.

- `index.html`, `styles.css`, `app.js`: a página (HTML/CSS/JS puro, sem build).
- `api/checkout.js`: função da Vercel que cria a sessão do Stripe Checkout. Os preços ficam só nela.

## Configurar

Na Vercel (Settings > Environment Variables):

- `STRIPE_SECRET_KEY`: chave secreta do Stripe (`sk_live_...`; para testar, `sk_test_...`).
- `SITE_URL` (opcional): ex. `https://stanleyandrade.vercel.app`. Sem ela, usa o endereço que a pessoa abriu.

No topo do `app.js` (`CONFIG`): id do vídeo do YouTube, link de agendamento do Google Agenda e ids do Tawk.to.

## Testar localmente

`npx vercel dev` (sobe a página e a `/api/checkout` com as variáveis do `.env`).
