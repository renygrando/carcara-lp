import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  CheckCircle,
  ChevronDown,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { trackViewContent, trackNichoView, trackInitiateCheckout, trackFormStart } from '../utils/metaPixel';

export interface NichoProduct {
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  features: string[];
  deliveryFormat: string;
  investmentFrom: string;
}

export interface NichoProblem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  impact: string;
}

export interface NichoCase {
  clientName: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface NichoData {
  // Hero
  badgeName: string;
  heroTitle: string;
  heroLead: string;
  heroProof: string;
  heroImage: string;
  gradientColors: {
    from: string;
    to: string;
  };
  primaryColor: string;
  
  // Problems
  problemsTitle: string;
  problems: NichoProblem[];
  
  // Products
  productsTitle: string;
  productsSubtitle: string;
  products: NichoProduct[];
  
  // Cases
  casesTitle: string;
  cases: NichoCase[];
  
  // Technologies
  technologies: string[];
  
  // CTA
  ctaTitle: string;
  productOptions: string[];
}

interface NichoPageProps {
  data: NichoData;
}

export default function NichoPage({ data }: NichoPageProps) {
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
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [data.badgeName]);

  const timeline = [
    {
      number: '01',
      title: `Diagnóstico do ${data.badgeName}`,
      description: 'Mapeamos processos, identificamos gargalos e oportunidades específicas do seu negócio',
    },
    {
      number: '02',
      title: 'Planejamento da automação',
      description: 'Desenhamos fluxos, integrações e agentes inteligentes adaptados à sua realidade',
    },
    {
      number: '03',
      title: 'Implementação e testes',
      description: 'Construímos, testamos e colocamos no ar com acompanhamento total da sua equipe',
    },
    {
      number: '04',
      title: 'Acompanhamento e evolução',
      description: 'Otimizamos continuamente e garantimos resultados sustentáveis',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#10231E]" style={{ fontFamily: 'Barlow, sans-serif' }}>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 min-h-screen flex items-center"
        style={{
          background: `linear-gradient(135deg, ${data.gradientColors.from} 0%, ${data.gradientColors.to} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Badge className="bg-white text-[#10231E] hover:bg-white">
                {data.badgeName}
              </Badge>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {data.heroTitle}
              </h1>

              <p className="text-xl lg:text-2xl text-[#10231E]/80 leading-relaxed">
                {data.heroLead}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="px-8 py-6 w-full sm:w-auto"
                  style={{ backgroundColor: data.primaryColor }}
                  onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver produtos
                </Button>
                <a href="https://wa.me/553597640878" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#10231E] text-[#10231E] px-8 py-6 hover:bg-[#10231E] hover:text-white w-full sm:w-auto cursor-pointer group"
                  >
                    Agendar diagnóstico
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>

              <div className="pt-4 border-t border-[#10231E]/20">
                <p className="text-sm text-[#10231E]/70">{data.heroProof}</p>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={data.heroImage}
                  alt={data.badgeName}
                  className="w-full h-auto shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 -z-10" style={{ backgroundColor: `${data.primaryColor}40` }}></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/20 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {data.problemsTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="p-6 lg:p-8 h-full border-2 hover:border-red-500 transition-colors">
                  <problem.icon className="h-12 w-12 text-red-500 mb-4" />
                  <h3 className="text-xl lg:text-2xl mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {problem.title}
                  </h3>
                  <p className="text-[#10231E]/70 mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="pt-4 border-t border-[#10231E]/10">
                    <p className="text-sm text-red-600">
                      <strong>Impacto:</strong> {problem.impact}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-20 lg:py-32 px-6 lg:px-8 bg-[#F4F0D2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {data.productsTitle}
            </h2>
            <p className="text-xl text-[#10231E]/70">{data.productsSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="bg-white p-8 lg:p-10 h-full hover:shadow-xl transition-shadow">
                  <Badge className="mb-6" style={{ backgroundColor: `${data.primaryColor}20`, color: data.primaryColor }}>
                    {product.badge}
                  </Badge>
                  
                  <div className="mb-6">
                    <product.icon className="h-16 w-16" style={{ color: data.primaryColor }} />
                  </div>

                  <h3 className="text-2xl lg:text-3xl mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {product.name}
                  </h3>

                  <p className="text-[#10231E]/70 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: data.primaryColor }} />
                        <span className="text-[#10231E]/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#10231E]/10 pt-6 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#10231E]/60">Formato:</span>
                      <span>{product.deliveryFormat}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#10231E]/60">Investimento:</span>
                      <span className="text-xl" style={{ fontFamily: 'Inter, sans-serif', color: data.primaryColor }}>
                        {product.investmentFrom}
                      </span>
                    </div>
                  </div>

                  <a href="https://wa.me/553597640878" target="_blank" rel="noopener noreferrer">
                    <Button
                      className="w-full mt-6 cursor-pointer group"
                      style={{ backgroundColor: data.primaryColor }}
                    >
                      Conhecer produto
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Precisa de algo personalizado?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Consultoria */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 lg:p-10 h-full" style={{ borderLeft: `4px solid ${data.primaryColor}` }}>
                <h3 className="text-2xl lg:text-3xl mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Consultoria e Diagnóstico
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: data.primaryColor }} />
                    <span>Mapeamento de processos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: data.primaryColor }} />
                    <span>Análise de oportunidades</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: data.primaryColor }} />
                    <span>Plano de automação</span>
                  </li>
                </ul>
                <a href="https://wa.me/553597640878" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full cursor-pointer" style={{ borderColor: data.primaryColor, color: data.primaryColor }}>
                    Solicitar consultoria
                  </Button>
                </a>
              </Card>
            </motion.div>

            {/* Implementação */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 lg:p-10 h-full" style={{ borderLeft: `4px solid ${data.primaryColor}` }}>
                <h3 className="text-2xl lg:text-3xl mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Implementação Customizada
                </h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: data.primaryColor }} />
                    <span>Integrações sob medida</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: data.primaryColor }} />
                    <span>Agentes personalizados</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: data.primaryColor }} />
                    <span>Dashboards exclusivos</span>
                  </li>
                </ul>
                <a href="https://wa.me/553597640878" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full cursor-pointer" style={{ backgroundColor: data.primaryColor }}>
                    Falar com especialista
                  </Button>
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-[#F4F0D2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Da contratação ao resultado em 4 semanas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-3xl"
                  style={{ fontFamily: 'Inter, sans-serif', backgroundColor: data.primaryColor, color: 'white' }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl lg:text-2xl mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-[#10231E]/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {data.casesTitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.cases.map((caso, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="p-6 lg:p-8 h-full hover:shadow-lg transition-shadow">
                  <h4 className="text-2xl mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {caso.clientName}
                  </h4>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm uppercase tracking-wider mb-1" style={{ color: data.primaryColor }}>
                        Desafio
                      </p>
                      <p className="text-[#10231E]/70">{caso.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider mb-1" style={{ color: data.primaryColor }}>
                        Solução
                      </p>
                      <p className="text-[#10231E]/70">{caso.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider mb-1" style={{ color: data.primaryColor }}>
                        Resultado
                      </p>
                      <p className="text-[#10231E]/70">{caso.result}</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/553597640878"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center group"
                    style={{ color: data.primaryColor }}
                  >
                    Ver caso completo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8 bg-[#F4F0D2]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Tecnologias que dominamos
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {data.technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Badge className="px-6 py-3 text-base bg-white text-[#10231E] border-2" style={{ borderColor: data.primaryColor }}>
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-8" style={{ backgroundColor: `${data.primaryColor}10` }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {data.ctaTitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card 
              className="bg-white p-8"
              onClick={() => {
                trackFormStart(`Formulário Nicho: ${data.badgeName}`);
                trackInitiateCheckout(`Formulário ${data.badgeName}`);
              }}
            >
              <div 
                style={{ width: '100%', height: '500px' }} 
                data-fillout-id="o8sXoMP9RSus" 
                data-fillout-embed-type="standard" 
                data-fillout-inherit-parameters 
                data-fillout-dynamic-resize
              />
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
