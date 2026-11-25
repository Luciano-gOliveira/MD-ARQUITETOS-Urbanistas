'use client';

import { useState, type FormEvent } from 'react';
import { createWhatsAppQuoteUrl } from '@/app/lib/whatsapp';

const SERVICE_OPTIONS = [
  'Construir do zero',
  'Reformar imóvel',
  'Elaboração de projeto',
  'Aprovação / Regularização',
  'Acompanhamento de obra',
];

const MODALITY_OPTIONS = ['Atendimento presencial', 'Atendimento 100% online'];

export function ContactForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [modality, setModality] = useState(MODALITY_OPTIONS[0]);
  const [notes, setNotes] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) return;

    const url = createWhatsAppQuoteUrl({ name, service, modality, notes });
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section
      id="orcamento"
      className="scroll-mt-20 border-t border-zinc-900 bg-zinc-900/40 py-24 text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Fale com o Escritório
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Vamos conversar sobre o que você deseja construir ou transformar?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Envie um resumo rápido do que você precisa. A mensagem já sai organizada para o
            WhatsApp, facilitando o alinhamento inicial.
          </p>

          <ul className="mt-8 space-y-3 text-sm text-zinc-300">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Projetos, aprovação, execução e acompanhamento</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Opção de atendimento presencial ou 100% online</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span>Canal direto sem depender de links dispersos</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="lead-name" className="mb-1.5 block text-sm font-medium text-zinc-200">
              Seu nome
            </label>
            <input
              id="lead-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome completo"
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="lead-service"
                className="mb-1.5 block text-sm font-medium text-zinc-200"
              >
                Tipo de demanda
              </label>
              <select
                id="lead-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
              >
                {SERVICE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="lead-modality"
                className="mb-1.5 block text-sm font-medium text-zinc-200"
              >
                Modalidade
              </label>
              <select
                id="lead-modality"
                value={modality}
                onChange={(e) => setModality(e.target.value)}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
              >
                {MODALITY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="lead-notes" className="mb-1.5 block text-sm font-medium text-zinc-200">
              Detalhes do projeto ou obra (opcional)
            </label>
            <textarea
              id="lead-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex.: terreno pronto, reforma de casa, necessidade de projeto e execução..."
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-amber-500 px-5 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-amber-400"
          >
            Enviar e abrir no WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}