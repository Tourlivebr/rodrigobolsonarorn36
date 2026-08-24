export interface HeroSlide {
  id: number;
  titulo?: string;
  subtitulo?: string;
  descricao?: string;
  imagem: string;
  imagemAlt: string;
  tema?: 'saude' | 'infra' | 'seguranca' | 'educacao' | 'institucional' | 'banner';
  exibirTexto?: boolean;
  usarContain?: boolean;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    imagem: '/img/banner_rodrigobolsonaro36.png',
    imagemAlt: 'Banner institucional Rodrigo Bolsonaro 36',
    tema: 'banner',
    exibirTexto: false,
    usarContain: true,
  },
  {
    id: 2,
    titulo: 'Saúde Pública',
    subtitulo: 'Hospitais 24 horas',
    descricao:
      'Proposta de Hospitais Metropolitanos 24h e novos laboratórios por regiões-polo.',
    imagem:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20public%20hospital%20building%20Brazil%20healthcare%20architecture%20clean%20facade%20daylight%20professional%20photography%20clean%20style&image_size=landscape_16_9',
    imagemAlt: 'Hospital moderno',
    tema: 'saude',
    exibirTexto: true,
  },
  {
    id: 3,
    titulo: 'Desenvolvimento e Infraestrutura',
    subtitulo: '6 Centros Industriais Avançados',
    descricao:
      'Proposta de desenvolvimento industrial em Grande Natal, Mossoró, Caicó e mais.',
    imagem:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20industrial%20park%20Brazil%20infrastructure%20aerial%20view%20clean%20modern%20factories%20professional%20photography&image_size=landscape_16_9',
    imagemAlt: 'Centro Industrial',
    tema: 'infra',
    exibirTexto: true,
  },
  {
    id: 4,
    titulo: 'Segurança Pública',
    subtitulo: 'Ampliação do Efetivo',
    descricao:
      'Proposta de valorização das forças de segurança e novas viaturas.',
    imagem:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Brazilian%20public%20security%20forces%20professional%20uniform%20clean%20style%20ceremony%20daylight%20photography&image_size=landscape_16_9',
    imagemAlt: 'Forças de Segurança',
    tema: 'seguranca',
    exibirTexto: true,
  },
  {
    id: 5,
    titulo: 'Educação e Esporte',
    subtitulo: 'Escolas e Creches 24h',
    descricao:
      'Proposta de escolas modernas, valorização docente e programa +Saúde RN.',
    imagem:
      'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20school%20building%20Brazil%20education%20facade%20children%20clean%20architecture%20professional%20photography&image_size=landscape_16_9',
    imagemAlt: 'Escola moderna',
    tema: 'educacao',
    exibirTexto: true,
  },
];
