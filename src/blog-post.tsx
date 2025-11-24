import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { fetchBlogPostBySlug, getStrapiMediaUrl, type BlogPost } from './services/strapi';
import { SEO } from './components/SEO';
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
        const cacheKey = `blog_post_${slug}`;
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          setPost(JSON.parse(cached));
          setLoading(false);
          return;
        }
        const p = await fetchBlogPostBySlug(slug);
        if (!p) {
          setError('Post não encontrado ou ainda não publicado.');
        } else {
          sessionStorage.setItem(cacheKey, JSON.stringify(p));
        }
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
    // Usa marked + DOMPurify para converter Markdown seguro
    try {
      // Lazy import para não impactar bundle inicial
      const { marked } = require('marked');
      const DOMPurify = require('dompurify');
      const html = marked.parse(content || '');
      // Em ambientes SSR window pode não existir, aqui estamos em client
      const clean = DOMPurify.sanitize(html);
      return <div style={{ fontSize: '18px', lineHeight: 1.7, color: '#1A1A1A' }} dangerouslySetInnerHTML={{ __html: clean }} />;
    } catch (e) {
      // Fallback simples se libs não carregarem
      return content
        .split(/\n\n+/)
        .map((chunk, i) => (
          <p key={i} style={{ fontSize: '18px', lineHeight: 1.7, marginBottom: '20px', color: '#1A1A1A' }}>
            {chunk.trim()}
          </p>
        ));
    }
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
          {post && (
            <SEO
              title={`${post.title} | Blog Carcará`}
              description={post.excerpt || post.title}
              image={post.coverImage?.url ? getStrapiMediaUrl(post.coverImage.url) : undefined}
              type="article"
              publishedTime={post.publishedAt}
              modifiedTime={post.updatedAt}
            />
          )}
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
              <article style={{ marginBottom: '56px' }}>{renderContent(post.content)}</article>
              {/* Share buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '80px' }}>
                <span style={{ fontWeight: 600, fontSize: '15px', color: '#092D22' }}>Compartilhar:</span>
                <button
                  onClick={() => {
                    const url = window.location.href;
                    const text = encodeURIComponent(post.title);
                    window.open(`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`, '_blank');
                  }}
                  style={{ background: '#25D366', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(post.title);
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
                  }}
                  style={{ background: '#0A66C2', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(post.title);
                    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
                  }}
                  style={{ background: '#1D9BF0', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}
                >
                  X (Twitter)
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copiado!');
                  }}
                  style={{ background: '#FFD93D', color: '#092D22', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}
                >
                  Copiar link
                </button>
                {navigator.share && (
                  <button
                    onClick={() => navigator.share({ title: post.title, text: post.excerpt || post.title, url: window.location.href })}
                    style={{ background: '#092D22', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}
                  >
                    Share API
                  </button>
                )}
              </div>
            </>
          ) : null}
        </div>
      </section>
      <Footer />
    </div>
  );
}
