export interface Proposal {
  slug: string;
  categoria: string;
  titulo: string;
  descricao: string;
  icone: string;
  resumo: string;
  itens: string[];
  cor: string;
}

export const proposals: Proposal[] = [
  {
    slug: 'saude-publica',
    categoria: 'Saúde Pública',
    titulo: 'Saúde Pública',
    descricao: 'Propostas apresentadas para a Saúde Pública do Rio Grande do Norte.',
    icone: 'heart',
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
