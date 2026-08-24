export const siteConfig = {
  name: 'Rodrigo Bolsonaro',
  title: 'Rodrigo Bolsonaro — Portal Informativo',
  description:
    'Portal informativo institucional sobre Rodrigo Bolsonaro, candidato ao Governo do Rio Grande do Norte nas eleições de 2026. Conheça as propostas apresentadas para o RN.',
  shortName: 'Rodrigo Bolsonaro',
  url: 'https://rodrigobolsonaro36.com.br',
  locale: 'pt_BR',
  author: {
    name: 'Rodrigo Bolsonaro',
    idade: 46,
    cidade: 'Natal',
    estado: 'Rio Grande do Norte',
    ocupacao: 'Empresário',
    religiao: 'Cristão',
    orientacao: 'Direita / Bolsonarismo',
    partido: 'AGIR',
    candidato: 'candidato ao Governo do RN - 2026',
    lema: 'Deus, Família e Rio Grande do Norte',
    bio: 'Empresário natalense, 46 anos, cristão. Identificado politicamente com a direita e o bolsonarismo. Candidato ao Governo do Rio Grande do Norte nas eleições de 2026, ligado ao AGIR. Defende os valores de Deus, Família e Rio Grande do Norte.',
  },
  contact: {
    email: 'contato@rodrigobolsonarorn36.com.br',
    telefone: '',
    endereco: 'Natal, Rio Grande do Norte',
  },
  social: {
    instagram: 'https://instagram.com/rodrigobolsonarorn36.com.br',
    facebook: 'https://facebook.com/rodrigobolsonarorn36.com.br',
    whatsapp: 'https://wa.me/',
    youtube: 'https://youtube.com/',
    tiktok: 'https://tiktok.com/',
    x: 'https://x.com/',
  },
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Quem é', href: '#quem-e' },
    { label: 'Propostas', href: '#propostas' },
    { label: 'Perguntas e Respostas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ],
};

export type SiteConfig = typeof siteConfig;
