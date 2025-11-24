import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string; // article, website
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title = 'Carcará - Inteligência Artificial aplicada a vendas',
  description = 'Insights sobre vendas, inteligência artificial e transformação digital.',
  image = 'https://www.carcara.ai/og-default.png',
  url = typeof window !== 'undefined' ? window.location.href : 'https://www.carcara.ai',
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps) {
  useEffect(() => {
    const head = document.head;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      if (!content) return;
      let el = head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', type, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
    if (publishedTime) setMeta('article:published_time', publishedTime, 'property');
    if (modifiedTime) setMeta('article:modified_time', modifiedTime, 'property');

    // Canonical link
    let link = head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      head.appendChild(link);
    }
    link.href = url;
  }, [title, description, image, url, type, publishedTime, modifiedTime]);

  return null; // componente só injeta tags
}
