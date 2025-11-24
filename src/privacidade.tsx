import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <Navbar currentPath="/privacidade" />

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '64px', backgroundColor: '#F5F3E8' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <h1 style={{ fontSize: '56px', fontWeight: 700, color: '#092D22', letterSpacing: '-1px', lineHeight: '1.1', marginBottom: '24px' }}>
            Política de Privacidade
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
              <h2 className="text-[#092D22] mb-4">1. Introdução</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                A Carcará Consultoria ("Carcará", "nós" ou "nosso") está comprometida em proteger a privacidade e os dados pessoais de nossos usuários, clientes e visitantes do site. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
              <p className="text-[#1A1A1A] leading-relaxed">
                Ao utilizar nossos serviços, você concorda com as práticas descritas nesta política.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">2. Dados Coletados</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Coletamos os seguintes tipos de dados pessoais:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">
                  <strong>Dados de identificação:</strong> Nome completo, e-mail, telefone/WhatsApp
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Dados de interesse:</strong> Nicho de atuação, produtos de interesse, informações fornecidas em formulários
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Dados de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Dados de comunicação:</strong> Histórico de conversas via WhatsApp, e-mails trocados, interações com nossos canais
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">3. Finalidade do Tratamento</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Utilizamos seus dados pessoais para:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">Prestar nossos serviços de consultoria em vendas e inteligência artificial</li>
                <li className="text-[#1A1A1A]">Entrar em contato para agendamento de diagnósticos e reuniões</li>
                <li className="text-[#1A1A1A]">Enviar propostas comerciais personalizadas</li>
                <li className="text-[#1A1A1A]">Melhorar nossos produtos e serviços</li>
                <li className="text-[#1A1A1A]">Enviar comunicações de marketing (com seu consentimento)</li>
                <li className="text-[#1A1A1A]">Cumprir obrigações legais e regulatórias</li>
                <li className="text-[#1A1A1A]">Realizar análises estatísticas e de mercado</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">4. Base Legal</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                O tratamento de seus dados pessoais é realizado com base nas seguintes hipóteses legais:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">
                  <strong>Consentimento:</strong> Quando você fornece seus dados voluntariamente em formulários
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Execução de contrato:</strong> Para prestação de serviços contratados
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Legítimo interesse:</strong> Para análise de mercado e melhoria de serviços
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Obrigação legal:</strong> Para cumprimento de obrigações fiscais e regulatórias
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Podemos compartilhar seus dados pessoais com:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">
                  <strong>Prestadores de serviço:</strong> Plataformas de comunicação (WhatsApp, e-mail), hospedagem, analytics
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Autoridades:</strong> Quando exigido por lei ou ordem judicial
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Parceiros comerciais:</strong> Apenas com seu consentimento explícito
                </li>
              </ul>
              <p className="text-[#1A1A1A] leading-relaxed mt-4">
                Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros para fins de marketing.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">6. Armazenamento e Segurança</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Seus dados são armazenados em servidores seguros e protegidos por medidas técnicas e organizacionais adequadas, incluindo:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">Criptografia de dados em trânsito e em repouso</li>
                <li className="text-[#1A1A1A]">Controles de acesso restrito</li>
                <li className="text-[#1A1A1A]">Monitoramento contínuo de segurança</li>
                <li className="text-[#1A1A1A]">Backups regulares</li>
              </ul>
              <p className="text-[#1A1A1A] leading-relaxed mt-4">
                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas ou conforme exigido por lei.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">7. Seus Direitos</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                De acordo com a LGPD, você possui os seguintes direitos:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]">
                  <strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Correção:</strong> Solicitar correção de dados incompletos, inexatos ou desatualizados
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Anonimização, bloqueio ou eliminação:</strong> De dados desnecessários, excessivos ou tratados em desconformidade
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Portabilidade:</strong> Receber seus dados em formato estruturado
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Revogação do consentimento:</strong> A qualquer momento
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Informação sobre compartilhamento:</strong> Saber com quem compartilhamos seus dados
                </li>
                <li className="text-[#1A1A1A]">
                  <strong>Oposição:</strong> Se opor ao tratamento de dados
                </li>
              </ul>
              <p className="text-[#1A1A1A] leading-relaxed mt-4">
                Para exercer seus direitos, entre em contato conosco através do e-mail: <a href="mailto:fernanda@carcara.ai" className="text-[#0D4C3A] hover:underline">fernanda@carcara.ai</a>
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">8. Cookies e Tecnologias Semelhantes</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site, analisar tráfego e personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">9. Menores de Idade</h2>
              <p className="text-[#1A1A1A] leading-relaxed">
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente dados pessoais de menores sem o consentimento dos pais ou responsáveis legais.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">10. Alterações nesta Política</h2>
              <p className="text-[#1A1A1A] leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente será sempre publicada em nosso site com a data de atualização. Recomendamos que você revise esta política regularmente.
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">11. Encarregado de Dados (DPO)</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Para questões relacionadas à proteção de dados pessoais, você pode entrar em contato com nosso Encarregado de Dados:
              </p>
              <p className="text-[#1A1A1A] leading-relaxed">
                <strong>E-mail:</strong> <a href="mailto:fernanda@carcara.ai" className="text-[#0D4C3A] hover:underline">fernanda@carcara.ai</a><br />
                <strong>Telefone:</strong> (35) 9 7640-0878
              </p>
            </div>

            <div>
              <h2 className="text-[#092D22] mb-4">12. Contato</h2>
              <p className="text-[#1A1A1A] leading-relaxed mb-4">
                Para dúvidas, reclamações ou solicitações relacionadas a esta Política de Privacidade:
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
