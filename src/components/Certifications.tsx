export default function Certifications() {
  const badges = Array.from({ length: 6 }).map((_, i) => ({
    title: `Certificação ${i + 1}`,
    desc: "Descrição curta do selo.",
  }));

  const seals = ["Microsoft", "MCT", "MCSA", "MCP"];

  return (
    <section id="certificacoes" className="relative overflow-hidden bg-white py-16">
      {/* fundo clean */}
      <div className="absolute inset-0 bg-white" />

      {/* glows sutis (vermelho + grafite) */}
      <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_18%_25%,rgba(239,68,68,.12),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(15,23,42,.08),transparent_42%),radial-gradient(circle_at_55%_92%,rgba(0,0,0,.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Certificações • Qualificações
          </span>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
            Certificações e Qualificações
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
            Credenciais que reforçam nossa atuação técnica e compromisso com boas
            práticas, segurança e excelência operacional.
          </p>
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((b, idx) => (
            <div
              key={b.title}
              className={[
                "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6",
                "shadow-[0_16px_45px_rgba(2,6,23,.08)] transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(2,6,23,.12)]",
              ].join(" ")}
            >
              {/* glow hover */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-red-500/12 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex items-start gap-4">
                {/* ícone */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 font-black text-slate-900">
                  {/* variação simples pra não ficar tudo igual */}
                  {idx % 3 === 0 ? "★" : idx % 3 === 1 ? "✓" : "⬤"}
                </div>

                <div className="flex-1">
                  <div className="font-extrabold text-slate-950">{b.title}</div>
                  <div className="mt-1 text-sm text-slate-700">{b.desc}</div>

                  {/* mini “tag” de destaque */}
                  <div className="mt-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-red-500" />
                    Validação e boas práticas
                  </div>
                </div>
              </div>

              {/* detalhe decorativo */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-44 w-44 rotate-12 rounded-3xl bg-slate-900/5" />
            </div>
          ))}
        </div>

        {/* selos / siglas */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {seals.map((x) => (
            <div
              key={x}
              className={[
                "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 py-3",
                "shadow-[0_12px_34px_rgba(2,6,23,.07)] transition-all duration-300",
                "hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(2,6,23,.10)]",
              ].join(" ")}
            >
              <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-red-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 text-sm font-extrabold tracking-wide text-slate-800 group-hover:text-slate-950">
                {x}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
