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
  const clusterTranslateX = 6;
  const clusterTranslateY = 0;

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

          <div className="relative mx-auto mt-10 h-[360px] max-w-5xl md:h-[420px]">
            <div
              className="absolute inset-0"
              style={{
                transform: `translate(${clusterTranslateX}%, ${clusterTranslateY}%)`,
              }}
            >
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

              {stats.map((s) => (
                <StatBubble key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= FAIXA MICROSOFT ================= */}
    <div className="relative z-20 -mt-16 px-6">
  {/* ✅ Wrapper que “isola” do fundo e fecha o card 100% */}
  <div className="mx-auto max-w-5xl rounded-2xl bg-white p-[1px] shadow-[0_20px_60px_rgba(2,6,23,.15)]">
    <div className="rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden">
      <div className="flex flex-col gap-6 px-8 py-6 md:flex-row md:items-center md:justify-between">
        {/* LADO ESQUERDO */}
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <div className="flex items-center gap-3">
            <MicrosoftMark size={14} />
            <div className="text-sm font-extrabold text-slate-900">
              Microsoft
            </div>
          </div>

          <div className="max-w-xl">
            <p className="text-lg font-extrabold leading-tight text-sky-600 md:text-xl">
              Somos a maior Revendedora{" "}
              <span className="text-sky-700">Oficial Microsoft</span> Brasil
            </p>

            <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
              Entre as maiores empresas de Revenda Microsoft do Brasil,
              oferecemos as melhores soluções com segurança.
            </p>
          </div>
        </div>

        {/* DIVISOR */}
        <div className="hidden h-14 w-px bg-slate-200 md:block" />

        {/* LADO DIREITO */}
        <div className="w-full md:w-auto">
          <div className="grid items-center gap-x-10 gap-y-6 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
            <MsPartnerBadge subtitle="Modern Work" />
            <MsPartnerBadge subtitle="Infrastructure" subtitle2="Azure" />
            <MsPartnerBadge subtitle="Gold Partner" />

            <div className="min-w-[170px] leading-[1.1] text-slate-900">
              <div className="text-[15px] font-extrabold">Powered BI</div>
              <div className="mt-1 text-[13px] font-semibold text-slate-700">
                Inteligência Artificial
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* ✅ (removi a seção CERTIFICAÇÕES inteira) */}
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
      <MicrosoftMark size={12} />
      <div className="leading-[1.1]">
        <div className="text-[13px] font-semibold text-slate-700">
          Microsoft{" "}
          <span className="font-medium text-slate-600">Solutions Partner</span>
        </div>
        <div className="mt-1 text-[12px] font-semibold text-slate-500">
          {subtitle}
          {subtitle2 && (
            <>
              <br />
              {subtitle2}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MicrosoftMark({ size = 12 }: { size?: number }) {
  return (
    <span className="grid grid-cols-2 gap-[2px]">
      <span style={{ width: size, height: size }} className="bg-[#F25022]" />
      <span style={{ width: size, height: size }} className="bg-[#7FBA00]" />
      <span style={{ width: size, height: size }} className="bg-[#00A4EF]" />
      <span style={{ width: size, height: size }} className="bg-[#FFB900]" />
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
          <span className="text-lg font-extrabold md:text-xl">{value}</span>
        </div>

        <div className="mt-2 w-max rounded-md bg-white/95 px-2 py-1 text-[11px] font-extrabold text-sky-700 shadow-sm">
          {label}
        </div>
      </div>
    </div>
  );
}
