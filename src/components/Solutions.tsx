// Solutions.tsx
import React from "react";

type Solution = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  featured?: boolean; // fica azul fixo (Backup)
};

const solutionsLeft: Solution[] = [
  {
    title: "Backup Gerenciado",
    desc:
      "O serviço de Backup Gerenciado consiste em guardar os dados de sua empresa com máxima segurança para que sejam restaurados no caso da perda dos originais.",
    featured: true,
    icon: <IconCloud />,
  },
  {
    title: "Business Inteligence",
    desc:
      "Com a Mundo 365 podemos criar incríveis soluções que de fato irão transformar a experiência de trabalho em sua empresa para uma forma mais moderna.",
    icon: <IconBulb />,
  },
  {
    title: "Planejamento e Migração",
    desc:
      "O serviço de MIGRAÇÃO consiste em migrar os dados de seu ambiente de trabalho de origem para a plataforma da Microsoft 365.",
    icon: <IconGear />,
  },
];

const solutionsRight: Solution[] = [
  {
    title: "Jornada para nuvem",
    desc:
      "A transformação digital está acontecendo ao redor do mundo, para isso contamos com um misto de novas tecnologias, pessoas capacitadas e processos bem definidos.",
    icon: <IconCloudArrow />,
  },
  {
    title: "Adoção e Treinamento",
    desc:
      "A transformação digital está acontecendo ao redor do mundo, para isso contamos com um misto de novas tecnologias, pessoas capacitadas e processos bem definidos.",
    icon: <IconTraining />,
  },
  {
    title: "Área de Trabalho Virtual",
    desc:
      "Conte com a Mundo365, um dos maiores Parceiros Microsoft do Brasil, para garantir a produtividade de seus colaboradores em home office durante a pandemia do novo Coronavírus.",
    icon: <IconMonitor />,
  },
];

export default function Solutions() {
  return (
    <section id="solucoes" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* HEADER (igual vibe do print) */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-sky-600 md:text-4xl">
            Nossas soluções
          </h2>

          <div className="mx-auto mt-2 h-[2px] w-28 bg-sky-500" />

          <p className="mx-auto mt-5 max-w-xl text-sm text-slate-600">
            Como podemos ajudar você ?
          </p>
          <p className="mx-auto mt-1 max-w-2xl text-xs leading-relaxed text-slate-400">
            Confira abaixo as Soluções que a Mundo365 oferece
            <br />
            para o seu negócio atingir mais resultados com maior segurança.
          </p>
        </div>

        {/* LAYOUT 2 COLUNAS (igual ao print) */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* COLUNA ESQUERDA */}
          <div className="flex flex-col gap-6">
            {/* CARD GRANDE (AZUL) */}
            <SolutionCard size="lg" data={solutionsLeft[0]} />

            {/* DOIS CARDS CINZA */}
            <SolutionCard size="sm" data={solutionsLeft[1]} />
            <SolutionCard size="sm" data={solutionsLeft[2]} />
          </div>

          {/* COLUNA DIREITA (3 CARDS) */}
          <div className="flex flex-col gap-6">
            {solutionsRight.map((s) => (
              <SolutionCard key={s.title} size="sm" data={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD (igual ao print) ---------------- */

function SolutionCard({
  data,
  size,
}: {
  data: Solution;
  size: "lg" | "sm";
}) {
  const isFeatured = !!data.featured;

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-xl shadow-[0_10px_20px_rgba(0,0,0,.18)]",
        isFeatured
          ? "bg-[#0b86b6] text-white"
          : "bg-[#cfcfcf] text-slate-900 hover:bg-[#0b86b6] hover:text-white",
        size === "lg" ? "min-h-[150px]" : "min-h-[120px]",
        "transition-colors duration-300",
      ].join(" ")}
    >
      {/* detalhe diagonal (o “corte” cinza da direita) */}
      <div
        className={[
          "pointer-events-none absolute inset-y-0 right-0 w-[42%]",
          isFeatured ? "opacity-20" : "opacity-35 group-hover:opacity-20",
          "transition-opacity duration-300",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-black/20 [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)]" />
        <div className="absolute inset-0 translate-x-6 bg-white/30 [clip-path:polygon(26%_0,100%_0,100%_100%,0_100%)]" />
      </div>

      <div className="relative z-10 flex gap-4 p-5">
        {/* ícone (igual: pequeno no topo/esquerda) */}
        <div
          className={[
            "mt-0.5 grid h-10 w-10 place-items-center rounded-md",
            isFeatured
              ? "text-white"
              : "text-slate-700 group-hover:text-white",
            "transition-colors duration-300",
          ].join(" ")}
        >
          {data.icon}
        </div>

        {/* texto */}
        <div className="min-w-0">
          <h3
            className={[
              "font-extrabold leading-tight",
              size === "lg" ? "text-lg" : "text-[15px]",
            ].join(" ")}
          >
            {data.title}
          </h3>

          <p
            className={[
              "mt-2 text-xs leading-relaxed",
              isFeatured
                ? "text-white/90"
                : "text-slate-700 group-hover:text-white/90",
              "transition-colors duration-300",
            ].join(" ")}
          >
            {data.desc}
          </p>
        </div>
      </div>
    </article>
  );
}

/* ---------------- ICONS (simples, igual ao estilo do print) ---------------- */

function IconCloud() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 18h10a4 4 0 0 0 .6-8A5 5 0 0 0 8 8.6 3.5 3.5 0 0 0 7 18Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12v6m0 0l-2-2m2 2l2-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBulb() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 18h6m-5 3h4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 3a7 7 0 0 0-4 12c.6.5 1 1.2 1 2h6c0-.8.4-1.5 1-2A7 7 0 0 0 12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGear() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19 12l2-1-2-1-.7-2.2-2.3-.4-1.2-2-1.8 1.4L12 2l-1.3 2.8-1.8-1.4-1.2 2-2.3.4L5 10l-2 1 2 1 .7 2.2 2.3.4 1.2 2 1.8-1.4L12 22l1.3-2.8 1.8 1.4 1.2-2 2.3-.4.7-2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}

function IconCloudArrow() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 18h10a4 4 0 0 0 .6-8A5 5 0 0 0 8 8.6 3.5 3.5 0 0 0 7 18Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7v6m0-6l-2 2m2-2l2 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTraining() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h16v10H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 20h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 11l2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMonitor() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 5h16v10H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 19h6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 15v4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
