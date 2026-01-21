const items = [
  { title: "Backup Gerenciado", desc: "Rotinas automáticas, retenção e recuperação." , active: true},
  { title: "Suporte Técnico", desc: "Atendimento rápido e acompanhamento." },
  { title: "Consultoria", desc: "Planejamento e melhoria contínua." },
  { title: "Segurança", desc: "Boas práticas, políticas e proteção." },
  { title: "Cloud", desc: "Migração e operação no Azure." },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
          Nossas soluções
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-500">
          Serviços completos para infraestrutura, produtividade e segurança.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className={[
                "group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm",
                "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/0 before:via-white/0 before:to-white/0",
                "hover:shadow-soft transition",
                it.active ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-transparent" : ""
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                <div className={[
                  "h-10 w-10 rounded-xl grid place-items-center font-black",
                  it.active ? "bg-white/20" : "bg-slate-900 text-white"
                ].join(" ")}>
                  ✓
                </div>

                <div className="flex-1">
                  <h3 className="font-bold">{it.title}</h3>
                  <p className={[ "mt-1 text-sm", it.active ? "text-white/85" : "text-slate-600" ].join(" ")}>
                    {it.desc}
                  </p>
                </div>
              </div>

              {/* detalhe “inclinado” */}
              <div className={[
                "pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rotate-12 rounded-3xl",
                it.active ? "bg-white/10" : "bg-slate-200/60"
              ].join(" ")} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
