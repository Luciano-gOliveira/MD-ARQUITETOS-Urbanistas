import { COMPANY_INFO, NAV_LINKS } from '@/app/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Coluna 1: Marca e Posicionamento */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded border border-amber-500/40 bg-zinc-900 font-bold text-amber-400">
                {COMPANY_INFO.shortName}
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-white">
                  {COMPANY_INFO.name}
                </p>
                <p className="text-xs text-zinc-500">{COMPANY_INFO.cau}</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Elaboração de projetos arquitetônicos, aprovação legal, execução e acompanhamento
              de obras do planejamento à entrega.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition hover:text-amber-400">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato e Atendimento */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Atendimento
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="text-zinc-300">{COMPANY_INFO.location}</li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-amber-400"
                >
                  WhatsApp: {COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-amber-400"
                >
                  Instagram Oficial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>
            © {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
          <p>Projetos • Aprovação • Execução • Acompanhamento</p>
        </div>
      </div>
    </footer>
  );
}