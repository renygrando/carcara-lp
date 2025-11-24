# Design System V2 - Carcará

## Visão Geral

Esta é a implementação completa do Design System V2 da Carcará, seguindo rigorosamente as especificações técnicas fornecidas.

## Arquivos Criados

### Componentes
- `/components/NichoPageV2.tsx` - Template reutilizável de página de nicho com todas as seções especificadas

### Dados
- `/data/nichosV2.ts` - Dados dos nichos seguindo as novas diretrizes (sem números inventados, preços "Sob consulta")

### Páginas
- `/gastronomia-v2.tsx` - Página de Gastronomia
- `/ecommerce-v2.tsx` - Página de E-commerce
- `/gestaopublica-v2.tsx` - Página de Gestão Pública

## Design System Implementado

### Cores (do logo Carcará)
```css
--verde-carcara: #0D4C3A
--amarelo-carcara: #FFD93D
--bege-claro: #F5F3E8
--verde-escuro: #092D22
--preto: #1A1A1A
--branco: #FFFFFF
--cinza-claro: #E8E6DC
```

### Tipografia
- **Fonte principal**: Inter (Google Fonts)
- **Hierarquia implementada**:
  - H1: 56px, line-height 64px, letter-spacing -1px, Bold
  - H2: 40px, line-height 48px, letter-spacing -0.5px, Bold
  - H3: 32px, line-height 40px, Semibold
  - H4: 24px, line-height 32px, Semibold
  - Parágrafo grande: 18px, line-height 28px
  - Parágrafo: 16px, line-height 24px
  - Pequeno: 14px, line-height 20px

### Espaçamento
Sistema baseado em 8px: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

### Componentes

#### Botão Primário
- Background: #FFD93D
- Texto: #092D22 Bold
- Padding: 16px 32px
- Border-radius: 8px
- Hover: #FFC700
- Shadow: 0 4px 12px rgba(255, 217, 61, 0.3)

#### Botão Secundário
- Background: transparent
- Border: 2px solid #0D4C3A
- Texto: #0D4C3A Semibold
- Padding: 14px 30px
- Border-radius: 8px
- Hover: background #0D4C3A, texto #FFFFFF

#### Card Padrão
- Background: #FFFFFF
- Border: 1px solid #E8E6DC
- Border-radius: 12px
- Padding: 32px
- Shadow: 0 2px 8px rgba(0, 0, 0, 0.04)
- Hover: shadow 0 8px 24px rgba(0, 0, 0, 0.08), translateY(-4px)

#### Badge
- Background: #FFD93D
- Texto: #092D22 Semibold
- Padding: 6px 16px
- Border-radius: 20px
- Font-size: 14px
- Uppercase, letter-spacing: 0.5px

## Estrutura das Páginas

### 1. Navegação (Header Fixo)
- Position: fixed, altura 80px
- Background: rgba(255, 255, 255, 0.95) + backdrop blur
- Border-bottom: 1px solid #E8E6DC
- Logo à esquerda (40px altura)
- Menu central (Desktop)
- CTA à direita
- Mobile: Menu hamburger

### 2. Hero Section
- Altura mínima: 600px
- Background: gradiente de #0D4C3A
- Layout: 2 colunas (50/50)
- Badge do nicho
- H1 (max-width 540px)
- Lead (max-width 500px)
- 2 CTAs lado a lado
- Imagem 540x400px com border-radius 16px

### 3. Seção Problemas
- Background: #FFFFFF
- Padding: 96px 0
- Grid de 3 colunas (cards)
- Ícone 48px
- Título H4
- Descrição
- Box de impacto (background #F5F3E8, border-left 3px #FFD93D)

### 4. Seção Produtos
- Background: #F5F3E8
- Padding: 96px 0
- Grid de 2-3 produtos
- Badge do produto
- Ícone 64px
- Título H3
- Descrição (3 linhas max)
- Lista de features (4-6 itens com check)
- Formato de entrega
- Pricing: "Sob consulta"
- CTA: "Conhecer produto"

### 5. Seção Como Funciona (Timeline)
- Background: #FFFFFF
- Padding: 96px 0
- 4 etapas horizontais
- Círculo numerado (48px, background #FFD93D)
- Ícone 40px
- Título H4
- Descrição
- Timeframe

### 6. Seção Serviços (Opcional)
- Background: #F5F3E8
- Padding: 96px 0
- 2 colunas
- "Consultoria e Diagnóstico" | "Implementação Customizada"
- Lista com bullets amarelos
- CTA por coluna

### 7. CTA Final
- Background: gradiente de #0D4C3A
- Padding: 80px 0
- Formulário centralizado (max-width 700px)
- Card branco com padding 40px
- Campos: Nome, Email, WhatsApp, Interesse (select)
- Botão submit: altura 56px
- Texto: "Resposta em até 2 horas úteis"

### 8. Footer
- Background: #092D22
- Color: #FFFFFF
- Padding: 64px 0 32px
- 4 colunas: Nichos, Empresa, Contato, Redes Sociais
- Links com opacity 80%, hover #FFD93D
- Footer bottom: copyright + links legais

## Responsividade

### Mobile (< 768px)
- Header: padding 16px, logo 32px
- Menu: hamburger sidebar
- Hero: layout coluna, padding 40px 24px
- Seções: padding 64px 24px
- Grids: 3 colunas → 1 coluna
- Fontes reduzidas 20%:
  - H1: 40px
  - H2: 32px
  - H3: 24px
- Botões: width 100%
- Footer: 1 coluna
- Timeline: vertical

## Animações

### Scroll Reveal
- Fade in + translateY(-20px)
- Duration: 600ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Trigger: 20% visível

### Hover
- Duration: 300ms
- Easing: ease-in-out

### Button Press
- Scale(0.98)
- Duration: 100ms

## Diretrizes de Conteúdo

### ✅ FAZER
- Usar "Sob consulta" para preços
- Usar "Consulte valores" quando apropriado
- Descrever impactos sem inventar números
- Focar em benefícios reais e mensuráveis
- Manter descrições objetivas

### ❌ NÃO FAZER
- Inventar estatísticas ou números
- Usar percentuais sem dados reais
- Criar métricas falsas
- Prometer resultados específicos não comprovados

## Como Usar

### Para visualizar uma página específica:

```typescript
// No App.tsx
import GastronomiaPageV2 from './gastronomia-v2';

export default function App() {
  return <GastronomiaPageV2 />;
}
```

### Para criar um novo nicho:

1. Adicione os dados em `/data/nichosV2.ts`:

```typescript
export const novoNichoV2: NichoDataV2 = {
  badgeName: 'Nome do Nicho',
  heroTitle: 'Título impactante',
  heroLead: 'Descrição do problema',
  heroImage: 'url-da-imagem',
  problemsTitle: 'Os desafios que [nicho] enfrenta',
  problems: [...],
  productsTitle: 'Produtos especializados para [nicho]',
  products: [...],
  timeline: [...],
  services: [...], // opcional
  ctaTitle: 'Comece hoje a transformação',
  ctaSubtitle: 'Descrição do CTA',
  productOptions: [...],
};
```

2. Crie a página:

```typescript
// novo-nicho-v2.tsx
import NichoPageV2 from './components/NichoPageV2';
import { novoNichoV2 } from './data/nichosV2';

export default function NovoNichoPageV2() {
  return <NichoPageV2 data={novoNichoV2} />;
}
```

## Diferenças da V1

### V1 (anterior)
- Cores: #F4F0D2, #E8C21F, #1F3D33, #10231E
- Fonte: Barlow
- Preços específicos (R$ 1.500+, etc.)
- Estatísticas inventadas

### V2 (atual)
- Cores: #0D4C3A, #FFD93D, #F5F3E8, #092D22
- Fonte: Inter
- Preços: "Sob consulta"
- Sem estatísticas inventadas
- Design system completo e rigoroso
- Especificações pixel-perfect

## Checklist de Implementação

- ✅ Header fixo com backdrop blur
- ✅ Hero com gradiente e layout 50/50
- ✅ Seção Problemas com 3 cards
- ✅ Seção Produtos com 2-3 produtos
- ✅ Timeline horizontal de 4 etapas
- ✅ Seção Serviços (opcional)
- ✅ CTA Final com formulário
- ✅ Footer completo de 4 colunas
- ✅ Responsividade mobile
- ✅ Animações de scroll reveal
- ✅ Hover states
- ✅ Tipografia exata
- ✅ Espaçamentos exatos
- ✅ Cores do design system

## Próximos Passos

1. Completar dados dos nichos faltantes (Indústria, Agro, Política)
2. Adicionar sistema de rotas (React Router ou Next.js)
3. Integrar formulário com backend/API
4. Adicionar Meta Pixel tracking
5. Implementar testes A/B
6. Adicionar Google Analytics

## Suporte

Para dúvidas ou customizações, consulte:
- `/components/NichoPageV2.tsx` - Código do template
- `/data/nichosV2.ts` - Estrutura de dados
- Este documento para especificações completas
