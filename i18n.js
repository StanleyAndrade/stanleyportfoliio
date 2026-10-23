// ===================== Idiomas (inglês, espanhol e português) =====================
// O inglês da página fica escrito no index.html (é o que o Google lê). Aqui ficam só as traduções
// dos elementos com data-i18n (texto) e data-i18n-aria (aria-label/title), e os textos que o app.js monta.
const IDIOMAS = ['en', 'es', 'pt']
const LANG_HTML = { en: 'en', es: 'es', pt: 'pt-BR' }

const TRADUCOES = {
    // Inglês: só os textos montados pelo app.js (o resto vem do HTML)
    en: {
        'meta.titulo': 'Stanley Andrade · Websites for Local Businesses',
        'meta.descricao': 'Simple, fast websites for local businesses starting at $99. One-time price, unlimited revisions, secure payment by Stripe. Built by Stanley Andrade, Software Engineer.',
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
        'js.emailAssunto': 'Website for my business',
        'js.whatsapp': "Hi Stanley! I'd like a website for my business.",
    },

    es: {
        'meta.titulo': 'Stanley Andrade · Sitios web para negocios locales',
        'meta.descricao': 'Sitios web simples y rápidos para negocios locales desde $99. Pago único, cambios ilimitados y pago seguro con Stripe. Hecho por Stanley Andrade, ingeniero de software.',
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
        'js.emailAssunto': 'Sitio web para mi negocio',
        'js.whatsapp': '¡Hola, Stanley! Me gustaría un sitio web para mi negocio.',

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

        'hero.selo': 'Sitios web para negocios locales · desde $99',
        'hero.titulo': '¿No tienes sitio web? <span class="degrade">Tus clientes están llamando a tu competencia.</span>',
        'hero.texto': 'Cuando alguien necesita un plomero, una limpieza o un mecánico, lo busca en Google. Si no te encuentra, llama a otro. Hago sitios web simples y rápidos que hacen sonar tu teléfono. <strong>Pago único. Sin contratos. Sin complicaciones técnicas.</strong>',
        'hero.g1': 'Cambios ilimitados',
        'hero.g2': 'Se ve genial en el celular',
        'hero.g3': 'Pago seguro con Stripe',

        'precos.titulo': 'Elige tu sitio web',
        'precos.sub': 'Pagas una vez y es tuyo. Yo me encargo de la parte técnica; tú, de tus clientes.',
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
        'd1.frase': '"Mi anuncio en Craigslist siempre desaparece."',
        'd1.texto': 'Los anuncios vencen y quedan enterrados en horas. Un sitio web trabaja para ti 24/7 y nunca vence.',
        'd2.frase': '"La gente me busca y no me encuentra."',
        'd2.texto': 'Si no estás en Google, no existes para los clientes nuevos. Vamos a arreglarlo.',
        'd3.frase': '"Los clientes no confían en mí sin un sitio web."',
        'd3.texto': 'La mayoría revisa un negocio en internet antes de llamar. Un sitio web limpio muestra que eres de verdad.',
        'd4.frase': '"No tengo tiempo para cosas técnicas."',
        'd4.texto': 'No lo necesitas. Me mandas lo básico, yo hago el resto y te mantengo al tanto.',
        'd5.frase': '"Las agencias cobran miles de dólares."',
        'd5.texto': 'Tienes un sitio web profesional desde $99. Pago único, sin sorpresas y sin contratos largos.',
        'd6.frase': '"Mi competencia se lleva todas las llamadas."',
        'd6.texto': 'Seguro aparecen en Google Maps y tienen sitio web. Muy pronto, tú también.',

        'como.titulo': 'Cómo funciona',
        'como.sub': 'Cuatro pasos simples. Sin reuniones innecesarias.',
        'passo1.t': 'Elige un plan',
        'passo1.p': 'Escoge el plan que te conviene y paga de forma segura con Stripe.',
        'passo2.t': 'Cuéntame de tu negocio',
        'passo2.p': 'Una llamada rápida o unos mensajes: tus servicios, tu zona, fotos y logo (si tienes).',
        'passo3.t': 'Revisa y pide cambios',
        'passo3.p': 'Lo hago y te mando un enlace para verlo. Pide cambios todas las veces que necesites.',
        'passo4.t': 'Publícalo y recibe llamadas',
        'passo4.p': 'Tu sitio web sale en internet y empieza a traerte clientes nuevos.',

        'sobre.selo': 'Quién hace tu sitio web',
        'sobre.titulo': 'Hola, soy Stanley Andrade',
        'sobre.p1': 'Soy ingeniero de software y hago sitios web y sistemas desde 2021. Trabajo con dueños de negocios en <strong>Estados Unidos</strong>, <strong>Brasil</strong> y <strong>España</strong>.',
        'sobre.p2': 'Hablas directamente conmigo: sin equipo de ventas ni intermediarios. Hago todo simple, te lo explico con palabras sencillas y me aseguro de que quedes feliz antes de terminar.',
        'sobre.n1': '<strong>Desde 2021</strong><span>haciendo software</span>',
        'sobre.n2': '<strong>3 países</strong><span>EE. UU., Brasil, España</span>',
        'sobre.n3': '<strong>1 persona</strong><span>con quien hablas</span>',

        'faq.titulo': 'Lo que la gente me pregunta',
        'faq.q1': '¿El precio es realmente un pago único?',
        'faq.a1': 'Sí. Los planes de sitio web son un pago único. El único plan mensual de esta página es el Monitoreo ServerFall ($19/mes), y es opcional. Lo puedes cancelar cuando quieras.',
        'faq.q2': '¿Qué te tengo que mandar?',
        'faq.a2': 'El nombre de tu negocio, lo que haces, la zona que atiendes, tu teléfono y tu correo. Las fotos y el logo ayudan, pero si no los tienes, también te ayudo con eso.',
        'faq.q3': 'No tengo dominio (como minegocio.com). ¿Es un problema?',
        'faq.a3': 'Para nada. Te ayudo a elegir y configurar tu dominio. El dominio se paga directo al registrador (normalmente entre $12 y $20 al año) y queda a tu nombre, así que siempre es tuyo.',
        'faq.q4': '¿Cuánto tiempo tarda?',
        'faq.a4': 'Depende del plan y de qué tan rápido me mandes tu información. Un sitio de una página es lo más rápido. Después de nuestra primera conversación, te doy una fecha clara.',
        'faq.q5': '¿Y si no me gusta?',
        'faq.a5': 'Todos los planes de sitio web incluyen cambios ilimitados. Lo sigo ajustando hasta que quedes feliz.',
        'faq.q6': '¿Es seguro pagar en tu sitio?',
        'faq.a6': 'Sí. Los pagos los procesa Stripe, una de las empresas de pago más confiables del mundo. Los datos de tu tarjeta van directo a Stripe: yo nunca los veo.',
        'faq.q7': 'No estás en EE. UU. ¿Está bien?',
        'faq.a7': 'Sí. Ya trabajo con clientes en Estados Unidos y Europa. Hablamos por correo, chat, WhatsApp o videollamada, en el horario que te quede mejor.',

        'contato.titulo': 'Hablemos',
        'contato.sub': '¿Dudas antes de comprar? Contáctame como prefieras. Normalmente respondo en pocas horas.',
        'contato.agenda': 'Agenda una llamada gratis',
        'contato.agenda.sub': 'Google Meet · elige el día y la hora',
        'contato.email': 'Correo',
        'contato.chat': 'Chat en vivo',
        'contato.chat.sub': 'Chatea conmigo aquí mismo',

        'rodape.cargo': 'Ingeniero de software',
        'rodape.stripe': 'Pagos seguros con Stripe',
    },

    pt: {
        'meta.titulo': 'Stanley Andrade · Sites para negócios locais',
        'meta.descricao': 'Sites simples e rápidos para negócios locais a partir de $99. Pagamento único, alterações ilimitadas e pagamento seguro pelo Stripe. Feito por Stanley Andrade, engenheiro de software.',
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
        'js.emailAssunto': 'Site para o meu negócio',
        'js.whatsapp': 'Oi, Stanley! Quero um site para o meu negócio.',

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

        'hero.selo': 'Sites para negócios locais · a partir de $99',
        'hero.titulo': 'Não tem site? <span class="degrade">Seus clientes estão ligando para o concorrente.</span>',
        'hero.texto': 'Quando alguém precisa de um encanador, de uma faxina ou de um mecânico, procura no Google. Se não te encontra, liga para outro. Eu faço sites simples e rápidos que fazem o seu telefone tocar. <strong>Pagamento único. Sem contrato. Sem dor de cabeça com tecnologia.</strong>',
        'hero.g1': 'Alterações ilimitadas',
        'hero.g2': 'Fica ótimo no celular',
        'hero.g3': 'Pagamento seguro pelo Stripe',

        'precos.titulo': 'Escolha o seu site',
        'precos.sub': 'Pague uma vez e o site é seu. Eu cuido da parte técnica; você cuida dos seus clientes.',
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
        'd1.frase': '"Meu anúncio no Craigslist vive sumindo."',
        'd1.texto': 'Anúncios vencem e somem em poucas horas. Um site trabalha para você 24 horas por dia e nunca vence.',
        'd2.frase': '"As pessoas me procuram e não me acham."',
        'd2.texto': 'Se você não está no Google, você não existe para clientes novos. Vamos resolver isso.',
        'd3.frase': '"Os clientes não confiam em mim sem um site."',
        'd3.texto': 'A maioria das pessoas pesquisa a empresa na internet antes de ligar. Um site bem-feito mostra que você é de verdade.',
        'd4.frase': '"Não tenho tempo para coisa de tecnologia."',
        'd4.texto': 'Nem precisa. Você me manda o básico, eu faço o resto e te mantenho informado.',
        'd5.frase': '"As agências cobram milhares de dólares."',
        'd5.texto': 'Você tem um site profissional a partir de $99. Pagamento único, sem surpresas e sem contratos longos.',
        'd6.frase': '"Meu concorrente leva todas as ligações."',
        'd6.texto': 'Ele provavelmente aparece no Google Maps e tem site. Em breve, você também.',

        'como.titulo': 'Como funciona',
        'como.sub': 'Quatro passos simples. Sem reuniões desnecessárias.',
        'passo1.t': 'Escolha um plano',
        'passo1.p': 'Escolha o plano que serve para você e pague com segurança pelo Stripe.',
        'passo2.t': 'Me conte sobre o seu negócio',
        'passo2.p': 'Uma conversa rápida ou algumas mensagens: seus serviços, sua região, fotos e logo (se tiver).',
        'passo3.t': 'Veja e peça alterações',
        'passo3.p': 'Eu faço o site e te mando um link para ver. Peça alterações quantas vezes precisar.',
        'passo4.t': 'Coloque no ar e receba ligações',
        'passo4.p': 'Seu site vai para a internet e começa a trazer clientes novos.',

        'sobre.selo': 'Quem faz o seu site',
        'sobre.titulo': 'Oi, eu sou o Stanley Andrade',
        'sobre.p1': 'Sou engenheiro de software e faço sites e sistemas desde 2021. Trabalho com donos de negócios nos <strong>Estados Unidos</strong>, no <strong>Brasil</strong> e na <strong>Espanha</strong>.',
        'sobre.p2': 'Você fala direto comigo: sem equipe de vendas, sem intermediário. Deixo tudo simples, explico sem termos técnicos e só termino quando você estiver satisfeito.',
        'sobre.n1': '<strong>Desde 2021</strong><span>criando software</span>',
        'sobre.n2': '<strong>3 países</strong><span>EUA, Brasil, Espanha</span>',
        'sobre.n3': '<strong>1 pessoa</strong><span>para você falar</span>',

        'faq.titulo': 'Dúvidas que as pessoas me mandam',
        'faq.q1': 'O preço é mesmo pagamento único?',
        'faq.a1': 'Sim. Os planos de site são pagamento único. O único plano mensal desta página é o Monitoramento ServerFall ($19/mês), e ele é opcional. Você pode cancelar quando quiser.',
        'faq.q2': 'O que eu preciso te mandar?',
        'faq.a2': 'O nome do seu negócio, o que você faz, a região que atende, seu telefone e seu e-mail. Fotos e logo ajudam, mas se você não tiver, eu te ajudo com isso também.',
        'faq.q3': 'Não tenho domínio (tipo meunegocio.com). Tem problema?',
        'faq.a3': 'Nenhum. Eu te ajudo a escolher e configurar o domínio. O domínio é pago direto para o registrador (normalmente entre $12 e $20 por ano) e fica no seu nome, então é sempre seu.',
        'faq.q4': 'Quanto tempo demora?',
        'faq.a4': 'Depende do plano e da rapidez com que você me manda as informações. Um site de uma página é o mais rápido. Depois da nossa primeira conversa, eu te passo uma data certa.',
        'faq.q5': 'E se eu não gostar?',
        'faq.a5': 'Todos os planos de site vêm com alterações ilimitadas. Eu vou ajustando até você ficar satisfeito.',
        'faq.q6': 'É seguro pagar no seu site?',
        'faq.a6': 'Sim. Os pagamentos são processados pelo Stripe, uma das empresas de pagamento mais confiáveis do mundo. Os dados do seu cartão vão direto para o Stripe: eu nunca vejo.',
        'faq.q7': 'Você não está nos EUA. Tem problema?',
        'faq.a7': 'Não. Já trabalho com clientes nos Estados Unidos e na Europa. A gente conversa por e-mail, chat, WhatsApp ou videochamada, no horário melhor para você.',

        'contato.titulo': 'Vamos conversar',
        'contato.sub': 'Dúvidas antes de comprar? Fale comigo como preferir. Costumo responder em poucas horas.',
        'contato.agenda': 'Agende uma conversa grátis',
        'contato.agenda.sub': 'Google Meet · escolha o dia e a hora',
        'contato.email': 'E-mail',
        'contato.chat': 'Chat ao vivo',
        'contato.chat.sub': 'Converse comigo aqui mesmo',

        'rodape.cargo': 'Engenheiro de software',
        'rodape.stripe': 'Pagamentos seguros pelo Stripe',
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
