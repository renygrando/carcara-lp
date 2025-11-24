import { useEffect, useState } from 'react';

export interface RouteConfig {
  path: string; // pode conter segmentos dinâmicos ex: /blog/:slug
  component: React.ComponentType<any>; // componentes podem receber props { params }
}

interface RouterProps {
  routes: RouteConfig[];
  defaultRoute?: string;
}

export function Router({ routes, defaultRoute = '/' }: RouterProps) {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname || defaultRoute
  );

  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname || defaultRoute;
      setCurrentPath(newPath);
      
      // Track page view on route change - Meta Pixel automatically tracks page views
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [defaultRoute]);

  // Matching com suporte a parâmetros
  let matched: RouteConfig | undefined;
  let params: Record<string, string> = {};

  for (const r of routes) {
    if (r.path === currentPath) {
      matched = r;
      break;
    }
    if (r.path.includes(':')) {
      const pattern = r.path
        .split('/')
        .map((seg) => (seg.startsWith(':') ? `(?<${seg.slice(1)}>[^/]+)` : seg))
        .join('/');
      const regex = new RegExp(`^${pattern}$`);
      const m = regex.exec(currentPath);
      if (m && m.groups) {
        matched = r;
        params = m.groups;
        break;
      }
    }
  }

  const Component = matched?.component || routes.find((r) => r.path === defaultRoute)?.component;

  if (!Component) {
    return <div>404 - Página não encontrada</div>;
  }

  return <Component params={params} />;
}

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
