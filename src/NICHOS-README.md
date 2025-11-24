# Páginas de Nichos da Carcará

## Estrutura

Este projeto contém um template reutilizável de página de nicho que foi replicado para os 6 nichos especializados da Carcará:

1. **Gastronomia e Restaurantes** (`/gastronomia.tsx`)
2. **E-commerce e Varejo Digital** (`/ecommerce.tsx`)
3. **Gestão Pública** (`/gestaopublica.tsx`)
4. **Indústria e Logística** (`/industria.tsx`)
5. **Agro e Agronegócio** (`/agro.tsx`)
6. **Política e Eleições** (`/politica.tsx`)

## Como Funciona

### Template Reutilizável
O arquivo `/components/NichoPage.tsx` contém o template base que é usado por todas as páginas de nicho. Ele recebe dados via props e renderiza:

- **Hero Section** - Com gradiente personalizado, título, descrição e CTAs
- **Seção de Problemas** - 3 principais desafios do nicho
- **Seção de Produtos** - 2-3 produtos especializados com preços e features
- **Seção de Serviços** - Consultoria e implementação customizada
- **Timeline** - Como funciona em 4 semanas
- **Cases** - 3 mini-cases de sucesso
- **Tecnologias** - Lista de ferramentas dominadas
- **CTA Final** - Formulário com dropdown de produtos

### Dados dos Nichos
O arquivo `/data/nichos.ts` contém todos os dados específicos de cada nicho:

```typescript
export interface NichoData {
  badgeName: string;
  heroTitle: string;
  heroLead: string;
  heroProof: string;
  heroImage: string;
  gradientColors: { from: string; to: string };
  primaryColor: string;
  problemsTitle: string;
  problems: NichoProblem[];
  productsTitle: string;
  productsSubtitle: string;
  products: NichoProduct[];
  casesTitle: string;
  cases: NichoCase[];
  technologies: string[];
  ctaTitle: string;
  productOptions: string[];
}
```

### Páginas Individuais
Cada nicho tem sua própria página que importa o template e os dados:

```typescript
import NichoPage from './components/NichoPage';
import { gastronomiaNicho } from './data/nichos';

export default function GastronomiaPage() {
  return <NichoPage data={gastronomiaNicho} />;
}
```

## Como Usar no App.tsx

Para criar navegação entre as páginas, você pode usar React Router ou Next.js routing. Exemplo básico:

### Opção 1: Alterar App.tsx para mostrar página específica

```typescript
// App.tsx
import GastronomiaPage from './gastronomia';

export default function App() {
  return <GastronomiaPage />;
}
```

### Opção 2: Adicionar navegação condicional

```typescript
// App.tsx
import { useState } from 'react';
import HomePage from './home'; // renomeie seu App.tsx atual
import GastronomiaPage from './gastronomia';
import EcommercePage from './ecommerce';
// ... outros nichos

export default function App() {
  const [page, setPage] = useState('home');
  
  if (page === 'gastronomia') return <GastronomiaPage />;
  if (page === 'ecommerce') return <EcommercePage />;
  // ... outros nichos
  
  return <HomePage />;
}
```

## Cores por Nicho

Cada nicho tem sua paleta de cores exclusiva:

- **Gastronomia**: Laranja (#FF6B35) + tons quentes
- **E-commerce**: Azul (#0066CC) + tons frios
- **Gestão Pública**: Verde (#2E7D32) + tons naturais
- **Indústria**: Azul escuro (#1565C0) + tons profissionais
- **Agro**: Verde oliva (#558B2F) + tons terrosos
- **Política**: Azul royal (#3F51B5) + tons institucionais

## Customização

Para adicionar um novo nicho:

1. Crie os dados em `/data/nichos.ts`:
```typescript
export const novoNicho: NichoData = {
  badgeName: 'Nome do Nicho',
  heroTitle: '...',
  // ... resto dos dados
};
```

2. Crie a página:
```typescript
// novonicho.tsx
import NichoPage from './components/NichoPage';
import { novoNicho } from './data/nichos';

export default function NovoNichoPage() {
  return <NichoPage data={novoNicho} />;
}
```

## Produtos por Nicho

### Gastronomia
- Sistema de Reservas Inteligente (R$ 1.500+)
- Controle de CMV Automatizado (R$ 3.500+)
- Atendente Virtual Multi-canal (R$ 2.200+)

### E-commerce
- Recuperador de Carrinhos Inteligente (R$ 2.500+)
- Atendente de Vendas 24/7 (R$ 1.800+)
- Central de Analytics Unificada (R$ 4.500+)

### Gestão Pública
- Atendente Virtual do Cidadão (R$ 3.000+)
- Central de Demandas Unificada (R$ 5.500+)
- Painel de Transparência Ativa (R$ 4.000+)

### Indústria e Logística
- Gestão de Estoque Inteligente (R$ 4.000+)
- Otimizador de Rotas e Entregas (R$ 6.500+)
- Painel de Produção em Tempo Real (R$ 7.500+)

### Agro
- Assistente Virtual da Fazenda (R$ 2.500+)
- Dashboard Financeiro Rural (R$ 4.500+)
- Sistema de Gestão de Equipe (R$ 3.200+)

### Política
- CRM Eleitoral Completo (R$ 3.500+)
- Automação de Campanhas (R$ 2.800+)
- Gestão de Mandato Digital (R$ 5.000+)

## Integração com Homepage

As páginas de nicho são acessadas a partir dos cards da homepage. Atualize os links dos cards na seção de nichos da homepage para navegar para estas páginas.

## Responsividade

Todas as páginas são 100% responsivas com abordagem mobile-first, incluindo:
- Grid adaptativo (1 coluna mobile → 2-3 colunas desktop)
- Tipografia escalável
- Imagens responsivas
- Espaçamento ajustado por breakpoint

## Meta Pixel

O Meta Pixel está integrado apenas na página principal (App.tsx). Se você precisar de tracking nas páginas de nicho, implemente o useEffect do pixel em cada uma delas ou use um layout wrapper compartilhado.
