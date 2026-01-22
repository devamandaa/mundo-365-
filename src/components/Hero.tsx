export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
    >
      {/* FUNDO CORPORATIVO */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b0f7a] via-[#3a1bb3] to-[#0077b6]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.25),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,.18),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(0,200,255,.18),transparent_45%)]" />

      {/* CONTEÚDO */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid min-h-[560px] items-center gap-12 py-16 md:grid-cols-2">
          
          {/* TEXTO */}
          <div className="text-white">
            <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold tracking-wide text-white/90">
              Cloud • Segurança • Performance
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Hospede seus sistemas com{" "}
              <span className="text-cyan-300">
                performance, segurança e escala
              </span>{" "}
              no Microsoft Azure
            </h1>

            <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
              Infraestrutura em nuvem, backup inteligente e proteção avançada
              para empresas que precisam crescer com estabilidade e controle.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-lg hover:bg-white/90">
                Solicitar proposta personalizada
              </button>

              <button className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">
                Conhecer soluções Azure
              </button>
            </div>

            {/* indicadores */}
            <div className="mt-12 flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Alta disponibilidade
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Segurança corporativa
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                Escalabilidade sob demanda
              </div>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="relative hidden md:block">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/20 backdrop-blur shadow-[0_30px_80px_rgba(0,0,0,.35)]">
              {/* aqui entra imagem real */}
              <div className="absolute inset-0 grid place-items-center text-white/80">
                <div className="text-center">
                  <div className="text-sm uppercase tracking-widest text-white/60">
                    Infraestrutura Cloud
                  </div>
                  <div className="mt-2 text-3xl font-bold">
                    Microsoft Azure
                  </div>
                </div>
              </div>
            </div>

            {/* luz ambiente */}
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-cyan-300/30 blur-3xl" />
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-violet-300/30 blur-3xl" />
          </div>
        </div>
      </div>

      {/* TRANSIÇÃO */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
