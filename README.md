# Stanley Andrade — Portfolio and services

Personal website of **Stanley Andrade**, software engineer. It has two parts: the **portfolio** (resume, experience, skills and contact, for job opportunities) and **sales pages** for small US businesses (Android/iOS apps, custom software, websites, Google Business Profile setup and website monitoring with ServerFall), with online payment through Stripe.

![HTML](https://img.shields.io/badge/html-5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-vanilla-F7DF1E?logo=javascript&logoColor=black)
![Stripe](https://img.shields.io/badge/payments-stripe-635BFF?logo=stripe&logoColor=white)
![Vercel](https://img.shields.io/badge/deploy-vercel-000000?logo=vercel)

## Demo

- **Website:** https://stanleyandrade.vercel.app
- **Services:** https://stanleyandrade.vercel.app/pages/services.html

## Features

- **Portfolio** (`index.html`): hero, numbers, about, experience, projects, skills, education and languages, contact and a downloadable resume (PDF).
- **Services page** with plans and **Stripe Checkout**:

  | Plan | Price |
  |---|---|
  | Essential Page (1 page) | $99 one-time |
  | Standard Website (up to 5 pages) | $499 one-time |
  | Business Website (online store) | $999 one-time |
  | Google Business Profile Setup | $199 one-time |
  | ServerFall Website Monitoring | $19/month |

- **One landing page per service:** websites + Google, apps and custom software, each with pain, solution, pricing, how it works, about, FAQ and contact.
- **Three languages:** English (in the HTML, for SEO), Spanish and Portuguese, chosen by `?lang=en|es|pt`, the saved preference or the device language. Stripe Checkout opens in the same language.
- **Themes:** light, pink, dark and automatic.
- **Contact:** schedule a Google Meet call, Tawk.to live chat, email and WhatsApp.
- **Illustrations made in HTML/CSS** (browser, phone, Google Maps, dashboard...), no image files.
- **Mobile first**, respects "reduce motion".

## Tech stack

| Area | Technology |
|---|---|
| Pages | Plain HTML |
| Styles | Plain CSS with design tokens (`styles.css`) |
| Scripts | Vanilla JavaScript (`app.js`, `i18n.js`) |
| Payments | Stripe Checkout through a Vercel serverless function |
| Chat | Tawk.to |
| Hosting | Vercel |

No framework and no build step.

## Prerequisites

- **Node.js 26.13.1** (see `.nvmrc`), only to run the checkout function locally
- **Vercel CLI** (`npx vercel`)
- A Stripe account (use a **test** key locally)

## Installation

```bash
git clone <repository-url> stanleyportfolio
cd stanleyportfolio
npm install
```

Create a `.env.local` file (see the next section) and run the pages and the `/api/checkout` function together:

```bash
npx vercel dev
```

## Configuration (environment variables)

Set them in the Vercel project settings (Settings → Environment Variables) and in `.env.local` for local tests. Never commit them.

| Variable | Required | Description |
|---|---|---|
| `STRIPE_SECRET_KEY` | Yes | Stripe secret key (`sk_test_...` locally, `sk_live_...` in production) |
| `SITE_URL` | No | Website URL for the Stripe return pages (defaults to the address that was opened) |

The `CONFIG` object at the top of `app.js` holds the public settings: YouTube video ID, Google Calendar booking link, Tawk.to IDs, email and WhatsApp.

## Usage

- Edit the HTML/CSS/JS files and refresh the browser.
- **Prices** live only in `api/checkout.js` (`PLANOS`): the browser sends only the plan ID. When a price changes, update `api/checkout.js`, the texts in `pages/services.html` and `pages/website-google.html`, and the translations in `i18n.js`.
- **Translations:** English stays in the HTML; Spanish and Portuguese go in `i18n.js` (or `<page>.i18n.js`) by the `data-i18n` key. Every new text needs the three languages.
- **New service page:** add it to the "Services" menu on every page.
- Quick check:

```bash
node --check app.js i18n.js
```

## Folder structure

```
stanleyportfolio/
├── index.html                # Portfolio
├── portfolio.i18n.js         # Portfolio translations (ES/PT)
├── stanley-andrade-resume.pdf
├── pages/
│   ├── services.html         # Services and plans (Stripe returns here)
│   ├── website-google.html   # Websites + Google Business Profile
│   ├── apps.html             # Android and iOS apps
│   ├── software.html         # Custom software
│   └── *.i18n.js             # Translations of each page
├── api/
│   └── checkout.js           # Vercel function: creates the Stripe Checkout session
├── styles.css                # Tokens, themes, layout and illustrations
├── app.js                    # Behavior, CONFIG and checkout calls
└── i18n.js                   # Shared translations
```

## Deployment

- Hosted on **Vercel**. Every push to `main` publishes automatically.
- To publish without GitHub: `npx vercel deploy --prod --yes`.

## Contributing

1. Create a branch from `main`: `feature/<name>` (or `fix/<name>`).
2. Every new or changed text needs English, Spanish and Portuguese.
3. Never test the checkout with the live key: use Stripe test mode.
4. Write commit messages in Portuguese and open a pull request to `main`.

## License and author

**Private and proprietary.** All rights reserved.

Developed by **Stanley Andrade**.
