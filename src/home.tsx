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
interface ScrollRevealProps { children: any; delay?: number; key?: any }
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
          background: 'linear-gradient(135deg, #0D4C3A 0%, rgba(13, 76, 58, 0.85) 100%)',
          padding: '80px 0',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          marginTop: '80px',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20 w-full">
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
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '24px',
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
                    whileHover={{ backgroundColor: '#FFC700' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      trackCTAClick('Ver soluções', 'Hero Section');
                      document.getElementById('nichos')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      backgroundColor: '#FFD93D',
                      color: '#092D22',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 700,
                      boxShadow: '0 4px 12px rgba(255, 217, 61, 0.3)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
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
                    whileHover={{ backgroundColor: '#FFFFFF', color: '#0D4C3A' }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid #FFFFFF',
                      color: '#FFFFFF',
                      padding: '14px 30px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 300ms',
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
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop"
                alt="Equipe colaborativa trabalhando com tecnologia"
                style={{
                  width: '540px',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                }}
              />
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
                      y: -4,
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full text-left"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E8E6DC',
                      borderRadius: '12px',
                      padding: '32px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                      cursor: 'pointer',
                    }}
                  >
                    {/* Ícone */}
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        background: 'linear-gradient(135deg, #0D4C3A 0%, #092D22 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px',
                      }}
                    >
                      <Icon style={{ width: '32px', height: '32px', color: '#FFD93D' }} />
                    </div>

                    {/* Título */}
                    <h3
                      style={{
                        fontSize: '24px',
                        fontWeight: 600,
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
                        marginBottom: '16px',
                      }}
                    >
                      {nicho.description}
                    </p>

                    {/* Link */}
                    <div
                      className="flex items-center gap-2"
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: '#0D4C3A',
                      }}
                    >
                      Conhecer soluções
                      <ArrowRight className="h-4 w-4" />
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
                      border: '2px solid #E8E6DC',
                      borderRadius: '12px',
                      padding: '32px',
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
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(255, 217, 61, 0.3)',
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