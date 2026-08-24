export interface Proposal {
  slug: string;
  categoria: string;
  titulo: string;
  descricao: string;
  imagem: string;
  resumo: string;
  itens: string[];
  cor: string;
}

const T2I = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image';

export const proposals: Proposal[] = [
  {
    slug: 'saude-publica',
    categoria: 'Saúde Pública',
    titulo: 'Saúde Pública',
    descricao: 'Propostas apresentadas para a Saúde Pública do Rio Grande do Norte.',
    imagem: `${T2I}?prompt=Modern%20editorial%20flat%20illustration%20of%20public%20healthcare%20Brazil%20stethoscope%20hospital%20clinic%20medical%20cross%20green%20blue%20clean%20white%20background%20vector%20professional&image_size=square_hd`,
    resumo:
      'Ampliação e fortalecimento da rede de saúde pública com novos equipamentos, laboratórios, hospitais 24h e valorização dos profissionais.',
    cor: 'from-rose-50',
    itens: [
      'Laboratórios de análises clínicas por regiões-polo',
      'Hospitais Metropolitanos 24 horas por polo',
      'Fortalecimento da rede de saúde',
      'Centros odontológicos',
      'Ampliação da distribuição de medicamentos',
      'Otimização das filas de exames e cirurgias',
      'Novas bases do SAMU',
      'Novas viaturas',
      'Hospitais veterinários',
      'Novos concursos para saúde',
      'Valorização dos profissionais de saúde',
    ],
  },
  {
    slug: 'desenvolvimento-economico-infraestrutura',
    categoria: 'Desenvolvimento Econômico e Infraestrutura',
    titulo: 'Desenvolvimento Econômico e Infraestrutura',
    descricao:
      'Propostas apresentadas para o desenvolvimento econômico e infraestrutura do RN.',
    icone: 'industry',
    imagem: `${T2I}?prompt=Modern%20editorial%20flat%20illustration%20of%20brazilian%20economic%20infrastructure%20bridges%20roads%20wind%20turbines%20solar%20panels%20factories%20ports%20railways%20blue%20yellow%20clean%20white%20background%20vector%20professional&image_size=square_hd`,
    resumo:
      'Reativação de aeroportos, 6 Centros Industriais Avançados, energias renováveis, rodovias, ferrovias, porto marítimo e desenvolvimento industrial.',
    cor: 'from-blue-50',
    itens: [
      'Proposta relacionada a Fernando de Noronha',
      'Reativação do Aeroporto Augusto Severo',
      'Utilização do Aeroporto Aluízio Alves para cargas',
      '6 Centros Industriais Avançados: Grande Natal, João Câmara, Mossoró, Caicó, Pau dos Ferros, Nova Cruz',
      'Desenvolvimento industrial',
      'Novo Banco do RN',
      'Energia eólica',
      'Energia solar',
      'Terras raras',
      'Fruticultura',
      'Pesca',
      'Terceira ponte em Natal',
      'Recuperação e duplicação de rodovias',
      'Ferrovias',
      'Porto marítimo',
      'Transporte por aplicativo',
      'Assistência a motoristas',
      'Centros de assistência aos caminhoneiros',
    ],
  },
  {
    slug: 'seguranca-publica',
    categoria: 'Segurança Pública',
    titulo: 'Segurança Pública',
    descricao: 'Propostas apresentadas para a Segurança Pública do Rio Grande do Norte.',
    icone: 'shield',
    imagem: `${T2I}?prompt=Modern%20editorial%20flat%20illustration%20of%20public%20safety%20security%20brazil%20police%20shield%20badge%20firefighters%20patrol%20blue%20yellow%20green%20clean%20white%20background%20vector%20professional&image_size=square_hd`,
    resumo:
      'Duas penitenciárias de segurança máxima, ampliação do efetivo das forças de segurança, novas viaturas, modernização de equipamentos e hospitais.',
    cor: 'from-amber-50',
    itens: [
      'Duas penitenciárias de segurança máxima',
      'Centros de reabilitação',
      'Ampliação do efetivo da Polícia Militar',
      'Ampliação do efetivo dos Bombeiros',
      'Ampliação do efetivo da Polícia Civil',
      'Ampliação do efetivo da Polícia Penal',
      'Valorização dos profissionais de segurança',
      'Novas viaturas',
      'Modernização de equipamentos',
      'Novos batalhões',
      'Novas delegacias',
      'Hospital da Polícia Militar',
      'Hospital Civil/Penal',
    ],
  },
  {
    slug: 'educacao-acao-social-esporte',
    categoria: 'Educação, Ação Social e Esporte',
    titulo: 'Educação, Ação Social e Esporte',
    descricao:
      'Propostas apresentadas para Educação, Ação Social e Esporte no Rio Grande do Norte.',
    icone: 'book',
    imagem: `${T2I}?prompt=Modern%20editorial%20flat%20illustration%20of%20education%20social%20action%20sports%20brazil%20school%20books%20soccer%20children%20graduation%20cap%20green%20yellow%20blue%20clean%20white%20background%20vector%20professional&image_size=square_hd`,
    resumo:
      'Construção e reforma de escolas, escolas militares, valorização de professores, programa +Saúde RN Creches 24h e incentivo ao esporte.',
    cor: 'from-emerald-50',
    itens: [
      'Construção de escolas',
      'Reforma das escolas',
      'Modernização das unidades',
      'Equipamentos',
      'Valorização dos professores',
      'Escolas Militares',
      'Alimentação escolar',
      'Proposta de acesso ao ensino superior',
      'Programa +Saúde RN Creches 24 Horas',
      'Atendimento multidisciplinar: Psicólogo, Nutricionista, Pedagogo, Médico, Dentista',
      'Esporte',
      'Parcerias com clubes',
      'Incentivo às modalidades esportivas',
      'Parcerias com empresas',
    ],
  },
];

export function getProposalBySlug(slug: string): Proposal | undefined {
  return proposals.find((p) => p.slug === slug);
}
