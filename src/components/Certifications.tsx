// Certifications.tsx (SEM IMAGEM DE FUNDO / TOPO BRANCO IGUAL AO PRINT)

type Card = {
  title: string;
  color: string;
  icon: string;
};

type Seal = {
  label: string;
  short: string;
  variant: "ring" | "ringGold" | "shield" | "diamond"; // ✅ sem imagens
};

export default function Certifications() {
  const seals: Seal[] = [
    { label: "Microsoft Certified Trainer", short: "MCT", variant: "ring" },
    { label: "Microsoft Certified Solutions Expert", short: "MCSE", variant: "ringGold" },
    { label: "Microsoft Certified Solutions Associate", short: "MCSA", variant: "ring" },
    { label: "Azure Solutions Architect", short: "AZ", variant: "shield" },
    { label: "Most Valuable Professional", short: "MVP", variant: "diamond" },
  ];

  const cards: Card[] = [
    { title: "Windows and Devices", color: "from-fuchsia-700 to-pink-500", icon: "🏅" },
    { title: "Small and Midmarket Cloud Solutions", color: "from-fuchsia-700 to-pink-500", icon: "🏅" },
    { title: "Cloud Productivity", color: "from-fuchsia-700 to-pink-500", icon: "🏅" },

    { title: "Datacenter", color: "from-fuchsia-700 to-pink-500", icon: "🏅" },
    { title: "Security", color: "from-fuchsia-700 to-pink-500", icon: "🏅" },
    { title: "Cloud Platform", color: "from-indigo-600 to-cyan-400", icon: "✅" },

    { title: "Data Analytics", color: "from-indigo-600 to-cyan-400", icon: "✅" },
    { title: "Enterprise Mobility Management", color: "from-indigo-600 to-cyan-400", icon: "✅" },
    { title: "Communications", color: "from-indigo-600 to-cyan-400", icon: "✅" },

    { title: "Data Platform", color: "from-indigo-600 to-cyan-400", icon: "✅" },
  ];

  const lastIndex = cards.length - 1;

  return (
    <section id="certificacoes" className="relative overflow-hidden">
      {/* =========================
          ✅ TOPO BRANCO (IGUAL AO PRINT)
         ========================= */}
      <div className="relative z-20 bg-white py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-sky-600">
          Certificações e Qualificações
        </h2>

        {/* linha azul fininha */}
        <div className="mx-auto mt-3 h-[2px] w-36 rounded-full bg-sky-500" />

        <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-slate-600">
          Reconhecimento que garante qualidade e confiança nos serviços da Mundo 365
        </p>
      </div>

      {/* transição do branco para o fundo escuro */}
      

      {/* =========================
          ✅ FUNDO TECH (SEM PNG)
         ========================= */}
      <div className="relative">
        {/* fundo tech */}
        <div className="absolute inset-0 overflow-hidden bg-[#050814]">
          <div className="absolute left-[10%] top-[32%] h-[420px] w-[420px] rounded-full bg-cyan-400/30 blur-[120px]" />
          <div className="absolute left-[12%] top-[58%] h-[280px] w-[280px] rounded-full bg-sky-500/25 blur-[120px]" />
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(transparent,rgba(14,165,233,.25))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050814] via-[#050814]/95 to-black" />
        </div>

        {/* overlay suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />

        {/* =========================
            ✅ ÁREA TOTAL (CARDS + BARRA)
           ========================= */}
        <div className="relative mx-auto min-h-[820px] max-w-7xl px-6 pt-12 pb-48">
          {/* CARDS — menores + sem sobreposição */}
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="hidden lg:block" />

            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-3 gap-6 w-[min(620px,100%)]">
                {cards.map((card, idx) => {
                  const isLast = idx === lastIndex;

                  return (
                    <div
                      key={card.title}
                      className={isLast ? "col-span-3 flex justify-center" : ""}
                    >
                      <div className="w-full max-w-[165px] rounded-2xl bg-[#e9e9e9] border border-white/40 shadow-[0_18px_35px_rgba(0,0,0,.40)] overflow-hidden">
                        <div className="p-3">
                          <div
                            className={[
                              "h-[104px] w-full rounded-2xl",
                              "bg-gradient-to-r",
                              card.color,
                              "flex items-center justify-center text-3xl",
                              "shadow-[0_10px_20px_rgba(0,0,0,.25)]",
                            ].join(" ")}
                          >
                            {card.icon}
                          </div>
                        </div>

                        <div className="bg-[#f5f5f5] px-3 py-3 text-center">
                          <div className="text-[11px] font-semibold text-slate-700 leading-tight">
                            {card.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ✅ BARRA FINAL — IGUAL À FOTO (sem texto, só selos grandes) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[min(1120px,95%)] rounded-2xl bg-white px-10 py-8 shadow-[0_25px_60px_rgba(0,0,0,.45)] ring-1 ring-black/10">
            <div className="flex items-center justify-between gap-10">
              {seals.map((s) => (
                <div key={s.short} className="grid place-items-center">
                  <SealMarkBig s={s} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===========================
   ✅ SELOS GRANDES (BARRA FINAL)
=========================== */

function SealMarkBig({ s }: { s: Seal }) {
  // MCT / MCSA (círculo)
  if (s.variant === "ring") {
    return (
      <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white shadow-sm">
        <div className="absolute inset-0 rounded-full border-[4px] border-sky-700" />
        <div className="absolute inset-[10px] rounded-full border border-slate-200" />
        <span className="text-sm font-black tracking-wide text-slate-800">
          {s.short}
        </span>
      </div>
    );
  }

  // MCSE (círculo com anel dourado)
  if (s.variant === "ringGold") {
    return (
      <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white shadow-sm">
        <div className="absolute inset-0 rounded-full border-[4px] border-sky-700" />
        <div className="absolute inset-[11px] rounded-full border-[4px] border-amber-400" />
        <span className="text-sm font-black tracking-wide text-slate-800">
          {s.short}
        </span>
      </div>
    );
  }

  // AZ (escudo)
  if (s.variant === "shield") {
    return (
      <div
        className="relative grid h-20 w-20 place-items-center bg-white shadow-sm
        [clip-path:polygon(50%_0%,90%_15%,90%_60%,50%_100%,10%_60%,10%_15%)]"
      >
        <div
          className="absolute inset-[5px] bg-slate-900
          [clip-path:polygon(50%_0%,90%_15%,90%_60%,50%_100%,10%_60%,10%_15%)]"
        />
        <div
          className="absolute inset-[11px] bg-white
          [clip-path:polygon(50%_0%,90%_15%,90%_60%,50%_100%,10%_60%,10%_15%)]"
        />
        <span className="relative z-10 text-sm font-black tracking-wide text-slate-900">
          {s.short}
        </span>
      </div>
    );
  }

  // MVP (retângulo grande estilo print)
  return (
    <div className="flex h-20 w-[240px] items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-sky-600/10">
          <span className="text-lg font-black text-sky-700">{s.short}</span>
        </div>

        <div className="leading-tight">
          <div className="text-sm font-black text-slate-900">Microsoft</div>
          <div className="text-xs font-semibold text-slate-700">
            Most Valuable Professional
          </div>
        </div>
      </div>
    </div>
  );
}
