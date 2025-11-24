import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  UtensilsCrossed,
  Wheat,
  Megaphone,
  Users,
  ArrowRight,
  Check,
  Target,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { navigate } from './components/Router';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import Navbar from './components/Navbar';
import { SEO } from './components/SEO';
import Footer from './components/Footer';
import { trackViewContent, trackCTAClick, trackWhatsAppClick, trackSchedule } from './utils/metaPixel';

const nichos = [
  {
    icon: UtensilsCrossed,
    name: 'Gastronomia',
    path: '/gastronomia',
    description: 'Reservas, pedidos e atendimento automatizados com IA',
  },
  {
    icon: Wheat,
    name: 'IA na Fazenda',
    path: '/agro',
    description: 'IA para gestão de lavoura, vendas e operação rural',
  },
  {
    icon: Megaphone,
    name: 'Mumic política',
    path: '/politica',
    description: 'Relacione-se com eleitores e monitore engajamento em tempo real',
  },
  {
    icon: Users,
    name: 'Associações',
    path: '/associacoes',
    description: 'Fortaleça relacionamento e gere receita com tecnologia',
  },
  {
    icon: Zap,
    name: 'Personalizado',
    path: '/personalizado',
    description: 'Automações sob medida e agentes inteligentes para sua operação',
  },
];

// Componente de Scroll Reveal
interface ScrollRevealProps { 
  children: React.ReactNode; 
  delay?: number;
}
function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  useEffect(() => {
    // Track home page view
    trackViewContent('Home Page', 'Landing Page');
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <Navbar currentPath="/" />
      <SEO
        title="Carcará – IA aplicada a automações e operações"
        description="Consultoria e plataforma de inteligência artificial: automações sob medida, agentes conversacionais, dashboards e operação inteligente (Mumic política, IA na Fazenda, Gastronomia, Associações e mais)."
        image="https://www.carcara.ai/og-default.png"
        type="website"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Carcará',
            url: 'https://www.carcara.ai',
            logo: 'https://www.carcara.ai/logo.png',
            description: 'Inteligência artificial aplicada a vendas, operações e automações sob medida.',
            sameAs: [
              'https://www.linkedin.com/company/carcarai',
              'https://www.instagram.com/carcarai'
            ]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Carcará',
            url: 'https://www.carcara.ai',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.carcara.ai/blog?search={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        ]}
      />

      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(180deg, #0D4C3A 0%, #092D22 100%)',
          padding: '120px 0 80px',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          marginTop: '72px',
          position: 'relative',
        }}
      >
        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.5,
        }} />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20 w-full" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Coluna Esquerda */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div
                  className="inline-flex"
                  style={{
                    backgroundColor: '#FFD93D',
                    color: '#092D22',
                    padding: '8px 20px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '32px',
                    border: '2px solid #092D22',
                  }}
                >
                  Consultoria em Vendas e IA
                </div>

                {/* H1 */}
                <h1
                  style={{
                    fontSize: '56px',
                    fontWeight: 700,
                    lineHeight: '64px',
                    letterSpacing: '-1px',
                    color: '#FFFFFF',
                    marginBottom: '24px',
                    maxWidth: '540px',
                  }}
                  className="text-[40px] lg:text-[56px] lg:leading-[64px]"
                >
                  Automatize, venda mais e foque no que importa
                </h1>

                {/* Lead */}
                <p
                  style={{
                    fontSize: '18px',
                    lineHeight: '28px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '40px',
                    maxWidth: '500px',
                  }}
                >
                  Transformamos vendas e processos com inteligência artificial. 
                  Soluções especializadas por nicho que liberam sua equipe para crescer.
                </p>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      trackCTAClick('Ver soluções', 'Hero Section');
                      document.getElementById('nichos')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      backgroundColor: '#FFD93D',
                      color: '#092D22',
                      padding: '18px 36px',
                      fontSize: '16px',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      border: '2px solid #092D22',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Ver soluções
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>

                  <motion.a
                    href="https://wa.me/553597640878"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('Hero Section')}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid #FFD93D',
                      color: '#FFD93D',
                      padding: '16px 34px',
                      fontSize: '16px',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                  >
                    Agendar diagnóstico
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Coluna Direita */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
              style={{
                position: 'relative',
              }}
            >
              <div style={{
                border: '3px solid #FFD93D',
                padding: '4px',
                backgroundColor: '#092D22',
              }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1080&q=80"
                  alt="Carcará - Visão estratégica e precisão"
                  style={{
                    width: '540px',
                    height: '400px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Nichos */}
      <section
        id="nichos"
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
              Soluções especializadas por setor
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
              Cada nicho tem seus desafios únicos. Nossas soluções são personalizadas 
              para entregar resultados concretos no seu mercado.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nichos.map((nicho, index) => {
              const Icon = nicho.icon;
              return (
                <ScrollReveal key={nicho.path} delay={index * 0.1}>
                  <motion.button
                    onClick={() => {
                      trackCTAClick(`Nicho: ${nicho.name}`, 'Nichos Section');
                      navigate(nicho.path);
                    }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full text-left group"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #092D22',
                      padding: '40px',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Hover effect background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#FFD93D]/10 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      {/* Ícone */}
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          backgroundColor: '#092D22',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '24px',
                          border: '2px solid #FFD93D',
                        }}
                      >
                        <Icon style={{ width: '36px', height: '36px', color: '#FFD93D' }} />
                      </div>

                      {/* Título */}
                      <h3
                        style={{
                          fontSize: '24px',
                          fontWeight: 700,
                          lineHeight: '32px',
                          color: '#092D22',
                          marginBottom: '12px',
                        }}
                      >
                        {nicho.name}
                      </h3>

                      {/* Descrição */}
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#1A1A1A',
                          marginBottom: '20px',
                        }}
                      >
                        {nicho.description}
                      </p>

                      {/* Link */}
                      <div
                        className="flex items-center gap-2"
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#0D4C3A',
                        }}
                      >
                        Conhecer soluções
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </motion.button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Diferenciais */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
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
                marginBottom: '64px',
              }}
            >
              Por que escolher a Carcará
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1120px] mx-auto">
            {[
              {
                icon: Target,
                title: 'Especialização por nicho',
                description: 'Soluções desenvolvidas especificamente para os desafios do seu setor.',
              },
              {
                icon: Zap,
                title: 'Implementação rápida',
                description: 'Do diagnóstico aos primeiros resultados em semanas, não meses.',
              },
              {
                icon: TrendingUp,
                title: 'Resultados mensuráveis',
                description: 'Acompanhamento de métricas e evolução contínua da performance.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.15}>
                  <div
                    style={{
                      backgroundColor: '#F5F3E8',
                      border: '2px solid #092D22',
                      padding: '36px',
                    }}
                  >
                    <Icon
                      style={{
                        width: '52px',
                        height: '52px',
                        color: '#0D4C3A',
                        marginBottom: '24px',
                      }}
                    />
                    <h4
                      style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        lineHeight: '32px',
                        color: '#092D22',
                        marginBottom: '12px',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#1A1A1A',
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0D4C3A 0%, rgba(13, 76, 58, 0.9) 100%)',
          padding: '80px 0',
        }}
      >
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              style={{
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '48px',
                letterSpacing: '-0.5px',
                color: '#FFFFFF',
                marginBottom: '16px',
              }}
            >
              Comece hoje a transformação
            </h2>
            <p
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '40px',
              }}
            >
              Agende um diagnóstico gratuito e descubra as oportunidades de automação 
              e crescimento no seu negócio.
            </p>

            <motion.a
              href="https://wa.me/553597640878"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackWhatsAppClick('CTA Final');
                trackSchedule('Diagnóstico Gratuito');
              }}
              whileHover={{ backgroundColor: '#FFC700' }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: '#FFD93D',
                color: '#092D22',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(255, 217, 61, 0.4)',
                border: '2px solid #092D22',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
              }}
            >
              Agendar diagnóstico gratuito
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}