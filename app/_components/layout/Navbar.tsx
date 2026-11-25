'use client';

import { useEffect, useState } from 'react';
import { COMPANY_INFO, NAV_LINKS } from '@/app/data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Marca / Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded border border-amber-500/40 bg-zinc-900 font-bold tracking-tighter text-amber-400 transition group-hover:border-amber-400">
            {COMPANY_INFO.shortName}
          </div>
          <div className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-white">
              MD ARQUITETOS
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              & Urbanistas
            </span>
          </div>
        </a>

        {/* Links Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#orcamento"
            className="rounded-md bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-950 transition hover:bg-amber-400"
          >
            Solicitar Projeto
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Abrir menu de navegação"
          aria-expanded={mobileOpen}
          className="inline-flex items-center justify-center rounded-md border border-zinc-800 p-2 text-zinc-300 hover:border-zinc-700 hover:text-white md:hidden"
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile Expandido */}
      {mobileOpen && (
        <div className="border-t border-zinc-800/80 bg-zinc-950 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-zinc-200 transition hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#orcamento"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-amber-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400"
            >
              Solicitar Avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}