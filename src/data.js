const siteData = {
  meta: {
    title: "Blessed Control | Blessed Academy Jiu-Jitsu",
    description:
      "Check-in rápido no tatame, acompanhamento de graduação e graus em tempo real, diário de técnicas e gestão completa para professores e atletas de alta performance.",
    version: "v1.2.0",
    build: "Build 2026.1 | Blessed OS",
    apkSize: "~54.6 MB",
    androidVersion: "Android 8.0 ou superior",
    apkDownloadUrl: "media/apk/app-blessed-control-v1.apk",
    apkFileName: "app-blessed-control-v1.apk",
    logo: "media/screens/logo.webp",
    headCoach: "Prof. Everton Rodrigues",
    location: "Blessed Academy HQ • Serra Talhada, PE",
  },

  navItems: [
    { id: "inicio-section", label: "Início" },
    { id: "vitrine-app-section", label: "Vitrine & Recursos" },
    { id: "grade-horarios-section", label: "Horários & Faixas" },
    { id: "download-apk-section", label: "Download" },
    { id: "depoimentos-section", label: "Comunidade" },
    { id: "faq-section", label: "FAQ" },
  ],

  hero: {
    badge: "O APP OFICIAL DO TATAME • BLESSED CONTROL",
    titlePrefix: "Sua evolução no Jiu-Jitsu agora no",
    titleHighlight: "Blessed Control.",
    subtitle:
      "Check-in rápido no tatame, acompanhamento de graduação e graus em tempo real, diário de técnicas e gestão completa para professores e atletas de alta performance.",
    mockups: {
      professor: {
        image: "media/screens/prof-dashboard.webp",
        alt: "Dashboard do Professor - Blessed Control",
        label: "Painel Mestre",
        icon: "sports",
      },
      aluno: {
        image: "media/screens/aluno-inicio.webp",
        alt: "Dashboard do Aluno - Blessed Control",
        label: "Painel do Atleta",
        icon: "person",
      },
    },
    highlights: [
      {
        icon: "verified_user",
        colorClass: "text-primary",
        title: "APK Seguro & PWA",
        subtitle: "Android & iOS Safari",
      },
      {
        icon: "sports_martial_arts",
        colorClass: "text-secondary",
        title: "Padrão CBJJ / IBJJF",
        subtitle: "Regras e graus",
      },
      {
        icon: "bolt",
        colorClass: "text-tertiary-container",
        title: "Check-in Imediato",
        subtitle: "Em menos de 2 seg",
      },
    ],
  },

  stats: [
    {
      value: "1.200+",
      colorClass: "text-primary",
      title: "Atletas & Alunos",
      subtitle: "Conectados diariamente no dojo",
    },
    {
      value: "99.4%",
      colorClass: "text-tertiary-container",
      title: "Presenças Validadas",
      subtitle: "Check-ins seguros via QR Code",
    },
    {
      value: "4.9/5 ★",
      colorClass: "text-secondary",
      title: "Avaliação Média",
      subtitle: "Feedback de praticantes reais",
    },
    {
      value: "100%",
      colorClass: "text-on-surface",
      title: "CBJJ / IBJJF",
      subtitle: "Critérios de graduação e tempo",
    },
  ],

  simulator: {
    aluno: [
      {
        tab: "Início",
        icon: "home",
        title: "Home do Atleta & Meta Semanal",
        badge: "ABA 01 • INÍCIO",
        description:
          "Veja sua próxima aula do dia (Fundamentos Gi), confirme presença em 1 toque, acompanhe sua ofensiva de 5 semanas batendo a meta e seu progresso 38/50 aulas rumo ao 2º grau.",
        image: "media/screens/aluno-inicio.webp",
      },
      {
        tab: "Treinos",
        icon: "route",
        title: "Trilha de Técnicas por Faixa",
        badge: "ABA 02 • TREINOS",
        description:
          "Continue de onde parou ('Knee cut - Passagem de guarda') e percorra os 8 módulos oficiais da Faixa Azul: Base e postura, Fugas, Guarda fechada, Raspagens, Passagem e Costas.",
        image: "media/screens/aluno-treinos.webp",
      },
      {
        tab: "Check-in",
        icon: "qr_code_scanner",
        title: "Leitor QR Code Instantâneo",
        badge: "ABA 03 • CHECK-IN",
        description:
          "Aponte a câmera para o QR Code da recepção ou tablet do tatame para validar sua presença em menos de 2 segundos, mesmo se a internet oscilar.",
        image: "media/screens/aluno-qrcode.webp",
      },
      {
        tab: "Evolução",
        icon: "military_tech",
        title: "Jornada, Radar Técnico & Conquistas",
        badge: "ABA 04 • EVOLUÇÃO",
        description:
          "Previsão inteligente da próxima graduação, linha do tempo até a Faixa Preta, gráfico de radar dos seus fundamentos (Defesa, Raspagens, Finalizações) e medalhas desbloqueadas.",
        image: "media/screens/aluno-evolucao.webp",
      },
      {
        tab: "Perfil",
        icon: "badge",
        title: "Carteirinha Digital & Plano Ativo",
        badge: "ABA 05 • PERFIL",
        description:
          "Sua credencial oficial da Blessed Academy com 386 treinos registrados, categoria de peso IBJJF (76kg Leve), status do plano Mensal Livre e alertas de aula.",
        image: "media/screens/aluno-perfil.webp",
      },
    ],
    professor: [
      {
        tab: "Início",
        icon: "dashboard",
        title: "Painel Mestre & Frequência",
        badge: "MESTRE • INÍCIO",
        description:
          "Abra a chamada da turma atual, monitore os 128 alunos ativos, 1.326 check-ins nos últimos 30 dias, distribuição por faixa e alertas de alunos prontos para graduar ou ausentes há +14 dias.",
        image: "media/screens/prof-dashboard.webp",
      },
      {
        tab: "Aulas",
        icon: "calendar_month",
        title: "Grade Semanal & Ocupação ao Vivo",
        badge: "MESTRE • AULAS",
        description:
          "Gerencie as turmas do dia (Todas, Gi, No-Gi, Kids), acompanhe aulas AO VIVO no tatame e monitore a lotação de cada horário (ex: 14/24 vagas no Tatame 2).",
        image: "media/screens/prof-grade.webp",
      },
      {
        tab: "Criar",
        icon: "add_circle",
        title: "Cadastro Rápido de Aulas, Alunos e Avisos",
        badge: "MESTRE • CRIAR",
        description:
          "Crie novas turmas definindo modalidade, tatame e limite de vagas, matricule novos alunos ou envie comunicados gerais para toda a academia em segundos.",
        image: "media/screens/prof-nova-aula.webp",
      },
      {
        tab: "Alunos",
        icon: "groups",
        title: "Diretório de Alunos & Filtro de Graduação",
        badge: "MESTRE • ALUNOS",
        description:
          "Visualize todos os 128 alunos (86 Adultos e 42 Kids) separados por cor de faixa e filtre com 1 toque os 6 atletas que já atingiram a meta para graduar.",
        image: "media/screens/prof-alunos.webp",
      },
      {
        tab: "Perfil",
        icon: "tune",
        title: "Credencial do Professor & Regras do Dojô",
        badge: "MESTRE • PERFIL",
        description:
          "Configure os parâmetros oficiais da academia: número de aulas por grau (50 aulas), treinos mínimos por semana (2), check-in por QR Code e lembrete automático anti-evasão.",
        image: "media/screens/prof-perfil.webp",
      },
    ],
  },

  showcase: {
    aluno: [
      {
        id: "aluno-inicio",
        badge: "PASSO 01",
        badgeColor: "text-primary",
        icon: "touch_app",
        title: "Início & Check-in",
        description:
          "Presença em 1 toque na recepção, meta semanal de treinos e acompanhamento rumo ao 2º grau.",
        image: "media/screens/aluno-inicio.webp",
        alt: "Tela de Início e Check-in do Aluno",
      },
      {
        id: "aluno-evolucao",
        badge: "PROGRESSÃO",
        badgeColor: "text-tertiary",
        icon: "radar",
        title: "Evolução & Radar",
        description:
          "Contador oficial 38/50 aulas, régua até a faixa preta, gráfico de radar de fundamentos e conquistas.",
        image: "media/screens/aluno-evolucao.webp",
        alt: "Tela de Evolução Técnica e Radar",
      },
      {
        id: "aluno-treinos",
        badge: "METODOLOGIA",
        badgeColor: "text-secondary",
        icon: "video_library",
        title: "Trilha de Técnicas",
        description:
          "Vídeo-aulas por graduação: módulos de Base, Fugas, Raspagens e Passagens para revisar após o treino.",
        image: "media/screens/aluno-treinos.webp",
        alt: "Trilha de Técnicas do Aluno",
      },
      {
        id: "aluno-perfil",
        badge: "PASSE DIGITAL",
        badgeColor: "text-primary",
        icon: "badge",
        title: "Credencial de Atleta",
        description:
          "Carteirinha digital com QR Code, tempo de tatame, histórico de graus e verificação de plano ativo.",
        image: "media/screens/aluno-perfil.webp",
        alt: "Credencial Digital com QR Code",
      },
    ],
    alunoExtras: [
      {
        id: "aluno-qrcode",
        badge: "LEITOR QR",
        badgeColor: "text-primary",
        icon: "qr_code_scanner",
        title: "Leitura Rápida no Tatame",
        description:
          "Modal instantâneo para escanear o QR Code da recepção ou simular leitura da turma ao vivo.",
        image: "media/screens/aluno-qrcode.webp",
        alt: "Modal de Leitura de QR Code no Check-in",
      },
      {
        id: "aluno-editar-perfil",
        badge: "CATEGORIA IBJJF",
        badgeColor: "text-secondary",
        icon: "monitor_weight",
        title: "Peso & Emergência",
        description:
          "Cálculo automático de categoria de peso IBJJF (ex: 76kg Leve), bio pública e contato de emergência.",
        image: "media/screens/aluno-editar-perfil.webp",
        alt: "Edição de Perfil e Peso IBJJF do Aluno",
      },
    ],
    professor: [
      {
        id: "prof-dashboard",
        badge: "MESTRE",
        badgeColor: "text-primary",
        icon: "dashboard",
        title: "Dashboard Geral",
        description:
          "Visão global da frequência nos últimos 30 dias, distribuição de faixas no dojo e chamadas em tempo real.",
        image: "media/screens/prof-dashboard.webp",
        alt: "Dashboard Geral do Professor",
      },
      {
        id: "prof-grade",
        badge: "GRADE",
        badgeColor: "text-tertiary",
        icon: "calendar_today",
        title: "Grade & Aulas ao Vivo",
        description:
          "Controle total de turmas Gi, No-Gi, Kids, ocupação de tatame por horário e bloqueio de limite de vagas.",
        image: "media/screens/prof-grade.webp",
        alt: "Grade de Horários da Academia",
      },
      {
        id: "prof-alunos",
        badge: "GRADUAÇÃO",
        badgeColor: "text-secondary",
        icon: "workspace_premium",
        title: "Gestão de Graduações",
        description:
          "Lista de alunos ativos, contagem por cor de faixa (Adulto e Kids) e filtro inteligente de prontos para graduar.",
        image: "media/screens/prof-alunos.webp",
        alt: "Gestão de Alunos e Faixas",
      },
      {
        id: "prof-comunicado",
        badge: "NOTIFICAÇÃO",
        badgeColor: "text-primary",
        icon: "campaign",
        title: "Avisos do Tatame",
        description:
          "Disparo instantâneo de comunicados segmentados para Todos, Adultos ou Kids e responsáveis.",
        image: "media/screens/prof-comunicado.webp",
        alt: "Avisos e Comunicados do Dojô",
      },
    ],
    professorExtras: [
      {
        id: "prof-matricula",
        badge: "MATRÍCULA",
        badgeColor: "text-primary",
        icon: "person_add",
        title: "Matrícula de Novo Aluno",
        description:
          "Cadastro em segundos com seleção de categoria (Adulto/Kids), idade, cor da faixa e número de graus.",
        image: "media/screens/prof-matricula.webp",
        alt: "Tela de Matrícula de Novo Aluno",
      },
      {
        id: "prof-nova-aula",
        badge: "TURMAS",
        badgeColor: "text-tertiary",
        icon: "add_circle",
        title: "Cadastro de Nova Aula",
        description:
          "Criação rápida de aulas Gi, No-Gi, Kids ou Livre, definindo professor, tatame, duração e limite de vagas.",
        image: "media/screens/prof-nova-aula.webp",
        alt: "Tela de Cadastro de Nova Aula",
      },
      {
        id: "prof-novo-evento",
        badge: "EVENTOS",
        badgeColor: "text-secondary",
        icon: "event",
        title: "Criação de Eventos",
        description:
          "Agende cerimônias de Graduação, Seminários, Campeonatos e Festivais Kids com confirmação de presença.",
        image: "media/screens/prof-novo-evento.webp",
        alt: "Tela de Cadastro de Novo Evento",
      },
      {
        id: "prof-perfil",
        badge: "CONFIGURAÇÕES",
        badgeColor: "text-primary",
        icon: "tune",
        title: "Regras da Academia",
        description:
          "Credencial do professor e definição das regras de aulas por grau, frequência mínima e lembretes automáticos.",
        image: "media/screens/prof-perfil.webp",
        alt: "Perfil do Professor e Regras de Graduação",
      },
      {
        id: "prof-editar-perfil",
        badge: "CREDENCIAL",
        badgeColor: "text-tertiary",
        icon: "manage_accounts",
        title: "Dados do Mestre & Filiação",
        description:
          "Atualização de registro CBJJ/IBJJF, graduação de faixa preta, unidade sede e credenciais de liderança.",
        image: "media/screens/prof-editar-perfil.webp",
        alt: "Edição de Perfil e Credencial do Professor",
      },
    ],
  },

  features: {
    aluno: [
      {
        icon: "qr_code_2",
        title: "Mat Pass & QR Code Dinâmico",
        description:
          "Check-in na catraca ou tablet em menos de 2 segundos. Sem filas na recepção.",
      },
      {
        icon: "trending_up",
        title: "Termômetro de Graduação",
        description:
          "Acompanhe quantas aulas faltam para cada grau e saiba exatamente onde melhorar.",
      },
      {
        icon: "schedule",
        title: "Grade de Treinos & Vagas em Tempo Real",
        description:
          "Reserve sua vaga nas aulas de Gi, No-Gi, Competição ou Open Mat com um toque.",
      },
      {
        icon: "auto_stories",
        title: "Diário de Técnicas",
        description:
          "Acesso a vídeo-aulas da sua faixa com técnicas curriculares aprovadas pela matriz.",
      },
    ],
    professor: [
      {
        icon: "group",
        title: "Lotação de Tatame em Tempo Real",
        description:
          "Monitore quem está no tatame agora e audite a presença com um simples scan.",
      },
      {
        icon: "checklist",
        title: "Chamada em Lote Auditada",
        description:
          "Confirme a turma inteira em segundos e mantenha histórico seguro contra fraudes de presença.",
      },
      {
        icon: "notification_important",
        title: "Alerta Inteligente de Exame de Faixa",
        description:
          "O app avisa quando o atleta atinge horas, presença e constância mínimas exigidas pela CBJJ.",
      },
      {
        icon: "person_off",
        title: "Radar Anti-Evasão",
        description:
          "Notificação automática para alunos ausentes há mais de 14 dias para resgatar o atleta antes da desistência.",
      },
    ],
  },

  schedule: [
    {
      time: "13:00",
      days: "Ter • Qui",
      daysFull: "Terça e Quinta",
      title: "Jiu-Jitsu Adulto",
      type: "ADULTO",
      coach: "Prof. Everton Rodrigues • Sede Blessed",
    },
    {
      time: "17:30",
      days: "Seg • Qua • Sex",
      daysFull: "Segunda, Quarta e Sexta (1º Horário)",
      title: "Jiu-Jitsu Kids",
      type: "KIDS",
      coach: "Prof. Everton Rodrigues • Sede Blessed",
    },
    {
      time: "18:30",
      days: "Seg • Qua • Sex",
      daysFull: "Segunda, Quarta e Sexta (2º Horário)",
      title: "Jiu-Jitsu Kids",
      type: "KIDS",
      coach: "Prof. Everton Rodrigues • Sede Blessed",
    },
    {
      time: "20:00",
      days: "Seg • Qua • Sex",
      daysFull: "Segunda, Quarta e Sexta",
      title: "Jiu-Jitsu Adulto",
      type: "ADULTO",
      coach: "Prof. Everton Rodrigues • Sede Blessed",
    },
  ],

  belts: {
    adulto: [
      {
        id: "branca",
        name: "Faixa Branca",
        shortName: "Branca",
        colorBg: "bg-zinc-100",
        pontaBg: "bg-zinc-900",
        textClass: "text-zinc-100",
        ageRule: "A partir de 16 anos (Juvenil / Adulto)",
        degreesRule: "Sistema CBJJ / IBJJF: 4 graus na ponteira preta",
        ibjjfMin: "Permanência mínima IBJJF: Sem tempo mínimo fixo (critério técnico e presença)",
        focus:
          "Fundamentos de sobrevivência, postura na guarda, defesa pessoal, fugas de quadril, reposição de guarda e quedas básicas.",
      },
      {
        id: "azul",
        name: "Faixa Azul",
        shortName: "Azul",
        colorBg: "bg-blue-600",
        pontaBg: "bg-zinc-900",
        textClass: "text-blue-400",
        ageRule: "Idade mínima CBJJ / IBJJF: 16 anos",
        degreesRule: "Sistema CBJJ / IBJJF: 4 graus na ponteira preta",
        ibjjfMin: "Permanência mínima IBJJF: 2 anos (Adulto) • 1 ano (Master)",
        focus:
          "Consolidação das guardas aberta, fechada e meia-guarda, raspagens conectadas, passagens em pé e ataques das costas.",
      },
      {
        id: "roxa",
        name: "Faixa Roxa",
        shortName: "Roxa",
        colorBg: "bg-purple-600",
        pontaBg: "bg-zinc-900",
        textClass: "text-purple-400",
        ageRule: "Idade mínima CBJJ / IBJJF: 16 anos",
        degreesRule: "Sistema CBJJ / IBJJF: 4 graus na ponteira preta",
        ibjjfMin: "Permanência mínima IBJJF: 1 ano e 6 meses (Adulto) • 1 ano (Master)",
        focus:
          "Combinações em cadeia, transições guarda/passagem, ataques de lapela, domínio de reação e refinamento do jogo próprio.",
      },
      {
        id: "marrom",
        name: "Faixa Marrom",
        shortName: "Marrom",
        colorBg: "bg-amber-800",
        pontaBg: "bg-zinc-900",
        textClass: "text-amber-500",
        ageRule: "Idade mínima CBJJ / IBJJF: 18 anos",
        degreesRule: "Sistema CBJJ / IBJJF: 4 graus na ponteira preta",
        ibjjfMin: "Permanência mínima IBJJF: 1 ano (Adulto e Master)",
        focus:
          "Pressão máxima, ajuste fino de distribuição de peso, chaves de membros inferiores permitidas na regra e preparação para a Preta.",
      },
      {
        id: "preta",
        name: "Faixa Preta",
        shortName: "Preta",
        colorBg: "bg-zinc-900 border border-white/20",
        pontaBg: "bg-red-600",
        textClass: "text-red-500",
        ageRule: "Idade mínima CBJJ / IBJJF: 19 anos",
        degreesRule: "Sistema CBJJ / IBJJF: Até 6 graus na ponteira vermelha",
        ibjjfMin: "Diplomação IBJJF: 3 anos por grau (1º ao 3º) • 5 anos por grau (4º ao 6º)",
        focus:
          "Excelência técnica, didática de ensino, domínio das regras de arbitragem CBJJ/IBJJF, liderança no dojô e preservação da arte suave.",
      },
    ],
    kids: [
      {
        id: "branca-kids",
        name: "Faixa Branca (Kids)",
        shortName: "Branca",
        colorBg: "bg-zinc-100",
        pontaBg: "bg-zinc-900",
        textClass: "text-zinc-100",
        ageRule: "Faixa etária CBJJ / IBJJF: 4 a 15 anos",
        degreesRule: "Sistema Infantil CBJJ: 4 graus na ponteira preta",
        ibjjfMin: "Progressão CBJJ: Avaliação contínua de coordenação, disciplina e presença",
        focus:
          "Coordenação motora, rolamentos, amortecimento de quedas (ukemi), disciplina no tatame e respeito às regras do Jiu-Jitsu.",
      },
      {
        id: "cinza",
        name: "Faixa Cinza",
        shortName: "Cinza",
        colorBg: "bg-zinc-400",
        pontaBg: "bg-zinc-900",
        textClass: "text-zinc-300",
        ageRule: "Faixa etária CBJJ / IBJJF: 4 a 15 anos",
        degreesRule: "Subdivisões CBJJ: Cinza/Branca, Cinza Lisa e Cinza/Preta (4 graus cada)",
        ibjjfMin: "Progressão CBJJ: Graduação conforme faixa etária e frequência regular",
        focus:
          "Controle de base e equilíbrio, imobilizações laterais (cem-quilos e montada), fugas básicas e introdução à guarda fechada.",
      },
      {
        id: "amarela",
        name: "Faixa Amarela",
        shortName: "Amarela",
        colorBg: "bg-yellow-400",
        pontaBg: "bg-zinc-900",
        textClass: "text-yellow-400",
        ageRule: "Faixa etária CBJJ / IBJJF: 7 a 15 anos",
        degreesRule: "Subdivisões CBJJ: Amarela/Branca, Amarela Lisa e Amarela/Preta (4 graus cada)",
        ibjjfMin: "Idade mínima CBJJ: Ano em que o atleta completa 7 anos",
        focus:
          "Raspagens fundamentais, passagens de guarda básicas, defesas de posição e ataques permitidos para categorias infantis CBJJ.",
      },
      {
        id: "laranja",
        name: "Faixa Laranja",
        shortName: "Laranja",
        colorBg: "bg-orange-500",
        pontaBg: "bg-zinc-900",
        textClass: "text-orange-400",
        ageRule: "Faixa etária CBJJ / IBJJF: 10 a 15 anos",
        degreesRule: "Subdivisões CBJJ: Laranja/Branca, Laranja Lisa e Laranja/Preta (4 graus cada)",
        ibjjfMin: "Idade mínima CBJJ: Ano em que o atleta completa 10 anos",
        focus:
          "Conexão entre quedas, passagem e finalização, reposição de guarda dinâmica e noções de estratégia esportiva IBJJF Kids.",
      },
      {
        id: "verde",
        name: "Faixa Verde",
        shortName: "Verde",
        colorBg: "bg-emerald-600",
        pontaBg: "bg-zinc-900",
        textClass: "text-emerald-400",
        ageRule: "Faixa etária CBJJ / IBJJF: 13 a 15 anos",
        degreesRule: "Subdivisões CBJJ: Verde/Branca, Verde Lisa e Verde/Preta (4 graus cada)",
        ibjjfMin: "Transição CBJJ: Passa para Faixa Azul no ano em que completa 16 anos",
        focus:
          "Domínio técnico juvenil avançado, transições rápidas e preparação completa para ingressar na categoria Juvenil (16–17 anos).",
      },
    ],
  },

  testimonials: [
    {
      quote:
        "Acabou o papel e a dúvida sobre quem realmente tem presença para pegar grau. No final do mês eu clico em 'Prontos para Graduar' e a lista vem perfeita no padrão CBJJ. O Blessed Control transformou a organização da nossa academia.",
      initials: "ER",
      colorClass: "text-primary",
      name: "Prof. Everton Rodrigues",
      role: "Faixa Preta • Blessed Academy Head Coach",
    },
    {
      quote:
        "Para quem compete todo mês, bater a meta de 4 a 5 treinos por semana e checar as aulas de passagem no próprio celular antes de dormir é outro nível. O radar de técnicas ajuda a ver onde meu jogo tá falho.",
      initials: "CS",
      colorClass: "text-tertiary",
      name: "Camila Silveira",
      role: "Faixa Roxa • Atleta Competidora Gi & No-Gi",
    },
    {
      quote:
        "Trabalho o dia inteiro e o Jiu-Jitsu é minha terapia. Chegar na academia, encostar o celular na recepção e ver que faltam só 12 aulas para o meu 2º grau na azul me mantém focado e motivado a não faltar.",
      initials: "LV",
      colorClass: "text-secondary",
      name: "Luan Victor",
      role: "Faixa Azul 1º Grau • 386 Treinos no Blessed Control",
    },
  ],

  faqs: [
    {
      id: "faq-1",
      question:
        "Como baixar o APK do Blessed Control direto e não pela Google Play?",
      answer:
        "O Blessed Control é distribuído diretamente aos alunos da Blessed Academy para garantir atualizações imediatas de treinos e recursos do tatame, sem intermediários ou atrasos de aprovação de lojas. O arquivo .apk é 100% verificado, seguro e livre de riscos.",
    },
    {
      id: "faq-2",
      question: "Como faço para usar o app no iPhone (iOS)?",
      answer:
        "Usuários de iPhone contam com o PWA (Progressive Web App). Basta abrir o link oficial da academia no navegador Safari, tocar no ícone de 'Compartilhar' e selecionar 'Adicionar à Tela de Início'. O app funcionará em tela cheia idêntico a um aplicativo nativo, com check-in e QR Code operacionais.",
    },
    {
      id: "faq-3",
      question:
        "O check-in funciona se o tatame estiver sem internet no momento?",
      answer:
        "Sim! O aplicativo possui tecnologia offline-first. O QR Code dinâmico do seu Mat Pass é validado localmente com criptografia de sessão e sincronizado automaticamente com o servidor central assim que a conexão da academia for restabelecida.",
    },
    {
      id: "faq-4",
      question: "Como os professores ativam a 'Visão Mestre' no aplicativo?",
      answer:
        "A conta de professor é liberada pela diretoria da Blessed Academy. Ao fazer login com o perfil credenciado de instrutor ou faixa preta responsável, o app ativa automaticamente o painel executivo com chamada em lote, controle de turmas, avisos e gestão de graduações.",
    },
  ],
};

module.exports = siteData;
