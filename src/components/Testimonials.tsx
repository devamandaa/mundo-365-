export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl font-extrabold">Depoimentos</h2>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 border border-slate-200">
              <div className="text-sm text-slate-500">Cliente</div>
              <div className="mt-1 font-bold">Nome do Cliente</div>
              <div className="mt-3 text-sm text-slate-600">
                “Texto do depoimento aqui, com aspas como no layout.”
              </div>
            </div>

            <div className="md:col-span-2 rounded-2xl bg-white p-6 border border-slate-200">
              <div className="text-4xl font-black text-slate-900">“</div>
              <p className="mt-3 text-slate-700">
                Depoimento principal destacado, maior, como aparece no print.
              </p>
              <div className="mt-5 text-sm text-slate-500">
                — Nome • Cargo • Empresa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
