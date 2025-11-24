import { Phone, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const nichoLinks = [
    { name: 'Gastronomia', href: '#/gastronomia' },
    { name: 'E-commerce', href: '#/ecommerce' },
    { name: 'Gestão Pública', href: '#/gestaopublica' },
    { name: 'Indústria e Logística', href: '#/industria' },
    { name: 'Agro e Agronegócio', href: '#/agro' },
    { name: 'Política e Eleições', href: '#/politica' },
    { name: 'Associações', href: '#/associacoes' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#092D22',
        color: '#FFFFFF',
        padding: '64px 0 32px',
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Nichos */}
          <div>
            <h3
              className="mb-5"
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Nichos
            </h3>
            <ul className="space-y-2">
              {nichoLinks.map((nicho, idx) => (
                <li key={idx}>
                  <a
                    href={nicho.href}
                    className="transition-colors hover:text-[#FFD93D]"
                    style={{
                      fontSize: '15px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: '32px',
                      cursor: 'pointer',
                    }}
                  >
                    {nicho.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3
              className="mb-5"
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Empresa
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#/sobre" className="transition-colors hover:text-[#FFD93D]" style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '32px', cursor: 'pointer' }}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#/blog" className="transition-colors hover:text-[#FFD93D]" style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '32px', cursor: 'pointer' }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#/contato" className="transition-colors hover:text-[#FFD93D]" style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '32px', cursor: 'pointer' }}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3
              className="mb-5"
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                <a
                  href="https://wa.me/553597640878"
                  className="transition-colors hover:text-[#FFD93D]"
                  style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
                >
                  (35) 9764-0878
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                <a
                  href="mailto:fernanda@carcara.ai"
                  className="transition-colors hover:text-[#FFD93D]"
                  style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)', cursor: 'pointer' }}
                >
                  fernanda@carcara.ai
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                <span style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Em breve em Santos/SP
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3
              className="mb-5"
              style={{
                fontSize: '14px',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/carcara-consultoria-ia"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:bg-[#FFD93D]"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/carcara.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:bg-[#FFD93D]"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '24px',
          }}
        >
          <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2025 Carcará — Automação que liberta
          </p>
          <div className="flex gap-4">
            <a href="#/privacidade" className="transition-colors hover:text-[#FFD93D]" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', cursor: 'pointer' }}>
              Política de Privacidade
            </a>
            <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>|</span>
            <a href="#/termos" className="transition-colors hover:text-[#FFD93D]" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', cursor: 'pointer' }}>
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}