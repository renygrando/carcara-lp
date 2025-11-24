import { useEffect, useState } from 'react';

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
}

interface RouterProps {
  routes: RouteConfig[];
  defaultRoute?: string;
}

export function Router({ routes, defaultRoute = '/' }: RouterProps) {
  const [currentPath, setCurrentPath] = useState(
    window.location.hash.slice(1) || defaultRoute
  );

  useEffect(() => {
    const handleHashChange = () => {
      const newPath = window.location.hash.slice(1) || defaultRoute;
      setCurrentPath(newPath);
      
      // Track page view on route change - Meta Pixel automatically tracks page views
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [defaultRoute]);

  const route = routes.find((r) => r.path === currentPath);
  const Component = route?.component || routes.find((r) => r.path === defaultRoute)?.component;

  if (!Component) {
    return <div>404 - Página não encontrada</div>;
  }

  return <Component />;
}

export function navigate(path: string) {
  window.location.hash = path;
}
