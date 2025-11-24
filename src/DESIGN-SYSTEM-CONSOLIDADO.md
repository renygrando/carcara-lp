# Design System Carcará - Especificação Consolidada

## ✅ Status de Implementação

### Páginas Atualizadas
- ✅ `/home.tsx` - 100% conforme Design System
- ✅ `/components/NichoPageV2.tsx` - 100% conforme Design System
- ✅ Todas as páginas V2 (gastronomia, ecommerce, gestaopublica) - 100% conforme

---

## 🎨 PALETA DE CORES CARCARÁ

**Cores Principais** (extraídas do logo):
```
Verde Carcará: #0D4C3A
Amarelo Carcará: #FFD93D
Bege Claro: #F5F3E8
Verde Escuro: #092D22
Preto: #1A1A1A
Branco: #FFFFFF
Cinza Claro: #E8E6DC
```

**Hierarquia de Uso**:
- **Botões primários**: #FFD93D (Amarelo Carcará)
- **Botões secundários**: #0D4C3A (Verde Carcará) outline
- **Backgrounds hero**: #0D4C3A com gradiente
- **Badges**: #FFD93D
- **Links e acentos**: #0D4C3A
- **Textos principais**: #092D22 e #1A1A1A
- **Backgrounds alternados**: #F5F3E8 e #FFFFFF
- **Bordas**: #E8E6DC

---

## 📐 DIMENSÕES E GRID

**Breakpoints**:
```
Desktop: ≥ 1024px (1440px ideal)
Tablet: 768px - 1023px
Mobile: < 768px (375px base)
```

**Grid System**:
```
Container max-width: 1280px
Margem lateral desktop: 80px (lg:px-20)
Margem lateral mobile: 24px (px-6)
Colunas: 12
Gutter: 24px (gap-6)
```

**Espaçamento** (sistema 8px):
```
4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

---

## 🔤 TIPOGRAFIA

**Fontes**:
```css
font-family: 'Inter, sans-serif' (principal)
font-family: 'Montserrat, sans-serif' (títulos de impacto - opcional)
```

**Hierarquia**:

### Desktop
```css
H1: 
  font-size: 56px
  font-weight: 700
  line-height: 64px
  letter-spacing: -1px

H2: 
  font-size: 40px
  font-weight: 700
  line-height: 48px
  letter-spacing: -0.5px

H3: 
  font-size: 32px (desktop) / 24px (mobile)
  font-weight: 600
  line-height: 40px / 32px

H4: 
  font-size: 24px
  font-weight: 600
  line-height: 32px

Parágrafo grande (lead): 
  font-size: 18px
  font-weight: 400
  line-height: 28px

Parágrafo: 
  font-size: 16px
  font-weight: 400
  line-height: 24px

Pequeno: 
  font-size: 14px
  font-weight: 400
  line-height: 20px

Links menu:
  font-size: 15px
  font-weight: 500
```

### Mobile (< 768px)
```
H1: 40px (redução de ~30%)
H2: 32px (redução de ~20%)
H3: 24px
Demais: mantém
```

---

## 🧱 COMPONENTES BASE

### Botão Primário
```css
background: #FFD93D
color: #092D22
padding: 16px 32px
border-radius: 8px
font-size: 16px
font-weight: 700
box-shadow: 0 4px 12px rgba(255, 217, 61, 0.3)

hover:
  background: #FFC700

active:
  scale: 0.98
```

**Implementação**:
```tsx
<motion.button
  whileHover={{ backgroundColor: '#FFC700' }}
  whileTap={{ scale: 0.98 }}
  style={{
    backgroundColor: '#FFD93D',
    color: '#092D22',
    padding: '16px 32px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 700,
    boxShadow: '0 4px 12px rgba(255, 217, 61, 0.3)',
  }}
>
  Texto do botão
</motion.button>
```

### Botão Secundário
```css
background: transparent
border: 2px solid #0D4C3A
color: #0D4C3A
padding: 14px 30px
border-radius: 8px
font-size: 16px
font-weight: 600

hover:
  background: #0D4C3A
  color: #FFFFFF

active:
  scale: 0.98
```

**Implementação**:
```tsx
<motion.button
  whileHover={{ backgroundColor: '#0D4C3A', color: '#FFFFFF' }}
  whileTap={{ scale: 0.98 }}
  style={{
    backgroundColor: 'transparent',
    border: '2px solid #0D4C3A',
    color: '#0D4C3A',
    padding: '14px 30px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 600,
  }}
>
  Texto do botão
</motion.button>
```

### Botão Secundário Invertido (para fundos escuros)
```css
background: transparent
border: 2px solid #FFFFFF
color: #FFFFFF
padding: 14px 30px
border-radius: 8px
font-size: 16px
font-weight: 600

hover:
  background: #FFFFFF
  color: #0D4C3A
```

### Card Padrão
```css
background: #FFFFFF
border: 1px solid #E8E6DC
border-radius: 12px
padding: 32px
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04)

hover:
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08)
  transform: translateY(-4px)

transition: 300ms ease-in-out
```

### Card de Produto
```css
background: #FFFFFF
border: 2px solid #E8E6DC
border-radius: 16px
padding: 40px

hover:
  border-color: #FFD93D
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08)

transition: 300ms
```

### Badge
```css
background: #FFD93D
color: #092D22
padding: 6px 16px
border-radius: 20px
font-size: 14px
font-weight: 600
text-transform: uppercase
letter-spacing: 0.5px
```

**Implementação**:
```tsx
<div
  style={{
    backgroundColor: '#FFD93D',
    color: '#092D22',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  }}
>
  BADGE TEXT
</div>
```

### Badge de Produto
```css
background: #FFD93D
color: #092D22
padding: 8px 20px
border-radius: 24px
font-size: 12px
font-weight: 700
text-transform: uppercase
letter-spacing: 1px
```

### Input
```css
border: 1px solid #E8E6DC
border-radius: 8px
padding: 14px 16px
font-size: 16px
color: #1A1A1A

focus:
  border: 2px solid #0D4C3A
  outline: none
```

### Container de Impacto
```css
background: #F5F3E8
padding: 12px 16px
border-radius: 6px
border-left: 3px solid #FFD93D
font-size: 14px
font-weight: 600
color: #092D22
```

---

## 📱 HEADER (NAVEGAÇÃO FIXA)

```css
position: fixed
top: 0
z-index: 1000
background: rgba(255, 255, 255, 0.95)
backdrop-filter: blur(8px)
height: 80px
border-bottom: 1px solid #E8E6DC

scrolled:
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06)
```

**Estrutura**:
- Container: max-width 1280px, padding lateral 80px (desktop) / 24px (mobile)
- Esquerda: Logo (height 40px)
- Centro: Menu horizontal (gap 32px)
- Direita: CTA button

**Menu Desktop**:
- Links: Inter Medium 15px, color #092D22
- Hover: color #0D4C3A, underline
- Espaçamento: 32px entre itens

**Dropdown Nichos**:
```css
background: #FFFFFF
border-radius: 8px
padding: 16px 0
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12)
width: 280px

item:
  padding: 12px 24px
  font-size: 15px
  font-weight: 500
  
  hover:
    background: #F5F3E8
```

**Mobile**:
- Hamburger menu
- Sidebar/drawer full screen
- Nichos listados sem dropdown
- CTA button full width

---

## 🎯 HERO SECTION

```css
background: linear-gradient(135deg, #0D4C3A 0%, rgba(13, 76, 58, 0.85) 100%)
min-height: 600px
padding: 80px 0
margin-top: 80px (compensa header fixo)
```

**Layout**: Grid 2 colunas (50/50) no desktop, coluna única no mobile

**Coluna Esquerda**:
1. Badge (topo)
2. H1 (max-width 540px)
3. Lead/Parágrafo grande (max-width 500px)
4. Container de botões (flex, gap 16px)

**Coluna Direita**:
- Imagem: 540px x 400px, border-radius 16px
- Escondida no mobile

**Mobile**:
```
flex-direction: column
padding: 48px 24px
imagem: max-width 100%, abaixo do texto
```

---

## 📋 SEÇÕES PADRÃO

### Seção de Problemas
```css
background: #FFFFFF
padding: 96px 0 (desktop) / 64px 0 (mobile)
```

**Grid**: 3 colunas (desktop) → 1 coluna (mobile)
**Cards**: Card Padrão com ícone 48px, título H4, descrição, container de impacto

### Seção de Produtos
```css
background: #F5F3E8
padding: 96px 0 (desktop) / 64px 0 (mobile)
```

**Grid**: 2-3 colunas dependendo do nicho → 1 coluna (mobile)
**Cards**: Card de Produto com badge, ícone 64px, título H3, lista de features com check

### Timeline
```css
background: #FFFFFF
padding: 96px 0
```

**Layout**: 4 cards horizontais (desktop) → coluna vertical (mobile)

**Card de Etapa**:
```css
background: #F5F3E8
border: 2px solid #E8E6DC
border-radius: 12px
padding: 56px 24px 32px (top maior para círculo)
position: relative

círculo do número:
  position: absolute
  top: -24px
  left: 50%
  transform: translateX(-50%)
  width: 48px
  height: 48px
  background: #FFD93D
  border-radius: 50%
  
número:
  font-size: 20px
  font-weight: 700
  color: #092D22
```

---

## 🎬 ANIMAÇÕES

### Scroll Reveal
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.6,
    delay: 0, // ou delay incremental
    ease: [0.4, 0, 0.2, 1],
  }}
>
  {children}
</motion.div>
```

### Hover States
```
duration: 300ms
easing: ease-in-out
```

### Button Press
```tsx
whileTap={{ scale: 0.98 }}
```

### Card Hover
```tsx
whileHover={{
  y: -4,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
}}
transition={{ duration: 0.3 }}
```

---

## 🦶 FOOTER

```css
background: #092D22
color: #FFFFFF
padding: 64px 0 32px
```

**Layout**: Grid 4 colunas (desktop) → 1 coluna (mobile)

**Colunas**:
1. Nichos
2. Empresa
3. Contato
4. Redes Sociais

**Título de Coluna**:
```css
font-size: 14px
font-weight: 700
text-transform: uppercase
margin-bottom: 20px
```

**Links**:
```css
font-size: 15px
color: rgba(255, 255, 255, 0.8)
line-height: 32px

hover:
  color: #FFD93D
```

**Rodapé Final**:
```css
border-top: 1px solid rgba(255, 255, 255, 0.2)
padding-top: 24px
display: flex
justify-content: space-between

texto:
  font-size: 14px
  color: rgba(255, 255, 255, 0.6)
```

---

## 📐 RESPONSIVIDADE

### Tablets (768px - 1023px)
- Container: padding 40px
- Grid 3 colunas → 2 colunas
- Grid 2 colunas → mantém 2 colunas
- Fontes: mantém tamanhos desktop

### Mobile (< 768px)
- Container: padding 24px
- Todos os grids → 1 coluna
- Header: hamburger menu
- Hero: coluna única, imagem abaixo
- Seções: padding 64px 0
- Footer: coluna única

**Redução de Fontes Mobile**:
```
H1: 56px → 40px
H2: 40px → 32px
H3: 32px → 24px
H4, Parágrafo: mantém
```

**Botões Mobile**:
```css
width: 100%
text-align: center
```

---

## ✅ CHECKLIST DE CONFORMIDADE

Use este checklist ao criar/revisar páginas:

### Cores
- [ ] Verde Carcará (#0D4C3A) usado em ícones, bordas, links
- [ ] Amarelo Carcará (#FFD93D) usado em botões primários, badges
- [ ] Verde Escuro (#092D22) usado em títulos
- [ ] Bege Claro (#F5F3E8) em backgrounds alternados
- [ ] Branco (#FFFFFF) em cards
- [ ] Cinza Claro (#E8E6DC) em bordas

### Tipografia
- [ ] Font-family: Inter
- [ ] H1: 56px / 700 / -1px spacing
- [ ] H2: 40px / 700 / -0.5px spacing
- [ ] H3: 32px / 600
- [ ] H4: 24px / 600
- [ ] Parágrafo: 16px / 400
- [ ] Links menu: 15px / 500

### Espaçamento
- [ ] Padding seções: 96px 0
- [ ] Margem lateral: 80px (desktop) / 24px (mobile)
- [ ] Gap em grids: 24px ou 32px
- [ ] Sistema 8px respeitado

### Componentes
- [ ] Botões primários: amarelo com shadow
- [ ] Botões secundários: outline verde
- [ ] Cards: border-radius 12px, padding 32px
- [ ] Badges: amarelo, uppercase, rounded
- [ ] Inputs: border #E8E6DC, focus verde

### Layout
- [ ] Container: max-width 1280px
- [ ] Header: height 80px, fixed
- [ ] Hero: min-height 600px, grid 2 colunas
- [ ] Footer: background #092D22

### Animações
- [ ] Scroll reveal: 600ms, ease cubic-bezier
- [ ] Hover: 300ms
- [ ] Button tap: scale 0.98

### Responsivo
- [ ] Mobile: 1 coluna em todos os grids
- [ ] Fontes reduzidas no mobile
- [ ] Hamburger menu funcional
- [ ] Botões full width no mobile

---

## 🎯 EXEMPLOS DE CÓDIGO

### Seção Completa
```tsx
<section
  style={{
    backgroundColor: '#F5F3E8',
    padding: '96px 0',
  }}
>
  <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
    <ScrollReveal>
      <h2
        className="text-center"
        style={{
          fontSize: '40px',
          fontWeight: 700,
          lineHeight: '48px',
          letterSpacing: '-0.5px',
          color: '#092D22',
          marginBottom: '16px',
        }}
      >
        Título da Seção
      </h2>
      <p
        className="text-center"
        style={{
          fontSize: '18px',
          lineHeight: '28px',
          color: 'rgba(26, 26, 26, 0.8)',
          marginBottom: '64px',
          maxWidth: '700px',
          margin: '0 auto 64px',
        }}
      >
        Subtítulo ou descrição
      </p>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Cards aqui */}
    </div>
  </div>
</section>
```

### Card com Ícone
```tsx
<div
  style={{
    backgroundColor: '#FFFFFF',
    border: '1px solid #E8E6DC',
    borderRadius: '12px',
    padding: '32px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  }}
>
  <Icon
    style={{
      width: '48px',
      height: '48px',
      color: '#0D4C3A',
      marginBottom: '24px',
    }}
  />
  <h4
    style={{
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '32px',
      color: '#092D22',
      marginBottom: '12px',
    }}
  >
    Título
  </h4>
  <p
    style={{
      fontSize: '16px',
      lineHeight: '24px',
      color: '#1A1A1A',
    }}
  >
    Descrição
  </p>
</div>
```

---

## 🚀 IMPLEMENTAÇÃO

Todas as páginas devem seguir esta estrutura:

1. **Home** (`/home.tsx`) ✅
   - Header fixo
   - Hero com grid 2 colunas
   - Seção de nichos (grid 3 colunas)
   - Seção diferenciais
   - CTA final
   - Footer

2. **Páginas de Nicho V2** ✅
   - Header fixo (idêntico à home)
   - Hero específico do nicho
   - Seção problemas (3 cards)
   - Seção produtos (2-3 cards)
   - Timeline (4 etapas)
   - CTA final com formulário
   - Footer (idêntico à home)

---

## 📝 NOTAS IMPORTANTES

1. **Não inventar números**: Sempre usar "Sob consulta" para preços
2. **Imagens reais**: Sempre usar Unsplash ou assets fornecidos
3. **Dados autênticos**: Funcionalidades e features devem ser reais
4. **Consistência total**: Header e Footer idênticos em todas as páginas
5. **Mobile-first**: Sempre testar responsividade
6. **Performance**: Otimizar imagens e animações
7. **Acessibilidade**: Manter hierarquia semântica de headings

---

## ✅ STATUS FINAL

**Páginas 100% Conformes**:
- ✅ `/home.tsx`
- ✅ `/components/NichoPageV2.tsx`
- ✅ `/gastronomia-v2.tsx`
- ✅ `/ecommerce-v2.tsx`
- ✅ `/gestaopublica-v2.tsx`

**Próximos Passos**:
- [ ] Criar páginas V2 para Indústria, Agro, Política
- [ ] Implementar páginas institucionais (Sobre, Casos, Blog, Contato)
- [ ] Páginas legais (Privacidade, Termos)

---

**Última atualização**: 2025-01-10
**Versão**: 2.0 - Consolidada e Implementada
