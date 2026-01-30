// Hero.tsx
import heroImg from "../assets/logo.png.png";


export default function Hero() {
  const useImage = true; // true = usa imagem / false = usa visual sem imagem
  const useIllustration = false; // true = usa o SVG (HeroIllustration)

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* FUNDO — Light */}
     <div
  className="
    absolute inset-0 overflow-hidden
    bg-[linear-gradient(120deg,#3b006f_0%,#5b1fa6_28%,#6b36cf_52%,#4c58e6_72%,#00c2fb_100%)]

    before:absolute before:content-['']
    before:top-[-22%] before:left-[-12%]
    before:w-[650px] before:h-[650px]
    before:bg-[rgba(217,70,239,0.22)]
    before:rounded-full before:blur-[150px]

    after:absolute after:content-['']
    after:top-[-18%] after:right-[-14%]
    after:w-[620px] after:h-[620px]
    after:bg-[rgba(0,194,251,0.22)]
    after:rounded-full after:blur-[160px]
  "
/>


     
     

      {/* HEADER */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-8">
          <div className="flex items-center justify-between gap-6">
            {/* LOGO */}
            <a href="#inicio" className="flex shrink-0 items-center gap-3">
              <LogoMundo365 />
            </a>

            {/* MENU */}
            <div className="flex-1">
              <MenuPills />
            </div>

            {/* AÇÕES */}
            <div className="shrink-0 flex items-center gap-3">
              
              <LanguageButton />
            </div>
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
    
    <span className="
      text-cyan-300
      drop-shadow-[0_0_18px_rgba(34,211,238,0.55)]
      font-extrabold
    ">
      Microsoft Azure
    </span>

  </h1>
</div>


          {/* VISUAL */}
          <div className="relative flex items-center justify-center">
            {useIllustration ? (
              <HeroIllustration />
            ) : useImage ? (
              <HeroImage />
            ) : (
              <HeroVisualNoImage />
            )}
          </div>
        </div>
      </div>

      {/* TRANSIÇÃO */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-slate-950" />
    </section>
  );
}

/* ---------------- MENU ---------------- */

function MenuPills() {
  const items = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Notícias", href: "#noticias" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="hidden md:flex justify-center">
      <div className="rounded-full bg-sky-500/95 dark:bg-white/10 p-1 shadow-[0_14px_40px_rgba(2,6,23,.35)] backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/10">
        <ul className="flex items-center gap-1">
          {items.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={[
                  "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-extrabold transition-all duration-200",
                  index === 0
                    ? "bg-white text-slate-950 shadow-sm dark:bg-white/85 dark:text-slate-950"
                    : "text-white/95 hover:bg-white/15 hover:text-white dark:text-white/90 dark:hover:bg-white/10",
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

/* ---------------- LOGO ---------------- */
function LogoMundo365() {
  return (
    <div className="flex items-center gap-3">
  <svg
    width="44"
    height="44"
    viewBox="0 0 48 48"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="orbitBlue" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>

    {/* ORBITA EXTERNA */}
    <path
      d="M24 4a20 20 0 1 1-14 6"
      fill="none"
      stroke="url(#orbitBlue)"
      strokeWidth="3.2"
      strokeLinecap="round"
    />

    {/* ORBITA INTERNA */}
    <circle
      cx="24"
      cy="24"
      r="14"
      fill="none"
      stroke="url(#orbitBlue)"
      strokeWidth="2.6"
      opacity="0.9"
    />

    {/* BOLINHA SATÉLITE */}
    <circle
      cx="36"
      cy="10"
      r="4.6"
      fill="#22d3ee"
    />
  </svg>

  <span className="text-xl font-semibold tracking-wide text-white">
    MUNDO
    <span className="text-cyan-300 font-bold">
      365
    </span>
  </span>
</div>

  );
}



/* ---------------- BOTÃO IDIOMA ---------------- */

function LanguageButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-full bg-black/10 dark:bg-white/10 px-3 py-2 text-sm font-bold text-slate-900 dark:text-white ring-1 ring-black/10 dark:ring-white/10 backdrop-blur-xl hover:bg-black/15 dark:hover:bg-white/15 transition"
      aria-label="Idioma"
    >
      <span className="opacity-90">PT</span>
      <span className="text-base leading-none">🇧🇷</span>
      <ChevronDown />
    </button>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- HERO COM IMAGEM ---------------- */

function HeroImage() {
  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />

      <img
        src={heroImg}
        alt="Cloud SaaS"
        className="relative z-10 w-full rounded-3xl shadow-[0_40px_120px_rgba(2,6,23,.6)]"
      />
    </div>
  );
}

/* ---------------- HERO SEM IMAGEM ---------------- */

function HeroVisualNoImage() {
  return (
    <div className="flex h-[420px] w-full max-w-xl items-center justify-center rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/5 backdrop-blur-xl">
      <span className="text-slate-600 dark:text-white/70 font-semibold">
        Visual SaaS sem imagem
      </span>
    </div>
  );
}

/* ---------------- HERO ILUSTRAÇÃO (SVG) ---------------- */

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-xl">
      {/* glow atrás */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-80 w-80 rounded-full bg-cyan-400/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-14 -left-10 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-[140px]" />

      <svg
        viewBox="0 0 920 740"
        className="relative z-10 w-full rounded-[32px] shadow-[0_30px_90px_rgba(2,6,23,.35)] ring-1 ring-white/10"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2b0a5b" />
            <stop offset="45%" stopColor="#6d28d9" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>

          <filter id="pinkGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          <linearGradient id="neon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f0abfc" />
            <stop offset="45%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>

          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="18"
              floodColor="rgba(0,0,0,.35)"
            />
          </filter>

          <clipPath id="clip">
            <rect x="20" y="20" width="880" height="700" rx="36" />
          </clipPath>
        </defs>

        <g clipPath="url(#clip)">
          {/* card base */}
          <rect x="20" y="20" width="880" height="700" fill="url(#bg)" />

          {/* brilho topo direito */}
          <circle
            cx="720"
            cy="120"
            r="140"
            fill="rgba(34,211,238,.28)"
            filter="url(#cyanGlow)"
          />
          <circle
            cx="700"
            cy="110"
            r="70"
            fill="rgba(255,255,255,.18)"
            filter="url(#cyanGlow)"
          />

          {/* nuvem */}
          <g filter="url(#softShadow)">
            <path
              d="M205 290c-56 0-102-36-102-84 0-42 33-77 79-83 17-47 68-81 132-81 54 0 100 24 125 62 18-12 40-19 65-19 58 0 105 38 105 86v4c58 9 101 48 101 95 0 53-52 96-118 96H205z"
              fill="rgba(255,255,255,.10)"
            />
            {[0, 10, 20, 30, 40].map((o) => (
              <path
                key={o}
                d="M205 290c-56 0-102-36-102-84 0-42 33-77 79-83 17-47 68-81 132-81 54 0 100 24 125 62 18-12 40-19 65-19 58 0 105 38 105 86v4c58 9 101 48 101 95 0 53-52 96-118 96H205z"
                fill="none"
                stroke="url(#neon)"
                strokeWidth={3}
                opacity={Math.max(0.12, 0.55 - o / 85)}
                filter="url(#cyanGlow)"
                transform={`translate(${o * 0.8}, ${-o * 0.45})`}
              />
            ))}
          </g>

          {/* feixe */}
          <path
            d="M320 250 C360 235, 410 210, 470 200"
            stroke="rgba(244,114,182,.95)"
            strokeWidth="6"
            strokeLinecap="round"
            filter="url(#pinkGlow)"
          />
          <circle
            cx="345"
            cy="240"
            r="6"
            fill="rgba(244,114,182,.9)"
            filter="url(#pinkGlow)"
          />
          <circle
            cx="395"
            cy="222"
            r="5"
            fill="rgba(34,211,238,.85)"
            filter="url(#cyanGlow)"
          />

          {/* setas */}
          <path
            d="M720 120v110m0 0l-28-28m28 28l28-28"
            stroke="rgba(34,211,238,.65)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M280 350v70m0 0l-22-22m22 22l22-22"
            stroke="rgba(34,211,238,.55)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* celular */}
          <g filter="url(#softShadow)">
            <rect
              x="120"
              y="380"
              width="140"
              height="210"
              rx="28"
              fill="rgba(2,6,23,.30)"
              stroke="rgba(255,255,255,.12)"
            />
            <rect
              x="148"
              y="430"
              width="86"
              height="110"
              rx="18"
              fill="rgba(34,211,238,.18)"
              stroke="rgba(255,255,255,.12)"
            />
            <text
              x="155"
              y="460"
              fill="rgba(255,255,255,.75)"
              fontSize="16"
              fontWeight="800"
            >
              DOWNLOAD
            </text>
            <text
              x="155"
              y="510"
              fill="rgba(34,211,238,.95)"
              fontSize="44"
              fontWeight="900"
            >
              50%
            </text>
            <circle
              cx="190"
              cy="405"
              r="10"
              fill="rgba(34,211,238,.35)"
              filter="url(#cyanGlow)"
            />
          </g>

          {/* notebook */}
          <g filter="url(#softShadow)">
            <rect
              x="520"
              y="320"
              width="280"
              height="170"
              rx="22"
              fill="rgba(2,6,23,.35)"
              stroke="rgba(255,255,255,.12)"
            />
            <rect
              x="540"
              y="340"
              width="240"
              height="120"
              rx="16"
              fill="url(#screen)"
              opacity="0.95"
            />
            <path
              d="M552 430 L590 410 L630 420 L670 380 L710 395 L760 360"
              fill="none"
              stroke="rgba(255,255,255,.9)"
              strokeWidth="6"
              strokeLinecap="round"
              filter="url(#cyanGlow)"
            />
            <path
              d="M520 490h280l-34 48H554z"
              fill="rgba(2,6,23,.45)"
            />
          </g>

          {/* dashboard */}
          <g filter="url(#softShadow)">
            <path
              d="M520 600 L760 520 L860 590 L620 670 Z"
              fill="rgba(2,6,23,.35)"
              stroke="rgba(255,255,255,.12)"
            />
            <rect
              x="640"
              y="545"
              width="36"
              height="110"
              rx="10"
              fill="rgba(255,255,255,.16)"
            />
            <rect
              x="690"
              y="525"
              width="36"
              height="130"
              rx="10"
              fill="rgba(34,211,238,.22)"
            />
            <rect
              x="740"
              y="560"
              width="36"
              height="95"
              rx="10"
              fill="rgba(244,114,182,.18)"
            />
          </g>

          {/* circuit lines */}
          <g filter="url(#pinkGlow)" opacity="0.95">
            <path
              d="M280 520 H430 V610 H590"
              stroke="rgba(244,114,182,.85)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M280 560 H390 V650 H560"
              stroke="rgba(34,211,238,.65)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M340 470 V540 H470"
              stroke="rgba(244,114,182,.7)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* brilho geral */}
          <rect x="20" y="20" width="880" height="700" fill="rgba(255,255,255,.04)" />
        </g>
      </svg>
    </div>
  );
}
