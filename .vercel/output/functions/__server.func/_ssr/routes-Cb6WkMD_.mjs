import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cb6WkMD_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var METHODOLOGY = "O progresso percentual do SolidCraft é calculado combinando o saldo de horas de agente restantes (82h para o Alpha Útil M0–M6 e 100h para os Módulos Complementares M7, M9, M10, M12 e M14, totalizando 182h pendentes em relação ao escopo base de 520h totais do ciclo atual, sendo 285h do Alpha Útil e 235h dos módulos complementares) com o grau de maturidade e transição de estágio de cada marco entre os dois ciclos semanais. Embora o saldo nominal de horas em aberto tenha permanecido fixado em 82h (Alpha Útil) e 182h (Escopo Global) entre 30/10 e 06/11 devido à absorção contínua de testes de borda e validação analítica na barreira de CI, a evolução qualitativa das entregas (como a passagem de M1 de Estabilização para Validação e a precisão de <0,0001mm em M3) elevou o Progresso Geral do Aplicativo de 62,8% (30/10) para 65,0% (06/11) no escopo completo, e de 69,1% (30/10) para 71,2% (06/11) no recorte do Alpha Útil (M0–M6).";
var META = [
	{
		label: "BUILD",
		value: "0.2.1"
	},
	{
		label: "FORMATO",
		value: "SOLIDCRAFT/13"
	},
	{
		label: "CI",
		value: "CARGO XTASK CI (WASM32 + NATIVO)"
	},
	{
		label: "SALDO ALPHA (M0–M6)",
		value: "82H"
	},
	{
		label: "SALDO TOTAL (M0–M14)",
		value: "182H"
	},
	{
		label: "CICLOS",
		value: "30/10/2026 & 06/11/2026"
	}
];
var REPORTS = [{
	id: "2026-10-30",
	tabIndex: "ABA 01",
	tabLabel: "RELATÓRIO — 30 DE OUTUBRO DE 2026",
	title: "RELATÓRIO DE ACOMPANHAMENTO SEMANAL — SOLIDCRAFT (30 DE OUTUBRO DE 2026)",
	subtitle: "Ciclo 23/10 vs. 30/10/2026 • Estágio: Early Alpha (Linha Estável 0.2.1 / Formato solidcraft/13) • Saldo Alpha Útil (M0–M6): 82h | Saldo Global (M0–M14): 182h",
	nextCheck: "06/11/2026 · 14H",
	global: {
		percent: 62.8,
		caption: "62,8% concluído (326,5h equivalentes concluídas / 520h totais estimadas — 182h nominais restantes em validação e implementação)."
	},
	alpha: {
		percent: 69.1,
		caption: "69,1% concluído (82h de agente restantes, sendo 50h concentradas em M3 e M5, o que representa 60,98% de todo o esforço pendente para o Alpha Útil)."
	},
	kpis: [
		{
			id: "k1",
			label: "KPI 01 — PROGRESSO GERAL (M0–M14)",
			value: "62,8%",
			detail: "182h totais restantes em 11 módulos"
		},
		{
			id: "k2",
			label: "KPI 02 — PROGRESSO ALPHA ÚTIL (M0–M6)",
			value: "69,1%",
			detail: "82h de agente restantes para fecho do Alpha"
		},
		{
			id: "k3",
			label: "KPI 03 — PESO DO CAMINHO CRÍTICO (M3 + M5)",
			value: "61,0%",
			detail: "50h de 82h do Alpha concentradas em Fillets e Topologia"
		},
		{
			id: "k4",
			label: "KPI 04 — METAS EM RETA FINAL (M1, M4, M6, M14)",
			value: "83% a 90%",
			detail: "Apenas 20h somadas restantes nos 4 módulos mais maduros"
		}
	],
	analysisKicker: "BLOCO A — ANÁLISE TÉCNICA DO GRAU DE DESENVOLVIMENTO EM 30/10/2026",
	analysisIntro: "Na medição de 30 de outubro de 2026, o aplicativo SolidCraft atinge 62,8% de desenvolvimento global (e 69,1% de conclusão no recorte prioritário do Alpha Útil M0–M6). A distribuição do esforço revela três patamares claros de maturidade:",
	tiers: [
		{
			heading: "1. Módulos em Fase de Fechamento e Estabilização (83,0% a 90,0% concluídos)",
			body: "O núcleo construtivo de esboço M1 (90,0%, 4h restantes) já ingressou em estabilização após avançar da reta final, acompanhado pelo sistema de configurações M14 (86,0%, 4h restantes), importação STEP multithread M4 (83,0%, 6h restantes) e interface M6 (83,0%, 6h restantes). Juntos, esses quatro módulos somam apenas 20 horas pendentes."
		},
		{
			heading: "2. Módulos de Maturidade Intermediária (53,0% a 66,0% concluídos)",
			body: "A modelagem booleana robusta M2 (66,0%, 16h restantes), as operações avançadas de paredes finas e relevos M7 (63,0%, 12h restantes), o pipeline de empacotamento/CI M12 (58,0%, 16h restantes) e a nomenclatura persistente M5 (53,0%, 20h restantes) possuem arquitetura estabilizada e testes automatizados ativos (cargo xtask ci), dependendo da resolução de casos de borda topológicos."
		},
		{
			heading: "3. Gargalos de Caminho Crítico e Expansão Pós-Alpha (42,0% a 48,0% concluídos)",
			body: "O marco M3: Fillets e Chanfros (48,0%, 30h restantes) constitui o principal gargalo técnico do Alpha Útil devido à complexidade matemática dos arredondamentos G2 e cantos Gregory. Fora do escopo do Alpha inicial, M9: Montagens & Juntas (44,0%, 32h restantes) e M10: Chapas e Plásticos (42,0%, 36h restantes) detêm a maior carga horária residual (68h somadas), refletindo o escopo denso de cinemática de laços fechados e desdobramento DXF."
		}
	],
	transcriptKicker: "BLOCO B — TRANSCRIÇÃO LITERAL E INTEGRAL DO RELATÓRIO DE 30 DE OUTUBRO DE 2026",
	transcriptIntro: "Aqui está a atualização semanal de acompanhamento do SolidCraft referente ao ciclo de 30 de outubro de 2026:",
	statusHeading: "1. Status Geral do Alpha Útil (M0–M6) e Marcos Complementares",
	statusLead: "O projeto permanece classificado em Early Alpha, mantendo o foco central na estabilização dos blocos fundamentais que compõem o Alpha Útil (M0 a M6), cujo saldo de trabalho estimado totaliza 82 horas de agente.",
	statusBullets: [
		{
			lead: "Núcleo de esboço e modelagem (M1 e M2)",
			text: "O solver construtivo 2D/3D (M1) e as rotinas de booleanas coplanares (M2) mantêm-se como a base mais avançada do sistema, restando apenas o saneamento de junções de offset mistas e tratamentos de roscas modeladas."
		},
		{
			lead: "Superfícies de transição e topologia (M3 e M5)",
			text: "Continuam representando mais de 60% do esforço pendente para o Alpha útil (50h somadas), com atenção voltada à robustez de arredondamentos G2 e à consistência dos certificados de nomeação persistente (FaceSource) ao longo de operações complexas."
		},
		{
			lead: "Formatos e interface (M4 e M6)",
			text: "Estão praticamente consolidados em sua primeira iteração funcional (6h restantes cada), sustentados pelo importador STEP multithread e pela timeline interativa com validação de dependências."
		},
		{
			lead: "Módulos complementares (M7, M9, M10, M12 e M14)",
			text: "Registram arquitetura bem delimitada. O módulo de chapas e gabinetes plásticos (M10, 36h) e o de montagens cinemáticas (M9, 32h) concentram o maior volume de escopo fora do Alpha inicial, enquanto o sistema de configurações (M14, 4h) está pronto para fechamento."
		}
	],
	tableHeading: "2. Tabela de Avanços e Comparativo Semanal (23/10 vs. 30/10)",
	tableRows: [
		{
			module: "M1: Sketch Depth",
			state: "Reta final → Estabilização",
			hours: "4h",
			delivery: "Validação contínua do solver construtivo (Owen/Fudos-Hoffmann) e isolamento dos casos de borda em junções de offset com splines naturais legadas."
		},
		{
			module: "M2: Modelagem Robusta",
			state: "Em andamento",
			hours: "16h",
			delivery: "Manutenção das verificações geométricas de booleanas coplanares e furos em faces/pontos com classificação de volume interno em tolerância estrita."
		},
		{
			module: "M3: Fillets e Chanfros",
			state: "Em andamento (Caminho crítico)",
			hours: "30h",
			delivery: "Refinamento dos testes de precisão analítica em esferas rolantes (rolling-ball) em junções T e proteção de arestas finas em bordas adjacentes (#2498)."
		},
		{
			module: "M4: Importação / Formatos",
			state: "Reta final",
			hours: "6h",
			delivery: "Consolidação do leitor B-rep nativo para STEP e suporte estruturado a contêineres binários (#303) para desacoplamento de malhas e imagens raw."
		},
		{
			module: "M5: Nomenclatura Persistente",
			state: "Em andamento",
			hours: "20h",
			delivery: "Validação dos certificados históricos em extrusão, revolução e casca; mapeamento de regras de linhagem para recursos de conformação de chapa."
		},
		{
			module: "M6: Profundidade de UI",
			state: "Reta final",
			hours: "6h",
			delivery: "Preservação dos manipuladores contextuais de arrasto (drag manipulators), atalhos de dimensão em tela (inline) e paleta responsiva da timeline."
		},
		{
			module: "M7: Operações Avançadas",
			state: "Em andamento",
			hours: "12h",
			delivery: "Estabilidade em extrusões de paredes finas (#721) e cálculo de relevos radiais (emboss) em superfícies cilíndricas completas."
		},
		{
			module: "M9: Montagens & Juntas",
			state: "Em andamento",
			hours: "32h",
			delivery: "Verificação de laços cinemáticos fechados (quatro barras, biela-manivela) e testes da parada dinâmica de estudos de movimento via Contact Sets."
		},
		{
			module: "M10: Chapas e Plásticos",
			state: "Em andamento",
			hours: "36h",
			delivery: "Coerência de recortes desdobrados em DXF e confirmação das regras geométricas parametrizadas de nervuras (rib/web) e travas (snap-fit)."
		},
		{
			module: "M12: Empacotamento / Release",
			state: "Em andamento",
			hours: "16h",
			delivery: "Pipelines de CI verdes (cargo xtask ci cobrindo formatação, clippy, testes unitários, camadas de arquitetura e compilação wasm32)."
		},
		{
			module: "M14: Configurações",
			state: "Reta final",
			hours: "4h",
			delivery: "Testes de consistência na alternância atômica de linhas de configuração de materiais/supressões via config.activate."
		}
	],
	stabilityHeading: "3. Estabilidade, Versões e Correções Críticas",
	stabilityBullets: [
		{
			lead: "Linha estável 0.2.1",
			text: "Permanece como a referência em produção, com o formato de arquivo solidcraft/13 garantindo o vínculo permanente entre esboços e paredes de casca (shell) após modificações paramétricas."
		},
		{
			lead: "Qualidade de código e barreira de CI",
			text: "O conjunto de testes automatizados (cargo xtask ci) mantém aprovação total nas compilações nativas e WebAssembly, incluindo os testes de referência analítica contra o FreeCAD (tests/oracle/) e fuzzing contra pânico de comandos."
		},
		{
			lead: "Performance de abertura",
			text: "O modelo de contêineres de dados e o cache B-rep aquecido com cache: true continuam assegurando a mitigação de custos de reconstrução a frio em montagens densas."
		}
	],
	challengesHeading: "4. Desafios Técnicos Identificados",
	challengeBullets: [
		{
			lead: "Arredondamentos G2 de curvatura contínua",
			text: "A cobertura do kernel para superfícies quínticas exatas continua restrita a arestas retas entre planos perpendiculares; a transição entre múltiplas faces de terminação e cantos Gregory segue demandando esforço concentrado em M3."
		},
		{
			lead: "Linhas de costura em cilindros cruzados",
			text: "Intersecções perpendiculares entre cilindros idênticos permanecem dependentes da técnica de divisão prévia de faces antes da aplicação booleana para prevenir falhas topológicas."
		},
		{
			lead: "Propagação de nomes em deformações livres",
			text: "A geração de certificados históricos imutáveis (FaceSource) para operações de conformação e superfícies orgânicas ainda exige validação rigorosa para evitar regressões em árvores paramétricas longas."
		}
	],
	focusHeading: "5. Foco para o Próximo Ciclo",
	focusBullets: [
		{ text: "Encerrar as pendências de M1 relativas a junções mistas de offset e arames 3D com perda de proveniência de coordenadas." },
		{ text: "Consolidar os testes de limite no kernel para cantos de arredondamento esféricos e toroidais em M3." },
		{ text: "Integrar as regras de nomenclatura persistente (M5) às operações preliminares de sheet metal e montagens. A próxima verificação semanal está agendada para sexta-feira, 6 de novembro de 2026, por volta das 14h." }
	],
	milestones: [
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
			kind: "rollup"
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
			kind: "rollup"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
		}
	]
}, {
	id: "2026-11-06",
	tabIndex: "ABA 02",
	tabLabel: "RELATÓRIO — 06 DE NOVEMBRO DE 2026",
	title: "RELATÓRIO DE MONITORAMENTO SEMANAL — SOLIDCRAFT (06 DE NOVEMBRO DE 2026)",
	subtitle: "Ciclo 30/10 vs. 06/11/2026 • Estágio: Early Alpha (Formato solidcraft/13 / Anti-aliasing 1x OpenGL) • Saldo Alpha Útil (M0–M6): 82h | Saldo Global (M0–M14): 182h",
	nextCheck: "13/11/2026 · 14H",
	global: {
		percent: 65,
		delta: 2.2,
		caption: "65,0% concluído (+2,2 pontos percentuais de avanço em maturidade e validação em relação a 30/10; 338h concluídas / 520h totais estimadas, mantendo 182h nominais restantes para fechamento de casos de borda)."
	},
	alpha: {
		percent: 71.2,
		delta: 2.1,
		caption: "71,2% concluído (+2,1 pontos percentuais de avanço na cobertura de validação; 203h concluídas / 285h estimadas, restando 82h de agente)."
	},
	kpis: [
		{
			id: "k1",
			label: "KPI 01 — PROGRESSO GERAL (M0–M14)",
			value: "65,0%",
			detail: "Avanço de +2,2% em entregas validadas; 182h restantes"
		},
		{
			id: "k2",
			label: "KPI 02 — PROGRESSO ALPHA ÚTIL (M0–M6)",
			value: "71,2%",
			detail: "Avanço de +2,1% em robustez analítica; 82h restantes"
		},
		{
			id: "k3",
			label: "KPI 03 — PRECISÃO ANALÍTICA EM M3",
			value: "< 0,0001 mm",
			detail: "Erro máximo verificado em cilindros de teste em T e vértices de 3 arestas"
		},
		{
			id: "k4",
			label: "KPI 04 — TELEMETRIA E CRASH REPLAY",
			value: "20 logs / 50 MB",
			detail: "Teto de retenção local via solidcraft-cli crashes replay <id>"
		}
	],
	analysisKicker: "BLOCO A — ANÁLISE TÉCNICA DO GRAU DE DESENVOLVIMENTO EM 06/11/2026",
	analysisIntro: "No ciclo de 6 de novembro de 2026, o SolidCraft alcança 65,0% de desenvolvimento global e 71,2% de maturação no Alpha Útil (M0–M6). Apesar de o orçamento de horas pendentes permanecer ancorado em 82h para o Alpha Útil (e 182h totais), houve evolução substancial na qualidade e na cobertura funcional de todas as metas:",
	tiers: [
		{
			heading: "1. Avanço de Estágio e Consolidação de Topo (85,0% a 92,0% concluídos)",
			body: "O marco M1: Sketch Depth (92,0%, 4h restantes) progrediu oficialmente do estágio de Estabilização para Validação, suportando curvas B-spline/NURBS de qualquer grau e rejeição atômica de autointerseções. O módulo M14: Configurações (88,6%, 4h restantes) consolidou regras condicionais complexas (All/Any/Not), enquanto M4 (85,0%, 6h restantes) e M6 (85,0%, 6h restantes) entregaram interoperabilidade com sólidos FreeCAD/Rhino e recálculo dimensional instantâneo de textos em esboço."
		},
		{
			heading: "2. Evolução na Camada Intermediária (55,6% a 68,0% concluídos)",
			body: "M2: Modelagem Robusta (68,0%, 16h restantes) blindou cavidades internas fechadas e nervuras finas em cortes axiais; M7: Operações Avançadas (65,7%, 12h restantes) finalizou a conformidade de roscas cosméticas métricas M3–M20; M12: Empacotamento / Release (60,0%, 16h restantes) validou executáveis em ambientes headless, Linux (Nix/Flatpak) e Windows; e M5: Nomenclatura Persistente (55,6%, 20h restantes) estendeu tabelas históricas para faces internas de cascas (shell) e varreduras."
		},
		{
			heading: "3. Progresso Analítico no Caminho Crítico e Pós-Alpha (44,6% a 50,0% concluídos)",
			body: "M3: Fillets e Chanfros (50,0%, 30h restantes) atingiu metade do seu escopo total ao comprovar precisão analítica com erro inferior a 0,0001mm em cilindros em T e aplicar remendos suaves em vértices de três arestas, restando a formulação de cantos Gregory. Nos módulos pós-Alpha, M9: Montagens & Juntas (46,7%, 32h restantes) passou a calcular analiticamente massa e inércia com exportação JSON/CSV (preparando integração URDF para robótica), e M10: Chapas e Plásticos (44,6%, 36h restantes) garantiu paridade geométrica exata entre a vista desdobrada e o DXF exportado."
		}
	],
	transcriptKicker: "BLOCO B — TRANSCRIÇÃO LITERAL E INTEGRAL DO RELATÓRIO DE 06 DE NOVEMBRO DE 2026",
	transcriptIntro: "Aqui está o relatório semanal de monitoramento do SolidCraft, referente ao ciclo de 6 de novembro de 2026:",
	statusHeading: "1. Panorama Geral do Alpha Útil (M0–M6) e Módulos Complementares",
	statusLead: "O projeto segue no estágio Early Alpha, mantendo o saldo estimado de 82 horas de agente para a conclusão do conjunto de marcos fundamentais (M0 a M6):",
	statusBullets: [
		{
			lead: "Módulo de Esboço e Robustez (M1 e M2)",
			text: "O solver construtivo 2D/3D (M1, 4h restantes) e as operações booleanas coplanares (M2, 16h restantes) mantêm alto índice de cobertura de testes analíticos, com validação voltada a manter soluções de esboço estáveis durante operações de arrasto."
		},
		{
			lead: "Superfícies de Concordância e Topologia (M3 e M5)",
			text: "Continuam sendo o núcleo mais denso do caminho crítico (30h em M3 e 20h em M5). O foco técnico está na convergência de malhas em superfícies seladas de esferas rolantes (rolling-ball) e na preservação de nomes históricos (FaceSource) após desdobramentos ou alívios de canto."
		},
		{
			lead: "Formatos, UI e Configurações (M4, M6 e M14)",
			text: "Permitem navegação estável e importações rápidas via STEP multithread, com a interface consolidando manipuladores em tela e painéis acopláveis à direita (6h restantes em M4 e M6; 4h em M14)."
		},
		{
			lead: "Montagens e Peças Conformadas (M9 e M10)",
			text: "Estruturam a transição pós-Alpha com montagens cinemáticas (M9, 32h) e regras de conformação de chapas com gabinetes plásticos (M10, 36h)."
		}
	],
	tableHeading: "2. Quadro de Avanços e Comparativo Semanal (30/10 vs. 06/11)",
	tableRows: [
		{
			module: "M1: Sketch Depth",
			state: "Estabilização → Validação",
			hours: "4h",
			delivery: "Testes de robustez em perfis livres exatos (curvas B-spline/NURBS de qualquer grau) e rejeição atômica de curvas com autointerseção."
		},
		{
			module: "M2: Modelagem Robusta",
			state: "Em andamento",
			hours: "16h",
			delivery: "Reforço nas verificações de contenção de cavidades internas fechadas e prevenção de perda de nervuras finas em cortes axiais sobrepostos."
		},
		{
			module: "M3: Fillets e Chanfros",
			state: "Caminho crítico",
			hours: "30h",
			delivery: "Verificação analítica com erro inferior a 0,0001 mm em cilindros de teste em T e aplicação de remendos suaves em vértices de três arestas."
		},
		{
			module: "M4: Importação / Formatos",
			state: "Reta final",
			hours: "6h",
			delivery: "Validação de importação de sólidos FreeCAD/Rhino via utilitário integrado e exportação de montagens planificadas com preservação de cores."
		},
		{
			module: "M5: Nomenclatura Persistente",
			state: "Em andamento",
			hours: "20h",
			delivery: "Extensão das tabelas históricas do kernel para suportar identificação consistente de faces internas geradas por cascas (shell) e varreduras."
		},
		{
			module: "M6: Profundidade de UI",
			state: "Reta final",
			hours: "6h",
			delivery: "Estabilidade na edição de textos em esboço com recálculo dimensional instantâneo e ancoragem fixa dos eixos durante redimensionamento de janela."
		},
		{
			module: "M7: Operações Avançadas",
			state: "Em andamento",
			hours: "12h",
			delivery: "Conformidade de roscas cosméticas métricas M3–M20 e isolamento de alvos cilíndricos únicos para recursos automáticos de relevo (emboss)."
		},
		{
			module: "M9: Montagens & Juntas",
			state: "Em andamento",
			hours: "32h",
			delivery: "Cálculo analítico de propriedades físicas (massa e inércia) respeitando instâncias repetidas e exportação de posicionamento de juntas para JSON/CSV."
		},
		{
			module: "M10: Chapas e Plásticos",
			state: "Em andamento",
			hours: "36h",
			delivery: "Manutenção de furos e ilhas de material idênticas entre a visualização desdobrada e o DXF exportado, com regras de alívio de canto parametrizadas."
		},
		{
			module: "M12: Empacotamento / Release",
			state: "Em andamento",
			hours: "16h",
			delivery: "Testes contínuos em ambientes headless e validação de inicialização do executável em distribuições Linux (Nix/Flatpak) e Windows."
		},
		{
			module: "M14: Configurações",
			state: "Reta final",
			hours: "4h",
			delivery: "Regras estruturadas com lógica condicional (All/Any/Not) ativando alternâncias de aparência e supressões de recursos sem corrupção do documento."
		}
	],
	stabilityHeading: "3. Estabilidade, Versões e Correções Críticas",
	stabilityBullets: [
		{
			lead: "Estabilidade do formato 13",
			text: "O formato de gravação solidcraft/13 continua provando robustez na preservação de vínculos entre esboços e paredes de cascas, sem ocorrência de quebras em recarregamentos a frio (cold reopen)."
		},
		{
			lead: "Relatórios locais de falhas",
			text: "O mecanismo de journalização de comandos garante que pânicos ou saídas não limpas gerem relatórios locais rastreáveis (solidcraft-cli crashes replay <id>) sem retenção indefinida de espaço em disco (teto de 20 relatórios ou 50 MB)."
		},
		{
			lead: "Integridade gráfica",
			text: "A clampagem de anti-aliasing em 1x no backend OpenGL segue prevenindo renderização de quadros pretos durante transições de viewport."
		}
	],
	challengesHeading: "4. Desafios Técnicos Mapeados",
	challengeBullets: [
		{
			lead: "Cantos de transição Gregory",
			text: "A costura de concordâncias G1/G2 em arestas de superfícies que convergem em um único vértice ainda aguarda formulação do remendo de canto do tipo Gregory no kernel."
		},
		{
			lead: "Cilindros com eixos cruzados",
			text: "Booleans envolvendo furos perpendiculares de mesmo diâmetro mantêm a dependência da divisão geométrica prévia das faces cilíndricas ao longo da linha de contato para viabilizar a costura."
		},
		{
			lead: "Validação de juntas com caminhos complexos",
			text: "A condução cinemática contínua de cames e montagens com laços fechados exige amostragem geométrica densa para garantir que os corpos não atravessem limites de contato (Contact Sets)."
		}
	],
	focusHeading: "5. Foco para o Próximo Ciclo",
	focusBullets: [
		{ text: "Finalizar o fechamento dos casos de borda em M1 (arames 3D com histórico de coordenadas herdado)." },
		{ text: "Avançar na generalização dos remendos de canto esféricos em M3 para arestas não perpendiculares." },
		{ text: "Integrar as saídas de montagem (M9) com a árvore de componentes para suporte completo à exportação URDF para robótica. O próximo relatório semanal está programado para sexta-feira, 13 de novembro de 2026, por volta das 14h." }
	],
	milestones: [
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
			kind: "rollup"
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
			kind: "rollup"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
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
			kind: "module"
		}
	]
}];
var SECTION_FILTERS = [
	{
		id: "todos",
		label: "TODOS OS TÓPICOS"
	},
	{
		id: "analise",
		label: "01 ANÁLISE DE GRAU"
	},
	{
		id: "status",
		label: "02 STATUS GERAL"
	},
	{
		id: "tabela",
		label: "03 TABELA SEMANAL"
	},
	{
		id: "estabilidade",
		label: "04 ESTABILIDADE & CI"
	},
	{
		id: "desafios",
		label: "05 DESAFIOS TÉCNICOS"
	},
	{
		id: "foco",
		label: "06 PRÓXIMO CICLO"
	}
];
var MILE_FILTERS = [
	{
		id: "all",
		label: "TODAS AS METAS"
	},
	{
		id: "alpha",
		label: "ALPHA ÚTIL (M0–M6)"
	},
	{
		id: "comp",
		label: "COMPLEMENTARES (M7–M14)"
	}
];
var TONE = {
	m1: {
		fill: "bg-m1",
		ink: "text-m1",
		edge: "border-l-m1",
		line: "border-m1"
	},
	m2: {
		fill: "bg-m2",
		ink: "text-m2",
		edge: "border-l-m2",
		line: "border-m2"
	},
	m3: {
		fill: "bg-m3",
		ink: "text-m3",
		edge: "border-l-m3",
		line: "border-m3"
	},
	m4: {
		fill: "bg-m4",
		ink: "text-m4",
		edge: "border-l-m4",
		line: "border-m4"
	},
	m5: {
		fill: "bg-m5",
		ink: "text-m5",
		edge: "border-l-m5",
		line: "border-m5"
	},
	m6: {
		fill: "bg-m6",
		ink: "text-m6",
		edge: "border-l-m6",
		line: "border-m6"
	},
	m7: {
		fill: "bg-m7",
		ink: "text-m7",
		edge: "border-l-m7",
		line: "border-m7"
	},
	m9: {
		fill: "bg-m9",
		ink: "text-m9",
		edge: "border-l-m9",
		line: "border-m9"
	},
	m10: {
		fill: "bg-m10",
		ink: "text-m10",
		edge: "border-l-m10",
		line: "border-m10"
	},
	m12: {
		fill: "bg-m12",
		ink: "text-m12",
		edge: "border-l-m12",
		line: "border-m12"
	},
	m14: {
		fill: "bg-m14",
		ink: "text-m14",
		edge: "border-l-m14",
		line: "border-m14"
	},
	alpha: {
		fill: "bg-ink",
		ink: "text-ink",
		edge: "border-l-ink",
		line: "border-ink"
	},
	comp: {
		fill: "bg-comp",
		ink: "text-comp",
		edge: "border-l-comp",
		line: "border-comp"
	}
};
function cn(...parts) {
	return twMerge(parts.filter(Boolean).join(" "));
}
function fmtPct(value) {
	return `${value.toLocaleString("pt-BR", {
		minimumFractionDigits: 1,
		maximumFractionDigits: 1
	})}%`;
}
function fmtDelta(value) {
	return `+${value.toLocaleString("pt-BR", {
		minimumFractionDigits: 1,
		maximumFractionDigits: 1
	})}%`;
}
function isCritical(status) {
	return /crítico/i.test(status);
}
function Monitor() {
	const [tab, setTab] = (0, import_react.useState)(0);
	const [section, setSection] = (0, import_react.useState)("todos");
	const [mile, setMile] = (0, import_react.useState)("all");
	const report = REPORTS[tab] ?? REPORTS[0];
	function selectTab(index) {
		setTab(index);
		setSection("todos");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ice text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line bg-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-6xl px-4 py-4 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-11 shrink-0 place-items-center border border-ink bg-ink font-mono text-xs font-semibold tracking-wider text-paper",
								"aria-hidden": "true",
								children: "SC"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs tracking-widest text-faint",
										children: "SOLIDCRAFT"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-base font-semibold leading-tight tracking-tight sm:text-lg",
										children: "MONITORAMENTO DE DESENVOLVIMENTO CAD PARAMÉTRICO"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-xs uppercase leading-relaxed tracking-wider text-muted",
										children: "Estágio Early Alpha | Linha estável 0.2.1 | Formato solidcraft/13"
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "border-t border-line bg-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line px-4 sm:grid-cols-3 sm:px-6 xl:grid-cols-6",
							children: META.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "bg-paper px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-mono text-xs tracking-widest text-faint",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block font-mono text-xs font-medium leading-relaxed",
									children: item.value
								})]
							}, item.label))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "border-t border-line",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "mx-auto flex min-h-11 max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs tracking-widest",
								children: "METODOLOGIA DE CÁLCULO DAS PORCENTAGENS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs tracking-widest text-faint",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "when-closed",
									children: "ABRIR"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "when-open",
									children: "FECHAR"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto max-w-6xl border-t border-line-soft px-4 py-4 text-sm leading-relaxed text-muted sm:px-6",
							children: METHODOLOGY
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line bg-ice",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-1 gap-px bg-line sm:grid-cols-2",
					role: "tablist",
					"aria-label": "Seletor de dia do relatório",
					children: REPORTS.map((item, index) => {
						const selected = index === tab;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							id: `tab-${item.id}`,
							type: "button",
							role: "tab",
							"aria-selected": selected,
							"aria-controls": `panel-${item.id}`,
							tabIndex: selected ? 0 : -1,
							onClick: () => selectTab(index),
							onKeyDown: (event) => {
								if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
								event.preventDefault();
								const next = event.key === "ArrowRight" ? (index + 1) % REPORTS.length : (index - 1 + REPORTS.length) % REPORTS.length;
								selectTab(next);
								document.getElementById(`tab-${REPORTS[next]?.id}`)?.focus();
							},
							className: cn("min-h-11 px-4 py-3 text-left transition-colors sm:px-6", selected ? "bg-ink text-paper" : "bg-paper text-muted hover:border-ink hover:text-ink"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-mono text-xs tracking-widest opacity-80",
								children: item.tabIndex
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-sm font-semibold tracking-wide",
								children: item.tabLabel
							})]
						}, item.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: `panel-${report.id}`,
				role: "tabpanel",
				"aria-labelledby": `tab-${report.id}`,
				className: "mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "sr-only",
					"aria-live": "polite",
					children: report.tabLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportView, {
					report,
					section,
					onSection: setSection,
					mile,
					onMile: setMile
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 font-mono text-xs tracking-wider text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SOLIDCRAFT/13 · EARLY ALPHA · LINHA ESTÁVEL 0.2.1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["PRÓXIMA LEITURA ", report.nextCheck] })]
				})
			})
		]
	});
}
function ReportView({ report, section, onSection, mile, onMile }) {
	const show = (id) => section === "todos" || section === id;
	const visible = report.milestones.filter((item) => mile === "all" || item.group === mile);
	const moduleHours = visible.filter((item) => item.kind === "module").reduce((sum, item) => sum + item.hours, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold leading-tight tracking-tight sm:text-2xl",
				children: report.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base",
				children: report.subtitle
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "progress-heading",
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-3 border-b border-ink pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							id: "progress-heading",
							className: "text-lg font-semibold tracking-tight sm:text-xl",
							children: "Progresso atual do aplicativo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs tracking-widest text-faint",
							children: "ESCOPO 520H"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-line bg-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeterBlock, {
							kicker: "BARRA PRINCIPAL",
							title: "Progresso geral do aplicativo",
							scope: "Escopo completo M0–M14",
							percent: report.global.percent,
							delta: report.global.delta,
							caption: report.global.caption,
							fill: "bg-ink",
							animKey: `${report.id}-global`,
							thick: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-line-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeterBlock, {
								kicker: "BARRA DE REFERÊNCIA",
								title: "Progresso do Alpha Útil",
								scope: "Blocos fundamentais M0–M6",
								percent: report.alpha.percent,
								delta: report.alpha.delta,
								caption: report.alpha.caption,
								fill: "bg-ref",
								animKey: `${report.id}-alpha`
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-4",
						children: report.kpis.map((kpi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-paper p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-mono text-xs leading-relaxed tracking-wider text-faint",
									children: kpi.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-mono text-2xl font-semibold leading-none tracking-tight",
									children: kpi.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted",
									children: kpi.detail
								})
							]
						}, kpi.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-label": "Texto integral do relatório",
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sticky top-0 z-20 -mx-4 border-y border-line bg-paper px-4 py-3 sm:-mx-6 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 font-mono text-xs tracking-widest text-faint",
						children: "FILTRO DO RELATÓRIO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						role: "group",
						"aria-label": "Tópicos do relatório",
						children: SECTION_FILTERS.map((item) => {
							const on = section === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": on,
								onClick: () => onSection(item.id),
								className: cn("min-h-11 border px-3 py-2 font-mono text-xs tracking-wider", on ? "border-ink bg-ink text-paper" : "border-line bg-paper text-muted hover:border-ink hover:text-ink"),
								children: item.label
							}, item.id);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotGroup, {
					resetKey: `${report.id}-${section}`,
					children: [
						show("analise") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
									index: "01",
									label: report.analysisKicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotItem, {
									id: `${report.id}-intro`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed sm:text-base",
										children: report.analysisIntro
									})
								}),
								report.tiers.map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SpotItem, {
									id: `${report.id}-${tier.heading}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-semibold leading-snug sm:text-base",
										children: tier.heading
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted sm:text-base",
										children: tier.body
									})]
								}, tier.heading))
							]
						}),
						show("status") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex flex-col gap-3", show("analise") && "mt-8"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
									index: "02",
									label: report.transcriptKicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotItem, {
									id: `${report.id}-transcript`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed sm:text-base",
										children: report.transcriptIntro
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "pt-2 text-base font-semibold leading-snug",
									children: report.statusHeading
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotItem, {
									id: `${report.id}-status-lead`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed sm:text-base",
										children: report.statusLead
									})
								}),
								report.statusBullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletCard, {
									reportId: report.id,
									bullet
								}, bullet.lead ?? bullet.text))
							]
						}),
						show("tabela") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex flex-col gap-3", section === "todos" && "mt-8"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
								index: "03",
								label: report.tableHeading
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotItem, {
								id: `${report.id}-table`,
								className: "p-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparisonTable, {
									rows: report.tableRows,
									heading: report.tableHeading
								})
							})]
						}),
						show("estabilidade") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex flex-col gap-3", section === "todos" && "mt-8"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
								index: "04",
								label: report.stabilityHeading
							}), report.stabilityBullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletCard, {
								reportId: report.id,
								bullet
							}, bullet.lead ?? bullet.text))]
						}),
						show("desafios") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex flex-col gap-3", section === "todos" && "mt-8"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
								index: "05",
								label: report.challengesHeading
							}), report.challengeBullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletCard, {
								reportId: report.id,
								bullet
							}, bullet.lead ?? bullet.text))]
						}),
						show("foco") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex flex-col gap-3", section === "todos" && "mt-8"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, {
								index: "06",
								label: report.focusHeading
							}), report.focusBullets.map((bullet, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletCard, {
								reportId: report.id,
								bullet,
								index: index + 1
							}, bullet.text))]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				"aria-labelledby": "metas-heading",
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 border-b border-ink pb-3 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							id: "metas-heading",
							className: "text-lg font-semibold tracking-tight sm:text-xl",
							children: "Outras Barras de Progresso de Outras Metas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs tracking-wider text-faint",
							children: [
								visible.length,
								" BARRAS · ",
								moduleHours,
								"H NOS MÓDULOS DO RECORTE"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						role: "group",
						"aria-label": "Filtro de metas",
						children: MILE_FILTERS.map((item) => {
							const on = mile === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": on,
								onClick: () => onMile(item.id),
								className: cn("min-h-11 border px-3 py-2 font-mono text-xs tracking-wider", on ? "border-ink bg-ink text-paper" : "border-line bg-paper text-muted hover:border-ink hover:text-ink"),
								children: item.label
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotGroup, {
						resetKey: `${report.id}-${mile}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-3",
							children: visible.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MilestoneRow, {
								item,
								animKey: `${report.id}-${mile}-${item.id}`
							}, item.id))
						})
					})
				]
			})
		]
	});
}
function SectionKicker({ index, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline gap-3 border-b border-line pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs tracking-widest text-faint",
			children: index
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
			className: "text-sm font-semibold leading-snug",
			children: label
		})]
	});
}
function BulletCard({ reportId, bullet, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotItem, {
		id: `${reportId}-${bullet.lead ?? bullet.text}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm leading-relaxed sm:text-base",
			children: [
				index != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "mr-2 font-mono text-xs tracking-widest text-faint",
					children: ["0", index]
				}),
				bullet.lead && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-semibold",
					children: [bullet.lead, ": "]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: bullet.lead ? "text-muted" : void 0,
					children: bullet.text
				})
			]
		})
	});
}
function ComparisonTable({ rows, heading }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden lg:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full border-collapse text-left text-sm",
			"aria-label": heading,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-line bg-ice font-mono text-xs tracking-wider text-faint",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "px-4 py-3 font-medium",
						children: "MARCO / MÓDULO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "px-4 py-3 font-medium",
						children: "ESTADO ANTERIOR VS. ATUAL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "px-4 py-3 font-medium whitespace-nowrap",
						children: "HORAS RESTANTES"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "px-4 py-3 font-medium",
						children: "PRINCIPAIS ENTREGAS E AVANÇOS DA SEMANA"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-line-soft align-top last:border-b-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "row",
						className: "px-4 py-3 font-semibold",
						children: row.module
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: cn("px-4 py-3", isCritical(row.state) && "text-m3"),
						children: row.state
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 font-mono",
						children: row.hours
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 leading-relaxed text-muted",
						children: row.delivery
					})
				]
			}, row.module)) })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col lg:hidden",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-line-soft p-4 last:border-b-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-widest text-faint",
					children: "MARCO / MÓDULO"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
					className: "mt-1 font-semibold",
					children: row.module
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-xs tracking-widest text-faint",
					children: "ESTADO ANTERIOR VS. ATUAL"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("mt-1 text-sm", isCritical(row.state) && "font-medium text-m3"),
					children: row.state
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-xs tracking-widest text-faint",
					children: "HORAS RESTANTES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-sm",
					children: row.hours
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-mono text-xs tracking-widest text-faint",
					children: "PRINCIPAIS ENTREGAS E AVANÇOS DA SEMANA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-muted",
					children: row.delivery
				})
			]
		}, row.module))
	})] });
}
function MeterBlock({ kicker, title, scope, percent, delta, caption, fill, animKey, thick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-4 sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-widest text-faint",
						children: kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "mt-1 text-base font-semibold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-wider text-muted",
						children: scope
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-3xl font-semibold leading-none tracking-tight",
						children: fmtPct(percent)
					}), delta != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-xs tracking-wider text-m14",
						children: ["Δ ", fmtDelta(delta)]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("mt-4 w-full border border-line bg-ice", thick ? "h-4" : "h-2.5"),
				role: "progressbar",
				"aria-valuenow": percent,
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-label": `${title}: ${fmtPct(percent)}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("meter-fill", fill),
					style: { width: `${percent}%` }
				}, animKey)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex justify-between font-mono text-xs text-faint",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "50" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "75" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed text-muted",
				children: caption
			})
		]
	});
}
function MilestoneRow({ item, animKey }) {
	const tone = TONE[item.tone];
	const critical = isCritical(item.status);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotItem, {
		id: item.id,
		className: cn("border-l-4 p-0", tone.edge),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-w-0 items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("inline-flex h-8 min-w-14 items-center justify-center px-2 font-mono text-xs font-semibold tracking-wider text-paper", tone.fill),
							children: item.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-sm font-semibold sm:text-base",
								children: item.kind === "module" ? `${item.code}: ${item.name}` : item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("mt-1 font-mono text-xs tracking-wider uppercase", critical ? "text-m3" : tone.ink),
								children: item.status
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-right",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-2xl font-semibold leading-none",
								children: fmtPct(item.percent)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-mono text-xs tracking-wider text-muted",
								children: [item.hours, "H RESTANTES"]
							}),
							item.delta != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 font-mono text-xs tracking-wider text-m14",
								children: ["Δ ", fmtDelta(item.delta)]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 h-2.5 w-full border border-line bg-ice",
					role: "progressbar",
					"aria-valuenow": item.percent,
					"aria-valuemin": 0,
					"aria-valuemax": 100,
					"aria-label": `${item.name}: ${fmtPct(item.percent)}, ${item.hours} horas restantes`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("meter-fill", tone.fill),
						style: { width: `${item.percent}%` }
					}, animKey)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap items-center gap-2",
					children: item.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("inline-flex min-h-8 items-center border px-2 font-mono text-xs tracking-wider", tone.line, tone.ink),
						children: item.tag
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted",
					children: item.note
				})
			]
		})
	});
}
var SpotContext = (0, import_react.createContext)(null);
function SpotGroup({ resetKey, children }) {
	const [hover, setHover] = (0, import_react.useState)(null);
	const [pin, setPin] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setHover(null);
		setPin(null);
	}, [resetKey]);
	const current = hover ?? pin;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpotContext.Provider, {
		value: {
			current,
			pin,
			setHover,
			togglePin: (id) => setPin((prev) => prev === id ? null : id)
		},
		children
	});
}
function SpotItem({ id, children, className }) {
	const spot = (0, import_react.useContext)(SpotContext);
	const on = spot?.current === id;
	const dim = Boolean(spot?.current) && !on;
	const pinned = spot?.pin === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		tabIndex: 0,
		"data-spot": on ? "on" : dim ? "dim" : "idle",
		onMouseEnter: () => spot?.setHover(id),
		onMouseLeave: () => spot?.setHover(null),
		onFocus: () => spot?.setHover(id),
		onBlur: () => spot?.setHover(null),
		onClick: () => {
			if ((window.getSelection()?.toString() ?? "").length > 0) return;
			spot?.togglePin(id);
		},
		onKeyDown: (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				spot?.togglePin(id);
			}
		},
		className: cn("border bg-paper p-4 transition-[opacity,border-color] duration-200 sm:p-5", on ? "spot-on border-ink" : "border-line", dim && "spot-dim", className),
		children: [pinned && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 font-mono text-xs tracking-widest text-faint",
			children: "FOCO FIXO"
		}), children]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, {});
}
//#endregion
export { Home as component };
