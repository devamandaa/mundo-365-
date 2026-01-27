import logoHero from "../assets/logo.png";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      {/* FUNDO — Dark Aurora */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.35),transparent_55%),radial-gradient(circle_at_75%_35%,rgba(59,130,246,0.35),transparent_50%),linear-gradient(to_bottom,#2B0A5B,#3A0CA3)]" />

      {/* HEADER */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-[0_20px_60px_rgba(2,6,23,.35)] backdrop-blur-xl md:px-6">

            {/* LOGO */}
            <a href="#inicio" className="flex items-center gap-3">
              <span className="text-sm font-extrabold tracking-wide text-white">
                Mundo365
              </span>
            </a>

            {/* MENU — PILLS */}
            <nav className="hidden items-center gap-2 md:flex">
              <a
                href="#inicio"
                className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-white/90"
              >
                Início
              </a>

              <a
                href="#sobre"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
              >
                Sobre nós
              </a>

              <a
                href="#solucoes"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
              >
                Soluções
              </a>

              <a
                href="#noticias"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
              >
                Notícias
              </a>

              <a
                href="#contato"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
              >
                Contato
              </a>
            </nav>

            {/* AÇÕES */}
            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 md:inline-flex">
                PT
              </button>
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
              <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
                Microsoft Azure
              </span>
            </h1>
          </div>

          {/* VISUAL */}
          <div className="relative flex items-center justify-center">
            <img
              src={logoHero}
              alt="Infraestrutura em nuvem Microsoft Azure"
              className="w-full max-w-xl object-contain"
            />
          </div>

        </div>
      </div>

      {/* TRANSIÇÃO */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
