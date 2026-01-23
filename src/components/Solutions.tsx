const items = [
  {
    title: "Backup Gerenciado",
    desc: "Rotinas automáticas, retenção segura e recuperação rápida de dados.",
    active: true,
  },
  {
    title: "Suporte Técnico",
    desc: "Atendimento ágil, monitoramento contínuo e resposta proativa.",
  },
  {
    title: "Consultoria Especializada",
    desc: "Planejamento estratégico, otimização e melhoria contínua.",
  },
  {
    title: "Segurança da Informação",
    desc: "Proteção avançada, políticas de segurança e conformidade.",
  },
  {
    title: "Cloud Microsoft Azure",
    desc: "Migração, gestão e operação em nuvem com alta disponibilidade.",
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="relative overflow-hidden py-24">
      {/* FUNDO MUNDO365 (igual ao Hero) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b0a6d] via-[#6a2bbf] to-[#22d3ee]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,.45),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,.55),transparent_40%),radial-gradient(circle_at_60%_80%,rgba(56,189,248,.35),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Infraestrutura • Cloud • Segurança
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Nossas soluções
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
            Serviços completos para empresas que precisam de estabilidade,
            performance e segurança em ambientes críticos.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className={[
                "group relative overflow-hidden rounded-3xl p-7 transition-all duration-300",
                "border border-white/15 backdrop-blur-xl",
                "bg-white/10 shadow-[0_25px_60px_rgba(0,0,0,.45)]",
                "hover:-translate-y-2 hover:bg-white/15",
                it.active ? "ring-2 ring-cyan-400/50" : "",
              ].join(" ")}
            >
              {/* glow ativo */}
              {it.active && (
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-400/30 blur-3xl" />
              )}

              <div className="relative z-10 flex items-start gap-5">
                {/* ÍCONE */}
                <div
                  className={[
                    "flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-extrabold text-slate-900",
                    "bg-gradient-to-br from-[#22d3ee] to-[#0ea5e9]",
                    "shadow-[0_15px_40px_rgba(34,211,238,.45)]",
                  ].join(" ")}
                >
                  ✓
                </div>

                {/* TEXTO */}
                <div className="flex-1">
                  <h3 className="text-lg font-extrabold text-white">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">
                    {it.desc}
                  </p>
                </div>
              </div>

              {/* detalhe decorativo */}
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-52 w-52 rounded-3xl bg-white/10 rotate-12" />
            </div>
          ))}
        </div>
      </div>

      {/* TRANSIÇÃO */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
