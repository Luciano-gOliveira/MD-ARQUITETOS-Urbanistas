import Image from 'next/image';
import { HERO_DATA } from '@/app/data/landing';

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] lg:min-h-[92vh] items-center overflow-hidden bg-[#09090b] pt-24 pb-16 text-white">
      {/* Container da imagem: no mobile fica mais compacto/centralizado na parte superior ou encaixado; no desktop ocupa a direita */}
      <div className="pointer-events-none absolute inset-x-0 top-16 bottom-12 z-0 lg:inset-0">
        <div className="relative h-64 w-full sm:h-80 lg:h-full lg:w-[65%] lg:ml-auto">
          <Image
            src={HERO_DATA.image.src}
            alt={HERO_DATA.image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover object-center opacity-35 lg:opacity-90"
          />

          {/* Camada extra bem escura no mobile para o texto ter ótimo contraste */}
          <div className="absolute inset-0 bg-[#09090b]/75 lg:hidden" />

          {/* Degradê no desktop: escuro à esquerda, revelando a imagem à direita */}
          <div
            className="hidden lg:block absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #09090b 0%, #09090b 25%, rgba(9,9,11,0.72) 55%, rgba(9,9,11,0.12) 100%)',
            }}
          />

          {/* Suavização nas bordas para fundir no fundo preto */}
          <div className="absolute inset-x-0 top-0 h-20 lg:h-24 bg-gradient-to-b from-[#09090b] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 lg:h-28 bg-gradient-to-t from-[#09090b] to-transparent" />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block rounded border border-amber-500/40 bg-amber-500/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-300">
            {HERO_DATA.badge}
          </span>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {HERO_DATA.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {HERO_DATA.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={HERO_DATA.primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400"
            >
              {HERO_DATA.primaryCta.label}
            </a>

            <a
              href={HERO_DATA.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/75 px-6 py-3.5 text-sm font-medium text-zinc-100 backdrop-blur transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              {HERO_DATA.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* Faixa de pilares na base */}
        <dl className="mt-14 grid grid-cols-1 gap-4 border-t border-zinc-800/80 pt-8 sm:grid-cols-3">
          {HERO_DATA.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-zinc-800/80 bg-zinc-950/80 p-4 backdrop-blur-md"
            >
              <dt className="text-xs uppercase tracking-wider text-zinc-400">{item.label}</dt>
              <dd className="mt-1 text-sm font-semibold text-white sm:text-base">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}