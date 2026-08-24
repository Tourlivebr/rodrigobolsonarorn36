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
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80',
    imagemAlt: 'Hospital moderno com atendimento de emergência e ambulância.',
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
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80',
    imagemAlt: 'Vista aérea de rodovia, parque eólico e zona industrial em expansão.',
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
      'https://images.unsplash.com/photo-1517816428104-797678c7cf0c?auto=format&fit=crop&w=2000&q=80',
    imagemAlt: 'Equipe de forças de segurança com viaturas em patrulhamento urbano.',
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
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=2000&q=80',
    imagemAlt: 'Escola moderna com estudantes, biblioteca e espaço esportivo.',
    tema: 'educacao',
    exibirTexto: true,
  },
];
