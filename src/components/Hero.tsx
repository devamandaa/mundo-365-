// Hero.tsx
// ✅ Versão SEM IMAGEM no “visual”: nuvem + setas + linhas + “devices” (estilo SaaS)
// ✅ Logo no header em TEXTO + SVG (sem imagem colada)
// ✅ Menu Pills (igual ao print) dentro do header

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      {/* FUNDO — Dark Aurora */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.35),transparent_55%),radial-gradient(circle_at_75%_35%,rgba(59,130,246,0.35),transparent_50%),linear-gradient(to_bottom,#2B0A5B,#3A0CA3)]" />

      {/* HEADER */}
      <header className="relative z-10">
  <div className="mx-auto max-w-7xl px-6 pt-8">
    <div className="flex items-center justify-between gap-6">
      {/* ✅ LOGO (SEM IMAGEM): SVG + TEXTO */}
      <a href="#inicio" className="flex shrink-0 items-center gap-3">
        <LogoMundo365 />
      </a>

      {/* ✅ MENU — PILLS */}
      <div className="flex-1">
        <MenuPills />
      </div>

      {/* AÇÕES (reservado) */}
      <div className="hidden md:block shrink-0" />
    </div>
  </div>
</header>


      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[640px] items-center gap-12 py-16 md:grid-cols-2 md:py-20">
          {/* TEXTO */}
          <div className="text-white">
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Venha para a Mundo365 hospedar seus sistemas no{" "}
              <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
                Microsoft Azure
              </span>
            </h1>

            

          </div>

          {/* ✅ VISUAL (SEM IMAGEM) */}
          <div className="relative flex items-center justify-center">
            <HeroVisualNoImage />
          </div>
        </div>
      </div>

      {/* TRANSIÇÃO */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

/* ----------------------------
   MENU — PILLS (igual ao print)
----------------------------- */
function MenuPills() {
  const items = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre nós" },
    { id: "solucoes", label: "Soluções" },
    { id: "noticias", label: "Notícias" },
    { id: "contato", label: "Contato" },
  ];

  return (
    <nav className="hidden md:flex">
      <div className="rounded-full bg-sky-500/95 p-1 shadow-[0_14px_40px_rgba(2,6,23,.35)] backdrop-blur-xl">
        <ul className="flex items-center gap-1">
          {items.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={[
                  "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-extrabold transition-all duration-200",
                  index === 0
                    ? "bg-sky-700 text-slate-950 shadow-sm"
                    : "text-white/95 hover:bg-white/15 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ----------------------------
   LOGO “Mundo365” (SEM IMAGEM)
----------------------------- */
function LogoMundo365() {
  return (
    <div className="flex items-center gap-2">
      {/* símbolo simples estilo “orbital” */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        aria-hidden="true"
        className="drop-shadow-[0_8px_18px_rgba(34,211,238,.25)]"
      >
        <circle
          cx="14"
          cy="14"
          r="10"
          fill="none"
          stroke="rgba(34,211,238,.95)"
          strokeWidth="2"
        />
        <circle cx="21" cy="8" r="3" fill="rgba(236,72,153,.95)" />
        <path
          d="M6 14a8 8 0 0 1 16 0"
          fill="none"
          stroke="rgba(255,255,255,.65)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-sm font-extrabold tracking-wide text-white">
        MUNDO<span className="text-sky-300">365</span>
      </span>
    </div>
  );
}

/* -----------------------------------------
   HERO VISUAL (SEM IMAGEM): nuvem + setas +
   linhas + “devices” em cards (SaaS style)
------------------------------------------ */
function HeroVisualNoImage() {
  return (
    <div className="relative w-full max-w-xl">
      {/* brilho de fundo */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/12 blur-3xl" />

      {/* canvas */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(2,6,23,.45)] backdrop-blur-xl">
        {/* grid leve */}
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:36px_36px]" />

        {/* ✅ nuvem (SVG) */}
        <div className="absolute left-1/2 top-10 w-[86%] -translate-x-1/2">
          <CloudSvg />
        </div>

        {/* ✅ linhas “fluxo” (SVG) */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 75"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M18 38 C30 38, 38 30, 48 30 C60 30, 64 44, 76 44"
            stroke="rgba(236,72,153,.75)"
            strokeWidth="0.8"
            fill="none"
          />
          <path
            d="M18 40 C30 40, 38 32, 48 32 C60 32, 64 46, 76 46"
            stroke="rgba(34,211,238,.75)"
            strokeWidth="0.8"
            fill="none"
          />
          {/* pontinhos */}
          <circle cx="30" cy="38" r="1" fill="rgba(236,72,153,.95)" />
          <circle cx="52" cy="32" r="1" fill="rgba(34,211,238,.95)" />
          <circle cx="70" cy="45" r="1" fill="rgba(34,211,238,.95)" />
        </svg>

        {/* ✅ setas */}
        <ArrowDown className="absolute left-[58%] top-[32%] opacity-80" />
        <ArrowDown className="absolute left-[22%] top-[48%] opacity-70" />
        <ArrowUp className="absolute right-[12%] top-[18%] opacity-70" />

        {/* ✅ “celular” (card) */}
        <div className="absolute left-6 top-[44%] w-28 rotate-[-10deg]">
          <div className="rounded-2xl border border-white/15 bg-slate-950/35 p-3 shadow-[0_18px_50px_rgba(2,6,23,.45)] backdrop-blur">
            <div className="h-2 w-10 rounded-full bg-white/15" />
            <div className="mt-3 rounded-xl bg-gradient-to-br from-sky-400/30 to-fuchsia-500/25 p-3 ring-1 ring-white/10">
              <div className="text-[10px] font-extrabold text-white/80">
                DOWNLOAD
              </div>
              <div className="mt-1 text-xl font-extrabold text-sky-200">
                50%
              </div>
            </div>
          </div>
        </div>

        {/* ✅ “notebook” (card) */}
        <div className="absolute right-6 top-[32%] w-64 rotate-[10deg]">
          <div className="rounded-2xl border border-white/15 bg-slate-950/35 p-4 shadow-[0_18px_60px_rgba(2,6,23,.55)] backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="h-2 w-14 rounded-full bg-white/15" />
              <div className="h-2 w-6 rounded-full bg-white/10" />
            </div>

            <div className="mt-4 rounded-xl bg-gradient-to-br from-sky-400/25 to-indigo-500/20 p-4 ring-1 ring-white/10">
              <div className="h-20 w-full rounded-lg bg-white/10" />
              <div className="mt-3 h-2 w-24 rounded-full bg-white/15" />
            </div>

            <div className="mt-3 h-3 w-full rounded-xl bg-white/10" />
          </div>
        </div>

        {/* ✅ “dashboard” (card inferior) */}
        <div className="absolute bottom-6 right-10 w-52 rotate-[4deg]">
          <div className="rounded-2xl border border-white/15 bg-slate-950/35 p-4 shadow-[0_18px_50px_rgba(2,6,23,.45)] backdrop-blur">
            <div className="flex items-end gap-2">
              <div className="h-10 w-6 rounded-lg bg-white/15" />
              <div className="h-16 w-6 rounded-lg bg-sky-300/25" />
              <div className="h-12 w-6 rounded-lg bg-fuchsia-400/25" />
              <div className="h-20 w-6 rounded-lg bg-white/15" />
            </div>
            <div className="mt-3 h-2 w-28 rounded-full bg-white/15" />
          </div>
        </div>

        {/* glow por cima */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_25%,rgba(34,211,238,.16),transparent_45%),radial-gradient(circle_at_40%_60%,rgba(236,72,153,.12),transparent_55%)]" />
      </div>
    </div>
  );
}

/* ---------- SVGs utilitários ---------- */

function CloudSvg() {
  return (
    <svg viewBox="0 0 520 190" className="w-full">
      <defs>
        <linearGradient id="cloudStroke" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(236,72,153,.95)" />
          <stop offset="1" stopColor="rgba(34,211,238,.95)" />
        </linearGradient>
        <filter id="cloudGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M118 140c-34 0-62-22-62-51 0-25 20-46 48-50 10-28 40-48 77-48 31 0 58 14 72 35 10-6 23-10 37-10 34 0 62 22 62 49v2c34 5 60 27 60 53 0 30-31 55-70 55H118z"
        fill="rgba(2,6,23,.10)"
      />

      {/* linhas estilo “contorno” */}
      {[0, 10, 20, 30].map((offset) => (
        <path
          key={offset}
          d="M118 140c-34 0-62-22-62-51 0-25 20-46 48-50 10-28 40-48 77-48 31 0 58 14 72 35 10-6 23-10 37-10 34 0 62 22 62 49v2c34 5 60 27 60 53 0 30-31 55-70 55H118z"
          fill="none"
          stroke="url(#cloudStroke)"
          strokeWidth={3}
          opacity={0.55 - offset / 90}
          filter="url(#cloudGlow)"
          transform={`translate(${offset * 0.6}, ${-offset * 0.3})`}
        />
      ))}
    </svg>
  );
}

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="44" height="44" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3v14m0 0l-5-5m5 5l5-5"
        fill="none"
        stroke="rgba(34,211,238,.85)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUp({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="44" height="44" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21V7m0 0l-5 5m5-5l5 5"
        fill="none"
        stroke="rgba(34,211,238,.65)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
