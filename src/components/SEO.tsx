import { useEffect } from 'react';

interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'article' | 'website';
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: StructuredData | StructuredData[];
}

export function SEO({
  title = 'Carcará - Inteligência Artificial aplicada a vendas',
  description = 'Insights sobre vendas, inteligência artificial e transformação digital.',
  image = 'https://www.carcara.ai/og-default.png',
  url = typeof window !== 'undefined' ? window.location.href : 'https://www.carcara.ai',
  type = 'website',
  publishedTime,
  modifiedTime,
  structuredData,
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

    // Structured Data (JSON-LD)
    const existing = head.querySelector('script[data-structured="true"]');
    if (existing) existing.remove();

    let jsonLd: StructuredData | StructuredData[] | undefined = structuredData;
    if (!jsonLd && type === 'article' && publishedTime) {
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        datePublished: publishedTime,
        dateModified: modifiedTime || publishedTime,
        mainEntityOfPage: url,
        author: { '@type': 'Organization', name: 'Carcará' },
        publisher: {
          '@type': 'Organization',
          name: 'Carcará',
          logo: { '@type': 'ImageObject', url: 'https://www.carcara.ai/logo.png' }
        }
      };
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-structured', 'true');
      script.textContent = JSON.stringify(jsonLd);
      head.appendChild(script);
    }
  }, [title, description, image, url, type, publishedTime, modifiedTime, structuredData]);

  return null; // componente só injeta tags
}
