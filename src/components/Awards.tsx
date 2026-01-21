export default function Awards() {
  const cards = Array.from({ length: 9 }).map((_, i) => ({ title: `Prêmio ${i + 1}` }));

  return (
    <section className="bg-deep-grid py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur shadow-soft">
            <div className="text-5xl font-black">🏆</div>
            <h3 className="mt-3 text-2xl font-extrabold">Reconhecimentos</h3>
            <p className="mt-2 text-white/75">
              Coloque aqui o texto institucional dessa parte (igual a imagem).
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <div key={c.title} className="rounded-2xl bg-red-600/90 p-4 shadow-soft">
                <div className="h-12 w-12 rounded-xl bg-white/15 grid place-items-center font-black">◎</div>
                <div className="mt-3 font-bold">{c.title}</div>
                <div className="text-xs text-white/80">Descrição curta</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
