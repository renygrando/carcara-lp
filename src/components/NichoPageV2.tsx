import { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Check,
  ArrowRight,
} from 'lucide-react';
import Navbar from './Navbar';
import { SEO } from './SEO';
import Footer from './Footer';
import { trackViewContent, trackNichoView, trackWhatsAppClick, trackInitiateCheckout, trackFormStart } from '../utils/metaPixel';

export interface NichoProductV2 {
  badge: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  name: string;
  description: string;
  features: string[];
  deliveryFormat: string;
  pricing: string;
}

export interface NichoProblemV2 {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  description: string;
  impact: string;
}

export interface NichoTimelineStep {
  number: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  description: string;
  timeframe: string;
}

export interface NichoServiceV2 {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  services: string[];
  ctaText: string;
}

export interface NichoDataV2 {
  // Hero
  badgeName: string;
  heroTitle: string;
  heroLead: string;
  heroImage: string;
  
  // Problems
  problemsTitle: string;
  problems: NichoProblemV2[];
  
  // Products
  productsTitle: string;
  products: NichoProductV2[];
  
  // Timeline
  timeline: NichoTimelineStep[];
  
  // Services (optional)
  services?: NichoServiceV2[];
  
  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  productOptions: string[];
  
  // Social (optional)
  instagramUrl?: string;
}

interface NichoPageV2Props {
  data: NichoDataV2;
}

// Componente para animação de scroll reveal
function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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

export default function NichoPageV2({ data }: NichoPageV2Props) {
  useEffect(() => {
    // Load Fillout script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    // Track nicho page view
    trackNichoView(data.badgeName);
    trackViewContent(`Nicho: ${data.badgeName}`, 'Nicho Page');

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script);
    };
  }, [data.badgeName]);

  // Build Service schema for products
  const serviceSchema = data.products.map((product) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: product.name,
    description: product.description,
    provider: {
      '@type': 'Organization',
      name: 'Carcará'
    },
    serviceType: product.badge,
    offers: {
      '@type': 'Offer',
      description: product.pricing
    }
  }));

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <Navbar currentPath="" />
      <SEO
        title={`${data.heroTitle} | Carcará`}
        description={data.heroLead}
        image={data.heroImage}
        type="website"
        structuredData={serviceSchema}
      />

      {/* Hero Section */}
      <section
        className="flex items-center"
        style={{
          minHeight: '85vh',
          background: 'linear-gradient(180deg, #0D4C3A 0%, #092D22 100%)',
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
        }}
      >
        {/* Grid pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.5,
        }} />
        <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-20" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div
                className="inline-block"
                style={{
                  backgroundColor: '#FFD93D',
                  color: '#092D22',
                  padding: '8px 20px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  border: '2px solid #092D22',
                }}
              >
                {data.badgeName}
              </div>

              {/* H1 */}
              <h1
                className="leading-tight text-[40px] lg:text-[56px]"
                style={{
                  fontSize: '56px',
                  fontWeight: 700,
                  lineHeight: '64px',
                  letterSpacing: '-1px',
                  color: '#FFFFFF',
                  maxWidth: '100%',
                }}
              >
                {data.heroTitle}
              </h1>

              {/* Lead */}
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: '100%',
                }}
              >
                {data.heroLead}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ backgroundColor: '#FFC700' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    backgroundColor: '#FFD93D',
                    color: '#092D22',
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: 700,
                    boxShadow: '0 8px 24px rgba(255, 217, 61, 0.4)',
                    border: '2px solid #092D22',
                  }}
                >
                  Ver produtos
                </motion.button>
                <motion.a
                  href="https://wa.me/553597640878"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(`Hero Nicho: ${data.badgeName}`)}
                  whileHover={{ backgroundColor: '#FFFFFF', color: '#0D4C3A' }}
                  whileTap={{ scale: 0.98 }}
                  className="transition-all duration-300 text-center"
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #FFFFFF',
                    color: '#FFFFFF',
                    padding: '14px 30px',
                    fontSize: '16px',
                    fontWeight: 600,
                  }}
                >
                  Agendar diagnóstico
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-full"
            >
              <img
                src={data.heroImage}
                alt={data.badgeName}
                className="w-full h-auto max-w-full"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  border: '3px solid rgba(255, 217, 61, 0.5)',
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.3)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          padding: '96px 0',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <ScrollReveal>
            <h2
              className="text-center mb-16"
              style={{
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '48px',
                letterSpacing: '-0.5px',
                color: '#092D22',
              }}
            >
              {data.problemsTitle}
            </h2>
          </ScrollReveal>

          <div 
            className="max-w-[1120px] mx-auto"
            style={{
              display: 'grid',
              gridTemplateColumns: data.problems.length === 3 
                ? 'repeat(3, 1fr)' 
                : data.problems.length === 6
                ? 'repeat(3, 1fr)'
                : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {data.problems.map((problem, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                    y: -4,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '2px solid rgba(9, 45, 34, 0.1)',
                    padding: '32px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <problem.icon style={{ width: '48px', height: '48px', color: '#0D4C3A', marginBottom: '24px' }} />
                  <h4
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '32px',
                      color: '#092D22',
                      marginBottom: '16px',
                    }}
                  >
                    {problem.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#1A1A1A',
                      marginBottom: '16px',
                    }}
                  >
                    {problem.description}
                  </p>
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 243, 232, 0.6)',
                      padding: '12px 16px',
                      border: '1px solid rgba(255, 217, 61, 0.3)',
                      borderLeft: '3px solid #FFD93D',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#092D22',
                      }}
                    >
                      {problem.impact}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="produtos"
        style={{
          backgroundColor: '#F5F3E8',
          padding: '96px 0',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2
                className="mb-4"
                style={{
                  fontSize: '40px',
                  fontWeight: 700,
                  lineHeight: '48px',
                  letterSpacing: '-0.5px',
                  color: '#092D22',
                }}
              >
                {data.productsTitle}
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: 'rgba(26, 26, 26, 0.8)',
                }}
              >
                Soluções prontas, implementação rápida, resultados previsíveis
              </p>
            </div>
          </ScrollReveal>

          <div
            className="max-w-[1120px] mx-auto"
            style={{
              display: 'grid',
              gridTemplateColumns: data.products.length === 2 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {data.products.map((product, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{
                    borderColor: '#FFD93D',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '2px solid rgba(9, 45, 34, 0.12)',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Badge */}
                  <div
                    className="inline-block mb-6"
                    style={{
                      backgroundColor: '#FFD93D',
                      color: '#092D22',
                      padding: '8px 20px',
                      fontSize: '12px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      border: '2px solid #092D22',
                    }}
                  >
                    {product.badge}
                  </div>

                  {/* Icon */}
                  <product.icon style={{ width: '64px', height: '64px', color: '#0D4C3A', marginBottom: '24px' }} />

                  {/* Title */}
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: '32px',
                      fontWeight: 600,
                      lineHeight: '40px',
                      color: '#092D22',
                    }}
                  >
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="mb-6"
                    style={{
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: '#1A1A1A',
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8 space-y-3" style={{ flexGrow: 1 }}>
                    {product.features.map((feature, fidx) => (
                      <div key={fidx} className="flex gap-3">
                        <Check className="flex-shrink-0" style={{ width: '20px', height: '20px', color: '#0D4C3A', marginTop: '2px' }} />
                        <span
                          style={{
                            fontSize: '15px',
                            lineHeight: '24px',
                            color: '#1A1A1A',
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Format */}
                  <div
                    className="mb-4"
                    style={{
                      backgroundColor: 'rgba(245, 243, 232, 0.6)',
                      padding: '12px 16px',
                      border: '1px solid rgba(9, 45, 34, 0.1)',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#092D22',
                      }}
                    >
                      {product.deliveryFormat}
                    </p>
                  </div>

                  {/* Pricing */}
                  <p
                    className="mb-6"
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#0D4C3A',
                    }}
                  >
                    {product.pricing}
                  </p>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ backgroundColor: '#0D4C3A', color: '#FFFFFF' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid #0D4C3A',
                      color: '#0D4C3A',
                      padding: '14px 30px',
                      fontSize: '16px',
                      fontWeight: 600,
                    }}
                  >
                    Conhecer produto
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          padding: '96px 0',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <ScrollReveal>
            <h2
              className="text-center mb-16"
              style={{
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '48px',
                letterSpacing: '-0.5px',
                color: '#092D22',
              }}
            >
              Do diagnóstico à implementação
            </h2>
          </ScrollReveal>

          <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-6 lg:justify-between">
            {data.timeline.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15}>
                <div
                  className="relative flex-1"
                  style={{
                    backgroundColor: 'rgba(245, 243, 232, 0.7)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '2px solid rgba(232, 230, 220, 0.8)',
                    padding: '56px 24px 32px',
                  }}
                >
                  {/* Number Circle */}
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#FFD93D',
                      border: '2px solid #092D22',
                      top: '-24px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#092D22',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <step.icon style={{ width: '40px', height: '40px', color: '#0D4C3A' }} />
                  </div>

                  {/* Title */}
                  <h4
                    className="text-center mb-3"
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      lineHeight: '32px',
                      color: '#092D22',
                    }}
                  >
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p
                    className="text-center mb-3"
                    style={{
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#1A1A1A',
                    }}
                  >
                    {step.description}
                  </p>

                  {/* Timeframe */}
                  <p
                    className="text-center"
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#0D4C3A',
                    }}
                  >
                    {step.timeframe}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (if provided) */}
      {data.services && data.services.length > 0 && (
        <section
          style={{
            backgroundColor: '#F5F3E8',
            padding: '96px 0',
          }}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
            <ScrollReveal>
              <h2
                className="text-center mb-12"
                style={{
                  fontSize: '40px',
                  fontWeight: 700,
                  lineHeight: '48px',
                  letterSpacing: '-0.5px',
                  color: '#092D22',
                }}
              >
                Precisa de algo personalizado?
              </h2>
            </ScrollReveal>

            <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              {data.services.map((service, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      padding: '40px',
                      border: '2px solid rgba(9, 45, 34, 0.1)',
                    }}
                  >
                    <service.icon style={{ width: '48px', height: '48px', color: '#0D4C3A', marginBottom: '24px' }} />
                    <h3
                      className="mb-4"
                      style={{
                        fontSize: '32px',
                        fontWeight: 600,
                        lineHeight: '40px',
                        color: '#092D22',
                      }}
                    >
                      {service.title}
                    </h3>
                    <ul className="mb-6 space-y-3">
                      {service.services.map((item, sidx) => (
                        <li
                          key={sidx}
                          className="relative pl-6"
                          style={{
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#1A1A1A',
                          }}
                        >
                          <span
                            className="absolute left-0"
                            style={{
                              width: '6px',
                              height: '6px',
                              backgroundColor: '#FFD93D',
                              border: '1px solid #092D22',
                              top: '10px',
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href="https://wa.me/553597640878"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ backgroundColor: '#0D4C3A', color: '#FFFFFF' }}
                      whileTap={{ scale: 0.98 }}
                      className="block text-center transition-all duration-300"
                      style={{
                        backgroundColor: 'transparent',
                        border: '2px solid #0D4C3A',
                        color: '#0D4C3A',
                        padding: '14px 30px',
                        fontSize: '16px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      {service.ctaText}
                    </motion.a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final Section */}
      <section
        id="cta"
        style={{
          background: 'linear-gradient(135deg, #0D4C3A 0%, rgba(13, 76, 58, 0.56) 100%)',
          padding: '80px 0',
        }}
      >
        <div className="max-w-[700px] mx-auto px-6">
          <ScrollReveal>
            <h2
              className="text-center mb-4"
              style={{
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: '48px',
                letterSpacing: '-0.5px',
                color: '#FFFFFF',
              }}
            >
              {data.ctaTitle}
            </h2>
            <p
              className="text-center mb-10"
              style={{
                fontSize: '18px',
                lineHeight: '28px',
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              {data.ctaSubtitle}
            </p>
            
            {data.instagramUrl && (
              <div className="text-center mb-8">
                <a
                  href={data.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-all hover:scale-105"
                  style={{
                    color: '#FFD93D',
                    fontSize: '16px',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  Siga no Instagram para conteúdos exclusivos
                </a>
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div
              onClick={() => {
                trackFormStart(`Formulário Nicho: ${data.badgeName}`);
                trackInitiateCheckout(`Formulário ${data.badgeName}`);
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                padding: '40px',
                border: '2px solid rgba(9, 45, 34, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              }}
            >
              <div 
                style={{ width: '100%', height: '500px' }} 
                data-fillout-id="o8sXoMP9RSus" 
                data-fillout-embed-type="standard" 
                data-fillout-inherit-parameters 
                data-fillout-dynamic-resize
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
