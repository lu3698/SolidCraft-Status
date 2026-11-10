import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import {
  META,
  METHODOLOGY,
  MILE_FILTERS,
  REPORTS,
  SECTION_FILTERS,
  type Bullet,
  type MileFilter,
  type Milestone,
  type Report,
  type SectionId,
  type TableRow,
  type Tone,
} from "@/data/reports";

const TONE: Record<Tone, { fill: string; ink: string; edge: string; line: string }> = {
  m1: { fill: "bg-m1", ink: "text-m1", edge: "border-l-m1", line: "border-m1" },
  m2: { fill: "bg-m2", ink: "text-m2", edge: "border-l-m2", line: "border-m2" },
  m3: { fill: "bg-m3", ink: "text-m3", edge: "border-l-m3", line: "border-m3" },
  m4: { fill: "bg-m4", ink: "text-m4", edge: "border-l-m4", line: "border-m4" },
  m5: { fill: "bg-m5", ink: "text-m5", edge: "border-l-m5", line: "border-m5" },
  m6: { fill: "bg-m6", ink: "text-m6", edge: "border-l-m6", line: "border-m6" },
  m7: { fill: "bg-m7", ink: "text-m7", edge: "border-l-m7", line: "border-m7" },
  m9: { fill: "bg-m9", ink: "text-m9", edge: "border-l-m9", line: "border-m9" },
  m10: { fill: "bg-m10", ink: "text-m10", edge: "border-l-m10", line: "border-m10" },
  m12: { fill: "bg-m12", ink: "text-m12", edge: "border-l-m12", line: "border-m12" },
  m14: { fill: "bg-m14", ink: "text-m14", edge: "border-l-m14", line: "border-m14" },
  alpha: { fill: "bg-ink", ink: "text-ink", edge: "border-l-ink", line: "border-ink" },
  comp: { fill: "bg-comp", ink: "text-comp", edge: "border-l-comp", line: "border-comp" },
};

function cn(...parts: Array<string | false | null | undefined>) {
  return twMerge(parts.filter(Boolean).join(" "));
}

function fmtPct(value: number) {
  return `${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })}%`;
}

function fmtDelta(value: number) {
  const n = value.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  return `+${n}%`;
}

function isCritical(status: string) {
  return /crítico/i.test(status);
}

export function Monitor() {
  const [tab, setTab] = useState(0);
  const [section, setSection] = useState<SectionId>("todos");
  const [mile, setMile] = useState<MileFilter>("all");
  const report = REPORTS[tab] ?? REPORTS[0];

  function selectTab(index: number) {
    setTab(index);
    setSection("todos");
  }

  return (
    <div className="min-h-screen bg-ice text-ink">
      <header className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex items-start gap-3">
            <div
              className="grid size-11 shrink-0 place-items-center border border-ink bg-ink font-mono text-xs font-semibold tracking-wider text-paper"
              aria-hidden="true"
            >
              SC
            </div>
            <div className="min-w-0">
              <p className="font-mono text-xs tracking-widest text-faint">SOLIDCRAFT</p>
              <h1 className="text-base font-semibold leading-tight tracking-tight sm:text-lg">
                MONITORAMENTO DE DESENVOLVIMENTO CAD PARAMÉTRICO
              </h1>
              <p className="mt-1 font-mono text-xs uppercase leading-relaxed tracking-wider text-muted">
                Estágio Early Alpha | Linha estável 0.2.1 | Formato solidcraft/13
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-line bg-line">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line px-4 sm:grid-cols-3 sm:px-6 xl:grid-cols-6">
            {META.map((item) => (
              <li key={item.label} className="bg-paper px-3 py-2">
                <span className="block font-mono text-xs tracking-widest text-faint">{item.label}</span>
                <span className="mt-0.5 block font-mono text-xs font-medium leading-relaxed">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <details className="border-t border-line">
          <summary className="mx-auto flex min-h-11 max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
            <span className="font-mono text-xs tracking-widest">
              METODOLOGIA DE CÁLCULO DAS PORCENTAGENS
            </span>
            <span className="font-mono text-xs tracking-widest text-faint">
              <span className="when-closed">ABRIR</span>
              <span className="when-open">FECHAR</span>
            </span>
          </summary>
          <p className="mx-auto max-w-6xl border-t border-line-soft px-4 py-4 text-sm leading-relaxed text-muted sm:px-6">
            {METHODOLOGY}
          </p>
        </details>
      </header>

      <div className="border-b border-line bg-ice">
        <div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-line sm:grid-cols-2"
          role="tablist"
          aria-label="Seletor de dia do relatório"
        >
          {REPORTS.map((item, index) => {
            const selected = index === tab;
            return (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(index)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                  event.preventDefault();
                  const next =
                    event.key === "ArrowRight"
                      ? (index + 1) % REPORTS.length
                      : (index - 1 + REPORTS.length) % REPORTS.length;
                  selectTab(next);
                  document.getElementById(`tab-${REPORTS[next]?.id}`)?.focus();
                }}
                className={cn(
                  "min-h-11 px-4 py-3 text-left transition-colors sm:px-6",
                  selected
                    ? "bg-ink text-paper"
                    : "bg-paper text-muted hover:border-ink hover:text-ink",
                )}
              >
                <span className="block font-mono text-xs tracking-widest opacity-80">
                  {item.tabIndex}
                </span>
                <span className="mt-1 block text-sm font-semibold tracking-wide">
                  {item.tabLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <main
        id={`panel-${report.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${report.id}`}
        className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8"
      >
        <p className="sr-only" aria-live="polite">
          {report.tabLabel}
        </p>
        <ReportView report={report} section={section} onSection={setSection} mile={mile} onMile={setMile} />
      </main>

      <footer className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 font-mono text-xs tracking-wider text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>SOLIDCRAFT/13 · EARLY ALPHA · LINHA ESTÁVEL 0.2.1</span>
          <span>PRÓXIMA LEITURA {report.nextCheck}</span>
        </div>
      </footer>
    </div>
  );
}

function ReportView({
  report,
  section,
  onSection,
  mile,
  onMile,
}: {
  report: Report;
  section: SectionId;
  onSection: (id: SectionId) => void;
  mile: MileFilter;
  onMile: (id: MileFilter) => void;
}) {
  const show = (id: SectionId) => section === "todos" || section === id;
  const visible = report.milestones.filter((item) => mile === "all" || item.group === mile);
  const moduleHours = visible
    .filter((item) => item.kind === "module")
    .reduce((sum, item) => sum + item.hours, 0);

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h2 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl">{report.title}</h2>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">{report.subtitle}</p>
      </header>

      <section aria-labelledby="progress-heading" className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3 border-b border-ink pb-2">
          <h3 id="progress-heading" className="text-lg font-semibold tracking-tight sm:text-xl">
            Progresso atual do aplicativo
          </h3>
          <span className="font-mono text-xs tracking-widest text-faint">ESCOPO 520H</span>
        </div>

        <div className="border border-line bg-paper">
          <MeterBlock
            kicker="BARRA PRINCIPAL"
            title="Progresso geral do aplicativo"
            scope="Escopo completo M0–M14"
            percent={report.global.percent}
            delta={report.global.delta}
            caption={report.global.caption}
            fill="bg-ink"
            animKey={`${report.id}-global`}
            thick
          />
          <div className="border-t border-line-soft">
            <MeterBlock
              kicker="BARRA DE REFERÊNCIA"
              title="Progresso do Alpha Útil"
              scope="Blocos fundamentais M0–M6"
              percent={report.alpha.percent}
              delta={report.alpha.delta}
              caption={report.alpha.caption}
              fill="bg-ref"
              animKey={`${report.id}-alpha`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
          {report.kpis.map((kpi) => (
            <article key={kpi.id} className="bg-paper p-4">
              <h4 className="font-mono text-xs leading-relaxed tracking-wider text-faint">{kpi.label}</h4>
              <p className="mt-3 font-mono text-2xl font-semibold leading-none tracking-tight">{kpi.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{kpi.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="Texto integral do relatório" className="flex flex-col gap-4">
        <div className="sticky top-0 z-20 -mx-4 border-y border-line bg-paper px-4 py-3 sm:-mx-6 sm:px-6">
          <p className="mb-2 font-mono text-xs tracking-widest text-faint">FILTRO DO RELATÓRIO</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Tópicos do relatório">
            {SECTION_FILTERS.map((item) => {
              const on = section === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => onSection(item.id)}
                  className={cn(
                    "min-h-11 border px-3 py-2 font-mono text-xs tracking-wider",
                    on ? "border-ink bg-ink text-paper" : "border-line bg-paper text-muted hover:border-ink hover:text-ink",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <SpotGroup resetKey={`${report.id}-${section}`}>
          {show("analise") && (
            <div className="flex flex-col gap-3">
              <SectionKicker index="01" label={report.analysisKicker} />
              <SpotItem id={`${report.id}-intro`}>
                <p className="text-sm leading-relaxed sm:text-base">{report.analysisIntro}</p>
              </SpotItem>
              {report.tiers.map((tier) => (
                <SpotItem key={tier.heading} id={`${report.id}-${tier.heading}`}>
                  <h4 className="text-sm font-semibold leading-snug sm:text-base">{tier.heading}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{tier.body}</p>
                </SpotItem>
              ))}
            </div>
          )}

          {show("status") && (
            <div className={cn("flex flex-col gap-3", show("analise") && "mt-8")}>
              <SectionKicker index="02" label={report.transcriptKicker} />
              <SpotItem id={`${report.id}-transcript`}>
                <p className="text-sm leading-relaxed sm:text-base">{report.transcriptIntro}</p>
              </SpotItem>
              <h4 className="pt-2 text-base font-semibold leading-snug">{report.statusHeading}</h4>
              <SpotItem id={`${report.id}-status-lead`}>
                <p className="text-sm leading-relaxed sm:text-base">{report.statusLead}</p>
              </SpotItem>
              {report.statusBullets.map((bullet) => (
                <BulletCard key={bullet.lead ?? bullet.text} reportId={report.id} bullet={bullet} />
              ))}
            </div>
          )}

          {show("tabela") && (
            <div className={cn("flex flex-col gap-3", section === "todos" && "mt-8")}>
              <SectionKicker index="03" label={report.tableHeading} />
              <SpotItem id={`${report.id}-table`} className="p-0">
                <ComparisonTable rows={report.tableRows} heading={report.tableHeading} />
              </SpotItem>
            </div>
          )}

          {show("estabilidade") && (
            <div className={cn("flex flex-col gap-3", section === "todos" && "mt-8")}>
              <SectionKicker index="04" label={report.stabilityHeading} />
              {report.stabilityBullets.map((bullet) => (
                <BulletCard key={bullet.lead ?? bullet.text} reportId={report.id} bullet={bullet} />
              ))}
            </div>
          )}

          {show("desafios") && (
            <div className={cn("flex flex-col gap-3", section === "todos" && "mt-8")}>
              <SectionKicker index="05" label={report.challengesHeading} />
              {report.challengeBullets.map((bullet) => (
                <BulletCard key={bullet.lead ?? bullet.text} reportId={report.id} bullet={bullet} />
              ))}
            </div>
          )}

          {show("foco") && (
            <div className={cn("flex flex-col gap-3", section === "todos" && "mt-8")}>
              <SectionKicker index="06" label={report.focusHeading} />
              {report.focusBullets.map((bullet, index) => (
                <BulletCard key={bullet.text} reportId={report.id} bullet={bullet} index={index + 1} />
              ))}
            </div>
          )}
        </SpotGroup>
      </section>

      <section aria-labelledby="metas-heading" className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 border-b border-ink pb-3 sm:flex-row sm:items-end sm:justify-between">
          <h3 id="metas-heading" className="text-lg font-semibold tracking-tight sm:text-xl">
            Outras Barras de Progresso de Outras Metas
          </h3>
          <p className="font-mono text-xs tracking-wider text-faint">
            {visible.length} BARRAS · {moduleHours}H NOS MÓDULOS DO RECORTE
          </p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtro de metas">
          {MILE_FILTERS.map((item) => {
            const on = mile === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={on}
                onClick={() => onMile(item.id)}
                className={cn(
                  "min-h-11 border px-3 py-2 font-mono text-xs tracking-wider",
                  on ? "border-ink bg-ink text-paper" : "border-line bg-paper text-muted hover:border-ink hover:text-ink",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <SpotGroup resetKey={`${report.id}-${mile}`}>
          <div className="flex flex-col gap-3">
            {visible.map((item) => (
              <MilestoneRow key={item.id} item={item} animKey={`${report.id}-${mile}-${item.id}`} />
            ))}
          </div>
        </SpotGroup>
      </section>
    </div>
  );
}

function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 border-b border-line pb-2">
      <span className="font-mono text-xs tracking-widest text-faint">{index}</span>
      <h4 className="text-sm font-semibold leading-snug">{label}</h4>
    </div>
  );
}

function BulletCard({
  reportId,
  bullet,
  index,
}: {
  reportId: string;
  bullet: Bullet;
  index?: number;
}) {
  return (
    <SpotItem id={`${reportId}-${bullet.lead ?? bullet.text}`}>
      <p className="text-sm leading-relaxed sm:text-base">
        {index != null && (
          <span className="mr-2 font-mono text-xs tracking-widest text-faint">0{index}</span>
        )}
        {bullet.lead && <span className="font-semibold">{bullet.lead}: </span>}
        <span className={bullet.lead ? "text-muted" : undefined}>{bullet.text}</span>
      </p>
    </SpotItem>
  );
}

function ComparisonTable({ rows, heading }: { rows: TableRow[]; heading: string }) {
  return (
    <div>
      <div className="hidden lg:block">
        <table className="w-full border-collapse text-left text-sm" aria-label={heading}>
          <thead>
            <tr className="border-b border-line bg-ice font-mono text-xs tracking-wider text-faint">
              <th scope="col" className="px-4 py-3 font-medium">
                MARCO / MÓDULO
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                ESTADO ANTERIOR VS. ATUAL
              </th>
              <th scope="col" className="px-4 py-3 font-medium whitespace-nowrap">
                HORAS RESTANTES
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                PRINCIPAIS ENTREGAS E AVANÇOS DA SEMANA
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.module} className="border-b border-line-soft align-top last:border-b-0">
                <th scope="row" className="px-4 py-3 font-semibold">
                  {row.module}
                </th>
                <td className={cn("px-4 py-3", isCritical(row.state) && "text-m3")}>{row.state}</td>
                <td className="px-4 py-3 font-mono">{row.hours}</td>
                <td className="px-4 py-3 leading-relaxed text-muted">{row.delivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col lg:hidden">
        {rows.map((row) => (
          <div key={row.module} className="border-b border-line-soft p-4 last:border-b-0">
            <p className="font-mono text-xs tracking-widest text-faint">MARCO / MÓDULO</p>
            <h5 className="mt-1 font-semibold">{row.module}</h5>
            <p className="mt-3 font-mono text-xs tracking-widest text-faint">ESTADO ANTERIOR VS. ATUAL</p>
            <p className={cn("mt-1 text-sm", isCritical(row.state) && "font-medium text-m3")}>{row.state}</p>
            <p className="mt-3 font-mono text-xs tracking-widest text-faint">HORAS RESTANTES</p>
            <p className="mt-1 font-mono text-sm">{row.hours}</p>
            <p className="mt-3 font-mono text-xs tracking-widest text-faint">
              PRINCIPAIS ENTREGAS E AVANÇOS DA SEMANA
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{row.delivery}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MeterBlock({
  kicker,
  title,
  scope,
  percent,
  delta,
  caption,
  fill,
  animKey,
  thick,
}: {
  kicker: string;
  title: string;
  scope: string;
  percent: number;
  delta?: number;
  caption: string;
  fill: string;
  animKey: string;
  thick?: boolean;
}) {
  return (
    <div className="p-4 sm:p-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs tracking-widest text-faint">{kicker}</p>
          <h4 className="mt-1 text-base font-semibold">{title}</h4>
          <p className="font-mono text-xs tracking-wider text-muted">{scope}</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-3xl font-semibold leading-none tracking-tight">{fmtPct(percent)}</p>
          {delta != null && (
            <p className="mt-1 font-mono text-xs tracking-wider text-m14">Δ {fmtDelta(delta)}</p>
          )}
        </div>
      </div>
      <div
        className={cn("mt-4 w-full border border-line bg-ice", thick ? "h-4" : "h-2.5")}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${title}: ${fmtPct(percent)}`}
      >
        <div key={animKey} className={cn("meter-fill", fill)} style={{ width: `${percent}%` }} />
      </div>
      <div className="mt-1 flex justify-between font-mono text-xs text-faint" aria-hidden="true">
        <span>0</span>
        <span>25</span>
        <span>50</span>
        <span>75</span>
        <span>100</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{caption}</p>
    </div>
  );
}

function MilestoneRow({ item, animKey }: { item: Milestone; animKey: string }) {
  const tone = TONE[item.tone];
  const critical = isCritical(item.status);
  return (
    <SpotItem id={item.id} className={cn("border-l-4 p-0", tone.edge)}>
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <span
              className={cn(
                "inline-flex h-8 min-w-14 items-center justify-center px-2 font-mono text-xs font-semibold tracking-wider text-paper",
                tone.fill,
              )}
            >
              {item.code}
            </span>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold sm:text-base">
                {item.kind === "module" ? `${item.code}: ${item.name}` : item.name}
              </h4>
              <p className={cn("mt-1 font-mono text-xs tracking-wider uppercase", critical ? "text-m3" : tone.ink)}>
                {item.status}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-mono text-2xl font-semibold leading-none">{fmtPct(item.percent)}</p>
            <p className="mt-1 font-mono text-xs tracking-wider text-muted">{item.hours}H RESTANTES</p>
            {item.delta != null && (
              <p className="mt-1 font-mono text-xs tracking-wider text-m14">Δ {fmtDelta(item.delta)}</p>
            )}
          </div>
        </div>
        <div
          className="mt-4 h-2.5 w-full border border-line bg-ice"
          role="progressbar"
          aria-valuenow={item.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${item.name}: ${fmtPct(item.percent)}, ${item.hours} horas restantes`}
        >
          <div key={animKey} className={cn("meter-fill", tone.fill)} style={{ width: `${item.percent}%` }} />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {item.tag && (
            <span
              className={cn(
                "inline-flex min-h-8 items-center border px-2 font-mono text-xs tracking-wider",
                tone.line,
                tone.ink,
              )}
            >
              {item.tag}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
      </div>
    </SpotItem>
  );
}

type SpotApi = {
  current: string | null;
  pin: string | null;
  setHover: (id: string | null) => void;
  togglePin: (id: string) => void;
};

const SpotContext = createContext<SpotApi | null>(null);

function SpotGroup({ resetKey, children }: { resetKey: string; children: ReactNode }) {
  const [hover, setHover] = useState<string | null>(null);
  const [pin, setPin] = useState<string | null>(null);

  useEffect(() => {
    setHover(null);
    setPin(null);
  }, [resetKey]);

  const current = hover ?? pin;

  return (
    <SpotContext.Provider
      value={{
        current,
        pin,
        setHover,
        togglePin: (id) => setPin((prev) => (prev === id ? null : id)),
      }}
    >
      {children}
    </SpotContext.Provider>
  );
}

function SpotItem({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const spot = useContext(SpotContext);
  const on = spot?.current === id;
  const dim = Boolean(spot?.current) && !on;
  const pinned = spot?.pin === id;

  return (
    <article
      tabIndex={0}
      data-spot={on ? "on" : dim ? "dim" : "idle"}
      onMouseEnter={() => spot?.setHover(id)}
      onMouseLeave={() => spot?.setHover(null)}
      onFocus={() => spot?.setHover(id)}
      onBlur={() => spot?.setHover(null)}
      onClick={() => {
        const selected = window.getSelection()?.toString() ?? "";
        if (selected.length > 0) return;
        spot?.togglePin(id);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          spot?.togglePin(id);
        }
      }}
      className={cn(
        "border bg-paper p-4 transition-[opacity,border-color] duration-200 sm:p-5",
        on ? "spot-on border-ink" : "border-line",
        dim && "spot-dim",
        className,
      )}
    >
      {pinned && (
        <p className="mb-2 font-mono text-xs tracking-widest text-faint">FOCO FIXO</p>
      )}
      {children}
    </article>
  );
}
