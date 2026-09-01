export const siteConfig = {
  name: 'Rodrigo de Bolsonaro',
  title: 'Rodrigo de Bolsonaro — Portal Informativo',
  description:
    'Portal informativo institucional sobre Rodrigo de Bolsonaro, candidato ao Governo do Rio Grande do Norte nas eleições de 2026. Conheça as propostas apresentadas para o RN.',
  shortName: 'Rodrigo de Bolsonaro',
  url: 'https://rodrigodebolsonaro36.com.br',
  locale: 'pt_BR',
  author: {
    name: 'Rodrigo de Bolsonaro',
    idade: 46,
    cidade: 'Natal',
    estado: 'Rio Grande do Norte',
    ocupacao: 'Empresário',
    religiao: 'Cristão',
    orientacao: 'Direita / Bolsonarista',
    partido: 'AGIR',
    candidato: 'candidato ao Governo do RN - 2026',
    lema: 'Deus, Família e Rio Grande do Norte',
    bio: 'Empresário natalense, 46 anos, cristão. Identificado politicamente com a direita e bolsonarista. Candidato ao Governo do Rio Grande do Norte nas eleições de 2026, ligado ao AGIR. Defende os valores de Deus, Família e Rio Grande do Norte.',
  },
  contact: {
    email: 'contato@rodrigodebolsonarorn36.com.br',
    telefone: '',
    endereco: 'Natal, Rio Grande do Norte',
  },
  social: {
    instagram: 'https://instagram.com/rodrigodebolsonarorn36',
    facebook: 'https://facebook.com/rodrigodebolsonarorn36',
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
