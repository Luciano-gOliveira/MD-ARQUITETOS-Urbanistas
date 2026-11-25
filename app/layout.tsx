import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/app/_components/layout/Navbar';
import { Footer } from '@/app/_components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'MD Arquitetos & Urbanistas | Projetos, Reformas e Execução de Obras',
  description:
    'Do planejamento à entrega da obra pronta. Elaboração de projetos arquitetônicos, aprovação legal, execução e acompanhamento presencial ou 100% online.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} bg-zinc-950 font-sans text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}