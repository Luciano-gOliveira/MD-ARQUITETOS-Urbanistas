import { SERVICES_DATA } from '@/app/data/landing';

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 border-t border-zinc-900 bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Soluções Completas
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Do estudo inicial à execução da sua obra
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Cada etapa é conduzida com critério técnico para que você tenha clareza nas decisões,
            segurança no processo e resultado alinhado ao que foi planejado.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-7 transition hover:border-amber-500/40 hover:bg-zinc-900/70"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs font-semibold text-amber-400/90">
                    /{service.code}
                  </span>
                  <span className="rounded-full border border-zinc-700/80 bg-zinc-950 px-3 py-1 text-[11px] font-medium text-zinc-300">
                    {service.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
              </div>

              <ul className="mt-6 space-y-2 border-t border-zinc-800/80 pt-5 text-xs text-zinc-300 sm:text-sm">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}