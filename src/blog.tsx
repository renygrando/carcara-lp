import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function BlogPage() {
  const blogImage = 'https://images.unsplash.com/photo-1641430034785-47f6f91ab6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3AlMjBub3RlYm9va3xlbnwxfHx8fDE3NjI4MTUwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080';

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <Navbar currentPath="/blog" />

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
            Blog Carcará
          </h1>
          <p style={{ fontSize: '18px', color: '#1A1A1A', maxWidth: '768px' }}>
            Insights sobre vendas, inteligência artificial e transformação digital
          </p>
        </div>
      </section>

      {/* Em breve */}
      <section style={{ padding: '96px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="text-center max-w-2xl mx-auto">
            <img
              src={blogImage}
              alt="Blog em construção"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '16px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                marginBottom: '48px',
              }}
            />
            
            <h2
              style={{
                fontSize: '40px',
                fontWeight: 700,
                color: '#092D22',
                marginBottom: '24px',
              }}
            >
              Em breve: conteúdo de qualidade sobre IA e vendas
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: '#1A1A1A',
                lineHeight: '1.6',
                marginBottom: '32px',
              }}
            >
              Estamos preparando artigos exclusivos, estudos de caso e guias práticos para ajudar você a implementar inteligência artificial no seu negócio.
            </p>
            <p style={{ fontSize: '16px', color: '#1A1A1A', marginBottom: '32px' }}>
              Enquanto isso, que tal agendar um diagnóstico gratuito e descobrir como podemos ajudar seu negócio agora?
            </p>
            <a href="https://wa.me/553597640878" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
              <motion.button
                whileHover={{ backgroundColor: '#FFC700' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2"
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
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
