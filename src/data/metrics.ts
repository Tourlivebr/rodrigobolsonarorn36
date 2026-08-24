export interface Metric {
  numero: string;
  rotulo: string;
  descricao: string;
}

export const metrics: Metric[] = [
  {
    numero: '6',
    rotulo: 'Centros Industriais Avançados',
    descricao: 'Proposta de implantação em 6 polos regionais do RN',
  },
  {
    numero: '9.000',
    rotulo: 'Novos PMs e Bombeiros',
    descricao: 'Ampliação proposta do efetivo das forças de segurança',
  },
  {
    numero: '2.000',
    rotulo: 'Novos Policiais Civis',
    descricao: 'Ampliação proposta para investigação e combate à criminalidade',
  },
  {
    numero: '1.000',
    rotulo: 'Novos Policiais Penais',
    descricao: 'Ampliação proposta do sistema prisional',
  },
  {
    numero: '24h',
    rotulo: 'Hospitais Metropolitanos',
    descricao: 'Atendimento proposto 24 horas por polo regional',
  },
  {
    numero: '24h',
    rotulo: 'Creches +Saúde RN',
    descricao: 'Programa proposto de creches 24 horas com atendimento multidisciplinar',
  },
  {
    numero: '+',
    rotulo: 'Novas Bases do SAMU',
    descricao: 'Proposta de ampliação e novas bases do SAMU no RN',
  },
  {
    numero: '2',
    rotulo: 'Penitenciárias de Segurança Máxima',
    descricao: 'Proposta de construção de duas novas unidades prisionais',
  },
];
