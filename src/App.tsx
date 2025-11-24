import { useEffect, useRef } from 'react';
import { Router, RouteConfig } from './components/Router';
import HomePage from './home';
import GastronomiaPageV2 from './gastronomia-v2';
// Removed E-commerce and Indústria pages (retiradas)
import GestaoPublicaPageV2 from './gestaopublica-v2';
import PersonalizadoPageV2 from './personalizado';
import AgroPageV2 from './agro-v2';
import PoliticaPageV2 from './politica-v2';
import AssociacoesPageV2 from './associacoes-v2';
import SobrePage from './sobre';
import BlogPage from './blog';
import BlogPostPage from './blog-post';
import ContatoPage from './contato';
import PrivacidadePage from './privacidade';
import TermosPage from './termos';
import { initMetaPixel } from './utils/metaPixel';

const routes: RouteConfig[] = [
  { path: '/', component: HomePage },
  { path: '/gastronomia', component: GastronomiaPageV2 },
  { path: '/gestaopublica', component: GestaoPublicaPageV2 },
  { path: '/personalizado', component: PersonalizadoPageV2 },
  { path: '/agro', component: AgroPageV2 },
  { path: '/politica', component: PoliticaPageV2 },
  { path: '/associacoes', component: AssociacoesPageV2 },
  { path: '/sobre', component: SobrePage },
  { path: '/blog', component: BlogPage },
  { path: '/blog/:slug', component: BlogPostPage },
  { path: '/contato', component: ContatoPage },
  { path: '/privacidade', component: PrivacidadePage },
  { path: '/termos', component: TermosPage },
];

export default function App() {
  const pixelInitialized = useRef(false);

  useEffect(() => {
    // Initialize Meta Pixel only once, even with React StrictMode
    if (!pixelInitialized.current) {
      pixelInitialized.current = true;
      initMetaPixel();
    }
  }, []);

  return <Router routes={routes} defaultRoute="/" />;
}