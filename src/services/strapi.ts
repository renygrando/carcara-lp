// Configuração do Strapi com fallback inteligente
const RAW_STRAPI_URL: string = (import.meta.env.VITE_STRAPI_URL as string) || '';
const STRAPI_API_TOKEN: string = (import.meta.env.VITE_STRAPI_API_TOKEN as string) || '';

// Resolve a URL do Strapi em runtime. Se nenhuma env estiver definida e estivermos
// em produção (domínio carcara.ai), utiliza o endpoint público.
export const resolveStrapiUrl = (): string => {
  if (RAW_STRAPI_URL) return RAW_STRAPI_URL.replace(/\/$/, '');
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host.endsWith('carcara.ai')) return 'https://strapi.carcara.ai';
  }
  return 'http://localhost:1337';
};

export interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: {
    id: number;
    documentId: string;
    url: string;
    alternativeText?: string;
    formats?: any;
  };
  author?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostsResponse {
  data: BlogPost[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Função auxiliar para construir URL completa da imagem
export const getStrapiMediaUrl = (url: string | undefined): string => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${resolveStrapiUrl()}${url}`;
};

// Buscar todos os posts
export const fetchBlogPosts = async (page = 1, pageSize = 9): Promise<BlogPostsResponse> => {
  try {
    const url = `${resolveStrapiUrl()}/api/blog-posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`;
    const headers: Record<string, string> = {};
    if (STRAPI_API_TOKEN) {
      headers.Authorization = `Bearer ${STRAPI_API_TOKEN}`;
    }

    console.debug('[Strapi] Fetching posts', { url, hasToken: !!STRAPI_API_TOKEN });

    const response = await fetch(url, { headers });
    if (!response.ok) {
      console.error('[Strapi] Response error', response.status, response.statusText);
      throw new Error('Erro ao buscar posts do blog');
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 9,
          pageCount: 0,
          total: 0,
        },
      },
    };
  }
};

// Buscar um post específico por slug
export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${resolveStrapiUrl()}/api/blog-posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`, {
      headers: STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {},
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar post do blog');
    }

    const data: BlogPostsResponse = await response.json();
    return data.data[0] || null;
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return null;
  }
};
