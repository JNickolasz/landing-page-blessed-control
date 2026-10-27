const belts = {
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
      ibjjfMin:
        "Permanência mínima IBJJF: Sem tempo mínimo fixo (critério técnico e presença)",
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
      ibjjfMin:
        "Permanência mínima IBJJF: 1 ano e 6 meses (Adulto) • 1 ano (Master)",
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
      ibjjfMin:
        "Diplomação IBJJF: 3 anos por grau (1º ao 3º) • 5 anos por grau (4º ao 6º)",
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
      ibjjfMin:
        "Progressão CBJJ: Avaliação contínua de coordenação, disciplina e presença",
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
      degreesRule:
        "Subdivisões CBJJ: Cinza/Branca, Cinza Lisa e Cinza/Preta (4 graus cada)",
      ibjjfMin:
        "Progressão CBJJ: Graduação conforme faixa etária e frequência regular",
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
      degreesRule:
        "Subdivisões CBJJ: Amarela/Branca, Amarela Lisa e Amarela/Preta (4 graus cada)",
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
      degreesRule:
        "Subdivisões CBJJ: Laranja/Branca, Laranja Lisa e Laranja/Preta (4 graus cada)",
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
      degreesRule:
        "Subdivisões CBJJ: Verde/Branca, Verde Lisa e Verde/Preta (4 graus cada)",
      ibjjfMin:
        "Transição CBJJ: Passa para Faixa Azul no ano em que completa 16 anos",
      focus:
        "Domínio técnico juvenil avançado, transições rápidas e preparação completa para ingressar na categoria Juvenil (16–17 anos).",
    },
  ],
};

module.exports = belts;
