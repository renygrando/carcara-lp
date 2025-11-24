import {
  UtensilsCrossed,
  ShoppingCart,
  Building2,
  Factory,
  Wheat,
  Megaphone,
  Calendar,
  MessageSquare,
  BarChart3,
  Users,
  TrendingUp,
  Zap,
  Clock,
  DollarSign,
  AlertCircle,
  Package,
  Truck,
  FileText,
  Bot,
  Target,
} from 'lucide-react';
import { NichoData } from '../components/NichoPage';

export const gastronomiaNicho: NichoData = {
  badgeName: 'Gastronomia e Restaurantes',
  heroTitle: 'Automatize seu restaurante e foque no que importa: a experiência',
  heroLead: 'Pare de perder tempo com tarefas manuais. Automatize reservas, pedidos, controle de estoque e libere sua equipe para criar momentos inesquecíveis.',
  heroProof: 'Restaurantes economizam em média 25 horas/semana em tarefas operacionais',
  heroImage: 'https://images.unsplash.com/photo-1666479258732-5ea17469b610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzYyODEwMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  gradientColors: {
    from: '#FFF5E6',
    to: '#FFE8CC',
  },
  primaryColor: '#FF6B35',
  
  problemsTitle: 'Os desafios que restaurantes enfrentam todos os dias',
  problems: [
    {
      icon: AlertCircle,
      title: 'Gestão de reservas caótica',
      description: 'Ligações perdidas, anotações em papel, duplas reservas e mesas vazias enquanto clientes esperam.',
      impact: 'Isso custa até 30% de ocupação perdida',
    },
    {
      icon: Clock,
      title: 'Controle de CMV manual',
      description: 'Planilhas desatualizadas, desperdício não monitorado e margem de lucro que diminui sem você saber.',
      impact: 'Isso custa 15-20% do faturamento em desperdício',
    },
    {
      icon: MessageSquare,
      title: 'Atendimento sobrecarregado',
      description: 'Equipe dividida entre atender mesas, telefone e redes sociais. Experiência do cliente comprometida.',
      impact: 'Isso custa 40% de clientes insatisfeitos',
    },
  ],
  
  productsTitle: 'Produtos especializados para Gastronomia',
  productsSubtitle: 'Soluções prontas, implementação rápida, resultados previsíveis',
  products: [
    {
      badge: 'Carcará Food AI',
      icon: Calendar,
      name: 'Sistema de Reservas Inteligente',
      description: 'Automatize completamente suas reservas via WhatsApp, Instagram e site. Confirmações automáticas, lembretes e gestão de lista de espera.',
      features: [
        'Reservas via WhatsApp Business API',
        'Confirmações e lembretes automáticos',
        'Gestão de lista de espera',
        'Integração com Google Calendar',
        'Dashboard de ocupação em tempo real',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 1.500',
    },
    {
      badge: 'Carcará Food AI',
      icon: BarChart3,
      name: 'Controle de CMV Automatizado',
      description: 'Monitore custos, desperdício e margem de lucro em tempo real. Alertas de desvios e sugestões de ajustes no cardápio.',
      features: [
        'Cadastro automático de insumos',
        'Cálculo de CMV por prato',
        'Alertas de desvio de margem',
        'Relatórios de desperdício',
        'Sugestões de otimização',
      ],
      deliveryFormat: 'Projeto único',
      investmentFrom: 'A partir de R$ 3.500',
    },
    {
      badge: 'Carcará Food AI',
      icon: Bot,
      name: 'Atendente Virtual Multi-canal',
      description: 'Atenda clientes 24/7 via WhatsApp, Instagram e Facebook. Tire dúvidas, aceite pedidos e reserve mesas automaticamente.',
      features: [
        'Atendimento 24/7 em múltiplos canais',
        'Cardápio digital interativo',
        'Aceite de pedidos delivery',
        'FAQ automatizado',
        'Transferência para humano quando necessário',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 2.200',
    },
  ],
  
  casesTitle: 'Restaurantes que já transformaram sua operação',
  cases: [
    {
      clientName: 'Trattoria Bella Vista',
      challenge: 'Perdiam 20+ reservas por semana por não atender telefone no horário de pico',
      solution: 'Implementamos sistema de reservas via WhatsApp com confirmação automática',
      result: '100% das reservas capturadas, ocupação aumentou 35%',
    },
    {
      clientName: 'Hamburgueria Premium',
      challenge: 'CMV descontrolado, margem de lucro caindo sem identificar causa',
      solution: 'Automatizamos controle de insumos e cálculo de CMV por produto',
      result: 'Identificaram 18% de desperdício, margem aumentou 12 pontos',
    },
    {
      clientName: 'Café Gourmet',
      challenge: 'Equipe sobrecarregada atendendo WhatsApp, Instagram e presencial',
      solution: 'Criamos atendente virtual que responde dúvidas e aceita pedidos',
      result: '70% das dúvidas resolvidas automaticamente, equipe focada na experiência',
    },
  ],
  
  technologies: [
    'WhatsApp Business API',
    'Instagram API',
    'N8N',
    'ChatGPT',
    'Google Sheets',
    'iFood',
    'Rappi',
    'aiqfome',
    'Mesa Marcada',
  ],
  
  ctaTitle: 'Comece hoje a libertar seu restaurante',
  productOptions: [
    'Sistema de Reservas',
    'Controle de CMV',
    'Atendente Virtual',
    'Consultoria completa',
  ],
};

export const ecommerceNicho: NichoData = {
  badgeName: 'E-commerce e Varejo Digital',
  heroTitle: 'Recupere vendas perdidas e escale seu e-commerce com IA',
  heroLead: 'Automatize recuperação de carrinhos, atendimento e análise de dados. Venda mais sem aumentar sua equipe.',
  heroProof: 'Lojas recuperam em média 40% dos carrinhos abandonados com automação',
  heroImage: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjI3MTQwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  gradientColors: {
    from: '#E6F4FF',
    to: '#CCE8FF',
  },
  primaryColor: '#0066CC',
  
  problemsTitle: 'Os desafios que e-commerces enfrentam todos os dias',
  problems: [
    {
      icon: ShoppingCart,
      title: 'Carrinhos abandonados',
      description: 'Mais de 70% dos carrinhos são abandonados. Você perde vendas todos os dias sem estratégia de recuperação.',
      impact: 'Isso custa até 40% do faturamento potencial',
    },
    {
      icon: MessageSquare,
      title: 'Atendimento manual lento',
      description: 'Clientes esperam respostas rápidas. Cada minuto de atraso reduz drasticamente a conversão.',
      impact: 'Isso custa 35% de conversão perdida',
    },
    {
      icon: BarChart3,
      title: 'Dados dispersos e inutilizados',
      description: 'Informações espalhadas em várias plataformas. Decisões baseadas em intuição, não em dados.',
      impact: 'Isso custa oportunidades de crescimento não identificadas',
    },
  ],
  
  productsTitle: 'Produtos especializados para E-commerce',
  productsSubtitle: 'Soluções prontas, implementação rápida, resultados previsíveis',
  products: [
    {
      badge: 'Carcará Commerce',
      icon: ShoppingCart,
      name: 'Recuperador de Carrinhos Inteligente',
      description: 'Sistema automatizado de recuperação de carrinhos abandonados via WhatsApp e Email com personalização baseada em comportamento.',
      features: [
        'Detecção automática de abandono',
        'Mensagens personalizadas por produto',
        'Ofertas dinâmicas baseadas em valor',
        'Multi-canal (WhatsApp + Email + SMS)',
        'Dashboard de conversão',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 2.500',
    },
    {
      badge: 'Carcará Commerce',
      icon: Bot,
      name: 'Atendente de Vendas 24/7',
      description: 'Chatbot inteligente que responde dúvidas sobre produtos, rastreia pedidos e auxilia na finalização de compras.',
      features: [
        'Catálogo de produtos integrado',
        'Respostas contextuais sobre produtos',
        'Rastreamento de pedidos',
        'Sugestões de produtos',
        'Transferência inteligente para humano',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 1.800',
    },
    {
      badge: 'Carcará Commerce',
      icon: TrendingUp,
      name: 'Central de Analytics Unificada',
      description: 'Dashboard centralizado com dados de todas as plataformas: vendas, estoque, marketing e atendimento em um só lugar.',
      features: [
        'Integração com múltiplas plataformas',
        'KPIs em tempo real',
        'Alertas de performance',
        'Relatórios automatizados',
        'Previsão de vendas com IA',
      ],
      deliveryFormat: 'Projeto único',
      investmentFrom: 'A partir de R$ 4.500',
    },
  ],
  
  casesTitle: 'E-commerces que já escalaram com automação',
  cases: [
    {
      clientName: 'Loja Fashion Online',
      challenge: '68% de taxa de abandono de carrinho, sem estratégia de recuperação',
      solution: 'Implementamos recuperação automatizada via WhatsApp com ofertas personalizadas',
      result: '42% dos carrinhos recuperados, R$ 180k em vendas adicionais/mês',
    },
    {
      clientName: 'Marketplace B2B',
      challenge: 'Atendimento demorava 4h+ para responder, perdiam negociações',
      solution: 'Criamos atendente IA que responde instantaneamente e qualifica leads',
      result: 'Tempo de resposta: 30 segundos, conversão aumentou 28%',
    },
    {
      clientName: 'Varejista Multi-canal',
      challenge: 'Dados em 5 plataformas diferentes, decisões sem base',
      solution: 'Unificamos todos os dados em dashboard central com IA',
      result: 'Identificaram nicho lucrativo, faturamento cresceu 45% em 3 meses',
    },
  ],
  
  technologies: [
    'Shopify',
    'WooCommerce',
    'Mercado Livre',
    'Nuvemshop',
    'ChatGPT',
    'N8N',
    'WhatsApp Business API',
    'Google Analytics',
    'Meta Ads',
  ],
  
  ctaTitle: 'Comece hoje a recuperar vendas perdidas',
  productOptions: [
    'Recuperador de Carrinhos',
    'Atendente Virtual',
    'Central de Analytics',
    'Consultoria completa',
  ],
};

export const gestaopublicaNicho: NichoData = {
  badgeName: 'Gestão Pública',
  heroTitle: 'Atenda cidadãos com excelência e transparência 24 horas por dia',
  heroLead: 'Centralize demandas, automatize respostas e traga eficiência para sua gestão pública com tecnologia de ponta.',
  heroProof: 'Prefeituras atendem 1.000+ cidadãos/dia com apenas 1 servidor dedicado',
  heroImage: 'https://images.unsplash.com/photo-1762246433142-d7d357c76cb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwcHVibGljJTIwc2VydmljZXxlbnwxfHx8fDE3NjI4MTAxNTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  gradientColors: {
    from: '#E8F5E9',
    to: '#C8E6C9',
  },
  primaryColor: '#2E7D32',
  
  problemsTitle: 'Os desafios que gestões públicas enfrentam todos os dias',
  problems: [
    {
      icon: Users,
      title: 'Atendimento ao cidadão limitado',
      description: 'Horário comercial, filas longas, reclamações perdidas. Cidadãos frustrados e gestão sem visibilidade.',
      impact: 'Isso custa insatisfação e falta de transparência',
    },
    {
      icon: FileText,
      title: 'Demandas não centralizadas',
      description: 'Pedidos por WhatsApp, e-mail, telefone, presencial. Impossível acompanhar e priorizar.',
      impact: 'Isso custa perda de controle e ineficiência',
    },
    {
      icon: BarChart3,
      title: 'Dados sem análise',
      description: 'Milhares de interações sem gerar insights. Impossível medir satisfação ou identificar problemas recorrentes.',
      impact: 'Isso custa decisões sem embasamento',
    },
  ],
  
  productsTitle: 'Produtos especializados para Gestão Pública',
  productsSubtitle: 'Soluções prontas, implementação rápida, resultados previsíveis',
  products: [
    {
      badge: 'Carcará Gestão Pública',
      icon: Bot,
      name: 'Atendente Virtual do Cidadão',
      description: 'Atenda cidadãos 24/7 via WhatsApp. Tire dúvidas, receba demandas, informe sobre serviços públicos automaticamente.',
      features: [
        'Atendimento 24/7 automatizado',
        'Respostas sobre serviços públicos',
        'Recebimento e protocolo de demandas',
        'Agendamento de atendimentos',
        'FAQ de secretarias',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 3.000',
    },
    {
      badge: 'Carcará Gestão Pública',
      icon: Target,
      name: 'Central de Demandas Unificada',
      description: 'Centralize todas as demandas dos cidadãos em um só lugar. Distribua, acompanhe e garanta que nada se perca.',
      features: [
        'Recebimento multi-canal',
        'Protocolos automáticos',
        'Distribuição por secretaria',
        'Acompanhamento de prazos',
        'Dashboard de gestão',
      ],
      deliveryFormat: 'Projeto único',
      investmentFrom: 'A partir de R$ 5.500',
    },
    {
      badge: 'Carcará Gestão Pública',
      icon: BarChart3,
      name: 'Painel de Transparência Ativa',
      description: 'Dashboard público com dados de atendimento, demandas resolvidas e satisfação dos cidadãos. Transparência em tempo real.',
      features: [
        'Métricas públicas atualizadas',
        'Gráficos de atendimento',
        'Índice de satisfação',
        'Tempo médio de resolução',
        'Exportação de relatórios',
      ],
      deliveryFormat: 'Projeto único',
      investmentFrom: 'A partir de R$ 4.000',
    },
  ],
  
  casesTitle: 'Gestões públicas que já transformaram o atendimento',
  cases: [
    {
      clientName: 'Prefeitura de Cidade Média',
      challenge: 'Atendiam apenas 100 cidadãos/dia em horário comercial',
      solution: 'Implementamos atendente virtual 24/7 via WhatsApp',
      result: 'Passaram a atender 1.200 cidadãos/dia, satisfação subiu 65%',
    },
    {
      clientName: 'Secretaria de Obras',
      challenge: 'Demandas perdidas entre e-mails, WhatsApp e presencial',
      solution: 'Centralizamos tudo em uma plataforma com protocolos automáticos',
      result: 'Zero demandas perdidas, tempo de resposta caiu 60%',
    },
    {
      clientName: 'Gestão Municipal',
      challenge: 'Falta de transparência, cidadãos sem acesso a informações',
      solution: 'Criamos dashboard público com todas as métricas de atendimento',
      result: 'Elogios públicos, índice de confiança aumentou 42%',
    },
  ],
  
  technologies: [
    'WhatsApp Business API',
    'N8N',
    'ChatGPT',
    'Google Sheets',
    'Power BI',
    'Notion',
    'Airtable',
    'Gov.br',
  ],
  
  ctaTitle: 'Comece hoje a transformar sua gestão pública',
  productOptions: [
    'Atendente Virtual',
    'Central de Demandas',
    'Painel de Transparência',
    'Consultoria completa',
  ],
};

export const industriaNicho: NichoData = {
  badgeName: 'Indústria e Logística',
  heroTitle: 'Integre produção, estoque e distribuição com visibilidade total',
  heroLead: 'Elimine gargalos, reduza custos operacionais e tenha controle completo da sua cadeia produtiva com automação inteligente.',
  heroProof: 'Indústrias reduzem até 40% do tempo em gestão operacional',
  heroImage: 'https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwaW5kdXN0cnklMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzYyODEwMTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  gradientColors: {
    from: '#E3F2FD',
    to: '#BBDEFB',
  },
  primaryColor: '#1565C0',
  
  problemsTitle: 'Os desafios que indústrias enfrentam todos os dias',
  problems: [
    {
      icon: Package,
      title: 'Controle de estoque manual',
      description: 'Planilhas desatualizadas, contagens manuais, rupturas e excesso de estoque ao mesmo tempo.',
      impact: 'Isso custa 20-30% em capital parado ou vendas perdidas',
    },
    {
      icon: Truck,
      title: 'Logística descoordenada',
      description: 'Rotas não otimizadas, atrasos sem previsão, clientes sem informação em tempo real.',
      impact: 'Isso custa 25% a mais em custos de frete',
    },
    {
      icon: BarChart3,
      title: 'Produção sem visibilidade',
      description: 'Sem dados em tempo real de produção, qualidade e eficiência. Decisões sempre atrasadas.',
      impact: 'Isso custa oportunidades de otimização não aproveitadas',
    },
  ],
  
  productsTitle: 'Produtos especializados para Indústria',
  productsSubtitle: 'Soluções prontas, implementação rápida, resultados previsíveis',
  products: [
    {
      badge: 'Carcará Logística',
      icon: Package,
      name: 'Gestão de Estoque Inteligente',
      description: 'Sistema automatizado de controle de estoque com alertas de ruptura, reposição automática e integração com produção.',
      features: [
        'Controle em tempo real',
        'Alertas de ponto de reposição',
        'Integração com produção',
        'Rastreamento por lote',
        'Relatórios de giro de estoque',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 4.000',
    },
    {
      badge: 'Carcará Logística',
      icon: Truck,
      name: 'Otimizador de Rotas e Entregas',
      description: 'Automatize planejamento de rotas, rastreamento de entregas e comunicação com clientes sobre status do pedido.',
      features: [
        'Otimização automática de rotas',
        'Rastreamento em tempo real',
        'Notificações automáticas para clientes',
        'Controle de SLA de entrega',
        'Dashboard de performance logística',
      ],
      deliveryFormat: 'Projeto único',
      investmentFrom: 'A partir de R$ 6.500',
    },
    {
      badge: 'Carcará Logística',
      icon: TrendingUp,
      name: 'Painel de Produção em Tempo Real',
      description: 'Monitore toda a produção em tempo real: máquinas, qualidade, eficiência e gargalos. Decisões baseadas em dados.',
      features: [
        'Dashboard de produção ao vivo',
        'Alertas de paradas não programadas',
        'Índices de qualidade automáticos',
        'Métricas de eficiência (OEE)',
        'Relatórios automatizados',
      ],
      deliveryFormat: 'Projeto único',
      investmentFrom: 'A partir de R$ 7.500',
    },
  ],
  
  casesTitle: 'Indústrias que já otimizaram sua operação',
  cases: [
    {
      clientName: 'Indústria de Alimentos',
      challenge: 'Ruptura frequente de insumos, paradas de produção por falta de material',
      solution: 'Implementamos gestão inteligente de estoque com alertas automáticos',
      result: 'Zero rupturas em 6 meses, capital em estoque reduzido 35%',
    },
    {
      clientName: 'Distribuidora Regional',
      challenge: 'Rotas manuais, 30% de atraso nas entregas, clientes insatisfeitos',
      solution: 'Automatizamos otimização de rotas e notificações para clientes',
      result: 'Atrasos caíram para 5%, custos de frete reduziram 22%',
    },
    {
      clientName: 'Fábrica de Peças',
      challenge: 'Não sabiam eficiência real das linhas, decisões sem dados',
      solution: 'Criamos painel em tempo real com métricas de produção',
      result: 'Identificaram gargalo, produtividade aumentou 38%',
    },
  ],
  
  technologies: [
    'N8N',
    'ChatGPT',
    'Google Maps API',
    'ERPs (TOTVS, SAP)',
    'Power BI',
    'IoT Sensors',
    'Airtable',
    'WhatsApp Business API',
  ],
  
  ctaTitle: 'Comece hoje a integrar sua operação industrial',
  productOptions: [
    'Gestão de Estoque',
    'Otimizador de Rotas',
    'Painel de Produção',
    'Consultoria completa',
  ],
};

export const agroNicho: NichoData = {
  badgeName: 'Agro e Agronegócio',
  heroTitle: 'Gerencie sua fazenda do celular com inteligência artificial',
  heroLead: 'Controle safra, insumos, vendas e equipe via WhatsApp. Tenha dados do campo na palma da mão.',
  heroProof: 'Produtores economizam 15+ horas/semana em controles manuais',
  heroImage: 'https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm0lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Mjc1MDczMHww&ixlib=rb-4.1.0&q=80&w=1080',
  gradientColors: {
    from: '#F1F8E9',
    to: '#DCEDC8',
  },
  primaryColor: '#558B2F',
  
  problemsTitle: 'Os desafios que produtores rurais enfrentam todos os dias',
  problems: [
    {
      icon: FileText,
      title: 'Controles em cadernos e planilhas',
      description: 'Dados de safra, insumos e vendas anotados manualmente. Impossível ter visão consolidada.',
      impact: 'Isso custa oportunidades de otimização não identificadas',
    },
    {
      icon: DollarSign,
      title: 'Gestão financeira confusa',
      description: 'Custos de produção misturados, não sabe rentabilidade real por talhão ou cultura.',
      impact: 'Isso custa decisões de plantio sem base em lucratividade',
    },
    {
      icon: Users,
      title: 'Comunicação com equipe difícil',
      description: 'Funcionários no campo, sem sistema para reportar atividades e receber orientações.',
      impact: 'Isso custa retrabalho e falta de rastreabilidade',
    },
  ],
  
  productsTitle: 'Produtos especializados para Agronegócio',
  productsSubtitle: 'Soluções prontas, implementação rápida, resultados previsíveis',
  products: [
    {
      badge: 'IA da Fazenda',
      icon: Wheat,
      name: 'Assistente Virtual da Fazenda',
      description: 'Gerencie tudo via WhatsApp: registre aplicações, consulte estoque de insumos, acompanhe safra e controle financeiro.',
      features: [
        'Registro de atividades via WhatsApp',
        'Consulta de estoque de insumos',
        'Acompanhamento de safra',
        'Alertas de aplicações',
        'Relatórios por talhão',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 2.500',
    },
    {
      badge: 'IA da Fazenda',
      icon: BarChart3,
      name: 'Dashboard Financeiro Rural',
      description: 'Tenha visão clara de custos por talhão, rentabilidade por cultura e fluxo de caixa da propriedade.',
      features: [
        'Custos detalhados por talhão',
        'Rentabilidade por cultura',
        'Controle de receitas e despesas',
        'Projeções de safra',
        'Relatórios de lucratividade',
      ],
      deliveryFormat: 'Projeto único',
      investmentFrom: 'A partir de R$ 4.500',
    },
    {
      badge: 'IA da Fazenda',
      icon: Users,
      name: 'Sistema de Gestão de Equipe',
      description: 'Acompanhe atividades da equipe, distribua tarefas e receba relatórios diários automaticamente via WhatsApp.',
      features: [
        'Distribuição de tarefas via WhatsApp',
        'Check-in de atividades',
        'Relatórios diários automáticos',
        'Controle de horas trabalhadas',
        'Histórico de atividades por funcionário',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 3.200',
    },
  ],
  
  casesTitle: 'Produtores que já digitalizaram sua fazenda',
  cases: [
    {
      clientName: 'Fazenda de Café Especial',
      challenge: 'Controles em caderno, sem saber custo real de produção por talhão',
      solution: 'Implementamos assistente WhatsApp + dashboard financeiro',
      result: 'Identificaram talhão com custo 40% maior, ajustaram manejo e aumentaram margem',
    },
    {
      clientName: 'Produtor de Grãos',
      challenge: 'Equipe de 15 pessoas, sem rastreabilidade de aplicações',
      solution: 'Criamos sistema de gestão de equipe via WhatsApp',
      result: 'Todas as aplicações rastreadas, zero retrabalho, economia de 12h/semana',
    },
    {
      clientName: 'Fazenda Pecuária',
      challenge: 'Estoque de insumos desorganizado, compras duplicadas',
      solution: 'Automatizamos controle via WhatsApp com alertas de reposição',
      result: 'Reduziram 30% em compras desnecessárias, estoque sempre atualizado',
    },
  ],
  
  technologies: [
    'WhatsApp Business API',
    'N8N',
    'ChatGPT',
    'Google Sheets',
    'Climate FieldView',
    'Aegro',
    'Power BI',
    'Airtable',
  ],
  
  ctaTitle: 'Comece hoje a digitalizar sua propriedade rural',
  productOptions: [
    'Assistente Virtual',
    'Dashboard Financeiro',
    'Gestão de Equipe',
    'Consultoria completa',
  ],
};

export const politicaNicho: NichoData = {
  badgeName: 'Política e Eleições',
  heroTitle: 'CRM eleitoral inteligente para campanhas vencedoras',
  heroLead: 'Organize militância, automatize comunicação com eleitores e gerencie seu mandato com tecnologia de ponta.',
  heroProof: 'Campanhas organizam 10.000+ eleitores com apenas 3 coordenadores',
  heroImage: 'https://images.unsplash.com/photo-1653818282789-8810407280c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBjYW1wYWlnbiUyMGVsZWN0aW9ufGVufDF8fHx8MTc2MjgxMDE2MHww&ixlib=rb-4.1.0&q=80&w=1080',
  gradientColors: {
    from: '#E8EAF6',
    to: '#C5CAE9',
  },
  primaryColor: '#3F51B5',
  
  problemsTitle: 'Os desafios que candidatos e mandatos enfrentam todos os dias',
  problems: [
    {
      icon: Users,
      title: 'Eleitores desorganizados',
      description: 'Contatos em planilhas, sem histórico de interações, impossível fazer campanha personalizada.',
      impact: 'Isso custa engajamento e votos',
    },
    {
      icon: MessageSquare,
      title: 'Comunicação massiva e genérica',
      description: 'Mensagens iguais para todos, sem segmentação, baixa taxa de resposta e engajamento.',
      impact: 'Isso custa conexão real com eleitores',
    },
    {
      icon: FileText,
      title: 'Demandas de mandato perdidas',
      description: 'Pedidos de eleitores sem controle, impossível acompanhar e dar retorno.',
      impact: 'Isso custa credibilidade e reeleição',
    },
  ],
  
  productsTitle: 'Produtos especializados para Política',
  productsSubtitle: 'Soluções prontas, implementação rápida, resultados previsíveis',
  products: [
    {
      badge: 'Mumic Política',
      icon: Users,
      name: 'CRM Eleitoral Completo',
      description: 'Organize todos os seus eleitores, militantes e apoiadores com histórico completo de interações e segmentação inteligente.',
      features: [
        'Cadastro completo de eleitores',
        'Histórico de todas as interações',
        'Segmentação por bairro/interesses',
        'Tags e categorias customizadas',
        'Integração com redes sociais',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 3.500',
    },
    {
      badge: 'Mumic Política',
      icon: Megaphone,
      name: 'Automação de Campanhas',
      description: 'Envie mensagens personalizadas em massa via WhatsApp, segmente por perfil e acompanhe engajamento em tempo real.',
      features: [
        'Disparos segmentados via WhatsApp',
        'Personalização automática',
        'Agendamento de campanhas',
        'Métricas de engajamento',
        'Respostas automáticas',
      ],
      deliveryFormat: 'Setup + Mensalidade',
      investmentFrom: 'A partir de R$ 2.800',
    },
    {
      badge: 'Mumic Política',
      icon: Target,
      name: 'Gestão de Mandato Digital',
      description: 'Receba, organize e acompanhe todas as demandas dos seus eleitores. Dashboard de gestão e transparência.',
      features: [
        'Recebimento via WhatsApp/Forms',
        'Protocolos automáticos',
        'Distribuição por assessor',
        'Acompanhamento de prazos',
        'Dashboard público de transparência',
      ],
      deliveryFormat: 'Projeto único',
      investmentFrom: 'A partir de R$ 5.000',
    },
  ],
  
  casesTitle: 'Campanhas e mandatos que já se digitalizaram',
  cases: [
    {
      clientName: 'Vereador de Cidade Grande',
      challenge: '15.000 eleitores em planilhas, sem histórico de interações',
      solution: 'Implementamos CRM completo com integração WhatsApp',
      result: 'Organizaram toda base, campanha de reeleição personalizada, reeleito com 35% mais votos',
    },
    {
      clientName: 'Campanha Estadual',
      challenge: 'Disparos manuais, baixo engajamento, equipe sobrecarregada',
      solution: 'Automatizamos disparos segmentados via WhatsApp',
      result: 'Taxa de resposta subiu 180%, equipe focou em estratégia',
    },
    {
      clientName: 'Gabinete Municipal',
      challenge: 'Demandas perdidas, eleitores sem retorno, imagem comprometida',
      solution: 'Criamos sistema de gestão de mandato com protocolos',
      result: 'Zero demandas perdidas, 95% de satisfação dos eleitores',
    },
  ],
  
  technologies: [
    'WhatsApp Business API',
    'N8N',
    'ChatGPT',
    'Notion',
    'Airtable',
    'Google Forms',
    'Instagram API',
    'Meta Ads',
  ],
  
  ctaTitle: 'Comece hoje a profissionalizar sua campanha ou mandato',
  productOptions: [
    'CRM Eleitoral',
    'Automação de Campanhas',
    'Gestão de Mandato',
    'Consultoria completa',
  ],
};
