// Certifications.tsx (SEM IMAGEM DE FUNDO / TOPO BRANCO IGUAL AO PRINT)

type Card = {
  title: string;
  color: string;
  icon: string;
};

type Seal = {
  label: string;
  short: string;
  variant: "ring" | "ringGold" | "shield" | "diamond";
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
      {/* ✅ TOPO BRANCO */}
      <div className="relative z-20 bg-white py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-sky-600">
          Certificações e Qualificações
        </h2>

        <div className="mx-auto mt-3 h-[2px] w-36 rounded-full bg-sky-500" />

        <p className="mx-auto mt-4 max-w-xl text-sm md:text-base text-slate-600">
          Reconhecimento que garante qualidade e confiança nos serviços da Mundo 365
        </p>
      </div>

      {/* ✅ FUNDO TECH */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden bg-[#050814]">
          <div className="absolute left-[10%] top-[32%] h-[420px] w-[420px] rounded-full bg-cyan-400/30 blur-[120px]" />
          <div className="absolute left-[12%] top-[58%] h-[280px] w-[280px] rounded-full bg-sky-500/25 blur-[120px]" />
          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[linear-gradient(transparent,rgba(14,165,233,.25))]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050814] via-[#050814]/95 to-black" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />

        {/* ✅ ÁREA TOTAL */}
        <div className="relative mx-auto min-h-[820px] max-w-7xl px-6 pt-12 pb-48">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* ✅ TROFÉU */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-[520px]">
                <div className="pointer-events-none absolute left-10 top-12 h-[320px] w-[320px] rounded-full bg-cyan-400/20 blur-[90px]" />
                <div className="pointer-events-none absolute left-24 top-44 h-[260px] w-[260px] rounded-full bg-sky-500/15 blur-[90px]" />

                <div className="relative mx-auto mt-2 flex items-center justify-center">
                  <TrophyTechUltra />
                </div>
              </div>
            </div>

            {/* ✅ CARDS */}
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

          {/* ✅ BARRA FINAL — RESPONSIVA (no mobile vira scroll, no desktop fica igual ao print) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[min(1200px,95%)]">
            <div className="rounded-2xl bg-white px-8 md:px-12 py-8 md:py-10 shadow-[0_25px_60px_rgba(0,0,0,.35)] ring-1 ring-black/10">
              <div className="flex items-center justify-between gap-10 overflow-x-auto md:overflow-visible">
                {seals.map((s) => (
                  <div key={s.short} className="shrink-0 grid place-items-center">
                    <SealMarkExact s={s} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ===========================
   ✅ TROFÉU TECH ULTRA (SVG)
=========================== */

function TrophyTechUltra() {
  // ✅ IDs únicos pra não conflitar com outros SVGs na página
  const id = "trophy_ultra";

  return (
    <div className="relative">
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/18 blur-[110px]" />
      <div className="pointer-events-none absolute left-1/2 top-[62%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/12 blur-[120px]" />

      <svg
        aria-hidden="true"
        width="520"
        height="520"
        viewBox="0 0 520 520"
        className="drop-shadow-[0_26px_80px_rgba(0,200,255,.20)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`${id}_holo`} x1="160" y1="60" x2="360" y2="460" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9AF3FF" stopOpacity="0.9" />
            <stop offset="0.45" stopColor="#19C6FF" stopOpacity="0.55" />
            <stop offset="1" stopColor="#005BFF" stopOpacity="0.24" />
          </linearGradient>

          <linearGradient id={`${id}_wf`} x1="0" y1="0" x2="520" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B7FBFF" stopOpacity="0.95" />
            <stop offset="1" stopColor="#2FB5FF" stopOpacity="0.6" />
          </linearGradient>

          <filter id={`${id}_glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="b" />
            <feColorMatrix
              in="b"
              type="matrix"
              values="
                0 0 0 0 0
                0 0 0 0 0.85
                0 0 0 0 1
                0 0 0 .55 0"
              result="c"
            />
            <feMerge>
              <feMergeNode in="c" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id={`${id}_baseGlow`} cx="50%" cy="50%" r="60%">
            <stop offset="0" stopColor="#00E5FF" stopOpacity="0.22" />
            <stop offset="1" stopColor="#00E5FF" stopOpacity="0" />
          </radialGradient>

          <mask id={`${id}_cupMask`}>
            <rect width="520" height="520" fill="black" />
            <path
              d="M185 105
                 C185 70, 335 70, 335 105
                 L325 230
                 C316 315, 278 350, 260 358
                 C242 350, 204 315, 195 230
                 Z"
              fill="white"
            />
          </mask>
        </defs>

        {/* BASE */}
        <g opacity="0.95">
          <ellipse cx="260" cy="460" rx="185" ry="28" fill={`url(#${id}_baseGlow)`} />
          <ellipse cx="260" cy="460" rx="130" ry="18" fill="rgba(0,229,255,.10)" />

          <circle cx="260" cy="460" r="150" fill="none" stroke={`url(#${id}_wf)`} strokeWidth="2" opacity="0.5" strokeDasharray="3 10" />
          <circle cx="260" cy="460" r="115" fill="none" stroke={`url(#${id}_wf)`} strokeWidth="1.6" opacity="0.38" />

          <path
            d="M110 460 H165
               C190 460, 200 445, 225 445
               H260
               C285 445, 295 432, 320 432
               H410"
            fill="none"
            stroke={`url(#${id}_wf)`}
            strokeWidth="1.8"
            opacity="0.42"
          />
          <path
            d="M145 478 H190
               C210 478, 218 466, 240 466
               H280
               C302 466, 310 454, 330 454
               H395"
            fill="none"
            stroke={`url(#${id}_wf)`}
            strokeWidth="1.4"
            opacity="0.34"
          />

          {[
            [165, 460],
            [225, 445],
            [260, 445],
            [320, 432],
            [410, 432],
            [190, 478],
            [240, 466],
            [280, 466],
            [330, 454],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3.2" fill="#9AF3FF" opacity="0.85" />
          ))}
        </g>

        {/* TROFÉU */}
        <g filter={`url(#${id}_glow)`}>
          <path
            d="M185 105
               C185 70, 335 70, 335 105
               L325 230
               C316 315, 278 350, 260 358
               C242 350, 204 315, 195 230
               Z"
            fill={`url(#${id}_holo)`}
            stroke={`url(#${id}_wf)`}
            strokeWidth="2"
            opacity="0.98"
          />

          <path
            d="M186 128
               C132 136, 118 216, 172 250
               C186 259, 194 250, 190 236
               C160 220, 160 152, 198 146"
            fill="none"
            stroke={`url(#${id}_wf)`}
            strokeWidth="2.2"
            opacity="0.82"
          />
          <path
            d="M334 128
               C388 136, 402 216, 348 250
               C334 259, 326 250, 330 236
               C360 220, 360 152, 322 146"
            fill="none"
            stroke={`url(#${id}_wf)`}
            strokeWidth="2.2"
            opacity="0.82"
          />

          <path
            d="M240 358
               L240 398
               C240 412, 280 412, 280 398
               L280 358"
            fill={`url(#${id}_holo)`}
            stroke={`url(#${id}_wf)`}
            strokeWidth="2"
            opacity="0.92"
          />

          <path
            d="M190 410
               C190 386, 330 386, 330 410
               L344 442
               C346 458, 174 458, 176 442
               Z"
            fill={`url(#${id}_holo)`}
            stroke={`url(#${id}_wf)`}
            strokeWidth="2"
            opacity="0.92"
          />
        </g>

        {/* MALHA */}
        <g mask={`url(#${id}_cupMask)`} opacity="0.62">
          {[120, 145, 170, 195, 220, 245, 270, 295, 318].map((y, i) => (
            <path key={`h-${i}`} d={`M195 ${y} L325 ${y}`} stroke={`url(#${id}_wf)`} strokeWidth="1.2" opacity="0.6" />
          ))}

          {[
            [210, 110, 215, 320],
            [240, 108, 242, 332],
            [260, 106, 260, 340],
            [280, 108, 278, 332],
            [310, 110, 305, 320],
          ].map(([x1, y1, x2, y2], i) => (
            <path key={`v-${i}`} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={`url(#${id}_wf)`} strokeWidth="1.1" opacity="0.55" />
          ))}

          {[
            [195, 145, 240, 120],
            [240, 120, 325, 145],
            [195, 170, 240, 145],
            [240, 145, 325, 170],
            [195, 195, 240, 170],
            [240, 170, 325, 195],
            [195, 220, 240, 195],
            [240, 195, 325, 220],
            [195, 245, 240, 220],
            [240, 220, 325, 245],
            [195, 270, 240, 245],
            [240, 245, 325, 270],
            [205, 295, 260, 270],
            [260, 270, 315, 295],
          ].map(([x1, y1, x2, y2], i) => (
            <path key={`d-${i}`} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={`url(#${id}_wf)`} strokeWidth="1.15" opacity="0.55" />
          ))}

          {[
            [240, 120], [260, 120],
            [210, 145], [240, 145], [280, 145], [310, 145],
            [210, 170], [240, 170], [280, 170], [310, 170],
            [210, 195], [240, 195], [280, 195], [310, 195],
            [210, 220], [240, 220], [280, 220], [310, 220],
            [210, 245], [240, 245], [280, 245], [310, 245],
            [220, 270], [260, 270], [300, 270],
            [230, 295], [260, 295], [290, 295],
          ].map(([x, y], i) => (
            <circle key={`n-${i}`} cx={x} cy={y} r="2.7" fill="#9AF3FF" opacity="0.9" />
          ))}
        </g>
      </svg>
    </div>
  );
}

/* ===========================
   ✅ SELOS (IGUAL AO PRINT)
=========================== */

function SealMarkExact({ s }: { s: Seal }) {
  if (s.short === "MCT") return <BadgeMCT />;
  if (s.short === "MCSE") return <BadgeMCSE />;
  if (s.short === "MCSA") return <BadgeMCSA />;
  if (s.short === "AZ") return <BadgeAZ />;
  return <BadgeMVP />;
}

function BadgeMCT() {
  return (
    <div className="relative h-[92px] w-[92px]">
      <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,.18)] ring-1 ring-black/10" />
      <div className="absolute inset-[6px] rounded-full border-[5px] border-sky-600" />
      <div className="absolute inset-[14px] rounded-full bg-white ring-1 ring-slate-200" />

      <div className="absolute left-1/2 top-[56px] h-[18px] w-[64px] -translate-x-1/2 rounded-md bg-amber-400/95 ring-1 ring-amber-500/40" />

      <div className="absolute left-1/2 top-[23px] -translate-x-1/2 text-center">
        <div className="flex items-center justify-center gap-1 text-[9px] font-bold text-slate-700">
          <span className="inline-grid grid-cols-2 gap-[1px]">
            <span className="h-[6px] w-[6px] bg-[#F25022]" />
            <span className="h-[6px] w-[6px] bg-[#7FBA00]" />
            <span className="h-[6px] w-[6px] bg-[#00A4EF]" />
            <span className="h-[6px] w-[6px] bg-[#FFB900]" />
          </span>
          Microsoft
        </div>
        <div className="mt-1 text-[18px] font-black tracking-wide text-slate-800">MCT</div>
      </div>

      <div className="absolute left-1/2 top-[10px] -translate-x-1/2 text-[7px] font-extrabold text-slate-500">
        MICROSOFT CERTIFIED TRAINER
      </div>

      <div className="absolute left-1/2 top-[78px] -translate-x-1/2 text-[8px] font-bold text-slate-600">
        Trainer
      </div>
      <div className="absolute left-1/2 top-[86px] -translate-x-1/2 text-[7px] font-semibold text-slate-500">
        2020 • 2021
      </div>
    </div>
  );
}

function BadgeMCSE() {
  return (
    <div className="relative grid h-[92px] w-[92px] place-items-center">
      <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,.18)] ring-1 ring-black/10" />
      <div className="absolute inset-[6px] rounded-full border-[6px] border-sky-600" />
      <div className="absolute inset-[16px] rounded-full bg-white ring-1 ring-slate-200" />

      <div className="absolute left-1/2 top-[52px] h-[20px] w-[68px] -translate-x-1/2 rounded-md bg-amber-400 ring-1 ring-amber-500/40" />

      <div className="absolute left-1/2 top-[24px] -translate-x-1/2 text-center">
        <div className="text-[9px] font-bold text-slate-600">Microsoft</div>
        <div className="mt-1 text-[16px] font-black tracking-wide text-slate-900">MCSE</div>
      </div>
    </div>
  );
}

function BadgeMCSA() {
  return (
    <div className="relative grid h-[92px] w-[92px] place-items-center">
      <div className="absolute inset-0 rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,.18)] ring-1 ring-black/10" />
      <div className="absolute inset-[6px] rounded-full border-[5px] border-sky-600" />
      <div className="absolute inset-[14px] rounded-full bg-white ring-1 ring-slate-200" />

      <div className="absolute left-1/2 top-[10px] -translate-x-1/2 text-[7px] font-extrabold text-slate-500">
        MICROSOFT CERTIFIED PROFESSIONAL
      </div>

      <div className="absolute left-1/2 top-[28px] -translate-x-1/2 text-center">
        <div className="flex items-center justify-center gap-1 text-[9px] font-bold text-slate-700">
          <span className="inline-grid grid-cols-2 gap-[1px]">
            <span className="h-[6px] w-[6px] bg-[#F25022]" />
            <span className="h-[6px] w-[6px] bg-[#7FBA00]" />
            <span className="h-[6px] w-[6px] bg-[#00A4EF]" />
            <span className="h-[6px] w-[6px] bg-[#FFB900]" />
          </span>
          Microsoft
        </div>
        <div className="mt-1 text-[16px] font-black tracking-wide text-slate-700">MCSA</div>
      </div>
    </div>
  );
}

function BadgeAZ() {
  return (
    <div className="relative grid h-[92px] w-[110px] place-items-center">
      <div className="absolute inset-x-[10px] top-[6px] bottom-[6px] [clip-path:polygon(50%_0%,88%_14%,88%_62%,50%_100%,12%_62%,12%_14%)] bg-white shadow-[0_10px_25px_rgba(0,0,0,.18)] ring-1 ring-black/10" />
      <div className="absolute inset-x-[16px] top-[12px] bottom-[12px] [clip-path:polygon(50%_0%,88%_14%,88%_62%,50%_100%,12%_62%,12%_14%)] bg-slate-900/90" />
      <div className="absolute inset-x-[22px] top-[18px] bottom-[18px] [clip-path:polygon(50%_0%,88%_14%,88%_62%,50%_100%,12%_62%,12%_14%)] bg-white" />

      <div className="absolute left-1/2 top-[12px] h-[18px] w-[86px] -translate-x-1/2 rounded-md bg-slate-900" />
      <div className="absolute left-1/2 top-[14px] -translate-x-1/2 text-[8px] font-extrabold text-white">
        Microsoft Certified
      </div>

      <div className="absolute left-1/2 top-[34px] -translate-x-1/2 text-center leading-tight">
        <div className="text-[9px] font-black text-slate-700">AZURE SOLUTIONS</div>
        <div className="text-[9px] font-black text-slate-700">ARCHITECT</div>
      </div>

      <div className="absolute left-1/2 top-[62px] h-[16px] w-[70px] -translate-x-1/2 rounded-md bg-sky-700" />
      <div className="absolute left-1/2 top-[64px] -translate-x-1/2 text-[9px] font-black text-white">
        EXPERT
      </div>

      <div className="absolute left-1/2 top-[80px] -translate-x-1/2 text-[10px] text-sky-700">
        ★★★
      </div>
    </div>
  );
}

function BadgeMVP() {
  return (
    <div className="flex h-[92px] w-[310px] items-center rounded-xl bg-[#0B66C3] px-6 shadow-[0_10px_25px_rgba(0,0,0,.18)] ring-1 ring-black/10">
      <div className="relative mr-5 grid h-[52px] w-[70px] place-items-center">
        <div className="absolute inset-0 [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] bg-white" />
        <div className="relative text-[22px] font-black text-[#0B66C3]">MVP</div>
      </div>

      <div className="leading-tight text-white">
        <div className="text-[22px] font-black">Microsoft</div>
        <div className="text-[16px] font-semibold opacity-95">Most Valuable</div>
        <div className="text-[16px] font-semibold opacity-95">Professional</div>
      </div>
    </div>
  );
}
