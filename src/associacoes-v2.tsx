import NichoPageV2 from './components/NichoPageV2';
import { associacoesNichoV2 } from './data/nichosV2';
import { SEO } from './components/SEO';

export default function AssociacoesPageV2() {
  return (
    <>
      <SEO
        title="Associações – IA para relacionamento e retenção"
        description="Automatize atendimento, organize dados de associados e gere novas receitas com tecnologia inteligente."
        image={associacoesNichoV2.heroImage}
      />
      <NichoPageV2 data={associacoesNichoV2} />
    </>
  );
}
