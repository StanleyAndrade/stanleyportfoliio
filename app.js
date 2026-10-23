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
        botao.textContent = t('js.abrindo')

        try {
            const resposta = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plano: botao.dataset.plano, idioma: idiomaAtual }),
            })
            const corpo = await resposta.json().catch(() => null)
            if (!resposta.ok || !corpo?.success) {
                throw new Error(corpo?.message ?? t('js.erro'))
            }
            window.location.href = corpo.data.url
        } catch (e) {
            erro.textContent = e instanceof TypeError ? t('js.semInternet') : e.message
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
const aviso = document.getElementById('aviso-checkout')

function mostrarAvisoCheckout() {
    if (!retorno) return
    if (retorno === 'success') {
        aviso.className = 'aviso aviso--sucesso'
        aviso.textContent = t('js.sucesso', { email: CONFIG.email })
    } else {
        aviso.className = 'aviso aviso--info'
        aviso.textContent = t('js.cancelado')
    }
    aviso.hidden = false
}

if (retorno || params.has('lang')) {
    history.replaceState(null, '', window.location.pathname + window.location.hash)
}

// ===================== Vídeo de apresentação =====================
const video = document.getElementById('video')
const iconePlay = '<svg viewBox="0 0 24 24"><path d="M7 4v16l13-8Z"/></svg>'

function montarVideo() {
    if (!CONFIG.youtubeId) {
        video.innerHTML = `<div class="video__vazio"><span class="video__vazio-icone">${iconePlay}</span><strong>${t('js.videoTitulo')}</strong><small>${t('js.videoEmBreve')}</small></div>`
        return
    }
    if (video.querySelector('iframe')) return // já está tocando: não interrompe
    // Só carrega o player do YouTube quando a pessoa clica (página mais leve)
    const capa = document.createElement('button')
    capa.type = 'button'
    capa.className = 'video__capa'
    capa.setAttribute('aria-label', t('js.videoPlay'))
    capa.style.backgroundImage = `url(https://i.ytimg.com/vi/${CONFIG.youtubeId}/hqdefault.jpg)`
    capa.innerHTML = `<span class="video__play">${iconePlay}</span>`
    capa.addEventListener('click', () => {
        video.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${CONFIG.youtubeId}?autoplay=1&rel=0" title="Meet Stanley Andrade" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
    })
    video.replaceChildren(capa)
}

// ===================== Contato: agenda e chat =====================
const linkWhatsapp = () => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t('js.whatsapp'))}`

// Links com mensagem pronta no idioma da página
function montarLinksContato() {
    document.getElementById('contato-agenda').href = CONFIG.agendaUrl || `mailto:${CONFIG.email}?subject=${encodeURIComponent(t('js.agendaAssunto'))}&body=${encodeURIComponent(t('js.agendaCorpo'))}`
    document.getElementById('contato-email').href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(t('js.emailAssunto'))}`
    document.getElementById('contato-whatsapp').href = linkWhatsapp()
}

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
    window.open(linkWhatsapp(), '_blank', 'noopener')
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

// ===================== Idioma =====================
document.addEventListener('idioma-mudou', () => {
    mostrarAvisoCheckout()
    montarVideo()
    montarLinksContato()
})
aplicarIdioma(idiomaAtual)
