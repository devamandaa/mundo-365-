export default function Testimonials() {
  const tabs = [
    { name: "Hospital São Lucas", active: false, badge: "SÃO LUCAS" },
    { name: "Grupo CAMPSEG", active: true, badge: "CAMPSEG" },
    { name: "J.D.B Seguros", active: false, badge: "J.D.B" },
  ];

  return (
    <section id="depoimentos" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Título igual ao print */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-sky-600">Depoimentos</h2>
          <div className="mx-auto mt-2 h-[3px] w-36 rounded-full bg-sky-500" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
            Há 11 anos a Mundo 365 entrega resultados e constrói histórias de sucesso
          </p>
        </div>

        {/* Card principal com borda azul */}
        <div className="mt-10 rounded-2xl border-2 border-sky-500 bg-white p-6 shadow-[0_10px_30px_rgba(2,132,199,.12)] md:p-8">
          <div className="grid gap-6 md:grid-cols-[240px_1fr]">
            {/* Coluna esquerda (tabs) */}
            <div className="space-y-4">
              {tabs.map((t) => (
                <button
                  key={t.name}
                  type="button"
                  className={[
                    "w-full rounded-xl border px-4 py-4 text-left transition",
                    "bg-white",
                    t.active
                      ? "border-slate-900 shadow-sm"
                      : "border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    {/* “logo” circular fake */}
                    <div
                      className={[
                        "grid h-10 w-10 place-items-center rounded-full border",
                        t.active ? "border-slate-900" : "border-slate-200",
                      ].join(" ")}
                    >
                      <span className="text-[10px] font-extrabold text-slate-600">
                        {t.badge}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs text-slate-500">{t.name}</div>
                      <div className="mt-1 text-[11px] font-bold tracking-wide text-slate-900">
                        {t.active ? "GRUPO CAMPSEG" : " "}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Conteúdo do depoimento */}
            <div className="relative rounded-xl bg-white px-2 py-2 md:px-6 md:py-4">
              {/* Logo no canto superior direito */}
              <div className="absolute right-2 top-2 md:right-4 md:top-4">
                <div className="flex items-center gap-2">
                  {/* “escudo” fake */}
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white shadow-sm">
                    <span className="text-xs font-black">🛡</span>
                  </div>
                  <div className="text-right leading-tight">
                    <div className="text-xs font-extrabold text-slate-700">CAMPSEG</div>
                    <div className="text-[10px] font-semibold text-slate-400">
                      GRUPO
                    </div>
                  </div>
                </div>
              </div>

              {/* Aspas grandes */}
              <div className="flex items-start gap-4 pr-20">
                <div className="text-5xl font-black text-slate-900 leading-none">“</div>

                <div className="pt-2">
                  <p className="max-w-3xl text-sm leading-relaxed text-slate-700">
                    Acho o atendimento da Mundo 365 ótimo, sempre muito atenciosos e
                    rápido conforme a urgência de cada situação. Referente ao cenário,
                    depois que tivemos a assessoria na parte da TI melhoramos muita
                    coisa internamente, inclusive plataformas de atendimento, processos
                    aos nossos colaboradores para ser ágil no mercado, pois os clientes
                    não querem esperar.
                    <br />
                    <br />
                    Tivemos um impacto muito positivo dentro da nossa empresa. O
                    diferencial eu digo que não é apenas apagar o fogo e sim fazer um
                    gerenciamento no que pode ser feito como melhoria, isso que faz a
                    Mundo 365 um diferencial.
                  </p>

                  <div className="mt-6 text-[11px] font-extrabold tracking-wide text-slate-900">
                    FELIPE TORRANO TREVISAN – CAMPSEG
                  </div>
                </div>
              </div>

              {/* Aspas no canto inferior direito */}
              <div className="absolute bottom-2 right-3 text-5xl font-black text-slate-900 leading-none">
                ”
              </div>
            </div>
          </div>
        </div>

        {/* Faixa de parceiros (como no print) */}
       {/* Faixa de parceiros */}
<div className="mt-12 border-t border-slate-200 pt-10">
  <div className="flex flex-wrap items-center justify-center gap-12">

    {/* Microsoft */}
    <div className="flex items-center gap-3">
      <div className="grid grid-cols-2 gap-[2px]">
        <div className="h-3 w-3 bg-[#F25022]" />
        <div className="h-3 w-3 bg-[#7FBA00]" />
        <div className="h-3 w-3 bg-[#00A4EF]" />
        <div className="h-3 w-3 bg-[#FFB900]" />
      </div>
      <span className="text-2xl font-semibold text-[#737373]">
        Microsoft
      </span>
    </div>

    {/* kaspersky */}
    <span className="text-3xl font-semibold text-[#009982] tracking-tight">
      kaspersky
    </span>

    {/* Acronis */}
    <span className="text-3xl font-semibold text-[#1F2A44] tracking-tight">
      Acronis
    </span>

    {/* Adobe */}
    <div className="flex items-center gap-2">
      <span className="text-4xl font-black text-[#FF0000] leading-none">
        A
      </span>
      <span className="text-2xl font-semibold text-[#FF0000]">
        Adobe
      </span>
    </div>

    {/* Veeam */}
    <span className="text-3xl font-semibold text-[#00B336] tracking-tight">
      VEEAM
    </span>

    {/* Fortinet */}
    <span className="text-3xl font-extrabold tracking-widest text-black">
      FORTINET
    </span>

  </div>
</div> 


        {/* Barra azul inferior (detalhe do print) */}
        <div className="mt-10 h-3 w-full bg-sky-600" />
      </div>
    </section>
  );
}
