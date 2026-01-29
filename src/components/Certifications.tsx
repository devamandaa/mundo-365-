import trofeuBg from "../assets/trofeu-bg.png.png";

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

  function SealMark({ s }: { s: Seal }) {
    if (s.variant === "ring") {
      return (
        <div className="relative grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm">
          <div className="absolute inset-0 rounded-full border-[3px] border-sky-600" />
          <div className="absolute inset-[6px] rounded-full border border-slate-200" />
          <span className="text-[11px] font-extrabold tracking-wide text-slate-800">
            {s.short}
          </span>
        </div>
      );
    }

    if (s.variant === "ringGold") {
      return (
        <div className="relative grid h-14 w-14 place-items-center rounded-full bg-white shadow-sm">
          <div className="absolute inset-0 rounded-full border-[3px] border-sky-600" />
          <div className="absolute inset-[7px] rounded-full border-[3px] border-amber-400" />
          <span className="text-[11px] font-extrabold tracking-wide text-slate-800">
            {s.short}
          </span>
        </div>
      );
    }

    if (s.variant === "shield") {
      return (
        <div className="relative grid h-14 w-14 place-items-center bg-white shadow-sm [clip-path:polygon(50%_0%,90%_15%,90%_60%,50%_100%,10%_60%,10%_15%)]">
          <div className="absolute inset-[3px] bg-slate-900 [clip-path:polygon(50%_0%,90%_15%,90%_60%,50%_100%,10%_60%,10%_15%)]" />
          <div className="absolute inset-[7px] bg-white [clip-path:polygon(50%_0%,90%_15%,90%_60%,50%_100%,10%_60%,10%_15%)]" />
          <span className="relative z-10 text-[11px] font-extrabold tracking-wide text-slate-900">
            {s.short}
          </span>
        </div>
      );
    }

    // diamond (MVP)
    return (
      <div className="relative grid h-14 w-14 place-items-center bg-white shadow-sm [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]">
        <div className="absolute inset-0 bg-sky-600/15 [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]" />
        <div className="absolute inset-[6px] bg-white [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]" />
        <span className="relative z-10 text-[11px] font-extrabold tracking-wide text-sky-700">
          {s.short}
        </span>
      </div>
    );
  }

  return (
    <section id="certificacoes" className="relative overflow-hidden">
      {/* FUNDO */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${trofeuBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "15% center",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-slate-950/30" />

      {/* ÁREA TOTAL */}
      <div className="relative mx-auto min-h-[820px] max-w-7xl px-6 pt-24 pb-32">
        {/* TÍTULO */}
        <div className="absolute top-14 left-1/2 -translate-x-1/2 text-center px-6">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
              Certificações e Qualificações
            </h2>
            <p className="mt-2 text-sm md:text-base text-white/90 drop-shadow-sm">
              Reconhecimento que garante qualidade e confiança nos serviços da Mundo 365
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-24 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden lg:block" />

          <div className="flex justify-center lg:justify-end">
            <div className="grid grid-cols-3 gap-5 w-[min(680px,100%)]">
              {cards.map((card, idx) => {
                const isLast = idx === lastIndex;

                return (
                  <div
                    key={card.title}
                    className={isLast ? "col-span-3 flex justify-center" : ""}
                  >
                    <div className="w-full max-w-[190px] rounded-2xl bg-[#e9e9e9] border border-white/40 shadow-[0_18px_35px_rgba(0,0,0,.40)] overflow-hidden">
                      <div className="p-3">
                        <div
                          className={[
                            "h-[120px] w-full rounded-2xl",
                            "bg-gradient-to-r",
                            card.color,
                            "flex items-center justify-center text-4xl",
                            "shadow-[0_10px_20px_rgba(0,0,0,.25)]",
                          ].join(" ")}
                        >
                          {card.icon}
                        </div>
                      </div>

                      <div className="bg-[#f5f5f5] px-4 py-3 text-center">
                        <div className="text-[12px] font-medium text-slate-700 leading-tight">
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

        {/* ✅ BARRA DE SELOS — SEM IMAGENS (só design) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[min(980px,95%)] rounded-2xl bg-white/95 px-10 py-7 shadow-[0_25px_60px_rgba(0,0,0,.45)] backdrop-blur">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {seals.map((s) => (
              <div key={s.short} className="flex items-center gap-4">
                <SealMark s={s} />
                <div className="leading-tight">
                  <div className="text-xs font-extrabold text-slate-900">{s.short}</div>
                  <div className="text-[11px] font-medium text-slate-600 max-w-[160px]">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
