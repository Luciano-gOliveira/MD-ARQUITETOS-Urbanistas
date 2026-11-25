import { Hero } from '@/app/_components/sections/Hero';
import { Services } from '@/app/_components/sections/Services';
import { Process } from '@/app/_components/sections/Process';
import { Portfolio } from '@/app/_components/sections/Portfolio';
import { ContactForm } from '@/app/_components/sections/ContactForm';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <ContactForm />
    </main>
  );
}