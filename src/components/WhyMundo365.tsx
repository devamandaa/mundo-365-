import mundoImg from "../assets/mundo.png.png"; // ✅ confira o nome do arquivo

type Stat = {
  value: string;
  label: string;
  x: number;
  y: number;
};

type Cert = {
  name: string;
  src: string;
};

const stats: Stat[] = [
  { value: "5000", label: "Clientes atendidos", x: 14, y: 26 },
  { value: "150", label: "Projetos concluídos", x: 40, y: 26 },
  { value: "100", label: "Prêmios ganhos", x: 66, y: 26 },
  { value: "999", label: "Serviços realizados", x: 28, y: 52 },
  { value: "850", label: "Horas trabalhadas", x: 54, y: 54 },
  { value: "99", label: "Clientes ativos", x: 40, y: 74 },
];

const certifications: Cert[] = [
  { name: "Microsoft", src: "/certs/microsoft.svg" },
  { name: "Kaspersky", src: "/certs/kaspersky.svg" },
  { name: "Acronis", src: "/certs/acronis.svg" },
  { name: "Fortinet", src: "/certs/fortinet.svg" },
  { name: "Veeam", src: "/certs/veeam.svg" },
];

export default function WhyMundo365() {
  const bgImage = mundoImg;

  // ✅ AJUSTE AQUI: desloca TODA a “constelação” (bolhas + linhas) para o centro
  // Se ainda ficar levemente pra esquerda/direita, mexe nesses valores:
  const clusterTranslateX = 6; // %  (ex: 4, 6, 8)
  const clusterTranslateY = 0; // %  (ex: -2, 0, 2)

  return (
    <section className="bg-white">
      {/* HERO DARK */}
      <div className="relative overflow-hidden">
        {/* Fundo */}
        <div className="absolute inset-0 bg-slate-950" />

        {/* Imagem */}
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/85" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          {/* Título */}
          <div className="text-center">
            <h2 className="text-lg font-extrabold text-white md:text-xl">
              Por que a Mundo365 é a melhor
            </h2>
            <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-sky-400/90" />
          </div>

          {/* Área dos stats (bolhas) */}
          <div className="relative mx-auto mt-10 h-[360px] max-w-5xl md:h-[420px]">
            {/* ✅ Wrapper que centraliza o conjunto inteiro (bolhas + linhas) */}
            <div
              className="absolute inset-0"
              style={{
                transform: `translate(${clusterTranslateX}%, ${clusterTranslateY}%)`,
              }}
            >
              {/* Linhas / conexões (SVG) */}
              <svg
                className="absolute inset-0 h-full w-full opacity-60"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
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

              {/* Bolhas */}
              {stats.map((s) => (
                <StatBubble key={s.label} {...s} />
              ))}
            </div>

            {/* “Brilhos” extras */}
            <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>
        </div>
      </div>

      {/* ✅ FAIXA MICROSOFT / CERTIFICAÇÕES */}
      <div className="relative -mt-16 z-20">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white shadow-[0_20px_60px_rgba(2,6,23,.15)] ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 px-8 py-6 md:flex-row md:items-center md:justify-between">
            {/* LADO ESQUERDO */}
            <div className="flex items-center gap-4">
              <img
                src="/certs/microsoft.svg"
                alt="Microsoft"
                className="h-10 w-auto"
              />
              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  Somos um parceiro referenciado
                </p>
                <p className="text-sm font-extrabold text-sky-600">
                  Official Microsoft Brasil
                </p>
              </div>
            </div>

            {/* DIVISOR */}
            <div className="hidden h-10 w-px bg-slate-200 md:block" />

            {/* LADO DIREITO */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "Microsoft",
                "Microsoft Azure",
                "Microsoft 365",
                "Microsoft Security",
                "Powered by Inteligência Artificial",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 ring-1 ring-slate-200"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICAÇÕES */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold text-slate-950">
              Certificações e Qualificações
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Reconhecimento e parcerias que reforçam nossa qualidade e confiança.
            </p>
          </div>

          {/* Faixa com logos */}
          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-90">
              {certifications.map((c) => (
                <CertLogo key={c.name} {...c} />
              ))}
            </div>
          </div>
        </div>

        {/* acabamento */}
        <div className="h-10 bg-gradient-to-b from-white to-slate-50" />
      </div>
    </section>
  );
}

function CertLogo({ name, src }: Cert) {
  return (
    <div
      className="grid h-12 w-32 place-items-center rounded-xl bg-slate-50 px-4"
      title={name}
    >
      <img
        src={src}
        alt={name}
        className="max-h-8 w-auto opacity-90"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="text-xs font-bold text-slate-600">{name}</span>
    </div>
  );
}

function StatBubble({ value, label, x, y }: Stat) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <div className="group relative">
        {/* círculo */}
        <div className="grid h-16 w-16 place-items-center rounded-full border border-sky-300/40 bg-slate-950/25 text-sky-300 shadow-[0_0_0_6px_rgba(56,189,248,.08)] backdrop-blur md:h-20 md:w-20">
          <span className="text-lg font-extrabold tracking-tight md:text-xl">
            {value}
          </span>
        </div>

        {/* pontinho decorativo */}
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-slate-200 ring-2 ring-slate-950/50" />

        {/* label */}
        <div className="mt-2 w-max max-w-[140px] rounded-md bg-white/95 px-2 py-1 text-center text-[11px] font-extrabold text-sky-700 shadow-sm ring-1 ring-slate-200/70">
          {label}
        </div>

        {/* glow hover */}
        <div className="pointer-events-none absolute -inset-6 rounded-full bg-sky-400/0 blur-2xl transition group-hover:bg-sky-400/15" />
      </div>
    </div>
  );
}
