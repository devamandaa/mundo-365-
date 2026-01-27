export default function Partners() {
  const partners = [
    "Microsoft",
    "Kaspersky",
    "Acronis",
    "Adobe",
    "Veeam",
    "Fortinet",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16">
      {/* FUNDO CLEAN */}
      <div className="absolute inset-0 bg-white" />

      {/* GLOWS SUTIS (vermelho + grafite) */}
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_15%_25%,rgba(239,68,68,.12),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(15,23,42,.08),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(0,0,0,.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Parcerias estratégicas
          </span>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
            Tecnologias e fabricantes homologados
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
            Trabalhamos com soluções consolidadas no mercado para garantir
            estabilidade, segurança e confiança operacional.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p}
              className={[
                "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-5",
                "shadow-[0_16px_45px_rgba(2,6,23,.08)] transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(2,6,23,.12)]",
              ].join(" ")}
            >
              {/* glow hover vermelho */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-red-500/15 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-center justify-center">
                <span className="text-sm font-extrabold tracking-wide text-slate-800 group-hover:text-slate-950">
                  {p}
                </span>
              </div>

              {/* detalhe decorativo */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-44 w-44 rotate-12 rounded-3xl bg-slate-900/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
