const items = [
  {
    title: "Backup Gerenciado",
    desc: "Rotinas automáticas, retenção segura e recuperação rápida de dados.",
    active: true,
    icon: "",
    tone: "from-sky-400 to-indigo-500",
  },
  {
    title: "Suporte Técnico",
    desc: "Atendimento ágil, monitoramento contínuo e resposta proativa.",
    icon: "",
    tone: "from-fuchsia-400 to-violet-500",
  },
  {
    title: "Consultoria Especializada",
    desc: "Planejamento estratégico, otimização e melhoria contínua.",
    icon: "",
    tone: "from-indigo-400 to-sky-500",
  },
  {
    title: "Segurança da Informação",
    desc: "Proteção avançada, políticas de segurança e conformidade.",
    icon: "",
    tone: "from-violet-400 to-fuchsia-500",
  },
  {
    title: "Cloud Microsoft Azure",
    desc: "Migração, gestão e operação em nuvem com alta disponibilidade.",
    icon: "",
    tone: "from-sky-400 to-cyan-500",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="relative overflow-hidden bg-white py-24">
      {/* FUNDO — BRANCO LIMPO */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */} 
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
            Nossas soluções
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-700 md:text-base">
            Serviços premium para empresas que precisam de{" "}
            <span className="font-semibold text-slate-900">estabilidade</span>,{" "}
            <span className="font-semibold text-slate-900">performance</span> e{" "}
            <span className="font-semibold text-slate-900">segurança</span> em ambientes críticos.
          </p>
        </div>

        {/* MINI STATS */}
        

        {/* GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className={[
                "group relative overflow-hidden rounded-3xl p-[1px] transition-all duration-300",
                "hover:-translate-y-2",
                it.active
                  ? "shadow-[0_30px_80px_rgba(99,102,241,.18)]"
                  : "shadow-[0_25px_70px_rgba(2,6,23,.10)]",
              ].join(" ")}
            >
              {/* BORDA GRADIENTE */}
              <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.55),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.55),transparent_55%),radial-gradient(circle_at_55%_95%,rgba(236,72,153,0.40),transparent_60%)]" />

              {/* CARD */}
              <div
                className={[
                  "relative h-full rounded-3xl border border-slate-200/70 bg-white p-7",
                  "transition-all duration-300",
                  it.active ? "ring-2 ring-sky-400/30" : "",
                ].join(" ")}
              >
                {/* glow decorativo */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-fuchsia-400/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-sky-400/12 blur-3xl" />

                <div className="relative z-10 flex items-start gap-5">
                  {/* ÍCONE */}
                  <div
                    className={[
                      "flex h-12 w-12 items-center justify-center rounded-2xl text-base font-extrabold text-white",
                      `bg-gradient-to-br ${it.tone}`,
                      "shadow-[0_14px_35px_rgba(56,189,248,.18)]",
                      "ring-1 ring-white/40",
                    ].join(" ")}
                  >
                    {it.icon}
                  </div>

                  {/* TEXTO */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-extrabold text-slate-950">{it.title}</h3>
                      {it.active && (
                        <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2.5 py-1 text-[11px] font-extrabold text-sky-700 ring-1 ring-sky-500/20">
                          Destaque
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{it.desc}</p>

                    <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Confiabilidade", "Alta disponibilidade", "Escalabilidade"].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200/70 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="relative z-10 mt-6">
                  <button
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-extrabold text-slate-900 bg-white hover:bg-slate-50 transition"
                    type="button"
                  >
                    Ver detalhes <span className="text-slate-500">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
