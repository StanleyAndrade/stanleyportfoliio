// ===================== Idiomas (inglês, espanhol e português) =====================
// O inglês da página fica escrito no index.html (é o que o Google lê). Aqui ficam só as traduções
// dos elementos com data-i18n (texto) e data-i18n-aria (aria-label/title), e os textos que o app.js monta.
const IDIOMAS = ['en', 'es', 'pt']
const LANG_HTML = { en: 'en', es: 'es', pt: 'pt-BR' }

const TRADUCOES = {
    // Inglês: só os textos montados pelo app.js (o resto vem do HTML)
    en: {
        'meta.titulo': 'Stanley Andrade · Apps, Software and Websites for Your Business',
        'meta.descricao': 'Software Engineer with 5+ years of experience. Android and iOS apps, custom software, websites and more for businesses in the US and Brazil. Free call, clear quote, secure payment by Stripe.',
        'js.abrindo': 'Opening secure checkout...',
        'js.erro': 'Something went wrong. Please try again.',
        'js.semInternet': 'No internet connection. Please check it and try again.',
        'js.sucesso': "Payment received — thank you! I'll email you within 24 hours to get started. Questions? Write to {email}.",
        'js.cancelado': 'Checkout canceled — no charge was made. Questions before you buy? Talk to me below.',
        'js.videoPlay': 'Play video: meet Stanley',
        'js.videoTitulo': 'Meet Stanley',
        'js.videoEmBreve': 'Video coming soon',
        'js.agendaAssunto': 'Book a call',
        'js.agendaCorpo': 'Hi Stanley! I would like to book a call. Best days and times for me:',
        'js.emailAssunto': 'Project for my business',
        'js.whatsapp': 'Hi Stanley! I\'d like to talk about a project for my business.',
    },

    es: {
        'meta.titulo': 'Stanley Andrade · Apps, software y sitios web para tu negocio',
        'meta.descricao': 'Ingeniero de software con más de 5 años de experiencia. Apps para Android y iOS, software a la medida, sitios web y más para negocios en EE. UU. y Brasil. Llamada gratis, cotización clara y pago seguro con Stripe.',
        'js.abrindo': 'Abriendo el pago seguro...',
        'js.erro': 'Algo salió mal. Inténtalo de nuevo.',
        'js.semInternet': 'Sin conexión a internet. Revísala e inténtalo de nuevo.',
        'js.sucesso': '¡Pago recibido, gracias! Te escribiré por correo en menos de 24 horas para empezar. ¿Preguntas? Escríbeme a {email}.',
        'js.cancelado': 'Pago cancelado: no se hizo ningún cargo. ¿Tienes dudas antes de comprar? Habla conmigo más abajo.',
        'js.videoPlay': 'Ver video: conoce a Stanley',
        'js.videoTitulo': 'Conoce a Stanley',
        'js.videoEmBreve': 'Video muy pronto',
        'js.agendaAssunto': 'Agendar una llamada',
        'js.agendaCorpo': '¡Hola, Stanley! Me gustaría agendar una llamada. Los mejores días y horarios para mí son:',
        'js.emailAssunto': 'Proyecto para mi negocio',
        'js.whatsapp': '¡Hola, Stanley! Me gustaría hablar de un proyecto para mi negocio.',

        'aria.home': 'Stanley Andrade — inicio',
        'aria.idioma': 'Idioma',
        'aria.tema': 'Tema de colores',
        'tema.light': 'Tema claro',
        'tema.rosa': 'Tema rosa',
        'tema.dark': 'Tema oscuro',
        'tema.system': 'Automático (sigue tu dispositivo)',
        'nav.pricing': 'Precios',
        'nav.how': 'Cómo funciona',
        'nav.about': 'Sobre mí',
        'nav.faq': 'Preguntas',
        'nav.contact': 'Contacto',

        'hero.selo': 'Hola, soy Stanley Andrade · Ingeniero de software',
        'hero.titulo': 'Apps, software y sitios web <span class="degrade">que hacen crecer tu negocio.</span>',
        'hero.texto': 'Hace <strong>más de 5 años</strong> que desarrollo software, con clientes en <strong>Brasil</strong> y <strong>Estados Unidos</strong>, y he ayudado a varias empresas a ahorrar tiempo, verse profesionales y conseguir más clientes. Hablas directamente conmigo: sin equipo de ventas ni intermediarios.',
        'hero.g1': 'Cotización gratis, sin compromiso',
        'hero.g2': 'Pago seguro con Stripe',

        'precos.titulo': 'Planes de sitios web',
        'precos.sub': 'Precios fijos. Pagas una vez y es tuyo. Yo me encargo de la parte técnica; tú, de tus clientes.',
        'plano.unico': 'pago único',
        'plano.revisoes': 'Cambios ilimitados hasta que te encante',
        'plano.telas': 'Se ve genial en celulares, tablets y computadoras',
        'p1.nome': 'Página Esencial',
        'p1.para': 'Ideal para estar en internet rápido',
        'p1.l1': '1 página hecha a la medida de tu negocio',
        'p1.l2': 'Botones para llamar, enviar correo y redes sociales',
        'p1.l3': 'Hasta 300 palabras y 3 fotos',
        'p1.l4': 'Te ayudo a escribir el texto y a elegir las fotos',
        'p1.l5': 'Páginas extra: $100 cada una',
        'p1.btn': 'Quiero mi página — $99',
        'p2.selo': 'El más elegido',
        'p2.nome': 'Sitio Web Estándar',
        'p2.para': 'Aparece en Google y recibe más llamadas',
        'p2.l1': 'Hasta 5 páginas a la medida (Inicio, Servicios, Nosotros, Galería, Contacto…)',
        'p2.l2': 'Formularios de contacto y de "Pide una cotización"',
        'p2.l3': 'SEO local para que la gente cerca de ti te encuentre',
        'p2.l4': 'Ayuda con tu Perfil de Empresa en Google y Maps',
        'p2.l5': 'Hasta 1,500 palabras y 15 fotos',
        'p2.btn': 'Quiero mi sitio web — $499',
        'p3.nome': 'Sitio Web Empresarial',
        'p3.para': 'Vende tus productos en internet, 24/7',
        'p3.l1': 'Tienda en línea completa',
        'p3.l2': 'Carrito de compras y pago',
        'p3.l3': 'Acepta tarjetas de crédito, Stripe y PayPal',
        'p3.l4': 'Diseño de productos listo para tu inventario',
        'p3.l5': 'Carga de 10 productos simples o 5 con opciones (talla, color)',
        'p3.l6': 'Correos automáticos de pedido y recibo',
        'p3.btn': 'Quiero mi tienda — $999',
        'extra.titulo': 'Más formas de crecer',
        'extra.sub': 'Aparece en Google Maps y mantén tu sitio web siempre funcionando.',
        'gmb.nome': 'Configuración del Perfil de Empresa en Google',
        'gmb.para': 'Aparece en Google Maps cuando te buscan cerca',
        'gmb.l1': 'Perfil completo: horarios, zonas de servicio y datos de contacto',
        'gmb.l2': 'Las categorías principales y extra correctas para tu negocio',
        'gmb.l3': 'Fotos, logo y descripción que combinan con tu marca',
        'gmb.l4': 'Listo para recibir reseñas en Google de clientes felices',
        'gmb.l5': '30 días de soporte gratis después de publicarlo',
        'gmb.btn': 'Configurar mi perfil — $199',
        'sf.nome': 'Monitoreo de sitios web ServerFall',
        'sf.para': 'Entérate al instante si tu sitio web se cae',
        'sf.periodo': '/ mes',
        'sf.l1': 'Tu sitio web revisado cada minuto, 24/7',
        'sf.l2': 'Alerta inmediata cuando se cae o se pone lento',
        'sf.l3': 'Avisos antes de que venzan tu dominio y tu SSL',
        'sf.l4': 'Panel sencillo para ver todo en un solo lugar',
        'sf.l5': 'Cancela cuando quieras',
        'sf.btn': 'Empezar el monitoreo — $19/mes',
        'sf.link': 'Conoce más sobre ServerFall →',
        'stripe.faixa': '<strong>Pago seguro con Stripe.</strong> Usado por millones de empresas en todo el mundo. Tu tarjeta va directo a Stripe: yo nunca la veo.',
        'planos.duvida': '¿No sabes cuál te conviene? <a href="#contact">Habla conmigo primero</a>, es gratis.',

        'dores.titulo': '¿Te suena familiar?',
        'dores.sub': 'La mayoría de los dueños de pequeños negocios con los que hablo dicen lo mismo.',
        'd1.frase': '"Hago todo a mano, con hojas de cálculo y mensajes."',
        'd1.texto': 'Un sistema a la medida junta pedidos, reservas, clientes y reportes en un solo lugar, y hace el trabajo aburrido por ti.',
        'd2.frase': '"Mis clientes siempre preguntan si tengo una app."',
        'd2.texto': 'Una app para Android y iPhone pone tu negocio a un toque de ellos, con reservas, pedidos y notificaciones.',
        'd3.frase': '"El software que venden ya hecho no se adapta a mi forma de trabajar."',
        'd3.texto': 'Lo hago a la medida de tu negocio, no al revés. Tienes justo lo que necesitas, sin extras.',
        'd4.frase': '"La gente me busca y no me encuentra."',
        'd4.texto': 'Un sitio web limpio y un perfil completo en Google Maps muestran que eres de verdad, justo cuando los clientes te buscan.',
        'd5.frase': '"Las agencias cobran decenas de miles de dólares."',
        'd5.texto': 'Trabajas directo con un solo ingeniero. Precios justos, una cotización clara antes de empezar y sin contratos largos.',
        'd6.frase': '"No tengo tiempo para cosas técnicas."',
        'd6.texto': 'No lo necesitas. Me cuentas qué necesitas, yo hago el resto y te mantengo al tanto.',

        'como.titulo': 'Cómo funciona',
        'como.sub': 'Cuatro pasos simples. Sin reuniones innecesarias.',
        'passo1.t': 'Cuéntame qué necesitas',
        'passo1.p': 'Agenda una llamada gratis o mándame un mensaje. Cuéntame de tu negocio y de tu idea.',
        'passo2.t': 'Recibe un precio claro',
        'passo2.p': 'Los sitios web y los extras tienen precio fijo en esta página. Para apps y software te envío una cotización cerrada. Pagas de forma segura con Stripe.',
        'passo3.t': 'Yo lo hago, tú lo revisas',
        'passo3.p': 'Te envío una vista previa o una versión de prueba en el camino. Pides cambios hasta que quede bien.',
        'passo4.t': 'Publícalo y crece',
        'passo4.p': 'Tu app, sistema o sitio web sale al aire y empieza a ahorrarte tiempo y a traerte clientes.',

        'sobre.selo': 'Quién lo hace',
        'sobre.titulo': 'Hola, soy Stanley Andrade',
        'sobre.p1': 'Soy ingeniero de software con <strong>más de 5 años</strong> de experiencia haciendo apps, sistemas y sitios web. Trabajo con dueños de negocios en <strong>Brasil</strong> y <strong>Estados Unidos</strong>, y he ayudado a varias empresas.',
        'sobre.p2': 'Hablas directamente conmigo: sin equipo de ventas ni intermediarios. Hago todo simple, te lo explico con palabras sencillas y me aseguro de que quedes feliz antes de terminar.',
        'sobre.n1': '<strong>5+ años</strong><span>haciendo software</span>',
        'sobre.n2': '<strong>2 países</strong><span>Brasil, EE. UU.</span>',
        'sobre.n3': '<strong>1 persona</strong><span>con quien hablas</span>',

        'faq.titulo': 'Lo que la gente me pregunta',
        'faq.q1': '¿El precio es realmente un pago único?',
        'faq.a1': 'Sí. Los planes de sitio web y la configuración del Perfil de Empresa en Google son un pago único. El único plan mensual de esta página es el Monitoreo ServerFall ($19/mes), y es opcional. Lo puedes cancelar cuando quieras.',
        'faq.q2': '¿Qué te tengo que mandar?',
        'faq.a2': 'Para una app o un sistema basta con una descripción simple de tu idea o de lo que hoy haces a mano. Yo te hago las preguntas correctas. Para un sitio web: el nombre de tu negocio, lo que haces, la zona que atiendes, tu teléfono y tu correo. Las fotos y el logo ayudan, pero también te ayudo con eso.',
        'faq.q3': 'No tengo dominio (como minegocio.com). ¿Es un problema?',
        'faq.a3': 'Para nada. Te ayudo a elegir y configurar tu dominio. El dominio se paga directo al registrador (normalmente entre $12 y $20 al año) y queda a tu nombre, así que siempre es tuyo.',
        'faq.q4': '¿Cuánto tiempo tarda?',
        'faq.a4': 'Depende del proyecto y de qué tan rápido me mandes tu información. Un sitio de una página es lo más rápido; las apps y los sistemas toman más tiempo. Después de nuestra primera conversación, te doy una fecha clara.',
        'faq.q5': '¿Y si no me gusta?',
        'faq.a5': 'Todos los planes de sitio web incluyen cambios ilimitados. En apps y software lo revisas en el camino y lo ajusto antes de publicarlo, hasta que quedes feliz.',
        'faq.q6': '¿Es seguro pagar en tu sitio?',
        'faq.a6': 'Sí. Los pagos los procesa Stripe, una de las empresas de pago más confiables del mundo. Los datos de tu tarjeta van directo a Stripe: yo nunca los veo.',
        'faq.q7': 'No estás en EE. UU. ¿Está bien?',
        'faq.a7': 'Sí. Ya trabajo con clientes en Estados Unidos y Brasil. Hablamos por correo, chat, WhatsApp o videollamada, en el horario que te quede mejor.',

        'contato.titulo': 'Hablemos',
        'contato.sub': '¿Tienes un proyecto en mente o dudas antes de comprar? Contáctame como prefieras. Normalmente respondo en pocas horas.',
        'contato.agenda': 'Agenda una llamada gratis',
        'contato.agenda.sub': 'Google Meet · elige el día y la hora',
        'contato.email': 'Correo',
        'contato.chat': 'Chat en vivo',
        'contato.chat.sub': 'Chatea conmigo aquí mismo',

        'rodape.cargo': 'Ingeniero de software',
        'rodape.stripe': 'Pagos seguros con Stripe',

        'nav.services': 'Servicios',
        'hero.btn1': 'Ver lo que hago',
        'hero.btn2': 'Agenda una llamada gratis',
        'serv.titulo': 'Lo que puedo crear para ti',
        'serv.sub': 'Desde una app para el celular hasta un sistema completo. Una sola persona, una sola conversación, todo en un solo lugar.',
        'serv.orcamento': 'Pide una cotización gratis',
        'serv.duvida': 'Cada app y cada sistema es distinto, así que te envío una <strong>cotización clara y cerrada</strong> después de una llamada gratis. Sin cobros sorpresa.',
        'sv1.nome': 'Apps para Android y iOS',
        'sv1.para': 'Pon tu negocio en el bolsillo de tus clientes.',
        'sv1.l1': 'Una sola app que funciona en Android y iPhone',
        'sv1.l2': 'Publicada en Google Play y en la App Store',
        'sv1.l3': 'Reservas, pedidos, pagos, notificaciones y más',
        'sv2.nome': 'Software a la medida',
        'sv2.para': 'Deja de hacerlo todo a mano. Que lo haga un sistema.',
        'sv2.l1': 'Sistemas para gestionar clientes, pedidos, agendas e inventario',
        'sv2.l2': 'Paneles, reportes y automatizaciones que ahorran horas',
        'sv2.l3': 'Pagos en línea y conexión con las herramientas que ya usas',
        'sv3.nome': 'Sitios web y tiendas en línea',
        'sv3.para': 'Aparece en Google y luce profesional.',
        'sv3.preco': 'Desde $99 · pago único',
        'sv3.btn': 'Ver planes de sitios web',
        'sv4.nome': 'Perfil de Empresa en Google',
        'sv4.para': 'Aparece en Google Maps cuando te buscan cerca.',
        'sv4.preco': '$199 · pago único',
        'sv4.btn': 'Ver detalles',
        'sv5.nome': 'Monitoreo de sitios web',
        'sv5.para': 'Entérate al instante si tu sitio web se cae.',
        'sv5.preco': '$19 / mes · cancela cuando quieras',
        'sv5.btn': 'Ver detalles',
        'faq.q8': '¿Cuánto cuesta una app o un software a la medida?',
        'faq.a8': 'Depende de lo que necesite hacer. Después de una llamada gratis te envío una cotización clara y cerrada, así sabes el precio total antes de empezar. Sin cobros sorpresa.',
        'faq.q9': '¿Tengo una sola app para Android y iPhone?',
        'faq.a9': 'Sí. Hago una app que funciona en los dos y te ayudo a publicarla en Google Play y en la App Store. Las cuentas de las tiendas (Google Play y Apple Developer) se crean a tu nombre, así que la app siempre es tuya.',
    },

    pt: {
        'meta.titulo': 'Stanley Andrade · Apps, software e sites para o seu negócio',
        'meta.descricao': 'Engenheiro de software com mais de 5 anos de experiência. Apps Android e iOS, software sob medida, sites e mais para negócios nos EUA e no Brasil. Conversa grátis, orçamento claro e pagamento seguro pelo Stripe.',
        'js.abrindo': 'Abrindo o pagamento seguro...',
        'js.erro': 'Algo deu errado. Tente de novo.',
        'js.semInternet': 'Sem conexão com a internet. Verifique e tente de novo.',
        'js.sucesso': 'Pagamento recebido, obrigado! Vou te mandar um e-mail em até 24 horas para começarmos. Dúvidas? Escreva para {email}.',
        'js.cancelado': 'Pagamento cancelado: nenhuma cobrança foi feita. Tem dúvidas antes de comprar? Fale comigo aqui embaixo.',
        'js.videoPlay': 'Ver vídeo: conheça o Stanley',
        'js.videoTitulo': 'Conheça o Stanley',
        'js.videoEmBreve': 'Vídeo em breve',
        'js.agendaAssunto': 'Agendar uma conversa',
        'js.agendaCorpo': 'Oi, Stanley! Quero agendar uma conversa. Os melhores dias e horários para mim são:',
        'js.emailAssunto': 'Projeto para o meu negócio',
        'js.whatsapp': 'Oi, Stanley! Quero conversar sobre um projeto para o meu negócio.',

        'aria.home': 'Stanley Andrade — início',
        'aria.idioma': 'Idioma',
        'aria.tema': 'Tema de cores',
        'tema.light': 'Tema claro',
        'tema.rosa': 'Tema rosa',
        'tema.dark': 'Tema escuro',
        'tema.system': 'Automático (segue o seu aparelho)',
        'nav.pricing': 'Preços',
        'nav.how': 'Como funciona',
        'nav.about': 'Sobre mim',
        'nav.faq': 'Dúvidas',
        'nav.contact': 'Contato',

        'hero.selo': 'Oi, eu sou o Stanley Andrade · Engenheiro de software',
        'hero.titulo': 'Apps, software e sites <span class="degrade">que fazem o seu negócio crescer.</span>',
        'hero.texto': 'Faço software há <strong>mais de 5 anos</strong>, com clientes no <strong>Brasil</strong> e nos <strong>Estados Unidos</strong>, e já ajudei várias empresas a economizar tempo, parecer mais profissionais e conquistar mais clientes. Você fala direto comigo: sem equipe de vendas, sem intermediário.',
        'hero.g1': 'Orçamento grátis, sem compromisso',
        'hero.g2': 'Pagamento seguro pelo Stripe',

        'precos.titulo': 'Planos de sites',
        'precos.sub': 'Preços fixos. Pague uma vez e o site é seu. Eu cuido da parte técnica; você cuida dos seus clientes.',
        'plano.unico': 'pagamento único',
        'plano.revisoes': 'Alterações ilimitadas até você amar',
        'plano.telas': 'Fica ótimo no celular, no tablet e no computador',
        'p1.nome': 'Página Essencial',
        'p1.para': 'Perfeita para entrar na internet rápido',
        'p1.l1': '1 página feita sob medida para o seu negócio',
        'p1.l2': 'Botões para ligar, mandar e-mail e redes sociais',
        'p1.l3': 'Até 300 palavras e 3 fotos',
        'p1.l4': 'Posso ajudar a escrever o texto e escolher as fotos',
        'p1.l5': 'Páginas extras: $100 cada',
        'p1.btn': 'Quero minha página — $99',
        'p2.selo': 'Mais escolhido',
        'p2.nome': 'Site Padrão',
        'p2.para': 'Apareça no Google e receba mais ligações',
        'p2.l1': 'Até 5 páginas sob medida (Início, Serviços, Sobre, Galeria, Contato…)',
        'p2.l2': 'Formulários de contato e de "Peça um orçamento"',
        'p2.l3': 'SEO local para quem está perto de você te encontrar',
        'p2.l4': 'Ajuda com o seu Perfil da Empresa no Google e no Maps',
        'p2.l5': 'Até 1.500 palavras e 15 fotos',
        'p2.btn': 'Quero meu site — $499',
        'p3.nome': 'Site Empresarial',
        'p3.para': 'Venda seus produtos pela internet, 24 horas por dia',
        'p3.l1': 'Loja virtual completa',
        'p3.l2': 'Carrinho de compras e pagamento',
        'p3.l3': 'Aceita cartão de crédito, Stripe e PayPal',
        'p3.l4': 'Vitrine de produtos pronta para o seu estoque',
        'p3.l5': 'Cadastro de 10 produtos simples ou 5 com opções (tamanho, cor)',
        'p3.l6': 'E-mails automáticos de pedido e recibo',
        'p3.btn': 'Quero minha loja — $999',
        'extra.titulo': 'Mais formas de crescer',
        'extra.sub': 'Apareça no Google Maps e mantenha o seu site sempre no ar.',
        'gmb.nome': 'Configuração do Perfil da Empresa no Google',
        'gmb.para': 'Apareça no Google Maps quando procurarem perto de você',
        'gmb.l1': 'Perfil completo: horários, áreas de atendimento e contatos',
        'gmb.l2': 'As categorias principais e extras certas para o seu negócio',
        'gmb.l3': 'Fotos, logo e descrição que combinam com a sua marca',
        'gmb.l4': 'Pronto para receber avaliações no Google de clientes satisfeitos',
        'gmb.l5': '30 dias de suporte grátis depois de publicar',
        'gmb.btn': 'Configurar meu perfil — $199',
        'sf.nome': 'Monitoramento de sites ServerFall',
        'sf.para': 'Saiba na hora se o seu site cair',
        'sf.periodo': '/ mês',
        'sf.l1': 'Seu site verificado a cada minuto, 24 horas por dia',
        'sf.l2': 'Alerta na hora quando ele cai ou fica lento',
        'sf.l3': 'Lembretes antes de o domínio e o SSL vencerem',
        'sf.l4': 'Painel simples para ver tudo num lugar só',
        'sf.l5': 'Cancele quando quiser',
        'sf.btn': 'Começar o monitoramento — $19/mês',
        'sf.link': 'Saiba mais sobre o ServerFall →',
        'stripe.faixa': '<strong>Pagamento seguro pelo Stripe.</strong> Usado por milhões de empresas no mundo todo. Seu cartão vai direto para o Stripe: eu nunca vejo os dados.',
        'planos.duvida': 'Não sabe qual escolher? <a href="#contact">Fale comigo primeiro</a>, é grátis.',

        'dores.titulo': 'Parece familiar?',
        'dores.sub': 'A maioria dos donos de pequenos negócios com quem eu converso diz as mesmas coisas.',
        'd1.frase': '"Faço tudo na mão, em planilhas e mensagens."',
        'd1.texto': 'Um sistema sob medida junta pedidos, agendamentos, clientes e relatórios num lugar só, e faz o trabalho chato por você.',
        'd2.frase': '"Meus clientes sempre perguntam se eu tenho um app."',
        'd2.texto': 'Um app para Android e iPhone deixa o seu negócio a um toque deles, com agendamentos, pedidos e notificações.',
        'd3.frase': '"Os softwares prontos não combinam com o meu jeito de trabalhar."',
        'd3.texto': 'Eu faço sob medida para o seu negócio, e não o contrário. Você tem exatamente o que precisa, sem extras.',
        'd4.frase': '"As pessoas me procuram e não me acham."',
        'd4.texto': 'Um site bem-feito e um perfil completo no Google Maps mostram que você é de verdade, justo quando o cliente está procurando.',
        'd5.frase': '"As agências cobram dezenas de milhares de dólares."',
        'd5.texto': 'Você trabalha direto com um engenheiro só. Preço justo, orçamento claro antes de começar e sem contratos longos.',
        'd6.frase': '"Não tenho tempo para coisa de tecnologia."',
        'd6.texto': 'Nem precisa. Você me conta o que precisa, eu faço o resto e te mantenho informado.',

        'como.titulo': 'Como funciona',
        'como.sub': 'Quatro passos simples. Sem reuniões desnecessárias.',
        'passo1.t': 'Me conte o que você precisa',
        'passo1.p': 'Agende uma conversa grátis ou me mande uma mensagem. Fale do seu negócio e da sua ideia.',
        'passo2.t': 'Receba um preço claro',
        'passo2.p': 'Sites e extras têm preço fixo nesta página. Para apps e software eu mando um orçamento fechado. Você paga com segurança pelo Stripe.',
        'passo3.t': 'Eu faço, você confere',
        'passo3.p': 'Eu te mando uma prévia ou uma versão de teste durante o caminho. Você pede alterações até ficar certo.',
        'passo4.t': 'Coloque no ar e cresça',
        'passo4.p': 'Seu app, sistema ou site entra no ar e começa a economizar tempo e a trazer clientes.',

        'sobre.selo': 'Quem faz',
        'sobre.titulo': 'Oi, eu sou o Stanley Andrade',
        'sobre.p1': 'Sou engenheiro de software com <strong>mais de 5 anos</strong> de experiência criando apps, sistemas e sites. Trabalho com donos de negócios no <strong>Brasil</strong> e nos <strong>Estados Unidos</strong>, e já ajudei várias empresas.',
        'sobre.p2': 'Você fala direto comigo: sem equipe de vendas, sem intermediário. Deixo tudo simples, explico sem termos técnicos e só termino quando você estiver satisfeito.',
        'sobre.n1': '<strong>5+ anos</strong><span>criando software</span>',
        'sobre.n2': '<strong>2 países</strong><span>Brasil, EUA</span>',
        'sobre.n3': '<strong>1 pessoa</strong><span>para você falar</span>',

        'faq.titulo': 'Dúvidas que as pessoas me mandam',
        'faq.q1': 'O preço é mesmo pagamento único?',
        'faq.a1': 'Sim. Os planos de site e a configuração do Perfil da Empresa no Google são pagamento único. O único plano mensal desta página é o Monitoramento ServerFall ($19/mês), e ele é opcional. Você pode cancelar quando quiser.',
        'faq.q2': 'O que eu preciso te mandar?',
        'faq.a2': 'Para um app ou sistema, basta uma descrição simples da sua ideia ou do que você faz hoje na mão. Eu faço as perguntas certas. Para um site: o nome do seu negócio, o que você faz, a região que atende, seu telefone e seu e-mail. Fotos e logo ajudam, mas eu também te ajudo com isso.',
        'faq.q3': 'Não tenho domínio (tipo meunegocio.com). Tem problema?',
        'faq.a3': 'Nenhum. Eu te ajudo a escolher e configurar o domínio. O domínio é pago direto para o registrador (normalmente entre $12 e $20 por ano) e fica no seu nome, então é sempre seu.',
        'faq.q4': 'Quanto tempo demora?',
        'faq.a4': 'Depende do projeto e da rapidez com que você me manda as informações. Um site de uma página é o mais rápido; apps e sistemas levam mais tempo. Depois da nossa primeira conversa, eu te passo uma data certa.',
        'faq.q5': 'E se eu não gostar?',
        'faq.a5': 'Todos os planos de site vêm com alterações ilimitadas. Em apps e software, você confere durante o caminho e eu ajusto antes de publicar, até você ficar satisfeito.',
        'faq.q6': 'É seguro pagar no seu site?',
        'faq.a6': 'Sim. Os pagamentos são processados pelo Stripe, uma das empresas de pagamento mais confiáveis do mundo. Os dados do seu cartão vão direto para o Stripe: eu nunca vejo.',
        'faq.q7': 'Você não está nos EUA. Tem problema?',
        'faq.a7': 'Não. Já trabalho com clientes nos Estados Unidos e no Brasil. A gente conversa por e-mail, chat, WhatsApp ou videochamada, no horário melhor para você.',

        'contato.titulo': 'Vamos conversar',
        'contato.sub': 'Tem um projeto em mente ou dúvidas antes de comprar? Fale comigo como preferir. Costumo responder em poucas horas.',
        'contato.agenda': 'Agende uma conversa grátis',
        'contato.agenda.sub': 'Google Meet · escolha o dia e a hora',
        'contato.email': 'E-mail',
        'contato.chat': 'Chat ao vivo',
        'contato.chat.sub': 'Converse comigo aqui mesmo',

        'rodape.cargo': 'Engenheiro de software',
        'rodape.stripe': 'Pagamentos seguros pelo Stripe',

        'nav.services': 'Serviços',
        'hero.btn1': 'Ver o que eu faço',
        'hero.btn2': 'Agende uma conversa grátis',
        'serv.titulo': 'O que eu posso criar para você',
        'serv.sub': 'De um app de celular a um sistema completo. Uma pessoa só, uma conversa só, tudo num lugar só.',
        'serv.orcamento': 'Peça um orçamento grátis',
        'serv.duvida': 'Cada app e cada sistema é diferente, então eu te mando um <strong>orçamento claro e fechado</strong> depois de uma conversa grátis. Sem cobrança surpresa.',
        'sv1.nome': 'Apps para Android e iOS',
        'sv1.para': 'Coloque o seu negócio no bolso dos seus clientes.',
        'sv1.l1': 'Um app só que funciona no Android e no iPhone',
        'sv1.l2': 'Publicado na Google Play e na App Store',
        'sv1.l3': 'Agendamentos, pedidos, pagamentos, notificações e mais',
        'sv2.nome': 'Software sob medida',
        'sv2.para': 'Pare de fazer tudo na mão. Deixe um sistema fazer.',
        'sv2.l1': 'Sistemas para gerenciar clientes, pedidos, agenda e estoque',
        'sv2.l2': 'Painéis, relatórios e automações que economizam horas',
        'sv2.l3': 'Pagamentos online e ligação com as ferramentas que você já usa',
        'sv3.nome': 'Sites e lojas virtuais',
        'sv3.para': 'Apareça no Google e passe confiança.',
        'sv3.preco': 'A partir de $99 · pagamento único',
        'sv3.btn': 'Ver planos de sites',
        'sv4.nome': 'Perfil da Empresa no Google',
        'sv4.para': 'Apareça no Google Maps quando procurarem perto de você.',
        'sv4.preco': '$199 · pagamento único',
        'sv4.btn': 'Ver detalhes',
        'sv5.nome': 'Monitoramento de sites',
        'sv5.para': 'Saiba na hora se o seu site cair.',
        'sv5.preco': '$19 / mês · cancele quando quiser',
        'sv5.btn': 'Ver detalhes',
        'faq.q8': 'Quanto custa um app ou um software sob medida?',
        'faq.a8': 'Depende do que ele precisa fazer. Depois de uma conversa grátis eu te mando um orçamento claro e fechado, assim você sabe o preço total antes de começar. Sem cobrança surpresa.',
        'faq.q9': 'Eu tenho um app só para Android e iPhone?',
        'faq.a9': 'Sim. Eu faço um app que funciona nos dois e te ajudo a publicar na Google Play e na App Store. As contas das lojas (Google Play e Apple Developer) são criadas no seu nome, então o app é sempre seu.',
    },
}

// Guarda o inglês que está no HTML para poder voltar a ele sem recarregar
document.querySelectorAll('[data-i18n]').forEach((el) => {
    TRADUCOES.en[el.dataset.i18n] ??= el.innerHTML.trim()
})
document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    TRADUCOES.en[el.dataset.i18nAria] ??= el.getAttribute('aria-label')
})

function escolherIdiomaInicial() {
    const daUrl = new URLSearchParams(window.location.search).get('lang')
    if (IDIOMAS.includes(daUrl)) {
        // Link com ?lang=es (por exemplo, mandado por e-mail): passa a valer nas próximas visitas
        try {
            localStorage.setItem('language-preference', daUrl)
        } catch { /* sem localStorage: vale só nesta visita */ }
        return daUrl
    }
    try {
        const salvo = localStorage.getItem('language-preference')
        if (IDIOMAS.includes(salvo)) return salvo
    } catch { /* sem localStorage: usa o idioma do aparelho */ }
    const doAparelho = (navigator.language || 'en').slice(0, 2).toLowerCase()
    return IDIOMAS.includes(doAparelho) ? doAparelho : 'en'
}

let idiomaAtual = escolherIdiomaInicial()

// Texto traduzido; {nome} é trocado pelo valor em "valores"
function t(chave, valores = {}) {
    const texto = TRADUCOES[idiomaAtual][chave] ?? TRADUCOES.en[chave] ?? chave
    return texto.replace(/\{(\w+)\}/g, (_, nome) => valores[nome] ?? '')
}

const botoesIdioma = document.querySelectorAll('[data-idioma]')

function aplicarIdioma(idioma) {
    idiomaAtual = idioma
    document.documentElement.lang = LANG_HTML[idioma]
    document.title = t('meta.titulo')
    document.querySelector('meta[name="description"]').setAttribute('content', t('meta.descricao'))

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.innerHTML = t(el.dataset.i18n)
    })
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
        const texto = t(el.dataset.i18nAria)
        el.setAttribute('aria-label', texto)
        if (el.hasAttribute('title')) el.setAttribute('title', texto)
    })
    botoesIdioma.forEach((botao) => botao.setAttribute('aria-pressed', String(botao.dataset.idioma === idioma)))

    // Avisa o app.js para refazer os textos que ele monta (vídeo, aviso do checkout, links)
    document.dispatchEvent(new CustomEvent('idioma-mudou'))
}

botoesIdioma.forEach((botao) => {
    botao.addEventListener('click', () => {
        try {
            localStorage.setItem('language-preference', botao.dataset.idioma)
        } catch { /* sem localStorage: vale só nesta visita */ }
        aplicarIdioma(botao.dataset.idioma)
    })
})
