const items = [
  {
    title: "Backup Gerenciado",
    desc: "Rotinas automáticas, retenção segura e recuperação rápida de dados.",
    active: true,
    icon: "",
    tone: "from-sky-500 to-indigo-600",
  },
  {
    title: "Suporte Técnico",
    desc: "Atendimento ágil, monitoramento contínuo e resposta proativa.",
    icon: "",
    tone: "from-sky-500 to-cyan-600",
  },
  {
    title: "Consultoria Especializada",
    desc: "Planejamento estratégico, otimização e melhoria contínua.",
    icon: "",
    tone: "from-sky-500 to-indigo-600",
  },
  {
    title: "Segurança da Informação",
    desc: "Proteção avançada, políticas de segurança e conformidade.",
    icon: "",
    tone: "from-sky-500 to-cyan-600",
  },
  {
    title: "Cloud Microsoft Azure",
    desc: "Migração, gestão e operação em nuvem com alta disponibilidade.",
    icon: "",
    tone: "from-sky-500 to-indigo-600",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="relative overflow-hidden bg-white py-20">
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

        {/* GRID */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className={[
                "group relative overflow-hidden rounded-2xl p-[1px] transition-all duration-300",
                "hover:-translate-y-1.5",
                it.active
                  ? "shadow-[0_18px_55px_rgba(2,6,23,.12)]"
                  : "shadow-[0_14px_45px_rgba(2,6,23,.10)]",
              ].join(" ")}
            >
              {/* BORDA (cinza -> azul no hover) */}
              <div
                className={[
                  "absolute inset-0 opacity-100 transition-all duration-300",
                  "bg-slate-200 group-hover:bg-sky-400",
                ].join(" ")}
              />

              {/* CARD (menor + cinza -> azul no hover) */}
              <div
                className={[
                  "relative h-full rounded-2xl border transition-all duration-300",
                  // menor:
                  "p-5 md:p-6",
                  // default cinza:
                  "border-slate-200 bg-slate-50",
                  // hover azul:
                  "group-hover:border-sky-400/60 group-hover:bg-sky-50",
                  // destaque opcional:
                  it.active ? "ring-2 ring-sky-400/20" : "",
                ].join(" ")}
              >
                {/* glow (aparece no hover) */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-sky-400/0 blur-3xl transition-all duration-300 group-hover:bg-sky-400/20" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sky-300/0 blur-3xl transition-all duration-300 group-hover:bg-sky-300/15" />

                <div className="relative z-10 flex items-start gap-4">
                  {/* ÍCONE */}
                  <div
                    className={[
                      "flex h-11 w-11 items-center justify-center rounded-xl text-base font-extrabold text-white",
                      `bg-gradient-to-br ${it.tone}`,
                      "shadow-[0_12px_28px_rgba(56,189,248,.20)]",
                      "ring-1 ring-white/50",
                    ].join(" ")}
                  >
                    {it.icon}
                  </div>

                  {/* TEXTO */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[15px] font-extrabold text-slate-950">{it.title}</h3>
                      {it.active && (
                        <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[11px] font-extrabold text-sky-700 ring-1 ring-sky-500/20">
                          Destaque
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{it.desc}</p>

                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-sky-200 transition" />

                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Confiabilidade", "Alta disponibilidade", "Escalabilidade"].map((tag) => (
                        <span
                          key={tag}
                          className={[
                            "rounded-full border px-3 py-1 text-[11px] font-semibold transition-all duration-300",
                            // default cinza:
                            "border-slate-200 bg-white text-slate-700",
                            // hover azul:
                            "group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-900",
                          ].join(" ")}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="relative z-10 mt-5">
                  <button
                    className={[
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-extrabold transition",
                      // default cinza:
                      "border-slate-200 bg-white text-slate-900 hover:bg-slate-100",
                      // hover azul:
                      "group-hover:border-sky-200 group-hover:bg-sky-600 group-hover:text-white group-hover:hover:bg-sky-700",
                    ].join(" ")}
                    type="button"
                  >
                    Ver detalhes <span className="opacity-80">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
