export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Briefing e Diagnóstico',
    description:
      'Conversa inicial para entender o objetivo (construir, reformar, aprovar ou acompanhar), o terreno ou imóvel e a modalidade de atendimento.',
  },
  {
    step: '02',
    title: 'Estudo e Projeto',
    description:
      'Definição do partido arquitetônico, plantas e apresentação visual para alinhar estética, funcionalidade e viabilidade.',
  },
  {
    step: '03',
    title: 'Aprovação e Planejamento',
    description:
      'Condução das exigências técnicas e legais junto à organização das etapas, prazos e frentes de trabalho.',
  },
  {
    step: '04',
    title: 'Execução e Entrega',
    description:
      'Acompanhamento próximo da obra ou consultoria contínua até a entrega do projeto ou imóvel pronto.',
  },
];

export type PortfolioCategory = 'Todos' | 'Projetos' | 'Obras' | 'Reformas';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'Todos'>;
  summary: string;
  imageSrc: string;
  imageAlt: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'residencia-fachada-moderna',
    title: 'Residência Contemporânea com Fachada em Volumes',
    category: 'Obras',
    summary: 'Execução e composição de fachada com guarda-corpo envidraçado, área externa e integração visual.',
    imageSrc: '/images/fachada-obra.jpg',
    imageAlt: 'Fachada de residência moderna com detalhes em vidro e área frontal',
  },
  {
    id: 'projeto-residencial-lazer',
    title: 'Projeto Arquitetônico com Área de Lazer',
    category: 'Projetos',
    summary: 'Estudo arquitetônico e concepção de espaços integrados para moradia e convivência.',
    imageSrc: '/images/projeto-lazer.jpg',
    imageAlt: 'Projeto residencial contemporâneo com área externa e iluminação',
  },
  {
    id: 'reforma-planejamento',
    title: 'Reforma e Adequação de Espaços',
    category: 'Reformas',
    summary: 'Reorganização de ambientes e planejamento técnico para transformar imóveis existentes.',
    imageSrc: '/images/reforma-planejamento.jpg',
    imageAlt: 'Detalhe de planejamento técnico e plantas de arquitetura',
  },
];