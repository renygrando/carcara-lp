# Sistema de Rotas - Carcará

## ✅ Implementação Completa

Sistema de roteamento hash-based implementado para navegação entre todas as páginas do site Carcará.

## Arquivos Criados/Modificados

### 1. `/components/Router.tsx` ✨ NOVO
Componente de roteamento simples baseado em hash (#).

**Funcionalidades**:
- Roteamento baseado em `window.location.hash`
- Atualização automática ao mudar o hash
- Suporte a rota padrão (fallback)
- Função `navigate()` para navegação programática

**Uso**:
```tsx
import { Router, navigate } from './components/Router';

// Definir rotas
const routes = [
  { path: '/', component: HomePage },
  { path: '/gastronomia', component: GastronomiaPage },
];

// Renderizar router
<Router routes={routes} defaultRoute="/" />

// Navegar programaticamente
navigate('/gastronomia');
```

### 2. `/home.tsx` ✨ NOVO
Landing page principal do site com grid de nichos.

**Seções**:
- **Header fixo**: Logo, menu dropdown de nichos, CTA
- **Hero**: Título principal, descrição, 2 CTAs
- **Grid de Nichos**: 6 cards interativos linkando para cada nicho
- **Footer**: 4 colunas (Nichos, Empresa, Contato, Redes)

**Nichos listados**:
1. Gastronomia → `#/gastronomia`
3. Gestão Pública → `#/gestaopublica`
5. Agro → `#/agro` (Coming Soon)
6. Política → `#/politica` (Coming Soon)

**Características**:
- Design responsivo mobile-first
- Animações Motion/React
- Menu mobile com hamburger
- Dropdown de nichos no header
- Cards com hover effects
- Gradiente verde Carcará no hero

### 3. `/App.tsx` 🔄 MODIFICADO
Ponto de entrada principal agora usa o Router.

**Rotas configuradas**:
```tsx
const routes = [
  { path: '/', component: HomePage },
  { path: '/gastronomia', component: GastronomiaPageV2 },
  { path: '/gestaopublica', component: GestaoPublicaPageV2 },
  { path: '/agro', component: ComingSoonPage },
  { path: '/politica', component: ComingSoonPage },
];
```

**Página Coming Soon**:
- Exibida para nichos ainda não implementados (Indústria, Agro, Política)
- Design simples com mensagem e botão voltar
- Background bege claro (#F5F3E8)

### 4. `/components/NichoPageV2.tsx` 🔄 MODIFICADO
Atualizado todos os links para usar hash routing.

**Links atualizados**:
- Logo: `href="#/"`
- Nichos dropdown: atualizado removendo E-commerce e Indústria; adicionado Personalizado
- Menu: `href="#/sobre"`, `href="#/casos"`, `href="#/blog"`, `href="#/contato"`
- Footer nichos: todos com hash `#/`
- Footer empresa: todos com hash `#/`
- Footer legal: `href="#/privacidade"`, `href="#/termos"`

## Estrutura de Rotas

### Rotas Implementadas (V2)

| Rota | Componente | Arquivo | Status |
|------|-----------|---------|--------|
| `/` | HomePage | `/home.tsx` | ✅ Pronto |
| `/gastronomia` | GastronomiaPageV2 | `/gastronomia-v2.tsx` | ✅ Pronto |
| `/gestaopublica` | GestaoPublicaPageV2 | `/gestaopublica-v2.tsx` | ✅ Pronto |
| `/agro` | ComingSoonPage | App.tsx (inline) | 🚧 Coming Soon |
| `/politica` | ComingSoonPage | App.tsx (inline) | 🚧 Coming Soon |

### Rotas Futuras (Planejadas)

| Rota | Propósito |
|------|-----------|
| `/sobre` | Página institucional sobre a Carcará |
| `/casos` | Casos de sucesso/portfólio |
| `/blog` | Blog com artigos |
| `/contato` | Formulário de contato detalhado |
| `/privacidade` | Política de privacidade |
| `/termos` | Termos de uso |

## Como Funciona

### Navegação via Links
```html
<!-- Link normal com hash -->
<a href="#/gastronomia">Gastronomia</a>

<!-- Botão que navega -->
<!-- Removido botão de navegação para /ecommerce -->
  Ver E-commerce
</button>
```

### Navegação Programática
```tsx
import { navigate } from './components/Router';

// Navegar para uma rota
navigate('/gastronomia');

// Abrir em nova aba (WhatsApp, externos)
window.open('https://wa.me/553597640878', '_blank');
```

### Hash vs Path
- ✅ **Hash**: `#/gastronomia` (usado no projeto)
  - Funciona sem configuração de servidor
  - Compatível com hospedagens estáticas
  - Não recarrega a página

- ❌ **Path**: `/gastronomia` (não usado)
  - Requer configuração de servidor/redirects
  - Mais complexo para deploy

## Menu de Navegação

### Header (Todas as páginas)
```
Logo [Carcará] | Nichos ▼ | Sobre | Casos | Blog | Contato | [Agendar Diagnóstico]
                    |
                    ├─ Gastronomia
                    ├─ E-commerce
                    ├─ Gestão Pública
                    ├─ Indústria e Logística
                    ├─ Agro
                    └─ Política
```

### Footer (Todas as páginas)
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   NICHOS    │   EMPRESA   │   CONTATO   │    REDES    │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ Gastronomia │ Sobre       │ Telefone    │ LinkedIn    │
│ E-commerce  │ Casos       │ Email       │ Instagram   │
│ Gestão Púb. │ Blog        │ Localização │             │
│ Indústria   │ Contato     │             │             │
│ Agro        │             │             │             │
│ Política    │             │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

## Fluxo do Usuário

### 1. Entrada pelo Home
```
Landing (/) 
  → Grid de 6 nichos
  → Click em card
  → Página do nicho específico
```

### 2. Navegação entre Nichos
```
Gastronomia (/gastronomia)
  → Header > Nichos ▼
  → Click E-commerce
  → Personalizado (/personalizado)
```

### 3. Retornar ao Home
```
Qualquer página
  → Click no Logo
  → Home (/)
```

### 4. Nicho não implementado
```
Home (/)
  → Click Indústria
  → Coming Soon page
  → [Voltar para Home]
  → Home (/)
```

## Design Responsivo

### Desktop (≥ 1024px)
- Menu horizontal completo
- Dropdown de nichos ao hover/click
- Grid de nichos 3 colunas

### Tablet (768px - 1023px)
- Menu horizontal adaptado
- Grid de nichos 2 colunas

### Mobile (< 768px)
- Menu hamburger (☰)
- Menu full screen ao abrir
- Grid de nichos 1 coluna
- CTAs full width

## Animações

### Page Transitions
- Não há transição de página (roteamento imediato)
- Scroll reset automático ao mudar rota

### Scroll Animations
- Cada página mantém suas próprias animações
- Scroll reveal em cards e seções
- Fade in + translateY(-20px)

### Hover Effects
- Cards de nicho: elevação + escala
- Links: mudança de cor para amarelo
- Botões: escala + cor

## Performance

### Otimizações
- ✅ Componentes leves (sem bibliotecas pesadas de routing)
- ✅ Hash-based (sem reload de página)
- ✅ Lazy loading não necessário (poucas rotas)
- ✅ Imagens via Unsplash otimizadas

### Bundle Size
- Router customizado: ~1KB
- Sem dependências extras de routing
- Motion/React já incluído

## Acessibilidade

### Navegação por Teclado
- ✅ Links focáveis
- ✅ Dropdown navegável
- ✅ Menu mobile acessível

### Screen Readers
- ✅ Links semânticos `<a>`
- ✅ Aria labels em botões
- ✅ Hierarquia de headings correta

### Contrast Ratio
- ✅ Texto #092D22 em fundo branco (AA)
- ✅ Botões amarelo #FFD93D com texto escuro (AA)
- ✅ Footer branco em fundo #092D22 (AAA)

## SEO Considerations

### Limitações do Hash Routing
- ❌ Hash não é indexado como rota separada
- ❌ URLs não são "limpas" (tem #)
- ❌ Cada página não tem seu próprio title/meta

### Possíveis Melhorias Futuras
- [ ] Migrar para react-router com History API
- [ ] Server-side rendering (SSR)
- [ ] Meta tags dinâmicas por rota
- [ ] Sitemap.xml gerado

## Manutenção

### Adicionar Nova Rota
1. Criar componente da página
2. Importar no `/App.tsx`
3. Adicionar ao array `routes`
4. Atualizar menu no `/home.tsx` (se aplicável)
5. Atualizar este README

### Adicionar Nicho V2
1. Criar dados em `/data/nichosV2.ts`
2. Criar página `/nicho-v2.tsx`
3. Substituir `ComingSoonPage` por componente real no `/App.tsx`
4. Testar navegação

### Exemplo: Adicionar Indústria V2
```tsx
// Removido plano de criação de /industria-v2.tsx
import NichoPageV2 from './components/NichoPageV2';
import { industriaNichoV2 } from './data/nichosV2';

export default function IndustriaPageV2() {
  return <NichoPageV2 data={industriaNichoV2} />;
}

// 2. Atualizar /App.tsx
// import IndustriaPageV2 removido

const routes = [
  // ... outras rotas
  // Rota /industria removida
];
```

## Testes

### Checklist de Navegação
- [x] Home carrega corretamente
- [x] Click em card de nicho navega para página correta
- [x] Dropdown de nichos funciona no header
- [x] Logo retorna para home
- [x] Menu mobile abre/fecha
- [x] Links do footer funcionam
- [x] Coming soon exibe para nichos não implementados
- [x] Botão "Voltar" da coming soon funciona
- [x] Hash na URL atualiza corretamente
- [x] Navegação por browser back/forward funciona

### Navegação Manual
```
/ → /gastronomia → /politica → /personalizado → / ✅
```

## Próximos Passos

### Implementação Imediata
1. ✅ Router criado
2. ✅ Home page criada
3. ✅ Rotas principais configuradas
4. ✅ Links atualizados em todos os componentes

### Próximas Implementações
1. [ ] Criar páginas V2 para Indústria, Agro, Política
2. [ ] Implementar páginas Sobre, Casos, Blog, Contato
3. [ ] Adicionar páginas legais (Privacidade, Termos)
4. [ ] Implementar analytics/tracking por rota
5. [ ] Meta tags dinâmicas

### Melhorias Futuras
1. [ ] Transições de página animadas
2. [ ] Breadcrumbs para navegação contextual
3. [ ] Scroll restoration (manter posição ao voltar)
4. [ ] Loading states entre páginas
5. [ ] 404 page customizada

## Troubleshooting

### Link não funciona
✅ Verificar se usa hash: `href="#/rota"` não `href="/rota"`

### Página não carrega
✅ Verificar se rota existe no array `routes` do App.tsx
✅ Verificar se componente está importado

### Dropdown não abre
✅ Verificar eventos `onMouseEnter`/`onMouseLeave`
✅ Verificar estado `nichosDropdownOpen`

### Menu mobile não fecha
✅ Verificar se `setMobileMenuOpen(false)` é chamado no onClick

## Conclusão

O sistema de rotas está completamente funcional e integrado. Todas as páginas V2 (Gastronomia, E-commerce, Gestão Pública) estão navegáveis. Os nichos restantes (Indústria, Agro, Política) exibem coming soon page até serem implementados.

**Navegação completa**: Home → Nichos → Páginas individuais → Footer → Retorno ao home

✅ **Pronto para uso e expansão**
