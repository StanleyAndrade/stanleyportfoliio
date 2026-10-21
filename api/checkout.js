import Stripe from 'stripe'

// Preços ficam só aqui no servidor: o navegador manda apenas o id do plano.
const PLANOS = {
    essential: { nome: 'Essential Page', descricao: '1-page custom website, mobile-friendly', valor: 9900 },
    standard: { nome: 'Standard Website', descricao: 'Up to 5-page custom website with local SEO', valor: 49900 },
    business: { nome: 'Business Website', descricao: 'Online store with cart and checkout', valor: 99900 },
    gmb: { nome: 'Google Business Profile Setup', descricao: 'Full Google Business Profile setup for local businesses', valor: 19900 },
    serverfall: { nome: 'ServerFall Website Monitoring', descricao: '24/7 uptime, domain and SSL monitoring', valor: 1900, mensal: true },
}

let _stripe = null

function getStripe() {
    if (!_stripe) {
        _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { maxNetworkRetries: 2, timeout: 15000 })
    }
    return _stripe
}

function urlDoSite(req) {
    if (process.env.SITE_URL) {
        return process.env.SITE_URL.replace(/\/$/, '')
    }
    const host = req.headers['x-forwarded-host'] ?? req.headers.host
    return `https://${host}`
}

function responder(res, status, success, data, message) {
    res.status(status).json({ success, data, message })
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST')
        return responder(res, 405, false, null, 'Method not allowed.')
    }

    if (!process.env.STRIPE_SECRET_KEY) {
        return responder(res, 503, false, null, 'Online payment is not available right now. Please contact me by email or WhatsApp.')
    }

    const planoId = req.body?.plano
    const plano = Object.hasOwn(PLANOS, planoId) ? PLANOS[planoId] : null
    if (!plano) {
        return responder(res, 400, false, null, 'Plan not found. Please refresh the page and try again.')
    }

    const site = urlDoSite(req)
    const precoBase = { currency: 'usd', unit_amount: plano.valor, product_data: { name: plano.nome, description: plano.descricao } }

    try {
        const sessao = await getStripe().checkout.sessions.create({
            mode: plano.mensal ? 'subscription' : 'payment',
            line_items: [{
                price_data: plano.mensal ? { ...precoBase, recurring: { interval: 'month' } } : precoBase,
                quantity: 1,
            }],
            ...(plano.mensal ? {} : { customer_creation: 'always' }),
            metadata: { plano: planoId },
            custom_fields: [{ key: 'business', label: { type: 'custom', custom: 'Business name' }, type: 'text' }],
            phone_number_collection: { enabled: true },
            billing_address_collection: 'auto',
            allow_promotion_codes: true,
            locale: 'en',
            success_url: `${site}/?checkout=success&plan=${planoId}`,
            cancel_url: `${site}/?checkout=cancel#pricing`,
        })
        return responder(res, 200, true, { url: sessao.url }, null)
    } catch (error) {
        console.error('Erro ao criar checkout do Stripe:', error.message)
        return responder(res, 502, false, null, 'Could not reach the payment system. Please try again in a moment.')
    }
}
