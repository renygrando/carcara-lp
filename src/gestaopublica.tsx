import NichoPage from './components/NichoPage';
import { gestaopublicaNicho } from './data/nichos';

export default function GestaoPublicaPage() {
  return <NichoPage data={gestaopublicaNicho} />;
}
