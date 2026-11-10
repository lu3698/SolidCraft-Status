export type Tone =
  | "m1"
  | "m2"
  | "m3"
  | "m4"
  | "m5"
  | "m6"
  | "m7"
  | "m9"
  | "m10"
  | "m12"
  | "m14"
  | "alpha"
  | "comp";

export type MilestoneGroup = "alpha" | "comp";

export type Milestone = {
  id: string;
  code: string;
  name: string;
  percent: number;
  delta?: number;
  hours: number;
  status: string;
  tag?: string;
  note: string;
  tone: Tone;
  group: MilestoneGroup;
  kind: "rollup" | "module";
};

export type Bullet = {
  lead?: string;
  text: string;
};

export type Tier = {
  heading: string;
  body: string;
};

export type TableRow = {
  module: string;
  state: string;
  hours: string;
  delivery: string;
};

export type Kpi = {
  id: string;
  label: string;
  value: string;
  detail: string;
};

export type Report = {
  id: string;
  tabIndex: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  nextCheck: string;
  global: { percent: number; delta?: number; caption: string };
  alpha: { percent: number; delta?: number; caption: string };
  kpis: Kpi[];
  analysisKicker: string;
  analysisIntro: string;
  tiers: Tier[];
  transcriptKicker: string;
  transcriptIntro: string;
  statusHeading: string;
  statusLead: string;
  statusBullets: Bullet[];
  tableHeading: string;
  tableRows: TableRow[];
  stabilityHeading: string;
  stabilityBullets: Bullet[];
  challengesHeading: string;
  challengeBullets: Bullet[];
  focusHeading: string;
  focusBullets: Bullet[];
  milestones: Milestone[];
};

export const METHODOLOGY =
  "O progresso percentual do SolidCraft é calculado combinando o saldo de horas de agente restantes (82h para o Alpha Útil M0–M6 e 100h para os Módulos Complementares M7, M9, M10, M12 e M14, totalizando 182h pendentes em relação ao escopo base de 520h totais do ciclo atual, sendo 285h do Alpha Útil e 235h dos módulos complementares) com o grau de maturidade e transição de estágio de cada marco entre os dois ciclos semanais. Embora o saldo nominal de horas em aberto tenha permanecido fixado em 82h (Alpha Útil) e 182h (Escopo Global) entre 30/10 e 06/11 devido à absorção contínua de testes de borda e validação analítica na barreira de CI, a evolução qualitativa das entregas (como a passagem de M1 de Estabilização para Validação e a precisão de <0,0001mm em M3) elevou o Progresso Geral do Aplicativo de 62,8% (30/10) para 65,0% (06/11) no escopo completo, e de 69,1% (30/10) para 71,2% (06/11) no recorte do Alpha Útil (M0–M6).";

export const META = [
  { label: "BUILD", value: "0.2.1" },
  { label: "FORMATO", value: "SOLIDCRAFT/13" },
  { label: "CI", value: "CARGO XTASK CI (WASM32 + NATIVO)" },
  { label: "SALDO ALPHA (M0–M6)", value: "82H" },
  { label: "SALDO TOTAL (M0–M14)", value: "182H" },
  { label: "CICLOS", value: "30/10/2026 & 06/11/2026" },
] as const;

const octMilestones: Milestone[] = [
  {
    id: "alpha",
    code: "M0–M6",
    name: "Consolidado Alpha Útil",
    percent: 69.1,
    hours: 82,
    status: "Prioridade central",
    tag: "PRIORIDADE CENTRAL",
    note: "Blocos fundamentais de esboço, modelagem, topologia, STEP e UI.",
    tone: "alpha",
    group: "alpha",
    kind: "rollup",
  },
  {
    id: "comp",
    code: "M7–M14",
    name: "Consolidado Complementares",
    percent: 55.3,
    hours: 100,
    status: "Expansão pós-alpha",
    tag: "EXPANSÃO PÓS-ALPHA",
    note: "Operações avançadas, cinemática, chapas/plásticos, release e configurações.",
    tone: "comp",
    group: "comp",
    kind: "rollup",
  },
  {
    id: "m1",
    code: "M1",
    name: "Sketch Depth",
    percent: 90,
    hours: 4,
    status: "Reta final → Estabilização",
    note: "Solver construtivo Owen/Fudos-Hoffmann e isolamento de casos de borda em junções de offset.",
    tone: "m1",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m14",
    code: "M14",
    name: "Configurações",
    percent: 86,
    hours: 4,
    status: "Reta final",
    note: "Pronto para fechamento; alternância atômica de configurações via config.activate.",
    tone: "m14",
    group: "comp",
    kind: "module",
  },
  {
    id: "m4",
    code: "M4",
    name: "Importação / Formatos",
    percent: 83,
    hours: 6,
    status: "Reta final",
    note: "Leitor B-rep nativo STEP multithread e contêineres binários (#303) consolidados.",
    tone: "m4",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m6",
    code: "M6",
    name: "Profundidade de UI",
    percent: 83,
    hours: 6,
    status: "Reta final",
    note: "Manipuladores contextuais de arrasto, dimensões inline e timeline responsiva.",
    tone: "m6",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m2",
    code: "M2",
    name: "Modelagem Robusta",
    percent: 66,
    hours: 16,
    status: "Em andamento",
    note: "Booleanas coplanares e furos com classificação de volume interno em tolerância estrita.",
    tone: "m2",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m7",
    code: "M7",
    name: "Operações Avançadas",
    percent: 63,
    hours: 12,
    status: "Em andamento",
    note: "Extrusões de paredes finas (#721) e cálculo de relevos radiais (emboss) em cilindros.",
    tone: "m7",
    group: "comp",
    kind: "module",
  },
  {
    id: "m12",
    code: "M12",
    name: "Empacotamento / Release",
    percent: 58,
    hours: 16,
    status: "Em andamento",
    note: "Pipelines cargo xtask ci verdes (formatação, clippy, testes unitários e wasm32).",
    tone: "m12",
    group: "comp",
    kind: "module",
  },
  {
    id: "m5",
    code: "M5",
    name: "Nomenclatura Persistente",
    percent: 53,
    hours: 20,
    status: "Em andamento",
    note: "Certificados históricos (FaceSource) em extrusão, revolução, casca e linhagem de chapa.",
    tone: "m5",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m3",
    code: "M3",
    name: "Fillets e Chanfros",
    percent: 48,
    hours: 30,
    status: "Em andamento (Caminho crítico)",
    note: "Esferas rolantes (rolling-ball) em junções T, proteção de arestas finas (#2498) e arredondamentos G2.",
    tone: "m3",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m9",
    code: "M9",
    name: "Montagens & Juntas",
    percent: 44,
    hours: 32,
    status: "Em andamento",
    note: "Laços cinemáticos fechados (quatro barras, biela-manivela) e parada dinâmica via Contact Sets.",
    tone: "m9",
    group: "comp",
    kind: "module",
  },
  {
    id: "m10",
    code: "M10",
    name: "Chapas e Plásticos",
    percent: 42,
    hours: 36,
    status: "Em andamento",
    note: "Recortes desdobrados em DXF e regras parametrizadas de nervuras (rib/web) e snap-fit.",
    tone: "m10",
    group: "comp",
    kind: "module",
  },
];

const novMilestones: Milestone[] = [
  {
    id: "alpha",
    code: "M0–M6",
    name: "Consolidado Alpha Útil",
    percent: 71.2,
    delta: 2.1,
    hours: 82,
    status: "Prioridade central",
    tag: "PRIORIDADE CENTRAL",
    note: "Evolução em validação analítica de esboços, precisão de fillets e persistência topológica.",
    tone: "alpha",
    group: "alpha",
    kind: "rollup",
  },
  {
    id: "comp",
    code: "M7–M14",
    name: "Consolidado Complementares",
    percent: 57.4,
    delta: 2.1,
    hours: 100,
    status: "Expansão pós-alpha",
    tag: "EXPANSÃO PÓS-ALPHA",
    note: "Avanços em roscas M3–M20, propriedades de massa/inércia, DXF e lógica condicional.",
    tone: "comp",
    group: "comp",
    kind: "rollup",
  },
  {
    id: "m1",
    code: "M1",
    name: "Sketch Depth",
    percent: 92,
    delta: 2,
    hours: 4,
    status: "Estabilização → Validação",
    note: "Perfis livres B-spline/NURBS de qualquer grau e rejeição atômica de autointerseção.",
    tone: "m1",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m14",
    code: "M14",
    name: "Configurações",
    percent: 88.6,
    delta: 2.6,
    hours: 4,
    status: "Reta final",
    note: "Lógica condicional estruturada (All/Any/Not) ativando aparências e supressões sem corrupção.",
    tone: "m14",
    group: "comp",
    kind: "module",
  },
  {
    id: "m4",
    code: "M4",
    name: "Importação / Formatos",
    percent: 85,
    delta: 2,
    hours: 6,
    status: "Reta final",
    note: "Importação de sólidos FreeCAD/Rhino e exportação de montagens planificadas com cores.",
    tone: "m4",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m6",
    code: "M6",
    name: "Profundidade de UI",
    percent: 85,
    delta: 2,
    hours: 6,
    status: "Reta final",
    note: "Edição de textos em esboço com recálculo instantâneo e ancoragem fixa de eixos.",
    tone: "m6",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m2",
    code: "M2",
    name: "Modelagem Robusta",
    percent: 68,
    delta: 2,
    hours: 16,
    status: "Em andamento",
    note: "Contenção de cavidades internas fechadas e preservação de nervuras finas em cortes axiais.",
    tone: "m2",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m7",
    code: "M7",
    name: "Operações Avançadas",
    percent: 65.7,
    delta: 2.7,
    hours: 12,
    status: "Em andamento",
    note: "Roscas cosméticas métricas M3–M20 e isolamento de cilindros únicos para emboss.",
    tone: "m7",
    group: "comp",
    kind: "module",
  },
  {
    id: "m12",
    code: "M12",
    name: "Empacotamento / Release",
    percent: 60,
    delta: 2,
    hours: 16,
    status: "Em andamento",
    note: "Testes contínuos em ambientes headless e validação Linux (Nix/Flatpak) e Windows.",
    tone: "m12",
    group: "comp",
    kind: "module",
  },
  {
    id: "m5",
    code: "M5",
    name: "Nomenclatura Persistente",
    percent: 55.6,
    delta: 2.6,
    hours: 20,
    status: "Em andamento",
    note: "Extensão das tabelas históricas do kernel para faces internas de cascas (shell) e varreduras.",
    tone: "m5",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m3",
    code: "M3",
    name: "Fillets e Chanfros",
    percent: 50,
    delta: 2,
    hours: 30,
    status: "Caminho crítico",
    note: "Erro analítico < 0,0001 mm em cilindros em T e remendos suaves em vértices de 3 arestas.",
    tone: "m3",
    group: "alpha",
    kind: "module",
  },
  {
    id: "m9",
    code: "M9",
    name: "Montagens & Juntas",
    percent: 46.7,
    delta: 2.7,
    hours: 32,
    status: "Em andamento",
    note: "Cálculo analítico de massa/inércia com instâncias repetidas e exportação JSON/CSV.",
    tone: "m9",
    group: "comp",
    kind: "module",
  },
  {
    id: "m10",
    code: "M10",
    name: "Chapas e Plásticos",
    percent: 44.6,
    delta: 2.6,
    hours: 36,
    status: "Em andamento",
    note: "Furos e ilhas idênticas entre visualização desdobrada e DXF, com alívio de canto parametrizado.",
    tone: "m10",
    group: "comp",
    kind: "module",
  },
];

export const REPORTS: Report[] = [
  {
    id: "2026-10-30",
    tabIndex: "ABA 01",
    tabLabel: "RELATÓRIO — 30 DE OUTUBRO DE 2026",
    title: "RELATÓRIO DE ACOMPANHAMENTO SEMANAL — SOLIDCRAFT (30 DE OUTUBRO DE 2026)",
    subtitle:
      "Ciclo 23/10 vs. 30/10/2026 • Estágio: Early Alpha (Linha Estável 0.2.1 / Formato solidcraft/13) • Saldo Alpha Útil (M0–M6): 82h | Saldo Global (M0–M14): 182h",
    nextCheck: "06/11/2026 · 14H",
    global: {
      percent: 62.8,
      caption:
        "62,8% concluído (326,5h equivalentes concluídas / 520h totais estimadas — 182h nominais restantes em validação e implementação).",
    },
    alpha: {
      percent: 69.1,
      caption:
        "69,1% concluído (82h de agente restantes, sendo 50h concentradas em M3 e M5, o que representa 60,98% de todo o esforço pendente para o Alpha Útil).",
    },
    kpis: [
      {
        id: "k1",
        label: "KPI 01 — PROGRESSO GERAL (M0–M14)",
        value: "62,8%",
        detail: "182h totais restantes em 11 módulos",
      },
      {
        id: "k2",
        label: "KPI 02 — PROGRESSO ALPHA ÚTIL (M0–M6)",
        value: "69,1%",
        detail: "82h de agente restantes para fecho do Alpha",
      },
      {
        id: "k3",
        label: "KPI 03 — PESO DO CAMINHO CRÍTICO (M3 + M5)",
        value: "61,0%",
        detail: "50h de 82h do Alpha concentradas em Fillets e Topologia",
      },
      {
        id: "k4",
        label: "KPI 04 — METAS EM RETA FINAL (M1, M4, M6, M14)",
        value: "83% a 90%",
        detail: "Apenas 20h somadas restantes nos 4 módulos mais maduros",
      },
    ],
    analysisKicker: "BLOCO A — ANÁLISE TÉCNICA DO GRAU DE DESENVOLVIMENTO EM 30/10/2026",
    analysisIntro:
      "Na medição de 30 de outubro de 2026, o aplicativo SolidCraft atinge 62,8% de desenvolvimento global (e 69,1% de conclusão no recorte prioritário do Alpha Útil M0–M6). A distribuição do esforço revela três patamares claros de maturidade:",
    tiers: [
      {
        heading: "1. Módulos em Fase de Fechamento e Estabilização (83,0% a 90,0% concluídos)",
        body: "O núcleo construtivo de esboço M1 (90,0%, 4h restantes) já ingressou em estabilização após avançar da reta final, acompanhado pelo sistema de configurações M14 (86,0%, 4h restantes), importação STEP multithread M4 (83,0%, 6h restantes) e interface M6 (83,0%, 6h restantes). Juntos, esses quatro módulos somam apenas 20 horas pendentes.",
      },
      {
        heading: "2. Módulos de Maturidade Intermediária (53,0% a 66,0% concluídos)",
        body: "A modelagem booleana robusta M2 (66,0%, 16h restantes), as operações avançadas de paredes finas e relevos M7 (63,0%, 12h restantes), o pipeline de empacotamento/CI M12 (58,0%, 16h restantes) e a nomenclatura persistente M5 (53,0%, 20h restantes) possuem arquitetura estabilizada e testes automatizados ativos (cargo xtask ci), dependendo da resolução de casos de borda topológicos.",
      },
      {
        heading: "3. Gargalos de Caminho Crítico e Expansão Pós-Alpha (42,0% a 48,0% concluídos)",
        body: "O marco M3: Fillets e Chanfros (48,0%, 30h restantes) constitui o principal gargalo técnico do Alpha Útil devido à complexidade matemática dos arredondamentos G2 e cantos Gregory. Fora do escopo do Alpha inicial, M9: Montagens & Juntas (44,0%, 32h restantes) e M10: Chapas e Plásticos (42,0%, 36h restantes) detêm a maior carga horária residual (68h somadas), refletindo o escopo denso de cinemática de laços fechados e desdobramento DXF.",
      },
    ],
    transcriptKicker:
      "BLOCO B — TRANSCRIÇÃO LITERAL E INTEGRAL DO RELATÓRIO DE 30 DE OUTUBRO DE 2026",
    transcriptIntro:
      "Aqui está a atualização semanal de acompanhamento do SolidCraft referente ao ciclo de 30 de outubro de 2026:",
    statusHeading: "1. Status Geral do Alpha Útil (M0–M6) e Marcos Complementares",
    statusLead:
      "O projeto permanece classificado em Early Alpha, mantendo o foco central na estabilização dos blocos fundamentais que compõem o Alpha Útil (M0 a M6), cujo saldo de trabalho estimado totaliza 82 horas de agente.",
    statusBullets: [
      {
        lead: "Núcleo de esboço e modelagem (M1 e M2)",
        text: "O solver construtivo 2D/3D (M1) e as rotinas de booleanas coplanares (M2) mantêm-se como a base mais avançada do sistema, restando apenas o saneamento de junções de offset mistas e tratamentos de roscas modeladas.",
      },
      {
        lead: "Superfícies de transição e topologia (M3 e M5)",
        text: "Continuam representando mais de 60% do esforço pendente para o Alpha útil (50h somadas), com atenção voltada à robustez de arredondamentos G2 e à consistência dos certificados de nomeação persistente (FaceSource) ao longo de operações complexas.",
      },
      {
        lead: "Formatos e interface (M4 e M6)",
        text: "Estão praticamente consolidados em sua primeira iteração funcional (6h restantes cada), sustentados pelo importador STEP multithread e pela timeline interativa com validação de dependências.",
      },
      {
        lead: "Módulos complementares (M7, M9, M10, M12 e M14)",
        text: "Registram arquitetura bem delimitada. O módulo de chapas e gabinetes plásticos (M10, 36h) e o de montagens cinemáticas (M9, 32h) concentram o maior volume de escopo fora do Alpha inicial, enquanto o sistema de configurações (M14, 4h) está pronto para fechamento.",
      },
    ],
    tableHeading: "2. Tabela de Avanços e Comparativo Semanal (23/10 vs. 30/10)",
    tableRows: [
      {
        module: "M1: Sketch Depth",
        state: "Reta final → Estabilização",
        hours: "4h",
        delivery:
          "Validação contínua do solver construtivo (Owen/Fudos-Hoffmann) e isolamento dos casos de borda em junções de offset com splines naturais legadas.",
      },
      {
        module: "M2: Modelagem Robusta",
        state: "Em andamento",
        hours: "16h",
        delivery:
          "Manutenção das verificações geométricas de booleanas coplanares e furos em faces/pontos com classificação de volume interno em tolerância estrita.",
      },
      {
        module: "M3: Fillets e Chanfros",
        state: "Em andamento (Caminho crítico)",
        hours: "30h",
        delivery:
          "Refinamento dos testes de precisão analítica em esferas rolantes (rolling-ball) em junções T e proteção de arestas finas em bordas adjacentes (#2498).",
      },
      {
        module: "M4: Importação / Formatos",
        state: "Reta final",
        hours: "6h",
        delivery:
          "Consolidação do leitor B-rep nativo para STEP e suporte estruturado a contêineres binários (#303) para desacoplamento de malhas e imagens raw.",
      },
      {
        module: "M5: Nomenclatura Persistente",
        state: "Em andamento",
        hours: "20h",
        delivery:
          "Validação dos certificados históricos em extrusão, revolução e casca; mapeamento de regras de linhagem para recursos de conformação de chapa.",
      },
      {
        module: "M6: Profundidade de UI",
        state: "Reta final",
        hours: "6h",
        delivery:
          "Preservação dos manipuladores contextuais de arrasto (drag manipulators), atalhos de dimensão em tela (inline) e paleta responsiva da timeline.",
      },
      {
        module: "M7: Operações Avançadas",
        state: "Em andamento",
        hours: "12h",
        delivery:
          "Estabilidade em extrusões de paredes finas (#721) e cálculo de relevos radiais (emboss) em superfícies cilíndricas completas.",
      },
      {
        module: "M9: Montagens & Juntas",
        state: "Em andamento",
        hours: "32h",
        delivery:
          "Verificação de laços cinemáticos fechados (quatro barras, biela-manivela) e testes da parada dinâmica de estudos de movimento via Contact Sets.",
      },
      {
        module: "M10: Chapas e Plásticos",
        state: "Em andamento",
        hours: "36h",
        delivery:
          "Coerência de recortes desdobrados em DXF e confirmação das regras geométricas parametrizadas de nervuras (rib/web) e travas (snap-fit).",
      },
      {
        module: "M12: Empacotamento / Release",
        state: "Em andamento",
        hours: "16h",
        delivery:
          "Pipelines de CI verdes (cargo xtask ci cobrindo formatação, clippy, testes unitários, camadas de arquitetura e compilação wasm32).",
      },
      {
        module: "M14: Configurações",
        state: "Reta final",
        hours: "4h",
        delivery:
          "Testes de consistência na alternância atômica de linhas de configuração de materiais/supressões via config.activate.",
      },
    ],
    stabilityHeading: "3. Estabilidade, Versões e Correções Críticas",
    stabilityBullets: [
      {
        lead: "Linha estável 0.2.1",
        text: "Permanece como a referência em produção, com o formato de arquivo solidcraft/13 garantindo o vínculo permanente entre esboços e paredes de casca (shell) após modificações paramétricas.",
      },
      {
        lead: "Qualidade de código e barreira de CI",
        text: "O conjunto de testes automatizados (cargo xtask ci) mantém aprovação total nas compilações nativas e WebAssembly, incluindo os testes de referência analítica contra o FreeCAD (tests/oracle/) e fuzzing contra pânico de comandos.",
      },
      {
        lead: "Performance de abertura",
        text: "O modelo de contêineres de dados e o cache B-rep aquecido com cache: true continuam assegurando a mitigação de custos de reconstrução a frio em montagens densas.",
      },
    ],
    challengesHeading: "4. Desafios Técnicos Identificados",
    challengeBullets: [
      {
        lead: "Arredondamentos G2 de curvatura contínua",
        text: "A cobertura do kernel para superfícies quínticas exatas continua restrita a arestas retas entre planos perpendiculares; a transição entre múltiplas faces de terminação e cantos Gregory segue demandando esforço concentrado em M3.",
      },
      {
        lead: "Linhas de costura em cilindros cruzados",
        text: "Intersecções perpendiculares entre cilindros idênticos permanecem dependentes da técnica de divisão prévia de faces antes da aplicação booleana para prevenir falhas topológicas.",
      },
      {
        lead: "Propagação de nomes em deformações livres",
        text: "A geração de certificados históricos imutáveis (FaceSource) para operações de conformação e superfícies orgânicas ainda exige validação rigorosa para evitar regressões em árvores paramétricas longas.",
      },
    ],
    focusHeading: "5. Foco para o Próximo Ciclo",
    focusBullets: [
      {
        text: "Encerrar as pendências de M1 relativas a junções mistas de offset e arames 3D com perda de proveniência de coordenadas.",
      },
      {
        text: "Consolidar os testes de limite no kernel para cantos de arredondamento esféricos e toroidais em M3.",
      },
      {
        text: "Integrar as regras de nomenclatura persistente (M5) às operações preliminares de sheet metal e montagens. A próxima verificação semanal está agendada para sexta-feira, 6 de novembro de 2026, por volta das 14h.",
      },
    ],
    milestones: octMilestones,
  },
  {
    id: "2026-11-06",
    tabIndex: "ABA 02",
    tabLabel: "RELATÓRIO — 06 DE NOVEMBRO DE 2026",
    title: "RELATÓRIO DE MONITORAMENTO SEMANAL — SOLIDCRAFT (06 DE NOVEMBRO DE 2026)",
    subtitle:
      "Ciclo 30/10 vs. 06/11/2026 • Estágio: Early Alpha (Formato solidcraft/13 / Anti-aliasing 1x OpenGL) • Saldo Alpha Útil (M0–M6): 82h | Saldo Global (M0–M14): 182h",
    nextCheck: "13/11/2026 · 14H",
    global: {
      percent: 65,
      delta: 2.2,
      caption:
        "65,0% concluído (+2,2 pontos percentuais de avanço em maturidade e validação em relação a 30/10; 338h concluídas / 520h totais estimadas, mantendo 182h nominais restantes para fechamento de casos de borda).",
    },
    alpha: {
      percent: 71.2,
      delta: 2.1,
      caption:
        "71,2% concluído (+2,1 pontos percentuais de avanço na cobertura de validação; 203h concluídas / 285h estimadas, restando 82h de agente).",
    },
    kpis: [
      {
        id: "k1",
        label: "KPI 01 — PROGRESSO GERAL (M0–M14)",
        value: "65,0%",
        detail: "Avanço de +2,2% em entregas validadas; 182h restantes",
      },
      {
        id: "k2",
        label: "KPI 02 — PROGRESSO ALPHA ÚTIL (M0–M6)",
        value: "71,2%",
        detail: "Avanço de +2,1% em robustez analítica; 82h restantes",
      },
      {
        id: "k3",
        label: "KPI 03 — PRECISÃO ANALÍTICA EM M3",
        value: "< 0,0001 mm",
        detail: "Erro máximo verificado em cilindros de teste em T e vértices de 3 arestas",
      },
      {
        id: "k4",
        label: "KPI 04 — TELEMETRIA E CRASH REPLAY",
        value: "20 logs / 50 MB",
        detail: "Teto de retenção local via solidcraft-cli crashes replay <id>",
      },
    ],
    analysisKicker: "BLOCO A — ANÁLISE TÉCNICA DO GRAU DE DESENVOLVIMENTO EM 06/11/2026",
    analysisIntro:
      "No ciclo de 6 de novembro de 2026, o SolidCraft alcança 65,0% de desenvolvimento global e 71,2% de maturação no Alpha Útil (M0–M6). Apesar de o orçamento de horas pendentes permanecer ancorado em 82h para o Alpha Útil (e 182h totais), houve evolução substancial na qualidade e na cobertura funcional de todas as metas:",
    tiers: [
      {
        heading: "1. Avanço de Estágio e Consolidação de Topo (85,0% a 92,0% concluídos)",
        body: "O marco M1: Sketch Depth (92,0%, 4h restantes) progrediu oficialmente do estágio de Estabilização para Validação, suportando curvas B-spline/NURBS de qualquer grau e rejeição atômica de autointerseções. O módulo M14: Configurações (88,6%, 4h restantes) consolidou regras condicionais complexas (All/Any/Not), enquanto M4 (85,0%, 6h restantes) e M6 (85,0%, 6h restantes) entregaram interoperabilidade com sólidos FreeCAD/Rhino e recálculo dimensional instantâneo de textos em esboço.",
      },
      {
        heading: "2. Evolução na Camada Intermediária (55,6% a 68,0% concluídos)",
        body: "M2: Modelagem Robusta (68,0%, 16h restantes) blindou cavidades internas fechadas e nervuras finas em cortes axiais; M7: Operações Avançadas (65,7%, 12h restantes) finalizou a conformidade de roscas cosméticas métricas M3–M20; M12: Empacotamento / Release (60,0%, 16h restantes) validou executáveis em ambientes headless, Linux (Nix/Flatpak) e Windows; e M5: Nomenclatura Persistente (55,6%, 20h restantes) estendeu tabelas históricas para faces internas de cascas (shell) e varreduras.",
      },
      {
        heading: "3. Progresso Analítico no Caminho Crítico e Pós-Alpha (44,6% a 50,0% concluídos)",
        body: "M3: Fillets e Chanfros (50,0%, 30h restantes) atingiu metade do seu escopo total ao comprovar precisão analítica com erro inferior a 0,0001mm em cilindros em T e aplicar remendos suaves em vértices de três arestas, restando a formulação de cantos Gregory. Nos módulos pós-Alpha, M9: Montagens & Juntas (46,7%, 32h restantes) passou a calcular analiticamente massa e inércia com exportação JSON/CSV (preparando integração URDF para robótica), e M10: Chapas e Plásticos (44,6%, 36h restantes) garantiu paridade geométrica exata entre a vista desdobrada e o DXF exportado.",
      },
    ],
    transcriptKicker:
      "BLOCO B — TRANSCRIÇÃO LITERAL E INTEGRAL DO RELATÓRIO DE 06 DE NOVEMBRO DE 2026",
    transcriptIntro:
      "Aqui está o relatório semanal de monitoramento do SolidCraft, referente ao ciclo de 6 de novembro de 2026:",
    statusHeading: "1. Panorama Geral do Alpha Útil (M0–M6) e Módulos Complementares",
    statusLead:
      "O projeto segue no estágio Early Alpha, mantendo o saldo estimado de 82 horas de agente para a conclusão do conjunto de marcos fundamentais (M0 a M6):",
    statusBullets: [
      {
        lead: "Módulo de Esboço e Robustez (M1 e M2)",
        text: "O solver construtivo 2D/3D (M1, 4h restantes) e as operações booleanas coplanares (M2, 16h restantes) mantêm alto índice de cobertura de testes analíticos, com validação voltada a manter soluções de esboço estáveis durante operações de arrasto.",
      },
      {
        lead: "Superfícies de Concordância e Topologia (M3 e M5)",
        text: "Continuam sendo o núcleo mais denso do caminho crítico (30h em M3 e 20h em M5). O foco técnico está na convergência de malhas em superfícies seladas de esferas rolantes (rolling-ball) e na preservação de nomes históricos (FaceSource) após desdobramentos ou alívios de canto.",
      },
      {
        lead: "Formatos, UI e Configurações (M4, M6 e M14)",
        text: "Permitem navegação estável e importações rápidas via STEP multithread, com a interface consolidando manipuladores em tela e painéis acopláveis à direita (6h restantes em M4 e M6; 4h em M14).",
      },
      {
        lead: "Montagens e Peças Conformadas (M9 e M10)",
        text: "Estruturam a transição pós-Alpha com montagens cinemáticas (M9, 32h) e regras de conformação de chapas com gabinetes plásticos (M10, 36h).",
      },
    ],
    tableHeading: "2. Quadro de Avanços e Comparativo Semanal (30/10 vs. 06/11)",
    tableRows: [
      {
        module: "M1: Sketch Depth",
        state: "Estabilização → Validação",
        hours: "4h",
        delivery:
          "Testes de robustez em perfis livres exatos (curvas B-spline/NURBS de qualquer grau) e rejeição atômica de curvas com autointerseção.",
      },
      {
        module: "M2: Modelagem Robusta",
        state: "Em andamento",
        hours: "16h",
        delivery:
          "Reforço nas verificações de contenção de cavidades internas fechadas e prevenção de perda de nervuras finas em cortes axiais sobrepostos.",
      },
      {
        module: "M3: Fillets e Chanfros",
        state: "Caminho crítico",
        hours: "30h",
        delivery:
          "Verificação analítica com erro inferior a 0,0001 mm em cilindros de teste em T e aplicação de remendos suaves em vértices de três arestas.",
      },
      {
        module: "M4: Importação / Formatos",
        state: "Reta final",
        hours: "6h",
        delivery:
          "Validação de importação de sólidos FreeCAD/Rhino via utilitário integrado e exportação de montagens planificadas com preservação de cores.",
      },
      {
        module: "M5: Nomenclatura Persistente",
        state: "Em andamento",
        hours: "20h",
        delivery:
          "Extensão das tabelas históricas do kernel para suportar identificação consistente de faces internas geradas por cascas (shell) e varreduras.",
      },
      {
        module: "M6: Profundidade de UI",
        state: "Reta final",
        hours: "6h",
        delivery:
          "Estabilidade na edição de textos em esboço com recálculo dimensional instantâneo e ancoragem fixa dos eixos durante redimensionamento de janela.",
      },
      {
        module: "M7: Operações Avançadas",
        state: "Em andamento",
        hours: "12h",
        delivery:
          "Conformidade de roscas cosméticas métricas M3–M20 e isolamento de alvos cilíndricos únicos para recursos automáticos de relevo (emboss).",
      },
      {
        module: "M9: Montagens & Juntas",
        state: "Em andamento",
        hours: "32h",
        delivery:
          "Cálculo analítico de propriedades físicas (massa e inércia) respeitando instâncias repetidas e exportação de posicionamento de juntas para JSON/CSV.",
      },
      {
        module: "M10: Chapas e Plásticos",
        state: "Em andamento",
        hours: "36h",
        delivery:
          "Manutenção de furos e ilhas de material idênticas entre a visualização desdobrada e o DXF exportado, com regras de alívio de canto parametrizadas.",
      },
      {
        module: "M12: Empacotamento / Release",
        state: "Em andamento",
        hours: "16h",
        delivery:
          "Testes contínuos em ambientes headless e validação de inicialização do executável em distribuições Linux (Nix/Flatpak) e Windows.",
      },
      {
        module: "M14: Configurações",
        state: "Reta final",
        hours: "4h",
        delivery:
          "Regras estruturadas com lógica condicional (All/Any/Not) ativando alternâncias de aparência e supressões de recursos sem corrupção do documento.",
      },
    ],
    stabilityHeading: "3. Estabilidade, Versões e Correções Críticas",
    stabilityBullets: [
      {
        lead: "Estabilidade do formato 13",
        text: "O formato de gravação solidcraft/13 continua provando robustez na preservação de vínculos entre esboços e paredes de cascas, sem ocorrência de quebras em recarregamentos a frio (cold reopen).",
      },
      {
        lead: "Relatórios locais de falhas",
        text: "O mecanismo de journalização de comandos garante que pânicos ou saídas não limpas gerem relatórios locais rastreáveis (solidcraft-cli crashes replay <id>) sem retenção indefinida de espaço em disco (teto de 20 relatórios ou 50 MB).",
      },
      {
        lead: "Integridade gráfica",
        text: "A clampagem de anti-aliasing em 1x no backend OpenGL segue prevenindo renderização de quadros pretos durante transições de viewport.",
      },
    ],
    challengesHeading: "4. Desafios Técnicos Mapeados",
    challengeBullets: [
      {
        lead: "Cantos de transição Gregory",
        text: "A costura de concordâncias G1/G2 em arestas de superfícies que convergem em um único vértice ainda aguarda formulação do remendo de canto do tipo Gregory no kernel.",
      },
      {
        lead: "Cilindros com eixos cruzados",
        text: "Booleans envolvendo furos perpendiculares de mesmo diâmetro mantêm a dependência da divisão geométrica prévia das faces cilíndricas ao longo da linha de contato para viabilizar a costura.",
      },
      {
        lead: "Validação de juntas com caminhos complexos",
        text: "A condução cinemática contínua de cames e montagens com laços fechados exige amostragem geométrica densa para garantir que os corpos não atravessem limites de contato (Contact Sets).",
      },
    ],
    focusHeading: "5. Foco para o Próximo Ciclo",
    focusBullets: [
      {
        text: "Finalizar o fechamento dos casos de borda em M1 (arames 3D com histórico de coordenadas herdado).",
      },
      {
        text: "Avançar na generalização dos remendos de canto esféricos em M3 para arestas não perpendiculares.",
      },
      {
        text: "Integrar as saídas de montagem (M9) com a árvore de componentes para suporte completo à exportação URDF para robótica. O próximo relatório semanal está programado para sexta-feira, 13 de novembro de 2026, por volta das 14h.",
      },
    ],
    milestones: novMilestones,
  },
];

export const SECTION_FILTERS = [
  { id: "todos", label: "TODOS OS TÓPICOS" },
  { id: "analise", label: "01 ANÁLISE DE GRAU" },
  { id: "status", label: "02 STATUS GERAL" },
  { id: "tabela", label: "03 TABELA SEMANAL" },
  { id: "estabilidade", label: "04 ESTABILIDADE & CI" },
  { id: "desafios", label: "05 DESAFIOS TÉCNICOS" },
  { id: "foco", label: "06 PRÓXIMO CICLO" },
] as const;

export type SectionId = (typeof SECTION_FILTERS)[number]["id"];

export const MILE_FILTERS = [
  { id: "all", label: "TODAS AS METAS" },
  { id: "alpha", label: "ALPHA ÚTIL (M0–M6)" },
  { id: "comp", label: "COMPLEMENTARES (M7–M14)" },
] as const;

export type MileFilter = (typeof MILE_FILTERS)[number]["id"];
