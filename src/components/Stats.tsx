const stats = [
  { value: "5000", label: "Clientes atendidos" },
  { value: "150", label: "Serviços" },
  { value: "100", label: "Treinamentos" },
  { value: "999", label: "Projetos" },
  { value: "850", label: "Implantações" },
  { value: "99", label: "Satisfação" },
];

export default function Stats() {
  return (
    <section className="bg-deep-grid py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-extrabold">
          Por que a Mundo365 é a melhor
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-soft"
            >
              <div className="text-4xl font-black tracking-tight">{s.value}</div>
              <div className="mt-1 text-sm text-white/80">{s.label}</div>
              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
