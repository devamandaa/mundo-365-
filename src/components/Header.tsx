import { useEffect, useMemo, useRef, useState } from "react";
import logoMundo365 from "../assets/OIP (1).webp";

/* util */
function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

/* icons */
function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Bandeira BR em SVG */
function BrazilFlag({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Brasil">
      <rect width="64" height="64" rx="14" fill="#009B3A" />
      <path d="M32 10 L54 32 L32 54 L10 32 Z" fill="#FFDF00" />
      <circle cx="32" cy="32" r="13" fill="#002776" />
      <path
        d="M18 33.2c6.2-5 20.2-6.2 28-2.2"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const langRef = useRef<HTMLDivElement | null>(null);

  const navItems = useMemo(
    () => [
      { label: "Início", href: "#inicio" },
      { label: "Sobre", href: "#solucoes" },
      { label: "Soluções", href: "#certificacoes" },
      { label: "Notícias", href: "#depoimentos" },
      { label: "Contato", href: "#contato" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* glow superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,.22),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,.18),transparent_55%)]" />

      <div
        className={cn(
          "relative transition-all",
          scrolled
            ? "bg-white/75 backdrop-blur-xl border-b border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,.08)]"
            : "bg-white/40 backdrop-blur-md border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* LOGO COM IMAGEM */}
            <a href="#inicio" className="group flex items-center">
              <img
                src={logoMundo365}
                alt="Mundo365 Tecnologia"
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>

            {/* MENU DESKTOP */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900
                             after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-[2px]
                             after:origin-left after:scale-x-0 after:rounded-full
                             after:bg-gradient-to-r after:from-indigo-600 after:to-cyan-400
                             after:transition-transform hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* AÇÕES */}
            <div className="flex items-center gap-3">
              {/* Idioma */}
              <div ref={langRef} className="relative hidden sm:block">
                <button
                  type="button"
                  onClick={() => setLangOpen((v) => !v)}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm hover:bg-white transition shadow-[0_6px_18px_rgba(15,23,42,.06)]"
                >
                  <BrazilFlag className="h-5 w-5" />
                  <span className="font-semibold text-slate-800">PT</span>
                  <ChevronDownIcon className="h-4 w-4 text-slate-500" />
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,.12)]">
                    <button className="w-full px-4 py-3 text-left text-sm hover:bg-slate-50">
                      <div className="flex items-center gap-2">
                        <BrazilFlag className="h-5 w-5" />
                        <div>
                          <div className="font-semibold">Português</div>
                          <div className="text-xs text-slate-500">Brasil</div>
                        </div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* CTA */}
              <a
                href="#contato"
                className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-extrabold text-white
                           bg-gradient-to-r from-indigo-600 to-cyan-400
                           shadow-[0_12px_30px_rgba(34,211,238,.18)]
                           hover:brightness-110 transition"
              >
                Fale conosco
              </a>

              {/* MOBILE */}
              <button
                className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 hover:bg-white transition"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? (
                  <CloseIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* MENU MOBILE */}
          {mobileOpen && (
            <div className="md:hidden pb-4">
              <div className="mt-2 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-[0_14px_35px_rgba(15,23,42,.10)]">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
