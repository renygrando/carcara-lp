import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import carcaraLogo from '/logo.svg';

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = '/' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [nichosDropdownOpen, setNichosDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nichoLinks = [
    { name: 'Gastronomia', href: '#/gastronomia' },
    { name: 'IA na Fazenda', href: '#/agro' },
    { name: 'Mumic política', href: '#/politica' },
    { name: 'Associações', href: '#/associacoes' },
    { name: 'Personalizado', href: '#/personalizado' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled 
          ? 'rgba(255, 255, 255, 0.8)' 
          : 'rgba(255, 255, 255, 0.6)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
        borderBottom: scrolled 
          ? '1px solid rgba(13, 76, 58, 0.08)' 
          : '1px solid rgba(13, 76, 58, 0.04)',
        transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        boxShadow: scrolled 
          ? '0 4px 24px rgba(13, 76, 58, 0.04)' 
          : '0 2px 8px rgba(13, 76, 58, 0.02)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12" style={{ padding: '16px 24px' }}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#/" 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={carcaraLogo} 
              alt="Carcará" 
              className="h-14 lg:h-16"
              style={{ 
                filter: 'drop-shadow(0 2px 4px rgba(13, 76, 58, 0.1))',
                transition: 'all 0.3s ease'
              }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center" style={{ gap: '40px' }}>
            <div className="relative">
              <motion.button
                onClick={() => setNichosDropdownOpen(!nichosDropdownOpen)}
                className="flex items-center group"
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#092D22',
                  gap: '6px',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setNichosDropdownOpen(true)}
                onMouseLeave={() => setNichosDropdownOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative">
                  Nichos
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0D4C3A] group-hover:w-full transition-all duration-300"
                  />
                </span>
                <motion.div
                  animate={{ rotate: nichosDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {nichosDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0"
                    style={{
                      marginTop: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderRadius: '12px',
                      padding: '12px',
                      boxShadow: '0 12px 40px rgba(13, 76, 58, 0.12)',
                      border: '1px solid rgba(13, 76, 58, 0.08)',
                      width: '280px',
                    }}
                    onMouseEnter={() => setNichosDropdownOpen(true)}
                    onMouseLeave={() => setNichosDropdownOpen(false)}
                  >
                    {nichoLinks.map((nicho, idx) => (
                      <motion.a
                        key={idx}
                        href={nicho.href}
                        className="block rounded-lg transition-colors hover:bg-[#F5F3E8]"
                        style={{
                          padding: '12px 16px',
                          fontSize: '15px',
                          fontWeight: 500,
                          color: '#092D22',
                          cursor: 'pointer',
                        }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {nicho.name}
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.a 
              href="#/sobre" 
              className="group relative" 
              style={{ 
                fontSize: '15px', 
                fontWeight: 500, 
                color: '#092D22',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0D4C3A] group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a 
              href="#/blog" 
              className="group relative" 
              style={{ 
                fontSize: '15px', 
                fontWeight: 500, 
                color: '#092D22',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0D4C3A] group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a 
              href="#/contato" 
              className="group relative" 
              style={{ 
                fontSize: '15px', 
                fontWeight: 500, 
                color: '#092D22',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0D4C3A] group-hover:w-full transition-all duration-300" />
            </motion.a>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <a href="https://wa.me/553597640878" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
              <motion.button
                whileHover={{ 
                  backgroundColor: '#FFC700',
                  y: -2,
                  boxShadow: '0 8px 20px rgba(255, 217, 61, 0.4)'
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  backgroundColor: '#FFD93D',
                  color: '#092D22',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: 600,
                  boxShadow: '0 4px 16px rgba(255, 217, 61, 0.25)',
                  border: '1px solid rgba(13, 76, 58, 0.1)',
                  cursor: 'pointer',
                }}
              >
                Agendar Diagnóstico
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            style={{ 
              color: '#092D22',
              padding: '8px',
              borderRadius: '8px',
            }}
            whileHover={{ backgroundColor: 'rgba(13, 76, 58, 0.05)' }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(13, 76, 58, 0.08)',
            }}
          >
            <nav className="px-6 py-6" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: 700, 
                  color: '#0D4C3A', 
                  marginBottom: '8px', 
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Nichos
                </div>
                {nichoLinks.map((nicho, idx) => (
                  <motion.a
                    key={idx}
                    href={nicho.href}
                    className="block rounded-lg transition-colors hover:bg-[#F5F3E8]"
                    style={{
                      padding: '10px 16px',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#092D22',
                      cursor: 'pointer',
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {nicho.name}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#/sobre"
                className="block rounded-lg transition-colors hover:bg-[#F5F3E8]"
                style={{ padding: '10px 16px', fontSize: '15px', fontWeight: 500, color: '#092D22', cursor: 'pointer' }}
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Sobre
              </motion.a>
              <motion.a
                href="#/blog"
                className="block rounded-lg transition-colors hover:bg-[#F5F3E8]"
                style={{ padding: '10px 16px', fontSize: '15px', fontWeight: 500, color: '#092D22', cursor: 'pointer' }}
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Blog
              </motion.a>
              <motion.a
                href="#/contato"
                className="block rounded-lg transition-colors hover:bg-[#F5F3E8]"
                style={{ padding: '10px 16px', fontSize: '15px', fontWeight: 500, color: '#092D22', cursor: 'pointer' }}
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Contato
              </motion.a>
              <a href="https://wa.me/553597640878" target="_blank" rel="noopener noreferrer" style={{ marginTop: '16px', cursor: 'pointer' }}>
                <motion.button
                  className="w-full"
                  style={{
                    backgroundColor: '#FFD93D',
                    color: '#092D22',
                    padding: '14px 32px',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: 600,
                    border: '1px solid rgba(13, 76, 58, 0.1)',
                    cursor: 'pointer',
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  Agendar Diagnóstico
                </motion.button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}