import { useEffect } from 'react';
import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SEO } from './components/SEO';
import { trackContact, trackViewContent, trackFormStart } from './utils/metaPixel';

export default function ContatoPage() {
  useEffect(() => {
    // Load Fillout script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    // Track contact page view
    trackContact();
    trackViewContent('Contato', 'Contact Page');

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <Navbar currentPath="/contato" />
      <SEO
        title="Contato – Fale com a Carcará"
        description="Agende diagnóstico ou tire dúvidas sobre automações, IA na Fazenda, Mumic política, Gastronomia e soluções personalizadas."
        image="https://www.carcara.ai/og-default.png"
      />

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '64px', backgroundColor: '#F5F3E8' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#092D22',
              letterSpacing: '-1px',
              lineHeight: '1.1',
              marginBottom: '24px',
            }}
          >
            Entre em contato
          </h1>
          <p style={{ fontSize: '18px', color: '#1A1A1A', maxWidth: '768px' }}>
            Estamos prontos para ajudar seu negócio a crescer com inteligência artificial
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section style={{ padding: '96px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Informações de Contato */}
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#092D22', marginBottom: '32px' }}>
                Fale conosco
              </h2>
              
              <div className="space-y-6" style={{ marginBottom: '48px' }}>
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 243, 232, 0.7)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      padding: '12px',
                      border: '2px solid rgba(9, 45, 34, 0.1)',
                    }}
                  >
                    <Phone className="w-6 h-6" style={{ color: '#0D4C3A' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#092D22', marginBottom: '4px' }}>
                      Telefone / WhatsApp
                    </h4>
                    <a
                      href="tel:+553597640878"
                      style={{ fontSize: '16px', color: '#1A1A1A', cursor: 'pointer' }}
                      className="hover:text-[#0D4C3A] transition-colors"
                    >
                      (35) 9 7640-0878
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 243, 232, 0.7)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      padding: '12px',
                      border: '2px solid rgba(9, 45, 34, 0.1)',
                    }}
                  >
                    <Mail className="w-6 h-6" style={{ color: '#0D4C3A' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#092D22', marginBottom: '4px' }}>
                      E-mail
                    </h4>
                    <a
                      href="mailto:fernanda@carcara.ai"
                      style={{ fontSize: '16px', color: '#1A1A1A', cursor: 'pointer' }}
                      className="hover:text-[#0D4C3A] transition-colors"
                    >
                      fernanda@carcara.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    style={{
                      backgroundColor: 'rgba(245, 243, 232, 0.7)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      padding: '12px',
                      border: '2px solid rgba(9, 45, 34, 0.1)',
                    }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: '#0D4C3A' }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#092D22', marginBottom: '4px' }}>
                      Localização
                    </h4>
                    <p style={{ fontSize: '16px', color: '#1A1A1A' }}>Em breve em Santos/SP</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#092D22', marginBottom: '16px' }}>
                  Redes Sociais
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/carcara-consultoria-ia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:bg-[#0D4C3A]"
                    style={{
                      backgroundColor: 'rgba(245, 243, 232, 0.7)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      padding: '12px',
                      border: '2px solid rgba(9, 45, 34, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/carcara.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:bg-[#0D4C3A]"
                    style={{
                      backgroundColor: 'rgba(245, 243, 232, 0.7)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      padding: '12px',
                      border: '2px solid rgba(9, 45, 34, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <div
                style={{
                  backgroundColor: 'rgba(245, 243, 232, 0.9)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '2px solid rgba(9, 45, 34, 0.1)',
                  padding: '48px',
                }}
              >
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#092D22', marginBottom: '24px' }}>
                  Envie sua mensagem
                </h3>
                
                <div 
                  style={{ width: '100%', height: '500px' }} 
                  data-fillout-id="o8sXoMP9RSus" 
                  data-fillout-embed-type="standard" 
                  data-fillout-inherit-parameters 
                  data-fillout-dynamic-resize
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
