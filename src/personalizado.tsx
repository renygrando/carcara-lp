import NichoPageV2 from './components/NichoPageV2';
import { personalizadoNichoV2 } from './data/nichosV2';
import { SEO } from './components/SEO';

export default function PersonalizadoPageV2() {
  return (
    <>
      <SEO
        title="Automações Personalizadas – Sob medida para sua operação"
        description="Fluxos, integrações e agentes inteligentes construídos sob demanda. Conecte sistemas, reduza tarefas manuais e ganhe visibilidade em tempo real."
        image={personalizadoNichoV2.heroImage}
      />
      <NichoPageV2 data={personalizadoNichoV2} />
    </>
  );
}
