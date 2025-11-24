import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SEO } from './components/SEO';

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <Navbar currentPath="/termos" />
      <SEO
        title="Termos de Uso – Carcará"
        description="Condições de uso das soluções de inteligência artificial, automações e plataformas Carcará (Mumic política, IA na Fazenda e mais)."
        image="https://www.carcara.ai/og-default.png"
      />

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '64px', backgroundColor: '#F5F3E8' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <h1 style={{ fontSize: '56px', fontWeight: 700, color: '#092D22', letterSpacing: '-1px', lineHeight: '1.1', marginBottom: '24px' }}>
            Termos de Uso
          </h1>
          <p style={{ fontSize: '18px', color: '#1A1A1A' }}>
            Atualizada em 10 de janeiro de 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div>
              <h2 className="text-[#092D22] mb-4">1. Aceitação dos Termos</h2>
              <p className="text-[#1A1A1A] leading-relaxed">
                Ao acessar e utilizar o site da Carcará Consultoria ("Carcará", "nós" ou "nosso"), você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com estes termos, por favor, não utilize nosso site ou serviços.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">2. Serviços Oferecidos</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                A Carcará oferece serviços de consultoria em vendas e inteligência artificial, incluindo mas não limitado a:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">Desenvolvimento de sistemas de automação via WhatsApp</li>
                <li className="text-[#1A1A1A]">Criação de dashboards e painéis de Business Intelligence</li>
                <li className="text-[#1A1A1A]">Implementação de CRM e sistemas de gestão</li>
                <li className="text-[#1A1A1A]">Consultoria estratégica em vendas e processos</li>
                <li className="text-[#1A1A1A]">Desenvolvimento de agentes conversacionais e chatbots</li>
                <li className="text-[#1A1A1A]">Soluções personalizadas para nichos específicos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">3. Uso do Site</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Você concorda em utilizar nosso site apenas para fins legítimos e de acordo com estes Termos. Você não deve:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">Usar o site de maneira que viole leis ou regulamentos aplicáveis</li>
                <li className="text-[#1A1A1A]">Transmitir material que seja difamatório, ofensivo, obsceno ou ilegal</li>
                <li className="text-[#1A1A1A]">Tentar obter acesso não autorizado a qualquer parte do site</li>
                <li className="text-[#1A1A1A]">Interferir ou interromper o funcionamento do site</li>
                <li className="text-[#1A1A1A]">Coletar informações de outros usuários sem consentimento</li>
                <li className="text-[#1A1A1A]">Reproduzir, duplicar ou copiar material do site sem autorização</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">4. Propriedade Intelectual</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Todo o conteúdo do site, incluindo mas não limitado a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Carcará ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais brasileiras e internacionais.
              </p>
              <p className="text-[#1A1A1A] leading-relaxed">
                A marca "Carcará" e o logotipo são marcas registradas da Carcará Consultoria. O uso não autorizado dessas marcas é estritamente proibido.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">5. Cadastro e Conta</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Ao preencher formulários ou fornecer informações em nosso site, você garante que:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">Todas as informações fornecidas são verdadeiras, precisas e atualizadas</li>
                <li className="text-[#1A1A1A]">Você possui autorização para fornecer tais informações</li>
                <li className="text-[#1A1A1A]">Você é maior de 18 anos ou possui consentimento dos responsáveis legais</li>
                <li className="text-[#1A1A1A]">Você manterá suas informações atualizadas</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">6. Serviços Contratados</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                <strong>6.1. Proposta e Contratação</strong>
              </p>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Após o diagnóstico gratuito, apresentaremos uma proposta comercial detalhada. A contratação dos serviços será formalizada mediante assinatura de contrato específico que detalhará:
              </p>
              <ul className="space-y-3 ml-6 mb-4">
                <li className="text-[#1A1A1A]">Escopo completo dos serviços</li>
                <li className="text-[#1A1A1A]">Prazos de entrega e cronograma</li>
                <li className="text-[#1A1A1A]">Valores e forma de pagamento</li>
                <li className="text-[#1A1A1A]">Responsabilidades de ambas as partes</li>
                <li className="text-[#1A1A1A]">Garantias e suporte oferecidos</li>
              </ul>
              
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                <strong>6.2. Execução dos Serviços</strong>
              </p>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                A Carcará se compromete a executar os serviços contratados com qualidade e profissionalismo. O cliente se compromete a:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">Fornecer informações e acessos necessários para a execução</li>
                <li className="text-[#1A1A1A]">Responder solicitações em tempo hábil</li>
                <li className="text-[#1A1A1A]">Disponibilizar equipe para treinamento quando aplicável</li>
                <li className="text-[#1A1A1A]">Realizar pagamentos conforme acordado</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">7. Pagamento e Valores</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Os valores dos serviços serão definidos em proposta comercial e contrato específico. A Carcará se reserva o direito de:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">Alterar preços mediante aviso prévio de 30 dias</li>
                <li className="text-[#1A1A1A]">Suspender serviços em caso de inadimplência</li>
                <li className="text-[#1A1A1A]">Cobrar juros e multa em caso de atraso de pagamento</li>
                <li className="text-[#1A1A1A]">Requerer pagamento antecipado ou caução quando aplicável</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">8. Garantias e Limitações</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                <strong>8.1. Garantias Oferecidas</strong>
              </p>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                A Carcará garante que os serviços serão executados de acordo com as melhores práticas do mercado. Oferecemos suporte técnico conforme especificado no contrato.
              </p>
              
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                <strong>8.2. Limitações</strong>
              </p>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                A Carcará não se responsabiliza por:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">Falhas de terceiros (internet, energia, provedores externos)</li>
                <li className="text-[#1A1A1A]">Uso inadequado das soluções implementadas</li>
                <li className="text-[#1A1A1A]">Dados fornecidos incorretamente pelo cliente</li>
                <li className="text-[#1A1A1A]">Resultados de vendas ou métricas de negócio (não garantimos resultados financeiros específicos)</li>
                <li className="text-[#1A1A1A]">Perdas indiretas, lucros cessantes ou danos morais</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">9. Confidencialidade</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Ambas as partes se comprometem a manter confidencialidade sobre informações sensíveis compartilhadas durante a execução dos serviços. A Carcará não divulgará:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">Dados de clientes e processos internos</li>
                <li className="text-[#1A1A1A]">Estratégias comerciais confidenciais</li>
                <li className="text-[#1A1A1A]">Informações financeiras sensíveis</li>
                <li className="text-[#1A1A1A]">Qualquer informação marcada como confidencial</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">10. Cancelamento e Rescisão</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                <strong>10.1. Pelo Cliente</strong>
              </p>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                O cliente pode cancelar os serviços mediante aviso prévio conforme estipulado em contrato. Serviços já executados serão cobrados proporcionalmente.
              </p>
              
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                <strong>10.2. Pela Carcará</strong>
              </p>
              <p className="text-[#1A1A1A] leading-relaxed">
                A Carcará pode rescindir o contrato em caso de inadimplência, violação de termos ou impossibilidade de execução por culpa do cliente.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">11. Isenção de Responsabilidade</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                O site e os serviços são fornecidos "como estão". A Carcará não garante que:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">O site estará disponível ininterruptamente</li>
                <li className="text-[#1A1A1A]">Todas as funcionalidades estarão livres de erros</li>
                <li className="text-[#1A1A1A]">O site será compatível com todos os dispositivos</li>
                <li className="text-[#1A1A1A]">Informações de terceiros vinculadas serão precisas</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">12. Links para Sites de Terceiros</h2>
              <p className="text-[#1A1A1A] leading-relaxed">
                Nosso site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo, políticas de privacidade ou práticas desses sites e não nos responsabilizamos por eles. Recomendamos que você leia os termos e políticas de privacidade de qualquer site de terceiro que visitar.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">13. Modificações dos Termos</h2>
              <p className="text-[#1A1A1A] leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após as modificações constitui aceitação dos novos termos.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">14. Lei Aplicável e Foro</h2>
              <p className="text-[#1A1A1A] leading-relaxed">
                Estes Termos de Uso serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da comarca de Pouso Alegre, Minas Gerais, para dirimir quaisquer controvérsias decorrentes destes termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">15. Contato</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Para dúvidas ou questões sobre estes Termos de Uso, entre em contato:
              </p>
              <p className="text-[#1A1A1A] leading-relaxed">
                <strong>Carcará Consultoria em Vendas e IA</strong><br />
                E-mail: <a href="mailto:fernanda@carcara.ai" className="text-[#0D4C3A] hover:underline" style={{ cursor: 'pointer' }}>fernanda@carcara.ai</a><br />
                Telefone: (35) 9 7640-0878<br />
                Localização: Em breve em Santos/SP
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
