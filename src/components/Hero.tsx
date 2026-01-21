export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
    >
      {/* FUNDO (gradiente + brilhos) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4b13b8] via-[#6b2bd9] to-[#00b4d8]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.35),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(0,255,255,.20),transparent_45%)]" />

      {/* CONTEÚDO */}
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid min-h-[520px] items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          {/* ESQUERDA: TEXTO */}
          <div className="text-white">
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Venha para a Mundo365 hospedar seus sistemas no Microsoft Azure
            </h1>

            <p className="mt-4 max-w-xl text-white/85">
              Cloud, backup, segurança e produtividade com uma estrutura moderna,
              rápida e pronta pra escalar com você.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-white px-7 py-3 font-semibold text-slate-900 hover:bg-white/90">
                Solicitar proposta
              </button>

              <button className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white hover:bg-white/10">
                Ver soluções
              </button>
            </div>

            {/* “pontinhos” do slider (igual banner) */}
            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white/90" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
            </div>
          </div>

          {/* DIREITA: “IMAGEM/ILUSTRAÇÃO” */}
          <div className="relative hidden md:block">
            {/* aqui você troca por uma IMAGEM real depois */}
            <div className="relative aspect-[16/11] w-full rounded-3xl bg-white/10 ring-1 ring-white/20 backdrop-blur shadow-[0_30px_80px_rgba(0,0,0,.35)]">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center text-white/90">
                  <div className="text-7xl font-black">AI</div>
                  <div className="mt-2 text-sm text-white/70">
                    Coloque a imagem do banner aqui
                  </div>
                </div>
              </div>
            </div>

            {/* brilhos em volta */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-fuchsia-300/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-300/30 blur-3xl" />
          </div>
        </div>
      </div>

      {/* FAIXA BRANCA EMBAIXO (transição pro resto do site) */}
      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
