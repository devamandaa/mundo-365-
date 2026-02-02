import fundo from "../assets/fundo.png.png";
import logoMundo from "../assets/mundo.png.png";

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.2 3.8c.7-1 2-1.2 3-.5l1.6 1.1c.9.6 1.1 1.9.4 2.8l-.8 1.2c-.4.6-.3 1.4.2 1.9l3.6 3.6c.5.5 1.3.6 1.9.2l1.2-.8c.9-.6 2.2-.4 2.8.5l1.1 1.6c.7 1 .5 2.3-.5 3-1 .7-2.2 1.2-3.4 1.3-2.2.2-5.6-.7-9-4.1-3.4-3.4-4.3-6.8-4.1-9 .1-1.2.6-2.4 1.3-3.4Z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 5.5c2.1.5 3.5 1.9 4 4"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.2 2.5c3.7.8 6.5 3.6 7.3 7.3"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 9.5V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.5 6.2h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10.5 18v-5.2c0-1.9 1.1-3.3 3-3.3s3 1.4 3 3.3V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10.5 12.2V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16.7 7.6h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 8h2V5.5c0-1.4-1.1-2.5-2.5-2.5H11c-1.7 0-3 1.3-3 3v2H6v3h2v10h3V11h3l1-3h-4V6c0-.6.4-1 1-1h2v3Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
      {/* FUNDO (imagem do print) — fica atrás de tudo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* OVERLAY escuro (deixa igual o print e melhora leitura) */}
      <div className="absolute inset-0 bg-slate-950/65" />

      {/* FAIXA AZUL DO TOPO (igual print) */}
      <div className="relative z-10 bg-[#0696c6]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="text-sm font-semibold text-white">
            Receba dicas, insights e novidades direto no seu e-mail.
          </p>

          {/* PILL (igual print) */}
          <div className="mx-auto mt-6 w-full max-w-4xl rounded-full bg-white p-2 shadow-[0_18px_40px_rgba(0,0,0,.28)]">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3"
            >
              <input
                type="email"
                placeholder="exemplo@exemplo.com"
                className="w-full rounded-full bg-transparent px-8 py-4 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#f05a2a] px-8 py-3.5 text-sm font-extrabold text-white shadow-sm hover:bg-[#ea4f1d] active:scale-[.99]"
              >
                Inscreva-se
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CONTEÚDO CENTRAL (3 colunas) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* FALE CONOSCO */}
          <div>
            <h3 className="text-lg font-extrabold text-[#33c6ff]">
              Fale conosco
            </h3>

            <div className="mt-8 space-y-6 text-white">
              <div className="flex items-center gap-4">
                {/* ícone quadrado igual print */}
                <div className="grid h-12 w-12 place-items-center rounded-md bg-[#0696c6] shadow-[0_10px_18px_rgba(0,0,0,.25)]">
                  <PhoneIcon />
                </div>

                <div className="text-lg font-extrabold">
                  +55 (12) 3456-7890
                </div>
              </div>

              <div className="text-sm font-semibold text-white/85">
                exemplo@exemplo.com
              </div>

              {/* sociais (ícones em “bolinha” igual vibe do print) */}
              <div className="mt-6 flex items-center gap-5 text-[#33c6ff]">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/15 hover:text-white transition"
                >
                  <LinkedinIcon />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/15 hover:text-white transition"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/15 hover:text-white transition"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>

          {/* SERVIÇOS */}
          <div>
            <h3 className="text-lg font-extrabold text-[#33c6ff]">Serviços</h3>

            <ul className="mt-8 space-y-3 text-sm font-semibold text-white/85">
              {services.map((s) => (
                <li key={s} className="hover:text-white transition">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* MAIS LINKS */}
          <div>
            <h3 className="text-lg font-extrabold text-[#33c6ff]">Mais Links</h3>

            <ul className="mt-8 space-y-3 text-sm font-semibold text-white/85">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition">
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
            {/* logo (igual print, no canto esquerdo) */}
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
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15 transition"
            >
              <span className="grid h-5 w-5 place-items-center rounded bg-white/10">
                ⬆
              </span>
              Voltar ao topo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
