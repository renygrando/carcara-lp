# Implementação Meta Pixel - Carcará

## Pixel ID
**1523577828896754**

## Eventos Implementados

### 1. Eventos Padrão do Facebook

#### PageView
- **Onde**: Automaticamente em todas as páginas
- **Quando**: Inicial no carregamento do App e em cada mudança de rota
- **Implementação**: `initMetaPixel()` no App.tsx e Router

#### ViewContent
- **Onde**: Todas as páginas principais
- **Quando**: Ao carregar cada página
- **Páginas**:
  - Home Page
  - Páginas de Nicho (6 páginas)
  - Página de Contato

#### Contact
- **Onde**: Página de Contato
- **Quando**: Ao acessar `/contato`
- **Dados**: Rastreamento de visualização da página de contato

#### Lead
- **Onde**: Disponível para uso futuro
- **Quando**: Quando usuário submeter formulário (precisa integração com Fillout)
- **Nota**: Fillout pode ter sua própria integração de tracking

#### InitiateCheckout
- **Onde**: Formulários de contato
- **Quando**: Ao clicar no container do formulário Fillout
- **Páginas**:
  - Todas as páginas de nicho (V2 e V1)
  - Página de contato

#### Schedule
- **Onde**: CTAs de agendamento
- **Quando**: Ao clicar em "Agendar diagnóstico gratuito"
- **Páginas**: Hero sections das páginas

### 2. Eventos Customizados

#### CTAClick
- **Onde**: Todos os botões de call-to-action
- **Quando**: Clique em qualquer CTA
- **Parâmetros**:
  - `cta_name`: Nome do CTA (ex: "Ver soluções", "Nicho: Gastronomia")
  - `cta_location`: Localização na página (ex: "Hero Section", "Nichos Section")
- **Exemplos**:
  - "Ver soluções" no Hero
  - Cards de Nichos
  - Botões de produtos

#### WhatsAppClick
- **Onde**: Todos os links do WhatsApp
- **Quando**: Clique nos botões de contato via WhatsApp
- **Parâmetros**:
  - `location`: Onde o link está (ex: "Hero Section", "CTA Final", "Hero Nicho: Gastronomia")
- **Links Rastreados**:
  - https://wa.me/553597640878

#### NichoPageView
- **Onde**: Páginas de nicho
- **Quando**: Ao acessar uma página de nicho
- **Parâmetros**:
  - `nicho_name`: Nome do nicho (ex: "Gastronomia", "E-commerce", "Gestão Pública")
- **Páginas**:
  - /gastronomia
  - /ecommerce
  - /gestaopublica
  - /industria
  - /agro
  - /politica

#### FormStart
- **Onde**: Formulários Fillout
- **Quando**: Ao clicar no container do formulário
- **Parâmetros**:
  - `form_name`: Nome do formulário (ex: "Formulário Nicho: Gastronomia")
- **Proteção**: Debounce de 1 segundo para evitar múltiplos eventos
- **Páginas**:
  - Todas as páginas de nicho
  - Página de contato

## Arquitetura

### Arquivo Principal
`/utils/metaPixel.ts`

### Inicialização
- **Local**: `/App.tsx`
- **Método**: `useEffect` no mount do componente principal
- **Proteções**:
  - Flag `window._metaPixelInitialized` para evitar reinicializações
  - Verificação de script existente por ID
  - Verificação de fbq existente

### Rastreamento de Rotas
- **Local**: `/components/Router.tsx`
- **Método**: Rastreamento de PageView em cada mudança de hash
- **Evento**: `hashchange`

### Integrações por Página

#### Home (`/home.tsx`)
- trackViewContent('Home Page', 'Landing Page')
- trackCTAClick nos botões principais
- trackWhatsAppClick nos links do WhatsApp
- trackSchedule('Diagnóstico Gratuito')

#### Páginas de Nicho (`/components/NichoPageV2.tsx` e `/components/NichoPage.tsx`)
- trackNichoView(data.badgeName)
- trackViewContent(`Nicho: ${data.badgeName}`, 'Nicho Page')
- trackWhatsAppClick nos CTAs
- trackFormStart + trackInitiateCheckout no formulário

#### Contato (`/contato.tsx`)
- trackContact()
- trackViewContent('Contato', 'Contact Page')

## Formulário Fillout

### ID do Formulário
**o8sXoMP9RSus**

### Eventos Rastreados
1. **FormStart**: Ao clicar no container do formulário
2. **InitiateCheckout**: Ao iniciar interação com formulário

### Nota
O Fillout pode ter sua própria integração com Meta Pixel. Verifique no painel do Fillout se há configurações adicionais de tracking.

## Proteções Implementadas

### 1. Inicialização Única
- Flag global `window._metaPixelInitialized`
- Verificação de script existente por ID (`meta-pixel-script`)
- Verificação de noscript existente por ID (`meta-pixel-noscript`)

### 2. Debounce
- FormStart tem debounce de 1 segundo
- Previne múltiplos eventos em cliques rápidos

### 3. Verificações de Segurança
- Todas as funções verificam `typeof window !== 'undefined'`
- Todas as funções verificam `window.fbq` antes de usar

## Como Testar

### 1. Facebook Pixel Helper (Extensão Chrome)
- Instale: https://chrome.google.com/webstore/detail/facebook-pixel-helper/
- Navegue pelo site
- Verifique os eventos disparados em tempo real

### 2. Events Manager do Facebook
- Acesse: https://business.facebook.com/events_manager2/list/pixel/
- Selecione o Pixel ID: 1523577828896754
- Veja eventos em "Test Events"

### 3. Console do Navegador
- Abra DevTools > Console
- Execute: `fbq('track', 'ViewContent', {content_name: 'Test'})`
- Verifique se o evento é enviado

## Próximos Passos

### 1. Integração com Fillout
- Verificar se Fillout permite callbacks após submissão
- Adicionar `trackLead()` e `trackCompleteRegistration()` após submissão bem-sucedida

### 2. Conversões
- Configurar eventos de conversão no Events Manager
- Criar públicos personalizados baseados nos eventos

### 3. Otimização
- Monitorar quais eventos geram mais conversões
- Ajustar estratégias de remarketing baseadas nos dados

## Troubleshooting

### Erro: "Multiple pixels with conflicting versions"
- **Causa**: Múltiplas inicializações do pixel
- **Solução**: Implementada proteção com flags e verificações
- **Verificar**: Se há outros scripts carregando o Meta Pixel (Fillout, plugins, etc.)

### Eventos não aparecem no Events Manager
- **Verificar**: Ad blockers desabilitados
- **Verificar**: Pixel Helper mostra eventos
- **Verificar**: Modo de teste está ativo no Events Manager
- **Aguardar**: Pode levar até 20 minutos para eventos aparecerem

### Eventos duplicados
- **Causa**: Múltiplos cliques ou navegação rápida
- **Solução**: Debounce implementado em eventos críticos
- **Verificar**: React StrictMode em desenvolvimento pode causar dupla renderização

## Manutenção

### Adicionar Novo Evento
1. Criar função em `/utils/metaPixel.ts`
2. Importar na página desejada
3. Chamar no evento apropriado
4. Documentar neste arquivo

### Remover Evento
1. Remover chamadas da página
2. Remover import se não for mais usado
3. (Opcional) Manter função no utils para uso futuro
4. Atualizar documentação
