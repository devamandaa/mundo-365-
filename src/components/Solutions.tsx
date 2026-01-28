// Solutions.tsx

type SolutionItem = {
  title: string;
  desc: string;
  active?: boolean;
  icon: React.ReactNode; // pode ser emoji, texto ou componente SVG
  tone: string; // classes do gradient do Tailwind
  badge?: string;
  tags?: string[];
  ctaLabel?: string;
};

const items: SolutionItem[] = [
  {
    title: "Backup Gerenciado",
    desc: "O serviço de Backup Gerenciado consiste em guardar os dados de sua empresa com máxima segurança para que sejam restaurados no caso da perda dos originais.",
    active: true,
    icon: "",
    tone: "from-sky-500 to-indigo-600",
    badge: "Mais usado",
    tags: [""],
    ctaLabel: "",
  },
  {
    title: "Business Inteligence",
    desc: "Com a Mundo365 podemos criar incríveis soluções que de fato irão transformar a experiência de trabalho em sua empresa para uma forma mais moderna.",
    icon: "",
    tone: "from-violet-500 to-fuchsia-600",
    tags: [""],
    ctaLabel: "",
  },
  {
    title: "Planejamento e Migração",
    desc: "O serviço de Migração consiste em migrar os dados de seu ambiente de trabalho de origem para a plataforma da Microsoft 365.",
    icon: "",
    tone: "from-cyan-500 to-sky-600",
    tags: [""],
    ctaLabel: "",
  },
  {
    title: "Área de Trabalho Virtual",
    desc: "Conte com a Mundo365, um dos maiores Parceiros Microsoft do Brasil, para garantir produtividade de seus colaboradores em home-office.",
    icon: "",
    tone: "from-emerald-500 to-teal-600",
    tags: [""],
    ctaLabel: "",
  },
  {
    title: "Para Nuvem",
    desc: "Transformação digital está acontecendo ao redor do mundo: contamos com um misto de novas tecnologias capacitadas e processos bem definidos.",
    icon: "",
    tone: "from-blue-500 to-indigo-600",
    tags: [""],
    ctaLabel: "",
  },
  {
    title: "Treinamento",
    desc: "Treinamentos práticos e personalizados para capacitar equipes no uso eficiente das tecnologias, garantindo melhor desempenho, produtividade e adoção das soluções.",
    icon: "",
    tone: "from-orange-500 to-rose-600",
    tags: [""],
    ctaLabel: "",
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
            Confira abaixo as Soluções que a Mundo365 oferece para o seu ngócio atingir mais resultados com maior segurança.  
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

              {/* CARD */}
              <div
                className={[
                  "relative h-full rounded-2xl border transition-all duration-300",
                  "p-5 md:p-6",
                  "border-slate-200 bg-slate-50",
                  "group-hover:border-sky-400/60 group-hover:bg-sky-50",
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
                      "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-base font-extrabold text-white",
                      it.tone ? `bg-gradient-to-br ${it.tone}` : "bg-slate-900",
                      "shadow-[0_12px_28px_rgba(56,189,248,.20)]",
                      "ring-1 ring-white/50",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    {it.icon}
                  </div>

                  {/* TEXTO */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[15px] font-extrabold text-slate-950">
                        {it.title}
                      </h3>

                      {/* BADGE só aparece se existir */}
                      {it.badge && (
                        <span className="inline-flex items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[11px] font-extrabold text-sky-700 ring-1 ring-sky-500/20">
                          {it.badge}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {it.desc}
                    </p>

                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent transition group-hover:via-sky-200" />

                    {/* TAGS só aparecem se existir array e tiver itens */}
                    {it.tags && it.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {it.tags.map((tag) => (
                          <span
                            key={tag}
                            className={[
                              "rounded-full border px-3 py-1 text-[11px] font-semibold transition-all duration-300",
                              "border-slate-200 bg-white text-slate-700",
                              "group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-900",
                            ].join(" ")}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA só aparece se tiver label */}
                {it.ctaLabel && (
                  <div className="relative z-10 mt-5">
                    <button
                      className={[
                        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-extrabold transition",
                        "border-slate-200 bg-white text-slate-900 hover:bg-slate-100",
                        "group-hover:border-sky-200 group-hover:bg-sky-600 group-hover:text-white group-hover:hover:bg-sky-700",
                      ].join(" ")}
                      type="button"
                    >
                      {it.ctaLabel}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
