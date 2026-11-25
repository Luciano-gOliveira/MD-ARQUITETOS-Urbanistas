export const HERO_DATA = {
  badge: 'Arquitetura • Urbanismo • Execução de Obras',
  title: 'Do planejamento à entrega da obra pronta.',
  subtitle:
    'Elaboramos projetos arquitetônicos, cuidamos da aprovação legal e acompanhamos cada etapa da sua construção ou reforma — com atendimento presencial ou 100% online.',
  primaryCta: {
    label: 'Solicitar avaliação do projeto',
    href: '#orcamento',
  },
  secondaryCta: {
    label: 'Conhecer obras e projetos',
    href: '#portfolio',
  },
  image: {
    src: '/images/fachada-obra.jpg', // use a foto da fachada dos stories ou um render principal
    alt: 'Projeto arquitetônico executado pela MD Arquitetos & Urbanistas',
  },
  highlights: [
    { label: 'Atendimento', value: 'Presencial & 100% Online' },
    { label: 'Foco', value: 'Projeto, Aprovação e Obra' },
    { label: 'Etapas', value: 'Planejamento até a Entrega' },
  ],
};

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'projetos',
    code: '01',
    title: 'Elaboração de Projetos',
    tag: 'Residencial & Comercial',
    description:
      'Desenvolvimento de projetos arquitetônicos e urbanísticos pensados para unir estética, funcionalidade e viabilidade técnica.',
    deliverables: ['Estudo preliminar e layout', 'Volumetria e apresentação visual', 'Detalhamento executivo'],
  },
  {
    id: 'aprovacao',
    code: '02',
    title: 'Aprovação Legal',
    tag: 'Regularização',
    description:
      'Organização documental e encaminhamento técnico para aprovar e regularizar sua obra com segurança.',
    deliverables: ['Adequação às normas', 'Documentação técnica', 'Acompanhamento de processos'],
  },
  {
    id: 'execucao',
    code: '03',
    title: 'Execução de Obras',
    tag: 'Obra Pronta',
    description:
      'Construção e reforma com controle de etapas, gestão de equipe e atenção aos detalhes para entregar o imóvel pronto.',
    deliverables: ['Gestão de cronograma', 'Coordenação de frentes de obra', 'Controle de qualidade'],
  },
  {
    id: 'acompanhamento',
    code: '04',
    title: 'Acompanhamento & Online',
    tag: 'Presencial ou 100% Online',
    description:
      'Acompanhamento presencial do andamento da obra ou atendimento 100% online para consultorias, análises e projetos à distância.',
    deliverables: ['Visitas e relatórios de avanço', 'Atendimento remoto flexível', 'Alinhamento contínuo'],
  },
];