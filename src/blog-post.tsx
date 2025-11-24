import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { fetchBlogPostBySlug, getStrapiMediaUrl, type BlogPost } from './services/strapi';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { navigate } from './components/Router';

interface BlogPostPageProps {
  params?: { slug?: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = params?.slug || '';
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!slug) return;
      setLoading(true);
      setError(null);
      try {
        const p = await fetchBlogPostBySlug(slug);
        if (!p) setError('Post não encontrado ou ainda não publicado.');
        setPost(p);
      } catch (e: any) {
        setError(e.message || 'Erro ao carregar post');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min de leitura`;
  };

  const renderContent = (content: string) => {
    // Render simples: quebra por dupla quebra de linha e cria <p>
    return content
      .split(/\n\n+/)
      .map((chunk, i) => (
        <p key={i} style={{ fontSize: '18px', lineHeight: 1.7, marginBottom: '20px', color: '#1A1A1A' }}>
          {chunk.trim()}
        </p>
      ));
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <Navbar currentPath="/blog" />
      <section style={{ paddingTop: '140px', paddingBottom: '48px', backgroundColor: '#F5F3E8' }}>
        <div className="max-w-[960px] mx-auto px-6 lg:px-12">
          <motion.button
            whileHover={{ x: -4 }}
            onClick={() => navigate('/blog')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#092D22',
              fontWeight: 600,
              marginBottom: '32px',
              fontSize: '15px',
            }}
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </motion.button>
          {loading ? (
            <p style={{ fontSize: '18px' }}>Carregando...</p>
          ) : error ? (
            <p style={{ fontSize: '18px', color: '#B30000' }}>{error}</p>
          ) : post ? (
            <>
              <h1
                style={{
                  fontSize: '54px',
                  fontWeight: 700,
                  color: '#092D22',
                  lineHeight: 1.1,
                  letterSpacing: '-1px',
                  marginBottom: '28px',
                }}
              >
                {post.title}
              </h1>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', color: '#444', fontSize: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar className="w-4 h-4" /> {formatDate(post.publishedAt)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock className="w-4 h-4" /> {calculateReadTime(post.content)}
                </div>
                {post.author && <div>Por {post.author}</div>}
              </div>
              {post.coverImage?.url && (
                <img
                  src={getStrapiMediaUrl(post.coverImage.url)}
                  alt={post.coverImage.alternativeText || post.title}
                  style={{
                    width: '100%',
                    maxHeight: '520px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    marginBottom: '48px',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                  }}
                />
              )}
              <article>{renderContent(post.content)}</article>
            </>
          ) : null}
        </div>
      </section>
      <Footer />
    </div>
  );
}
