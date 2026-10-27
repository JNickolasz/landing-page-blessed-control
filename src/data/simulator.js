const simulator = {
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
};

module.exports = simulator;
