import NichoPageV2 from './components/NichoPageV2';
import { politicaNichoV2 } from './data/nichosV2';
import { SEO } from './components/SEO';

export default function PoliticaPageV2() {
  return (
    <>
      <SEO
        title="Mumic política – Campanha, mandato e cidadão"
        description="Unifique CRM eleitoral, atendimento ao cidadão, transparência e automações de comunicação em uma plataforma inteligente."
        image={politicaNichoV2.heroImage}
      />
      <NichoPageV2 data={politicaNichoV2} />
    </>
  );
}
