// Configuração do Strapi
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN || '';

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
  return `${STRAPI_URL}${url}`;
};

// Buscar todos os posts
export const fetchBlogPosts = async (page = 1, pageSize = 9): Promise<BlogPostsResponse> => {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/blog-posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=publishedAt:desc`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Erro ao buscar posts do blog');
    }

    return await response.json();
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
    const response = await fetch(
      `${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      }
    );

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
