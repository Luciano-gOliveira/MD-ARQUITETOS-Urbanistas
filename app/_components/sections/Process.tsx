import { PROCESS_STEPS } from '@/app/data/showcase';

export function Process() {
  return (
    <section
      id="processo"
      className="scroll-mt-20 border-t border-zinc-900 bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Como Funciona
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Do planejamento à execução, passo a passo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Ter um processo estruturado evita decisões no escuro e ajuda a transformar ideias em
            execução com previsibilidade.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item) => (
            <li
              key={item.step}
              className="flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-900/35 p-6"
            >
              <span className="font-mono text-2xl font-semibold text-amber-400">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}