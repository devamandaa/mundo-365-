export default function Certifications() {
  const badges = Array.from({ length: 6 }).map((_, i) => ({
    title: `Certificação ${i + 1}`,
  }));

  return (
    <section id="certificacoes" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-extrabold">Certificações e Qualificações</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {badges.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-slate-100 grid place-items-center font-black text-slate-700">
                  ★
                </div>
                <div>
                  <div className="font-bold">{b.title}</div>
                  <div className="text-sm text-slate-500">Descrição curta do selo.</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-80">
          {["Microsoft", "MCT", "MCSA", "MCP"].map((x) => (
            <div key={x} className="h-10 w-28 rounded-lg bg-slate-100 grid place-items-center text-sm font-semibold text-slate-600">
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
