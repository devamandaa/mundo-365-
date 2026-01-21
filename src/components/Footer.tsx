export function Partners() {
  const partners = ["Microsoft", "Kaspersky", "Acronis", "Adobe", "Veeam", "Fortinet"];
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-80">
          {partners.map((p) => (
            <div key={p} className="h-10 w-28 rounded-lg bg-slate-100 grid place-items-center text-sm font-semibold text-slate-600">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Partners;
