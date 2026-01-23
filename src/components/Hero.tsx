export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* FUNDO MUNDO365 (fiel à imagem: roxo → roxo → ciano) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b0a6d] via-[#6a2bbf] to-[#22d3ee]" />

      {/* GLOWS / LUZES NEON (roxo + ciano) */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,.45),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,.55),transparent_40%),radial-gradient(circle_at_60%_80%,rgba(56,189,248,.35),transparent_50%)]" />

      {/* HEADER (dentro do hero) */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-xl md:px-6">
            {/* LOGO */}
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src="/logo-mundo365.svg"
                alt="Mundo365"
                className="h-8 w-auto"
              />
              <span className="hidden text-sm font-semibold tracking-wide text-white/85 md:inline">
                Cloud • Azure • Segurança
              </span>
            </a>

            {/* MENU */}
            <nav className="hidden items-center gap-7 text-sm font-semibold text-white/85 md:flex">
              <a className="hover:text-white" href="#inicio">
                Início
              </a>
              <a className="hover:text-white" href="#sobre">
                Sobre nós
              </a>
              <a className="hover:text-white" href="#solucoes">
                Soluções
              </a>
              <a className="hover:text-white" href="#noticias">
                Notícias
              </a>
              <a className="hover:text-white" href="#contato">
                Contato
              </a>
            </nav>

            {/* AÇÕES */}
            <div className="flex items-center gap-3">
              <button className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur hover:bg-white/15 md:inline-flex">
                PT
              </button>

              <a
                href="#contato"
                className="rounded-full bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_0_30px_rgba(34,211,238,.45)] hover:brightness-110"
              >
                Fale conosco
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[640px] items-center gap-12 py-16 md:grid-cols-2 md:py-20">
          {/* TEXTO */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Cloud • Segurança • Performance
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Venha para a Mundo365 hospedar seus sistemas no{" "}
              <span className="bg-gradient-to-r from-[#22d3ee] to-[#38bdf8] bg-clip-text text-transparent">
                Microsoft Azure
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Infraestrutura em nuvem, backup inteligente e proteção avançada
              para empresas que precisam crescer com estabilidade, controle e
              alta disponibilidade.
            </p>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="rounded-full bg-white px-8 py-4 text-sm font-extrabold text-slate-900 shadow-[0_20px_60px_rgba(0,0,0,.35)] hover:bg-white/90"
              >
                Solicitar proposta
              </a>

              <a
                href="#solucoes"
                className="rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/15"
              >
                Conhecer soluções
              </a>
            </div>

            {/* INDICADORES */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Alta disponibilidade
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#22d3ee]" />
                Segurança corporativa
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/70" />
                Escalabilidade sob demanda
              </div>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative hidden md:block">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_30px_90px_rgba(0,0,0,.45)] backdrop-blur-xl">
              {/* barra superior */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                <div className="ml-3 text-xs font-semibold text-white/80">
                  Azure • Cloud • Observabilidade
                </div>
              </div>

              {/* corpo */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white/70">
                      Status
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sm font-extrabold text-white">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Operação estável
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-semibold text-white/70">
                      SLA
                    </div>
                    <div className="mt-1 text-sm font-extrabold text-white">
                      99,9%
                    </div>
                  </div>
                </div>

                {/* cards */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Backups
                    </div>
                    <div className="mt-1 text-lg font-extrabold text-white">
                      Automáticos
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Segurança
                    </div>
                    <div className="mt-1 text-lg font-extrabold text-white">
                      Avançada
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <div className="text-xs font-semibold text-white/70">
                      Custos
                    </div>
                    <div className="mt-1 text-lg font-extrabold text-white">
                      Otimizados
                    </div>
                  </div>
                </div>

                {/* barras */}
                <div className="mt-6 space-y-3">
                  <div className="h-3 w-full rounded-full bg-white/15">
                    <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9]" />
                  </div>
                  <div className="h-3 w-full rounded-full bg-white/15">
                    <div className="h-3 w-[64%] rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb]" />
                  </div>
                  <div className="h-3 w-full rounded-full bg-white/15">
                    <div className="h-3 w-[48%] rounded-full bg-gradient-to-r from-emerald-400 to-[#22d3ee]" />
                  </div>
                </div>

                {/* recomendação */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <div className="text-xs font-semibold text-white/70">
                    Recomendação
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white/90">
                    Ativar alertas proativos e regras de segurança para reduzir
                    riscos.
                  </div>
                </div>
              </div>
            </div>

            {/* glows */}
            <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-[#22d3ee]/20 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-[#7c3aed]/20 blur-3xl" />
          </div>
        </div>
      </div>

      {/* TRANSIÇÃO */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
