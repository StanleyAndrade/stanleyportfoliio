// ===================== Configuração (preencha quando tiver) =====================
const CONFIG = {
    // Id do vídeo do YouTube (o que vem depois de "watch?v=" ou "youtu.be/"). Vazio = mostra "Video coming soon".
    youtubeId: '',
    // Link da página de agendamento do Google Agenda (Agendamentos > Compartilhar). Vazio = abre o e-mail.
    agendaUrl: 'https://calendar.app.google/skVPsSZXLBUwNbP9A',
    // Tawk.to: Administration > Chat Widget > "Direct Chat Link" tem o formato tawk.to/chat/<propertyId>/<widgetId>
    tawkPropertyId: '69be13661f2eee1c3a8ff257',
    tawkWidgetId: '1jk77nih2',
    email: 'stanleyclientes@gmail.com',
    whatsapp: '5521992002356',
}

// ===================== Tema =====================
const botoesTema = document.querySelectorAll('[data-tema]')

function marcarTema(tema) {
    botoesTema.forEach((botao) => botao.setAttribute('aria-pressed', String(botao.dataset.tema === tema)))
}

botoesTema.forEach((botao) => {
    botao.addEventListener('click', () => {
        const tema = botao.dataset.tema
        document.documentElement.dataset.theme = tema
        try {
            localStorage.setItem('theme-preference', tema)
        } catch { /* sem localStorage: vale só nesta visita */ }
        marcarTema(tema)
    })
})
marcarTema(document.documentElement.dataset.theme)

// ===================== Checkout do Stripe =====================
document.querySelectorAll('[data-plano]').forEach((botao) => {
    botao.addEventListener('click', async () => {
        const erro = botao.parentElement.querySelector('.plano__erro')
        const textoOriginal = botao.textContent
        erro.hidden = true
        botao.disabled = true
        botao.classList.add('btn--carregando')
        botao.textContent = 'Opening secure checkout...'

        try {
            const resposta = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plano: botao.dataset.plano }),
            })
            const corpo = await resposta.json().catch(() => null)
            if (!resposta.ok || !corpo?.success) {
                throw new Error(corpo?.message ?? 'Something went wrong. Please try again.')
            }
            window.location.href = corpo.data.url
        } catch (e) {
            erro.textContent = e instanceof TypeError ? 'No internet connection. Please check it and try again.' : e.message
            erro.hidden = false
            botao.disabled = false
            botao.classList.remove('btn--carregando')
            botao.textContent = textoOriginal
        }
    })
})

// Volta do Stripe: mostra o aviso e limpa a URL
const params = new URLSearchParams(window.location.search)
const retorno = params.get('checkout')
if (retorno) {
    const aviso = document.getElementById('aviso-checkout')
    if (retorno === 'success') {
        aviso.className = 'aviso aviso--sucesso'
        aviso.textContent = `Payment received — thank you! I'll email you within 24 hours to get started. Questions? Write to ${CONFIG.email}.`
    } else {
        aviso.className = 'aviso aviso--info'
        aviso.textContent = 'Checkout canceled — no charge was made. Questions before you buy? Talk to me below.'
    }
    aviso.hidden = false
    history.replaceState(null, '', window.location.pathname + window.location.hash)
}

// ===================== Vídeo de apresentação =====================
const video = document.getElementById('video')
const iconePlay = '<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8Z"/></svg>'

if (CONFIG.youtubeId) {
    // Só carrega o player do YouTube quando a pessoa clica (página mais leve)
    const capa = document.createElement('button')
    capa.type = 'button'
    capa.className = 'video__capa'
    capa.setAttribute('aria-label', 'Play video: meet Stanley')
    capa.style.backgroundImage = `url(https://i.ytimg.com/vi/${CONFIG.youtubeId}/hqdefault.jpg)`
    capa.innerHTML = `<span class="video__play">${iconePlay}</span>`
    capa.addEventListener('click', () => {
        video.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${CONFIG.youtubeId}?autoplay=1&rel=0" title="Meet Stanley Andrade" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
    })
    video.append(capa)
} else {
    video.innerHTML = `<div class="video__vazio"><span class="video__vazio-icone">${iconePlay}</span><strong>Meet Stanley</strong><small>Video coming soon</small></div>`
}

// ===================== Contato: agenda e chat =====================
const linkAgenda = document.getElementById('contato-agenda')
linkAgenda.href = CONFIG.agendaUrl || `mailto:${CONFIG.email}?subject=${encodeURIComponent('Book a call')}&body=${encodeURIComponent('Hi Stanley! I would like to book a call. Best days and times for me:')}`

if (CONFIG.tawkPropertyId && CONFIG.tawkWidgetId) {
    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()
    const script = document.createElement('script')
    script.async = true
    script.src = `https://embed.tawk.to/${CONFIG.tawkPropertyId}/${CONFIG.tawkWidgetId}`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    document.body.append(script)
}

document.getElementById('contato-chat').addEventListener('click', () => {
    if (window.Tawk_API?.maximize) {
        window.Tawk_API.maximize()
        return
    }
    // Sem chat configurado (ou ainda carregando): cai no WhatsApp
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent("Hi Stanley! I'd like a website for my business.")}`, '_blank', 'noopener')
})

// ===================== Entrada suave ao rolar =====================
const revelaveis = document.querySelectorAll('.revelar')
if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel')
                observador.unobserve(entrada.target)
            }
        })
    }, { threshold: 0.12 })
    revelaveis.forEach((el) => observador.observe(el))
} else {
    revelaveis.forEach((el) => el.classList.add('visivel'))
}

document.getElementById('ano').textContent = new Date().getFullYear()
