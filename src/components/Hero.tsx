// Hero.tsx
import heroImg from "../assets/logo.png.png";

export default function Hero() {
  const useLeftImage = true;  // lado esquerdo com heroImg
  const useAzureA = true;     // lado direito com o A em SVG

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* FUNDO (igual print) */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#3b006f_0%,#5b1fa6_28%,#6b36cf_52%,#4c58e6_72%,#00c2fb_100%)]" />

      {/* glows fortes (igual print) */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-fuchsia-500/30 blur-[140px]" />
      <div className="pointer-events-none absolute -right-28 -top-20 h-[520px] w-[520px] rounded-full bg-cyan-400/25 blur-[150px]" />

      {/* HEADER (topo) */}
      <header className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 pt-7">
          <div className="flex items-center justify-between gap-6">
            <a href="#inicio" className="flex shrink-0 items-center gap-3">
              <LogoMundo365 />
            </a>

            <div className="flex-1">
              <MenuPills />
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <LanguageButton />
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO (igual print: left visual + right A + texto) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[620px] items-center gap-8 py-10 md:grid-cols-2 md:py-14">
          {/* LADO ESQUERDO: sua imagem (nuvem / notebook etc.) */}
          <div className="relative flex items-center justify-center md:justify-start">
            {useLeftImage ? (
              <div className="relative w-full max-w-[520px]">
                <img
                  src={heroImg}
                  alt="Cloud"
                  className="w-full drop-shadow-[0_30px_120px_rgba(2,6,23,.70)]"
                />
              </div>
            ) : (
              <HeroVisualNoImage />
            )}
          </div>

          {/* LADO DIREITO: A do Azure + seta + texto */}
          <div className="relative flex flex-col items-center md:items-start">
            {/* A grande */}
            {useAzureA && (
              <div className="relative w-full">
                <div className="relative mx-auto md:mx-0 w-[220px] md:w-[260px]">
                  <AzureA className="h-[190px] w-[190px] md:h-[230px] md:w-[230px] drop-shadow-[0_24px_65px_rgba(0,0,0,.40)]" />
                </div>

                {/* setinha branca do lado (igual print) */}
                <div className="absolute right-6 top-[92px] md:right-16 md:top-[108px]">
                  <span className="text-5xl font-light text-white/90 select-none">
                    ›
                  </span>
                </div>
              </div>
            )}

            {/* texto (igual print) */}
            <h1
              className="
                mt-6
                text-center md:text-left
                text-[22px] leading-[1.15]
                md:text-[34px]
                font-extrabold
                tracking-tight
                text-white
                drop-shadow-[0_6px_18px_rgba(0,0,0,.55)]
              "
            >
              Venha para a Mundo365 hospedar
              <br />
              seus sistemas no Microsoft{" "}
              <span
                className="
                  relative inline-block
                  italic font-extrabold
                  text-white
                "
              >
                Azure
                {/* underline 3 risquinhos (igual print) */}
                <span className="absolute -bottom-3 left-0 flex gap-2">
                  <span className="h-[3px] w-7 rounded-full bg-white/90" />
                  <span className="h-[3px] w-7 rounded-full bg-white/90" />
                  <span className="h-[3px] w-7 rounded-full bg-white/90" />
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* degradê de saída */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/10" />
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
      <div className="rounded-full bg-sky-500/95 p-1 shadow-[0_14px_40px_rgba(2,6,23,.35)] backdrop-blur-xl ring-1 ring-black/5">
        <ul className="flex items-center gap-1">
          {items.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={[
                  "inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-extrabold transition-all duration-200",
                  index === 0
                    ? "bg-white text-slate-950 shadow-sm"
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

/* ---------------- LOGO ---------------- */
function LogoMundo365() {
  return (
    <div className="flex items-center gap-3">
      <svg width="44" height="44" viewBox="0 0 48 48" aria-hidden="true">
        <defs>
          <linearGradient id="orbitBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>

        <path
          d="M24 4a20 20 0 1 1-14 6"
          fill="none"
          stroke="url(#orbitBlue)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle
          cx="24"
          cy="24"
          r="14"
          fill="none"
          stroke="url(#orbitBlue)"
          strokeWidth="2.6"
          opacity="0.9"
        />
        <circle cx="36" cy="10" r="4.6" fill="#22d3ee" />
      </svg>

      <span className="text-xl font-semibold tracking-wide text-white">
        MUNDO <span className="text-cyan-300 font-bold">365</span>
      </span>
    </div>
  );
}

/* ---------------- BOTÃO IDIOMA ---------------- */
function LanguageButton() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-white ring-1 ring-white/10 backdrop-blur-xl hover:bg-white/15 transition"
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

/* ---------------- HERO SEM IMAGEM ---------------- */
function HeroVisualNoImage() {
  return (
    <div className="flex h-[420px] w-full max-w-xl items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <span className="text-white/70 font-semibold">
        Visual SaaS sem imagem
      </span>
    </div>
  );
}

/* ---------------- AZURE A (SVG EM CÓDIGO) ---------------- */
/* ---------------- AZURE A — IGUAL AO DA FOTO ---------------- */
function AzureA({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 300"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <defs>
        {/* Gradiente principal (lado claro) */}
        <linearGradient id="azMain" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>

        {/* Gradiente sombra (lado escuro) */}
        <linearGradient id="azDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B5AA7" />
          <stop offset="100%" stopColor="#083A78" />
        </linearGradient>

        {/* Sombra suave */}
        <filter id="azShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="20"
            stdDeviation="18"
            floodColor="#000000"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      {/* PARTE ESCURA (lado esquerdo do A) */}
      <path
        filter="url(#azShadow)"
        d="
          M110 30
          L40 260
          H95
          L140 120
          L185 260
          H235
          L165 30
          Z
        "
        fill="url(#azDark)"
      />

      {/* PARTE CLARA (lado direito do A) */}
      <path
        d="
          M165 30
          L235 30
          L300 260
          H245
          L205 140
          L165 260
          H115
          Z
        "
        fill="url(#azMain)"
      />

      {/* RECORTE INTERNO (formato do A) */}
      <path
        d="
          M150 150
          L210 190
          L170 190
          Z
        "
        fill="#0EA5E9"
        opacity="0.9"
      />
    </svg>
  );
}
