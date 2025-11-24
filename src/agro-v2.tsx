import NichoPageV2 from './components/NichoPageV2';
import { agroNichoV2 } from './data/nichosV2';
import { SEO } from './components/SEO';

export default function AgroPageV2() {
  return (
    <>
      <SEO
        title="IA na Fazenda – Gestão rural inteligente"
        description="Registre produção, insumos e tarefas pelo WhatsApp e visualize tudo em painéis claros para decisão agrícola." 
        image={agroNichoV2.heroImage}
      />
      <NichoPageV2 data={agroNichoV2} />
    </>
  );
}
