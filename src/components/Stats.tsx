type Partner = {
  name: string;
  href?: string;
  Logo: React.FC<React.SVGProps<SVGSVGElement>>;
};

const MicrosoftLogo: Partner["Logo"] = (props) => (
  <svg viewBox="0 0 220 48" aria-hidden="true" {...props}>
    <rect x="2" y="10" width="12" height="12" rx="2" fill="currentColor" opacity="0.9" />
    <rect x="16" y="10" width="12" height="12" rx="2" fill="currentColor" opacity="0.7" />
    <rect x="2" y="24" width="12" height="12" rx="2" fill="currentColor" opacity="0.7" />
    <rect x="16" y="24" width="12" height="12" rx="2" fill="currentColor" opacity="0.9" />
    <text x="40" y="31" fontSize="18" fontWeight="700" fill="currentColor" fontFamily="ui-sans-serif, system-ui">
      Microsoft
    </text>
  </svg>
);

const KasperskyLogo: Partner["Logo"] = (props) => (
  <svg viewBox="0 0 220 48" aria-hidden="true" {...props}>
    <text x="8" y="31" fontSize="18" fontWeight="800" fill="currentColor" fontFamily="ui-sans-serif, system-ui">
      KASPERSKY
    </text>
    <rect x="168" y="14" width="38" height="20" rx="10" fill="currentColor" opacity="0.18" />
  </svg>
);

const AcronisLogo: Partner["Logo"] = (props) => (
  <svg viewBox="0 0 220 48" aria-hidden="true" {...props}>
    <text x="8" y="31" fontSize="18" fontWeight="800" fill="currentColor" fontFamily="ui-sans-serif, system-ui">
      Acronis
    </text>
    <path d="M188 16l10 8-10 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
);

const AdobeLogo: Partner["Logo"] = (props) => (
  <svg viewBox="0 0 220 48" aria-hidden="true" {...props}>
    <text x="8" y="31" fontSize="18" fontWeight="800" fill="currentColor" fontFamily="ui-sans-serif, system-ui">
      Adobe
    </text>
    <path d="M180 34l10-20 10 20" fill="currentColor" opacity="0.18" />
    <path d="M190 16l8 18h-16l8-18z" fill="currentColor" opacity="0.35" />
  </svg>
);

const VeeamLogo: Partner["Logo"] = (props) => (
  <svg viewBox="0 0 220 48" aria-hidden="true" {...props}>
    <text x="8" y="31" fontSize="18" fontWeight="900" fill="currentColor" fontFamily="ui-sans-serif, system-ui">
      VEEAM
    </text>
    <rect x="170" y="14" width="40" height="20" rx="6" fill="currentColor" opacity="0.18" />
  </svg>
);

const FortinetLogo: Partner["Logo"] = (props) => (
  <svg viewBox="0 0 220 48" aria-hidden="true" {...props}>
    <text x="8" y="31" fontSize="18" fontWeight="900" fill="currentColor" fontFamily="ui-sans-serif, system-ui">
      FORTINET
    </text>
    <path d="M178 16h34v16h-34z" fill="currentColor" opacity="0.18" />
    <path d="M186 20h18v8h-18z" fill="currentColor" opacity="0.28" />
  </svg>
);

const partners: Partner[] = [
  { name: "Microsoft", Logo: MicrosoftLogo },
  { name: "Kaspersky", Logo: KasperskyLogo },
  { name: "Acronis", Logo: AcronisLogo },
  { name: "Adobe", Logo: AdobeLogo },
  { name: "Veeam", Logo: VeeamLogo },
  { name: "Fortinet", Logo: FortinetLogo },
];

export default function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden py-16">
      {/* FUNDO (pode trocar por branco se quiser) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(168,85,247,0.20),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_52%),radial-gradient(circle_at_55%_90%,rgba(236,72,153,0.12),transparent_60%),linear-gradient(to_bottom,#2B0A5B,#3A0CA3)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* TÍTULO */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
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

        {/* LOGOS */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,.35)] transition hover:-translate-y-1 hover:bg-white/15"
              title={p.name}
            >
              <p.Logo className="h-8 w-auto text-white/90 transition group-hover:text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* TRANSIÇÃO */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
