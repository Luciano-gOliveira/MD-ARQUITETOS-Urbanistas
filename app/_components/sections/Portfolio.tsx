'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
} from '@/app/data/showcase';

const CATEGORIES: PortfolioCategory[] = ['Todos', 'Projetos', 'Obras', 'Reformas'];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('Todos');

  const filteredItems =
    selectedCategory === 'Todos'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 border-t border-zinc-900 bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              Portfólio Selecionado
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Projetos, reformas e obras em destaque
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Veja exemplos de frentes de atuação entre concepção arquitetônica, adequação e
              execução.
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar portfólio">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-md px-3.5 py-2 text-xs font-semibold transition ${
                    active
                      ? 'bg-amber-500 text-zinc-950'
                      : 'border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40 transition hover:border-zinc-700"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <span className="inline-block rounded border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-300">
                  {item.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}