import trofeuBg from "../assets/trofeu-bg.png.png";

type Badge = { title: string; desc: string };

export default function Certifications() {
  const badges: Badge[] = Array.from({ length: 6 }).map((_, i) => ({
    title: `Certificação ${i + 1}`,
    desc: "Descrição curta do selo.",
  }));

  const seals = ["Microsoft", "MCT", "MCSA", "MCP", "MVP"];

  return (
    <section
      id="certificacoes"
      className="relative overflow-hidden py-20"
    >
      {/* FUNDO COM IMAGEM */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${trofeuBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* OVERLAY PREMIUM */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-950/70 to-slate-900/40" />

      {/* GLOW */}
      <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-sky-400/20 blur-3xl" />

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Certificações e Qualificações
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
            Credenciais que reforçam nossa atuação técnica e compromisso com boas práticas,
            segurança e excelência operacional.
          </p>
        </div>

        {/* GRID */}
       {/* GRID */}
<div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {badges.map((b, idx) => (
    <div
      key={b.title}
      className="group relative overflow-hidden rounded-2xl bg-white/85 p-4 backdrop-blur
                 shadow-[0_12px_40px_rgba(2,6,23,.22)]
                 transition-all duration-300 hover:-translate-y-1"
    >
      {/* glow sutil */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-sky-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />

      <div className="flex items-start gap-3">
        {/* ícone menor */}
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-black text-slate-900">
          {idx % 3 === 0 ? "★" : idx % 3 === 1 ? "✓" : "⬤"}
        </div>

        <div>
          <div className="text-sm font-extrabold text-slate-950">
            {b.title}
          </div>

          <div className="mt-1 text-xs leading-relaxed text-slate-600">
            {b.desc}
          </div>

          <div className="mt-3 inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-slate-700">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-sky-500" />
            Validação
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* SELOS */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {seals.map((x) => (
            <span
              key={x}
              className="rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold text-slate-800 backdrop-blur"
            >
              {x}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
