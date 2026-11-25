import { COMPANY_INFO } from '@/app/data/navigation';

export interface QuoteLeadInput {
  name: string;
  service: string;
  modality: string;
  notes?: string;
}

export function createWhatsAppQuoteUrl({ name, service, modality, notes }: QuoteLeadInput): string {
  const lines = [
    `Olá! Vim pelo site da *${COMPANY_INFO.name}*.`,
    '',
    `*Nome:* ${name.trim()}`,
    `*Serviço:* ${service}`,
    `*Atendimento:* ${modality}`,
    notes?.trim() ? `*Detalhes:* ${notes.trim()}` : null,
  ].filter((line): line is string => line !== null);

  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}