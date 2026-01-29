import fundo from "../assets/fundo.png.png";
import logoMundo from "../assets/mundo.png.png"; // opcional (se quiser usar o seu)

export default function Footer() {
  const services = [
    "Backup gerenciado",
    "Business intelligence",
    "Planejamento e migração",
    "Jornada para nuvem",
    "Adoção e treinamento",
    "Área de trabalho virtual",
  ];

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre nós", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Notícias", href: "#noticias" },
    { label: "Contatos", href: "#contato" },
  ];

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* FUNDO (sua imagem) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* leve overlay para leitura (bem sutil) */}
      <div className="absolute inset-0 bg-slate-950/10" />

      {/* FAIXA AZUL DO TOPO (igual print) */}
      <div className="relative z-10 bg-[#0696c6]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="text-sm font-semibold text-white">
            Receba dicas, insights e novidades direto no seu e-mail.
          </p>

          {/* PILL */}
          <div className="mx-auto mt-5 w-full max-w-3xl rounded-full bg-white/95 p-2 shadow-[0_14px_30px_rgba(0,0,0,.25)]">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3"
            >
              <input
                type="email"
                placeholder="exemplo@exemplo.com"
                className="w-full rounded-full bg-transparent px-6 py-3 text-sm text-slate-700 outline-none"
              />

              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#f05a2a] px-7 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-[#ea4f1d] active:scale-[.99]"
              >
                Inscreva-se
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CONTEÚDO CENTRAL */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* FALE CONOSCO */}
          <div>
            <h3 className="text-lg font-extrabold text-[#33c6ff]">Fale conosco</h3>

            <div className="mt-7 space-y-5 text-white">
              <div className="flex items-center gap-4">
                {/* ícone quadrado igual print */}
                <div className="grid h-12 w-12 place-items-center rounded-md bg-[#0696c6] shadow-[0_10px_18px_rgba(0,0,0,.25)]">
                  <span className="text-xl"></span>
                </div>

                <div className="text-lg font-extrabold">
                  +55 (12) 3456-7890
                </div>
              </div>

              <div className="text-sm font-semibold text-white/85">
                exemplo@exemplo.com
              </div>

              {/* sociais iguais vibe do print */}
              <div className="mt-6 flex items-center gap-5 text-[#33c6ff]">
                <a
                  href="#"
                  className="text-xl font-black hover:text-white"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="#"
                  className="text-xl font-black hover:text-white"
                  aria-label="Instagram"
                >
                  ⊙
                </a>
                <a
                  href="#"
                  className="text-xl font-black hover:text-white"
                  aria-label="Facebook"
                >
                  f
                </a>
              </div>
            </div>
          </div>

          {/* SERVIÇOS */}
          <div>
            <h3 className="text-lg font-extrabold text-[#33c6ff]">Serviços</h3>

            <ul className="mt-7 space-y-3 text-sm font-semibold text-white/85">
              {services.map((s) => (
                <li key={s} className="hover:text-white">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* MAIS LINKS */}
          <div>
            <h3 className="text-lg font-extrabold text-[#33c6ff]">Mais Links</h3>

            <ul className="mt-7 space-y-3 text-sm font-semibold text-white/85">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAIXA AZUL INFERIOR (igual print) */}
      <div className="relative z-10 bg-[#0696c6]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/90 md:flex-row">
            {/* logo + nome */}
            <div className="flex items-center gap-2">
              <img
                src={logoMundo}
                alt="Mundo365"
                className="h-5 w-auto opacity-95"
              />
            </div>

            <div className="text-center">
              © 2025 MUNDO365 - TODOS OS DIREITOS RESERVADOS
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
            >
              ⬆ Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
