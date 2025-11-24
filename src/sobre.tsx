import {
  Target,
  Lightbulb,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function SobrePage() {
  const heroImage = 'https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2MjczNzg4OHww&ixlib=rb-4.1.0&q=80&w=1080';

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <Navbar currentPath="/sobre" />

      {/* Hero Section */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="inline-block"
                style={{
                  backgroundColor: '#FFD93D',
                  color: '#092D22',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '32px',
                }}
              >
                SOBRE A CARCARÁ
              </span>
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
                Transformamos negócios com inteligência artificial
              </h1>
              <p
                style={{
                  fontSize: '18px',
                  color: '#1A1A1A',
                  lineHeight: '1.6',
                  marginBottom: '32px',
                }}
              >
                Somos uma consultoria especializada em vendas e inteligência artificial, ajudando empresas de todos os portes a automatizar processos, aumentar vendas e tomar decisões baseadas em dados.
              </p>
            </div>
            <div>
              <img
                src={heroImage}
                alt="Equipe Carcará"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section style={{ padding: '96px 0', backgroundColor: '#F5F3E8' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                border: '2px solid #E8E6DC',
              }}
            >
              <Target className="w-12 h-12" style={{ color: '#0D4C3A', marginBottom: '24px' }} />
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#092D22',
                  marginBottom: '16px',
                }}
              >
                Nossa Missão
              </h3>
              <p style={{ fontSize: '16px', color: '#1A1A1A', lineHeight: '1.6' }}>
                Democratizar o acesso à inteligência artificial, tornando tecnologia de ponta acessível para negócios de todos os tamanhos através de soluções práticas e eficientes.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                border: '2px solid #E8E6DC',
              }}
            >
              <Lightbulb className="w-12 h-12" style={{ color: '#0D4C3A', marginBottom: '24px' }} />
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#092D22',
                  marginBottom: '16px',
                }}
              >
                Nossa Visão
              </h3>
              <p style={{ fontSize: '16px', color: '#1A1A1A', lineHeight: '1.6' }}>
                Ser referência nacional em consultoria de IA aplicada a negócios, reconhecida pela excelência técnica e pelo impacto real nos resultados de nossos clientes.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                padding: '32px',
                border: '2px solid #E8E6DC',
              }}
            >
              <Users className="w-12 h-12" style={{ color: '#0D4C3A', marginBottom: '24px' }} />
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#092D22',
                  marginBottom: '16px',
                }}
              >
                Nossos Valores
              </h3>
              <ul className="space-y-2" style={{ fontSize: '16px', color: '#1A1A1A' }}>
                <li>• Resultados mensuráveis</li>
                <li>• Transparência total</li>
                <li>• Inovação constante</li>
                <li>• Foco no cliente</li>
                <li>• Ética e integridade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section style={{ padding: '96px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <h2
            style={{
              fontSize: '40px',
              fontWeight: 700,
              color: '#092D22',
              textAlign: 'center',
              marginBottom: '64px',
            }}
          >
            Por que escolher a Carcará?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              style={{
                backgroundColor: '#F5F3E8',
                borderRadius: '12px',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#092D22',
                  marginBottom: '16px',
                }}
              >
                Especialização por Nicho
              </h3>
              <p style={{ fontSize: '16px', color: '#1A1A1A', lineHeight: '1.6' }}>
                Desenvolvemos soluções específicas para 6 nichos de mercado: Gastronomia, E-commerce, Gestão Pública, Indústria, Agro e Política. Conhecemos profundamente os desafios de cada setor.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#F5F3E8',
                borderRadius: '12px',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#092D22',
                  marginBottom: '16px',
                }}
              >
                Implementação Ágil
              </h3>
              <p style={{ fontSize: '16px', color: '#1A1A1A', lineHeight: '1.6' }}>
                Nossa metodologia permite implementações rápidas, com resultados visíveis em 2-6 semanas. Você não precisa esperar meses para ver seu investimento gerando retorno.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#F5F3E8',
                borderRadius: '12px',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#092D22',
                  marginBottom: '16px',
                }}
              >
                Tecnologia de Ponta
              </h3>
              <p style={{ fontSize: '16px', color: '#1A1A1A', lineHeight: '1.6' }}>
                Utilizamos as mais modernas tecnologias de IA, automação via WhatsApp, Business Intelligence e integração de sistemas para maximizar seus resultados.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#F5F3E8',
                borderRadius: '12px',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: '#092D22',
                  marginBottom: '16px',
                }}
              >
                Suporte Contínuo
              </h3>
              <p style={{ fontSize: '16px', color: '#1A1A1A', lineHeight: '1.6' }}>
                Não entregamos e desaparecemos. Oferecemos acompanhamento constante, ajustes e evoluções para garantir que sua solução continue gerando valor ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 0', backgroundColor: '#092D22' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20 text-center">
          <h2
            style={{
              fontSize: '40px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '24px',
            }}
          >
            Pronto para transformar seu negócio?
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '32px',
              maxWidth: '800px',
              margin: '0 auto 32px',
            }}
          >
            Agende um diagnóstico gratuito e descubra como a inteligência artificial pode impulsionar seus resultados.
          </p>
          <a href="https://wa.me/553597640878" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ backgroundColor: '#FFC700' }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: '#FFD93D',
                color: '#092D22',
                padding: '20px 40px',
                borderRadius: '8px',
                fontSize: '18px',
                fontWeight: 700,
                boxShadow: '0 4px 12px rgba(255, 217, 61, 0.3)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Agendar diagnóstico gratuito
            </motion.button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
