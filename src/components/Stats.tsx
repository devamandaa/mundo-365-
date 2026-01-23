const partners = [
  { name: "Microsoft", src: "/partners/microsoft.svg" },
  { name: "Kaspersky", src: "/partners/kaspersky.svg" },
  { name: "Acronis", src: "/partners/acronis.svg" },
  { name: "Adobe", src: "/partners/adobe.svg" },
  { name: "Veeam", src: "/partners/veeam.svg" },
  { name: "Fortinet", src: "/partners/fortinet.svg" },
];

export default function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden py-16">
      {/* Fundo com a mesma vibe do site (opcional) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b0a6d] via-[#6a2bbf] to-[#22d3ee]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,.45),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,.55),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Título */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Parceiros & Tecnologias
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Ecossistema de confiança
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/85 md:text-base">
            Trabalhamos com marcas líderes do mercado para entregar segurança,
            performance e continuidade.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,.35)] transition hover:-translate-y-1 hover:bg-white/15"
              title={p.name}
            >
              <img
                src={p.src}
                alt={p.name}
                className="h-8 w-auto opacity-90 transition group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Transição */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
