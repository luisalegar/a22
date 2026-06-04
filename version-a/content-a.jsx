// Version A — premium B2B naval content, 4 languages (ES / EN / PT / NL).
// Tuned for the "Operations" command-center direction. Each entry: {es,en,pt,nl}.

const A22_A = {
  langs: [
    { code: "es", label: "ES", name: "Español" },
    { code: "en", label: "EN", name: "English" },
    { code: "pt", label: "PT", name: "Português" },
    { code: "nl", label: "NL", name: "Nederlands" },
  ],

  brand: {
    location: { es: "Miami, FL · EE.UU.", en: "Miami, FL · USA", pt: "Miami, FL · EUA", nl: "Miami, FL · VS" },
  },

  nav: {
    home:     { es: "Inicio",      en: "Home",        pt: "Início",      nl: "Home" },
    about:    { es: "Empresa",     en: "Company",     pt: "Empresa",     nl: "Bedrijf" },
    services: { es: "Servicios",   en: "Services",    pt: "Serviços",    nl: "Diensten" },
    products: { es: "Capacidades", en: "Capabilities",pt: "Capacidades", nl: "Capaciteiten" },
    contact:  { es: "Contacto",    en: "Contact",     pt: "Contato",     nl: "Contact" },
  },

  cta: {
    quote:   { es: "Solicitar cotización", en: "Request a quote", pt: "Solicitar cotação", nl: "Offerte aanvragen" },
    quoteShort: { es: "Cotizar", en: "Get quote", pt: "Cotação", nl: "Offerte" },
    talk:    { es: "Hablar con un especialista", en: "Talk to a specialist", pt: "Falar com um especialista", nl: "Spreek een specialist" },
    services:{ es: "Ver servicios", en: "View services", pt: "Ver serviços", nl: "Bekijk diensten" },
    portfolio:{ es: "Ver capacidades", en: "View capabilities", pt: "Ver capacidades", nl: "Bekijk capaciteiten" },
  },

  hero: {
    status: { es: "OPERATIVO 24/7", en: "OPERATIONAL 24/7", pt: "OPERACIONAL 24/7", nl: "24/7 OPERATIONEEL" },
    eyebrow: {
      es: "Industria naval y portuaria · Miami, FL",
      en: "Naval & port industry · Miami, FL",
      pt: "Indústria naval e portuária · Miami, FL",
      nl: "Maritieme & havenindustrie · Miami, FL",
    },
    title: {
      es: "Mantenemos su flota operativa, en cualquier puerto del mundo.",
      en: "We keep your fleet operational, in any port in the world.",
      pt: "Mantemos a sua frota operacional, em qualquer porto do mundo.",
      nl: "Wij houden uw vloot operationeel, in elke haven ter wereld.",
    },
    sub: {
      es: "Dirección técnica, procura especializada y apoyo logístico integrado para armadores, astilleros y terminales portuarias. Respondemos a bordo, donde esté la embarcación.",
      en: "Technical direction, specialized procurement and integrated logistics support for shipowners, shipyards and port terminals. We respond aboard, wherever the vessel is.",
      pt: "Direção técnica, procura especializada e apoio logístico integrado para armadores, estaleiros e terminais portuários. Respondemos a bordo, onde estiver a embarcação.",
      nl: "Technische directie, gespecialiseerde inkoop en geïntegreerde logistieke ondersteuning voor reders, scheepswerven en haventerminals. Wij reageren aan boord, waar het schip zich ook bevindt.",
    },
  },

  // Client trust strip under hero
  trust: {
    line: {
      es: "La confianza de operadores navales y portuarios internacionalmente",
      en: "Trusted by naval and port operators internationally",
      pt: "A confiança de operadores navais e portuários internacionalmente",
      nl: "Vertrouwd door maritieme en havenexploitanten wereldwijd",
    },
    // Sector wordmarks (placeholders — replace with real client logos)
    marks: [
      { es: "Armadores", en: "Shipowners", pt: "Armadores", nl: "Reders" },
      { es: "Astilleros", en: "Shipyards", pt: "Estaleiros", nl: "Werven" },
      { es: "Terminales", en: "Terminals", pt: "Terminais", nl: "Terminals" },
      { es: "Offshore", en: "Offshore", pt: "Offshore", nl: "Offshore" },
      { es: "Logística", en: "Logistics", pt: "Logística", nl: "Logistiek" },
    ],
  },

  // Credibility metrics
  metrics: {
    eyebrow: { es: "Por qué A22", en: "Why A22", pt: "Por que A22", nl: "Waarom A22" },
    title: {
      es: "Continuidad operativa respaldada por experiencia real.",
      en: "Operational continuity backed by real experience.",
      pt: "Continuidade operacional respaldada por experiência real.",
      nl: "Operationele continuïteit, gedragen door echte ervaring.",
    },
    items: [
      {
        num: "+30",
        label: { es: "años en la industria naval", en: "years in the naval industry", pt: "anos na indústria naval", nl: "jaar in de maritieme industrie" },
      },
      {
        num: "24/7",
        label: { es: "soporte técnico y respuesta", en: "technical support & response", pt: "suporte técnico e resposta", nl: "technische support & respons" },
      },
      {
        num: "12",
        label: { es: "sistemas del buque cubiertos", en: "vessel systems covered", pt: "sistemas do navio cobertos", nl: "scheepssystemen gedekt" },
      },
      {
        num: "Américas",
        label: { es: "cobertura desde Miami", en: "coverage from Miami", pt: "cobertura a partir de Miami", nl: "dekking vanuit Miami" },
      },
    ],
  },

  services: {
    eyebrow: { es: "Servicios", en: "Services", pt: "Serviços", nl: "Diensten" },
    title: {
      es: "Una sola operación, de la ingeniería a la entrega a bordo.",
      en: "One single operation, from engineering to onboard delivery.",
      pt: "Uma só operação, da engenharia à entrega a bordo.",
      nl: "Eén operatie, van engineering tot levering aan boord.",
    },
    sub: {
      es: "Seis disciplinas que cierran el ciclo completo de su requerimiento técnico.",
      en: "Six disciplines that close the full cycle of your technical requirement.",
      pt: "Seis disciplinas que fecham o ciclo completo do seu requisito técnico.",
      nl: "Zes disciplines die de volledige cyclus van uw technische behoefte sluiten.",
    },
    list: [
      {
        num: "S/01",
        title: { es: "Dirección técnica e ingeniería", en: "Technical direction & engineering", pt: "Direção técnica e engenharia", nl: "Technische directie & engineering" },
        desc: { es: "Diseño, construcción, reparación y modificación de buques y artefactos marinos.", en: "Design, construction, repair and modification of vessels and marine artifacts.", pt: "Projeto, construção, reparo e modificação de navios e artefatos marinhos.", nl: "Ontwerp, bouw, reparatie en modificatie van schepen en mariene constructies." },
      },
      {
        num: "S/02",
        title: { es: "Procura de partes y repuestos", en: "Parts & spares procurement", pt: "Procura de peças e sobressalentes", nl: "Inkoop van onderdelen & reservedelen" },
        desc: { es: "Insumos, partes y repuestos para todos los sistemas del buque.", en: "Supplies, parts and spares for every vessel system.", pt: "Insumos, peças e sobressalentes para todos os sistemas do navio.", nl: "Voorraden, onderdelen en reservedelen voor elk scheepssysteem." },
      },
      {
        num: "S/03",
        title: { es: "Trabajos a bordo", en: "Onboard works", pt: "Trabalhos a bordo", nl: "Werkzaamheden aan boord" },
        desc: { es: "Ejecutamos a bordo, donde esté la embarcación, para reducir paradas.", en: "We work aboard, wherever the vessel is, to reduce downtime.", pt: "Trabalhamos a bordo, onde estiver a embarcação, para reduzir paradas.", nl: "Wij werken aan boord, waar het schip ook ligt, om stilstand te beperken." },
      },
      {
        num: "S/04",
        title: { es: "Apoyo Logístico Integrado (ILS)", en: "Integrated Logistics Support (ILS)", pt: "Apoio Logístico Integrado (ILS)", nl: "Geïntegreerde logistieke steun (ILS)" },
        desc: { es: "Adquisición y sostenimiento: aprovisionamiento, mantenimiento, herramientas y piezas.", en: "Acquisition and sustainment: provisioning, maintenance, tools and parts.", pt: "Aquisição e sustentação: provisionamento, manutenção, ferramentas e peças.", nl: "Acquisitie en instandhouding: bevoorrading, onderhoud, gereedschap en onderdelen." },
      },
      {
        num: "S/05",
        title: { es: "Infraestructura portuaria y marítima", en: "Port & maritime infrastructure", pt: "Infraestrutura portuária e marítima", nl: "Haven- & maritieme infrastructuur" },
        desc: { es: "Planificación, procura, instalación y mantenimiento de obra portuaria.", en: "Planning, procurement, installation and maintenance of port works.", pt: "Planejamento, procura, instalação e manutenção de obras portuárias.", nl: "Planning, inkoop, installatie en onderhoud van havenwerken." },
      },
      {
        num: "S/06",
        title: { es: "Integración de servicios", en: "Service integration", pt: "Integração de serviços", nl: "Dienstenintegratie" },
        desc: { es: "Coordinamos toda la operación para que sea segura, eficiente y rentable.", en: "We coordinate the whole operation to be safe, efficient and profitable.", pt: "Coordenamos toda a operação para ser segura, eficiente e rentável.", nl: "Wij coördineren de hele operatie: veilig, efficiënt en rendabel." },
      },
    ],
  },

  products: {
    eyebrow: { es: "Capacidades", en: "Capabilities", pt: "Capacidades", nl: "Capaciteiten" },
    title: {
      es: "Cuatro líneas. Una sola exigencia de calidad.",
      en: "Four lines. One single quality standard.",
      pt: "Quatro linhas. Um único padrão de qualidade.",
      nl: "Vier lijnen. Eén kwaliteitsnorm.",
    },
    sub: {
      es: "Del trabajo a bordo al respaldo eléctrico de su planta, bajo estrictos controles de calidad.",
      en: "From onboard work to your plant's electrical backup, under strict quality controls.",
      pt: "Do trabalho a bordo ao respaldo elétrico da sua planta, sob estritos controles de qualidade.",
      nl: "Van werk aan boord tot de elektrische back-up van uw installatie, onder strenge kwaliteitscontrole.",
    },
    list: [
      {
        code: "P-01",
        title: { es: "Servicios navales y portuarios", en: "Naval & port services", pt: "Serviços navais e portuários", nl: "Maritieme & havendiensten" },
        short: { es: "Diseño, reparación, mantenimiento y modificación de buques", en: "Design, repair, maintenance & modification of vessels", pt: "Projeto, reparo, manutenção e modificação de navios", nl: "Ontwerp, reparatie, onderhoud & modificatie van schepen" },
        items: {
          es: ["Casco y estructuras", "Sistemas de propulsión y gobierno", "Bombas y mecánica general", "Amarre y fondeo", "Izamiento, carga y descarga"],
          en: ["Hull and structures", "Propulsion and steering systems", "Pumps and general mechanics", "Mooring and anchoring", "Lifting, loading and unloading"],
          pt: ["Casco e estruturas", "Sistemas de propulsão e governo", "Bombas e mecânica geral", "Amarração e fundeio", "Içamento, carga e descarga"],
          nl: ["Romp en constructies", "Voortstuwing en besturing", "Pompen en algemene mechanica", "Afmeren en ankeren", "Hijsen, laden en lossen"],
        },
      },
      {
        code: "P-02",
        title: { es: "Eléctrica, control y navegación", en: "Electrical, control & navigation", pt: "Elétrica, controle e navegação", nl: "Elektra, besturing & navigatie" },
        short: { es: "Generación, distribución, tableros y electrónica", en: "Generation, distribution, boards & electronics", pt: "Geração, distribuição, painéis e eletrônica", nl: "Opwekking, distributie, panelen & elektronica" },
        items: {
          es: ["Generación y distribución eléctrica", "Tableros y sistemas de control", "Sistemas integrales de navegación", "Comunicaciones y electrónica", "Equipos de seguridad"],
          en: ["Electrical generation and distribution", "Boards and control systems", "Integral navigation systems", "Communications and electronics", "Safety equipment"],
          pt: ["Geração e distribuição elétrica", "Painéis e sistemas de controle", "Sistemas integrais de navegação", "Comunicações e eletrônica", "Equipamentos de segurança"],
          nl: ["Elektrische opwekking en distributie", "Panelen en besturingssystemen", "Integrale navigatiesystemen", "Communicatie en elektronica", "Veiligheidsuitrusting"],
        },
      },
      {
        code: "P-03",
        title: { es: "Equipos eléctricos y electrónicos", en: "Electrical & electronic equipment", pt: "Equipamentos elétricos e eletrônicos", nl: "Elektrische & elektronische apparatuur" },
        short: { es: "Energía, respaldo eléctrico e instalaciones", en: "Power, electrical backup & installation", pt: "Energia, respaldo elétrico e instalações", nl: "Vermogen, elektrische back-up & installatie" },
        items: {
          es: ["Equipos UPS y plantas eléctricas", "Tableros de transferencia", "Baterías y cargadores", "Electroválvulas y reguladores de voltaje", "Sensores de nivel e instalaciones"],
          en: ["UPS units and power plants", "Transfer boards", "Batteries and chargers", "Solenoid valves and voltage regulators", "Level sensors and installations"],
          pt: ["Unidades UPS e usinas elétricas", "Painéis de transferência", "Baterias e carregadores", "Eletroválvulas e reguladores de tensão", "Sensores de nível e instalações"],
          nl: ["UPS-units en energiecentrales", "Overschakelpanelen", "Accu's en laders", "Magneetventielen en spanningsregelaars", "Niveausensoren en installaties"],
        },
      },
      {
        code: "P-04",
        title: { es: "Infraestructura portuaria y marítima", en: "Port & maritime infrastructure", pt: "Infraestrutura portuária e marítima", nl: "Haven- & maritieme infrastructuur" },
        short: { es: "Planificación, procura, instalación y mantenimiento", en: "Planning, procurement, installation & maintenance", pt: "Planejamento, procura, instalação e manutenção", nl: "Planning, inkoop, installatie & onderhoud" },
        items: {
          es: ["Estructuras portuarias", "Infraestructura marítima", "Planificación de obra", "Procura de materiales", "Instalación y mantenimiento"],
          en: ["Port structures", "Maritime infrastructure", "Works planning", "Materials procurement", "Installation and maintenance"],
          pt: ["Estruturas portuárias", "Infraestrutura marítima", "Planejamento de obra", "Procura de materiais", "Instalação e manutenção"],
          nl: ["Havenconstructies", "Maritieme infrastructuur", "Werkplanning", "Materiaalinkoop", "Installatie en onderhoud"],
        },
      },
    ],
  },

  process: {
    eyebrow: { es: "Apoyo Logístico Integrado", en: "Integrated Logistics Support", pt: "Apoio Logístico Integrado", nl: "Geïntegreerde logistieke steun" },
    title: {
      es: "Del astillero al sostenimiento, sin perder el control.",
      en: "From shipyard to sustainment, without losing control.",
      pt: "Do estaleiro à sustentação, sem perder o controle.",
      nl: "Van werf tot instandhouding, zonder de controle te verliezen.",
    },
    steps: [
      { code: "01", label: { es: "Adquisición y procura", en: "Acquisition & procurement", pt: "Aquisição e procura", nl: "Acquisitie & inkoop" } },
      { code: "02", label: { es: "Aprovisionamiento", en: "Provisioning", pt: "Provisionamento", nl: "Bevoorrading" } },
      { code: "03", label: { es: "Despacho de aduanas", en: "Customs clearance", pt: "Desembaraço aduaneiro", nl: "Douaneafhandeling" } },
      { code: "04", label: { es: "Trabajos a bordo", en: "Onboard works", pt: "Trabalhos a bordo", nl: "Werk aan boord" } },
      { code: "05", label: { es: "Mantenimiento y sostenimiento", en: "Maintenance & sustainment", pt: "Manutenção e sustentação", nl: "Onderhoud & instandhouding" } },
    ],
  },

  work: {
    eyebrow: { es: "Trabajos a bordo", en: "Onboard works", pt: "Trabalhos a bordo", nl: "Werk aan boord" },
    title: {
      es: "Intervenciones reales, donde está el buque.",
      en: "Real interventions, where the vessel is.",
      pt: "Intervenções reais, onde está o navio.",
      nl: "Echte ingrepen, waar het schip ligt.",
    },
    items: [
      { img: "img/work-pump.jpg", cat: { es: "Bombas y mecánica", en: "Pumps & mechanics", pt: "Bombas e mecânica", nl: "Pompen & mechanica" }, label: { es: "Reparación de bomba Sterling", en: "Sterling pump overhaul", pt: "Reparo de bomba Sterling", nl: "Revisie Sterling-pomp" } },
      { img: "img/work-gearbox.jpg", cat: { es: "Propulsión", en: "Propulsion", pt: "Propulsão", nl: "Voortstuwing" }, label: { es: "Caja de engranajes a bordo", en: "Onboard gearbox repair", pt: "Caixa de engrenagens a bordo", nl: "Tandwielkast aan boord" } },
      { img: "img/work-nozzles.jpg", cat: { es: "Casco y gobierno", en: "Hull & steering", pt: "Casco e governo", nl: "Romp & besturing" }, label: { es: "Toberas y eje de cola", en: "Nozzles and stern tube", pt: "Tubeiras e eixo de cauda", nl: "Straalbuizen en schroefas" } },
    ],
  },

  clients: {
    eyebrow: { es: "Con quién trabajamos", en: "Who we work with", pt: "Com quem trabalhamos", nl: "Met wie we werken" },
    title: {
      es: "Socio estratégico de operaciones marítimas críticas.",
      en: "Strategic partner for critical maritime operations.",
      pt: "Parceiro estratégico de operações marítimas críticas.",
      nl: "Strategische partner voor kritieke maritieme operaties.",
    },
    sub: {
      es: "Acompañamos a quienes no pueden permitirse una parada.",
      en: "We support those who cannot afford downtime.",
      pt: "Acompanhamos quem não pode se dar ao luxo de uma parada.",
      nl: "Wij ondersteunen wie zich geen stilstand kan veroorloven.",
    },
    sectors: [
      { es: "Armadores", en: "Shipowners", pt: "Armadores", nl: "Reders" },
      { es: "Astilleros", en: "Shipyards", pt: "Estaleiros", nl: "Scheepswerven" },
      { es: "Talleres navales", en: "Naval workshops", pt: "Oficinas navais", nl: "Maritieme werkplaatsen" },
      { es: "Empresas de servicios", en: "Service companies", pt: "Empresas de serviços", nl: "Dienstverleners" },
      { es: "Autoridades portuarias", en: "Port authorities", pt: "Autoridades portuárias", nl: "Havenautoriteiten" },
      { es: "Operadores industriales", en: "Industrial operators", pt: "Operadores industriais", nl: "Industriële exploitanten" },
    ],
  },

  about: {
    eyebrow: { es: "Empresa", en: "Company", pt: "Empresa", nl: "Bedrijf" },
    title: {
      es: "Resolvemos el abastecimiento de la industria naval.",
      en: "We solve supply for the naval industry.",
      pt: "Resolvemos o abastecimento da indústria naval.",
      nl: "Wij lossen de bevoorrading van de maritieme industrie op.",
    },
    body1: {
      es: "Con sede en Miami, la Puerta de las Américas, sumamos más de 30 años junto a armadores, astilleros y talleres. Proveemos partes, repuestos y componentes completos, con personal de amplia experiencia a bordo.",
      en: "Headquartered in Miami, the Gateway to the Americas, we bring over 30 years alongside shipowners, shipyards and workshops. We supply parts, spares and complete components, with personnel of broad onboard experience.",
      pt: "Com sede em Miami, a Porta das Américas, somamos mais de 30 anos junto a armadores, estaleiros e oficinas. Fornecemos peças, sobressalentes e componentes completos, com pessoal de ampla experiência a bordo.",
      nl: "Met hoofdkantoor in Miami, de Poort naar de Amerika's, hebben wij ruim 30 jaar ervaring met reders, werven en werkplaatsen. Wij leveren onderdelen, reservedelen en complete componenten, met personeel met brede ervaring aan boord.",
    },
    body2: {
      es: "Nos movilizamos a donde esté la embarcación y trabajamos a bordo para acortar los tiempos de parada. Junto a nuestros socios comerciales, damos una respuesta oportuna.",
      en: "We mobilize to wherever the vessel is and work aboard to shorten downtime. Together with our commercial partners, we deliver a timely response.",
      pt: "Mobilizamo-nos para onde estiver a embarcação e trabalhamos a bordo para encurtar os tempos de parada. Junto aos nossos parceiros comerciais, damos uma resposta oportuna.",
      nl: "Wij verplaatsen ons naar waar het schip zich bevindt en werken aan boord om stilstand te bekorten. Samen met onze partners leveren wij een tijdige respons.",
    },
    pillars: [
      { num: "01", title: { es: "Trabajamos a bordo", en: "We work aboard", pt: "Trabalhamos a bordo", nl: "Wij werken aan boord" }, desc: { es: "Nos movilizamos a la embarcación, esté donde esté.", en: "We mobilize to the vessel, wherever it is.", pt: "Mobilizamo-nos para a embarcação, onde estiver.", nl: "Wij komen naar het schip, waar het ook ligt." } },
      { num: "02", title: { es: "Una sola contraparte", en: "A single counterpart", pt: "Uma só contraparte", nl: "Eén aanspreekpunt" }, desc: { es: "Técnica, procura y logística con un solo responsable.", en: "Engineering, procurement and logistics under one lead.", pt: "Técnica, procura e logística com um só responsável.", nl: "Techniek, inkoop en logistiek onder één verantwoordelijke." } },
      { num: "03", title: { es: "Proveedores certificados", en: "Certified suppliers", pt: "Fornecedores certificados", nl: "Gecertificeerde leveranciers" }, desc: { es: "Acceso a una red internacional de proveedores calificados.", en: "Access to an international network of qualified suppliers.", pt: "Acesso a uma rede internacional de fornecedores qualificados.", nl: "Toegang tot een internationaal netwerk van gekwalificeerde leveranciers." } },
    ],
  },

  missionVision: {
    mission: {
      label: { es: "Misión", en: "Mission", pt: "Missão", nl: "Missie" },
      body: {
        es: "Ser el proveedor de servicios especializados con los más altos estándares de calidad, plazos y costos, bajo un esquema eficiente, ético, puntual y confiable.",
        en: "To be the provider of specialized services with the highest standards of quality, timing and cost, under an efficient, ethical, punctual and reliable framework.",
        pt: "Ser o provedor de serviços especializados com os mais altos padrões de qualidade, prazos e custos, sob um esquema eficiente, ético, pontual e confiável.",
        nl: "De aanbieder zijn van gespecialiseerde diensten met de hoogste normen voor kwaliteit, doorlooptijd en kosten, binnen een efficiënt, ethisch, punctueel en betrouwbaar kader.",
      },
    },
    vision: {
      label: { es: "Visión", en: "Vision", pt: "Visão", nl: "Visie" },
      body: {
        es: "Ofrecer el mejor servicio, productos de calidad y una excelente gestión como sellos distintivos, afianzándonos como empresa líder en el mercado.",
        en: "To offer the best service, quality products and excellent management as distinctive hallmarks, establishing ourselves as a market leader.",
        pt: "Oferecer o melhor serviço, produtos de qualidade e uma excelente gestão como selos distintivos, consolidando-nos como empresa líder no mercado.",
        nl: "De beste service, kwaliteitsproducten en uitstekend beheer bieden als onderscheidende kenmerken, om ons te vestigen als marktleider.",
      },
    },
  },

  certs: {
    label: { es: "Trabajamos conforme a", en: "We work in line with", pt: "Trabalhamos conforme", nl: "Wij werken conform" },
    list: ["ISO 9001", "IMO", "ABS", "DNV", "Lloyd's Register", "Bureau Veritas"],
  },

  contact: {
    eyebrow: { es: "Contacto", en: "Contact", pt: "Contato", nl: "Contact" },
    title: {
      es: "Asegure la operatividad de su flota con verdaderos expertos.",
      en: "Keep your fleet operational with true experts.",
      pt: "Garanta a operação da sua frota com verdadeiros especialistas.",
      nl: "Houd uw vloot operationeel met echte experts.",
    },
    sub: {
      es: "Cuéntenos qué necesita y le respondemos con una propuesta técnica y comercial.",
      en: "Tell us what you need and we will reply with a technical and commercial proposal.",
      pt: "Conte-nos o que precisa e respondemos com uma proposta técnica e comercial.",
      nl: "Vertel ons wat u nodig heeft en wij reageren met een technisch en commercieel voorstel.",
    },
    form: {
      name: { es: "Nombre completo", en: "Full name", pt: "Nome completo", nl: "Volledige naam" },
      company: { es: "Empresa / Embarcación", en: "Company / Vessel", pt: "Empresa / Embarcação", nl: "Bedrijf / Schip" },
      email: { es: "Correo corporativo", en: "Corporate email", pt: "E-mail corporativo", nl: "Zakelijk e-mailadres" },
      phone: { es: "Teléfono / WhatsApp", en: "Phone / WhatsApp", pt: "Telefone / WhatsApp", nl: "Telefoon / WhatsApp" },
      interest: { es: "Línea de interés", en: "Line of interest", pt: "Linha de interesse", nl: "Interessegebied" },
      message: { es: "Detalle de su requerimiento", en: "Details of your request", pt: "Detalhe do seu requisito", nl: "Details van uw aanvraag" },
      submit: { es: "Enviar requerimiento", en: "Send request", pt: "Enviar solicitação", nl: "Aanvraag versturen" },
      sent: { es: "Mensaje recibido. Nuestro equipo se pondrá en contacto.", en: "Message received. Our team will reach out shortly.", pt: "Mensagem recebida. Nossa equipe entrará em contato.", nl: "Bericht ontvangen. Ons team neemt spoedig contact op." },
      advisory: { es: "Asesoría / Servicios", en: "Advisory / Services", pt: "Consultoria / Serviços", nl: "Advies / Diensten" },
    },
    directory: { es: "Directorio", en: "Directory", pt: "Diretório", nl: "Directory" },
    teamLabel: { es: "Contactos técnicos directos", en: "Direct technical contacts", pt: "Contatos técnicos diretos", nl: "Directe technische contacten" },
    channels: [
      { label: { es: "Correo general", en: "General email", pt: "E-mail geral", nl: "Algemeen e-mail" }, value: "info@a22investments.com" },
      { label: { es: "Oficina principal", en: "Headquarters", pt: "Sede", nl: "Hoofdkantoor" }, value: { es: "Miami, Florida · EE.UU.", en: "Miami, Florida · USA", pt: "Miami, Flórida · EUA", nl: "Miami, Florida · VS" } },
    ],
    team: [
      { name: "Roberto Durdevic", phone: "+58 414 343 1600", email: "robertodur@gmail.com" },
      { name: "Leonar Llovera", phone: "+58 412 677 0041", email: "leonarll@gmail.com" },
      { name: "Reinaldo García", phone: "+58 426 530 4886", email: "reinaldogarcia01@gmail.com" },
    ],
  },

  finalCta: {
    title: {
      es: "Mantenga su embarcación operativa.",
      en: "Keep your vessel operational.",
      pt: "Mantenha a sua embarcação operacional.",
      nl: "Houd uw schip operationeel.",
    },
    sub: {
      es: "Cuéntenos qué necesita y le respondemos con una propuesta técnica y comercial.",
      en: "Tell us what you need and we will reply with a technical and commercial proposal.",
      pt: "Conte-nos o que precisa e respondemos com uma proposta técnica e comercial.",
      nl: "Vertel ons wat u nodig heeft en wij reageren met een technisch en commercieel voorstel.",
    },
  },

  footer: {
    note: { es: "A22 Investments LLC · Industria naval y portuaria", en: "A22 Investments LLC · Naval & port industry", pt: "A22 Investments LLC · Indústria naval e portuária", nl: "A22 Investments LLC · Maritieme & havenindustrie" },
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved.", pt: "Todos os direitos reservados.", nl: "Alle rechten voorbehouden." },
    nav: { es: "Navegación", en: "Navigation", pt: "Navegação", nl: "Navigatie" },
    contact: { es: "Contacto", en: "Contact", pt: "Contato", nl: "Contact" },
  },
};

window.A22_A = A22_A;
