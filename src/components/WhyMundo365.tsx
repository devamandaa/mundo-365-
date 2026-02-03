// WhyMundo365.tsx
import mundoImg from "../assets/mundo.png.png";

/* ===========================
   TIPOS
=========================== */

type Stat = {
  value: string;
  label: string;
  x: number;
  y: number;
};

/* ===========================
   DADOS
=========================== */

const stats: Stat[] = [
  { value: "5000", label: "Clientes atendidos", x: 14, y: 26 },
  { value: "150", label: "Projetos concluídos", x: 40, y: 26 },
  { value: "100", label: "Prêmios ganhos", x: 66, y: 26 },
  { value: "999", label: "Serviços realizados", x: 28, y: 52 },
  { value: "850", label: "Horas trabalhadas", x: 54, y: 54 },
  { value: "99", label: "Clientes ativos", x: 40, y: 74 },
];

/* ===========================
   COMPONENTE PRINCIPAL
=========================== */

export default function WhyMundo365() {
  // 🔴 AJUSTE PRINCIPAL (leva tudo pro lado direito)
  const clusterTranslateX = 28; // quanto maior, mais pra direita
  const clusterTranslateY = 2;  // ajuste fino vertical

  return (
    <section className="bg-white">
      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />

        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url(${mundoImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/85" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-lg font-extrabold text-white md:text-xl">
              Por que a Mundo365 é a melhor
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-sky-400/90" />
          </div>

          {/* ================= CLUSTER ================= */}
          <div className="relative mx-auto mt-10 h-[360px] max-w-5xl md:h-[420px]">
            <div
              className="absolute inset-0"
              style={{
                transform: `translate(${clusterTranslateX}%, ${clusterTranslateY}%)`,
              }}
            >
              {/* LINHAS */}
              <svg
                className="absolute inset-0 h-full w-full opacity-60"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M14 26 L40 26 L66 26"
                  stroke="rgba(56,189,248,.65)"
                  strokeWidth="0.7"
                  fill="none"
                />
                <path
                  d="M40 26 L28 52 L40 74 L54 54 L40 26"
                  stroke="rgba(56,189,248,.45)"
                  strokeWidth="0.6"
                  fill="none"
                />
                <path
                  d="M28 52 L54 54"
                  stroke="rgba(56,189,248,.35)"
                  strokeWidth="0.6"
                  fill="none"
                />
              </svg>

              {/* BOLHAS */}
              {stats.map((s) => (
                <StatBubble key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= FAIXA MICROSOFT ================= */}
      <div className="relative z-20 -mt-16 px-6">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white shadow-[0_20px_60px_rgba(2,6,23,.15)]">
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <div className="flex flex-col items-center gap-8 px-10 py-8 md:flex-row md:justify-between">
              {/* LADO ESQUERDO */}
              <div className="flex max-w-xl flex-col gap-3 text-center md:text-left">
                <div className="flex items-center justify-center gap-3 md:justify-start">
                  <MicrosoftMark size={18} />
                  <span className="text-sm font-extrabold text-slate-900">
                    Microsoft
                  </span>
                </div>

                <p className="text-xl font-extrabold leading-tight text-sky-600">
                  Somos a maior Revendedora <br />
                  <span className="text-sky-700">
                    Oficial Microsoft Brasil
                  </span>
                </p>

                <p className="text-sm font-medium leading-relaxed text-slate-600">
                  Entre as maiores empresas de Revenda Microsoft do Brasil,
                  oferecemos as melhores soluções com segurança.
                </p>
              </div>

              {/* DIVISOR */}
              <div className="hidden h-16 w-[2px] bg-orange-400 md:block" />

              {/* LADO DIREITO */}
              <div className="grid items-center gap-x-10 gap-y-6 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
                <MsPartnerBadge subtitle="Modern Work" />
                <MsPartnerBadge subtitle="Infrastructure" subtitle2="Azure" />
                <MsPartnerBadge subtitle="Gold Partner" />

                <div className="min-w-[160px] text-left leading-tight">
                  <div className="text-[15px] font-extrabold text-slate-900">
                    Powered BI
                  </div>
                  <div className="mt-1 text-[13px] font-semibold text-slate-700">
                    Inteligência Artificial
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================
   COMPONENTES AUXILIARES
=========================== */

function MsPartnerBadge({
  subtitle,
  subtitle2,
}: {
  subtitle: string;
  subtitle2?: string;
}) {
  return (
    <div className="flex min-w-[170px] items-center gap-3">
      <MicrosoftMark size={22} />

      <div className="leading-tight">
        <div className="text-[12.5px] font-extrabold text-slate-900">
          Microsoft
        </div>
        <div className="text-[12.5px] font-extrabold text-slate-900">
          Solutions Partner
        </div>

        <div className="mt-1 text-[12px] font-semibold text-slate-600">
          {subtitle}
          {subtitle2 && (
            <>
              <span className="mx-1 text-slate-400">|</span>
              <span className="text-slate-700">{subtitle2}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MicrosoftMark({ size = 18 }: { size?: number }) {
  const s = size;
  const gap = Math.max(2, Math.round(s * 0.12));
  const box = Math.round((s - gap) / 2);

  return (
    <span className="inline-flex">
      <svg
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width={box} height={box} fill="#F25022" />
        <rect x={box + gap} y="0" width={box} height={box} fill="#7FBA00" />
        <rect x="0" y={box + gap} width={box} height={box} fill="#00A4EF" />
        <rect
          x={box + gap}
          y={box + gap}
          width={box}
          height={box}
          fill="#FFB900"
        />
      </svg>
    </span>
  );
}

function StatBubble({ value, label, x, y }: Stat) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="group relative">
        <div className="grid h-16 w-16 place-items-center rounded-full border border-sky-300/40 bg-slate-950/25 text-sky-300 backdrop-blur md:h-20 md:w-20">
          <span className="text-lg font-extrabold md:text-xl">
            {value}
          </span>
        </div>

        <div className="mt-2 w-max rounded-md bg-white/95 px-2 py-1 text-[11px] font-extrabold text-sky-700 shadow-sm">
          {label}
        </div>
      </div>
    </div>
  );
}
