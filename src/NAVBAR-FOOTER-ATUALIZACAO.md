# ✅ Atualização de Navbar e Footer - Design System Unificado

## Status: EM PROGRESSO

---

## 🎯 OBJETIVO

Unificar TODAS as páginas do site para seguir o mesmo Design System da página inicial (home.tsx).

**Problema identificado**: As páginas institucionais (sobre, blog, contato, privacidade, termos) e algumas páginas de nicho estavam usando componentes Tailwind genéricos que não seguiam o design system inline da home.tsx.

**Solução**: Criar componentes reutilizáveis `Navbar.tsx` e `Footer.tsx` que seguem EXATAMENTE o design da home.tsx.

---

## ✅ COMPONENTES CRIADOS

### 1. `/components/Navbar.tsx`
**Características:**
- ✅ Design IDÊNTICO à navbar da home.tsx
- ✅ Header fixo com 80px de altura
- ✅ Background: `rgba(255, 255, 255, 0.95)` com `backdrop-filter: blur(8px)`
- ✅ Border bottom: `#E8E6DC`
- ✅ Logo Carcará
- ✅ Dropdown "Nichos" com 6 opções (hover funcional)
- ✅ Links: Sobre, Blog, Contato
- ✅ Botão CTA: "Agendar Diagnóstico" (amarelo #FFD93D)
- ✅ Menu mobile responsivo (hambúrguer)
- ✅ Efeito de scroll (sombra ao rolar)
- ✅ Prop `currentPath` para highlight do link ativo

**Estilo:**
- ✅ Fonte: Inter, 15px, peso 500
- ✅ Cor texto: #092D22
- ✅ Hover: underline
- ✅ Dropdown width: 280px
- ✅ Dropdown shadow: `0 8px 32px rgba(0, 0, 0, 0.12)`
- ✅ Dropdown hover: background #F5F3E8

### 2. `/components/Footer.tsx`
**Características:**
- ✅ Design IDÊNTICO ao footer da home.tsx
- ✅ Background: #092D22
- ✅ 4 colunas: Nichos, Empresa, Contato, Redes Sociais
- ✅ Links para todos os 6 nichos
- ✅ E-mail: **fernanda@carcara.ai** (atualizado!)
- ✅ Telefone: (35) 9764-0878
- ✅ LinkedIn: https://www.linkedin.com/company/carcara-consultoria-ia (correto!)
- ✅ Instagram: https://www.instagram.com/carcara.ai/ (correto!)
- ✅ Links: Política de Privacidade, Termos de Uso
- ✅ Copyright: "© 2025 Carcará — Automação que liberta"
- ❌ Link "Casos" REMOVIDO conforme solicitado

**Estilo:**
- ✅ Padding: 64px 0 32px
- ✅ Títulos: 14px, uppercase, peso 700
- ✅ Links: 15px, cor rgba(255, 255, 255, 0.8)
- ✅ Hover: color #FFD93D
- ✅ Ícones sociais: 40x40px, background rgba(255, 255, 255, 0.1)

---

## ✅ PÁGINAS ATUALIZADAS

### 1. Home (`/home.tsx`)
**Status**: ✅ **COMPLETO**

**Mudanças**:
- ✅ Removido código duplicado do header/footer
- ✅ Adicionado `<Navbar currentPath="/" />`
- ✅ Adicionado `<Footer />`
- ✅ Imports atualizados
- ✅ Removidos estados não usados (mobileMenuOpen, nichosDropdownOpen, scrolled)

### 2. Sobre (`/sobre.tsx`)
**Status**: ✅ **COMPLETO**

**Mudanças**:
- ✅ Substituído header antigo por `<Navbar currentPath="/sobre" />`
- ✅ Substituído footer antigo por `<Footer />`
- ✅ Adicionado `style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}` no container
- ✅ Estilos inline seguindo o design system da home
- ✅ Seções: Hero, Missão/Visão/Valores, Diferenciais, CTA

---

## 🔄 PÁGINAS PENDENTES DE ATUALIZAÇÃO

### Páginas Institucionais

**3. Blog (`/blog.tsx`)**
**Status**: ⏳ PENDENTE

**O que fazer**:
- [ ] Substituir imports (remover Menu, X, ChevronDown, Phone, Mail, MapPin, Linkedin, Instagram, carcaraLogo)
- [ ] Adicionar `import Navbar from './components/Navbar'`
- [ ] Adicionar `import Footer from './components/Footer'`
- [ ] Adicionar `import { motion } from 'motion/react'` se precisar
- [ ] Remover todo o header antigo (< header > até < / header >)
- [ ] Adicionar `<Navbar currentPath="/blog" />` no início
- [ ] Remover todo o footer antigo (< footer > até < / footer >)
- [ ] Adicionar `<Footer />` no final
- [ ] Adicionar `style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}` no div principal

**4. Contato (`/contato.tsx`)**
**Status**: ⏳ PENDENTE

**O que fazer**:
- [ ] Mesmos passos do Blog
- [ ] Manter formulário de contato intacto
- [ ] Adicionar `<Navbar currentPath="/contato" />`

**5. Privacidade (`/privacidade.tsx`)**
**Status**: ⏳ PENDENTE

**O que fazer**:
- [ ] Mesmos passos do Blog
- [ ] Manter todo o conteúdo legal intacto
- [ ] Adicionar `<Navbar currentPath="/privacidade" />`

**6. Termos (`/termos.tsx`)**
**Status**: ⏳ PENDENTE

**O que fazer**:
- [ ] Mesmos passos do Blog
- [ ] Manter todo o conteúdo legal intacto
- [ ] Adicionar `<Navbar currentPath="/termos" />`

---

### Páginas de Nicho V2

**Importante**: Estas páginas JÁ têm o design system correto (inline styles), mas usam header/footer antigos com classes Tailwind genéricas. Precisam ser atualizadas para usar os novos componentes.

**7. Gastronomia V2 (`/gastronomia-v2.tsx`)**
**Status**: ⏳ PENDENTE

**O que fazer**:
- [ ] Substituir header antigo por `<Navbar currentPath="/gastronomia" />`
- [ ] Substituir footer antigo por `<Footer />`
- [ ] Verificar se o corpo da página já usa inline styles (provavelmente sim via NichoPageV2)

**8. E-commerce V2 (`/ecommerce-v2.tsx`)**
**Status**: ⏳ PENDENTE

**9. Gestão Pública V2 (`/gestaopublica-v2.tsx`)**
**Status**: ⏳ PENDENTE

**10. Indústria V2 (`/industria-v2.tsx`)**
**Status**: ⏳ PENDENTE

**11. Agro V2 (`/agro-v2.tsx`)**
**Status**: ⏳ PENDENTE

**12. Política V2 (`/politica-v2.tsx`)**
**Status**: ⏳ PENDENTE

**Observação**: Política tem componente customizado, não usa NichoPageV2, então precisa de atenção especial.

---

## 📋 TEMPLATE DE ATUALIZAÇÃO

### Para Páginas Institucionais (Blog, Contato, Privacidade, Termos)

```tsx
// ANTES DOS IMPORTS
import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import { Button } from './components/ui/button';
import carcaraLogo from 'figma:asset/...';

export default function PaginaX() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [nichosDropdownOpen, setNichosDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E8E6DC]">
        {/* ... 150+ linhas de código do header ... */}
      </header>

      {/* Conteúdo da página */}

      <footer className="bg-[#092D22] text-white py-16">
        {/* ... 100+ linhas de código do footer ... */}
      </footer>
    </div>
  );
}

// DEPOIS DOS IMPORTS (SIMPLIFICADO)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Manter outros imports necessários (ícones específicos da página, etc)

export default function PaginaX() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <Navbar currentPath="/pagina-x" />

      {/* Conteúdo da página - INALTERADO */}

      <Footer />
    </div>
  );
}
```

**Benefícios**:
- ✅ Reduz de ~300 linhas para ~50 linhas por página
- ✅ Design 100% consistente em todas as páginas
- ✅ Fácil manutenção (mudança em 1 lugar atualiza todas as páginas)
- ✅ Navbar/Footer sempre atualizados com links corretos

---

## 🎨 DESIGN SYSTEM - CHECKLIST DE CONFORMIDADE

### Navbar
- ✅ Altura: 80px
- ✅ Background: rgba(255, 255, 255, 0.95) + blur(8px)
- ✅ Border: 1px solid #E8E6DC
- ✅ Logo: altura 40px
- ✅ Links: Inter, 15px, peso 500, cor #092D22
- ✅ Dropdown: 280px width, shadow, hover #F5F3E8
- ✅ Botão CTA: #FFD93D, texto #092D22, 16px/700, padding 16px 32px, border-radius 8px
- ✅ Mobile: Hambúrguer, menu slide-down

### Footer
- ✅ Background: #092D22
- ✅ Padding: 64px 0 32px
- ✅ 4 colunas (mobile: 1 coluna)
- ✅ Títulos: 14px, uppercase, peso 700, branco
- ✅ Links: 15px, rgba(255, 255, 255, 0.8), hover #FFD93D
- ✅ Ícones sociais: 40x40px, background rgba(255, 255, 255, 0.1)
- ✅ E-mail: fernanda@carcara.ai
- ✅ LinkedIn/Instagram: URLs corretas
- ✅ Sem link "Casos"

---

## ⚠️ PRÓXIMAS AÇÕES

### Urgente
1. **Atualizar Blog, Contato, Privacidade, Termos** com novos componentes
2. **Atualizar 6 páginas de nicho V2** (gastronomia, ecommerce, gestão pública, indústria, agro, política)

### Médio Prazo
3. Criar página "Casos" vazia ou remover todos os links para ela
4. Validar responsividade em dispositivos reais
5. Testar todos os links e formulários
6. Verificar performance (Lighthouse)

---

## 📊 PROGRESSO

**Total de Páginas**: 12
**Atualizadas**: 2 (Home, Sobre)
**Pendentes**: 10

**Progresso**: ████░░░░░░ 16.7%

---

## 🔗 LINKS CORRETOS (VALIDADOS)

**E-mail**: fernanda@carcara.ai  
**Telefone**: (35) 9764-0878  
**WhatsApp**: https://wa.me/553597640878  
**LinkedIn**: https://www.linkedin.com/company/carcara-consultoria-ia  
**Instagram**: https://www.instagram.com/carcara.ai/  

---

## ✅ BENEFÍCIOS DESTA ATUALIZAÇÃO

1. **Consistência Visual Total**: Todas as páginas com o mesmo look & feel
2. **Manutenção Simples**: Alterar header/footer em 1 lugar atualiza todas as 12 páginas
3. **Performance**: Menos código duplicado
4. **Código Limpo**: Componentes reutilizáveis, fácil de entender
5. **Design System Verdadeiro**: Inline styles consistentes (não Tailwind genérico)
6. **Navegação Melhorada**: Dropdown de nichos mais visível e funcional
7. **Links Corretos**: Sem "Casos", com Privacidade/Termos, e-mail/redes sociais corretos

---

**Data de Início**: 10 de janeiro de 2025  
**Status Atual**: 2/12 páginas completas  
**Estimativa para Conclusão**: 1-2 horas de trabalho adicional

---

**Desenvolvido seguindo rigorosamente o Design System da home.tsx**

**Carcará Consultoria** — Automação que liberta 🦅
