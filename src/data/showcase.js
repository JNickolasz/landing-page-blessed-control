const showcase = {
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
};

module.exports = showcase;
