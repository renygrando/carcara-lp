import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { fetchBlogPostBySlug, getStrapiMediaUrl, type BlogPost } from './services/strapi';
import { SEO } from './components/SEO';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { navigate } from './components/Router';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

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
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Erro ao carregar post');
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
    if (!content) return null;
    try {
      const html = marked.parse(content) as string;
      const clean = DOMPurify.sanitize(html);
      return (
        <div 
          className="blog-content"
          style={{ 
            fontSize: '18px', 
            lineHeight: 1.8, 
            color: '#1A1A1A',
          }} 
          dangerouslySetInnerHTML={{ __html: clean }} 
        />
      );
    } catch (e) {
      console.error('Markdown render error:', e);
      return (
        <div style={{ fontSize: '18px', lineHeight: 1.8, color: '#1A1A1A' }}>
          {content.split(/\n\n+/).map((chunk, i) => (
            <p key={i} style={{ marginBottom: '24px' }}>
              {chunk.trim()}
            </p>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <style>{`
        .blog-content h1 {
          font-size: 36px;
          font-weight: 700;
          color: #092D22;
          margin-top: 48px;
          margin-bottom: 24px;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }
        .blog-content h2 {
          font-size: 30px;
          font-weight: 700;
          color: #092D22;
          margin-top: 40px;
          margin-bottom: 20px;
          line-height: 1.3;
          letter-spacing: -0.3px;
        }
        .blog-content h3 {
          font-size: 24px;
          font-weight: 600;
          color: #092D22;
          margin-top: 32px;
          margin-bottom: 16px;
          line-height: 1.4;
        }
        .blog-content h4 {
          font-size: 20px;
          font-weight: 600;
          color: #1A1A1A;
          margin-top: 28px;
          margin-bottom: 14px;
          line-height: 1.4;
        }
        .blog-content p {
          margin-bottom: 24px;
          line-height: 1.8;
        }
        .blog-content ul, .blog-content ol {
          margin-bottom: 24px;
          padding-left: 28px;
        }
        .blog-content li {
          margin-bottom: 12px;
          line-height: 1.8;
        }
        .blog-content blockquote {
          border-left: 4px solid #FFD93D;
          padding: 20px 24px;
          margin: 32px 0;
          background: rgba(245, 243, 232, 0.8);
          backdropFilter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 2px solid rgba(9, 45, 34, 0.1);
          font-style: italic;
          color: #1A1A1A;
        }
        .blog-content blockquote p {
          margin-bottom: 0;
        }
        .blog-content a {
          color: #092D22;
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: #FFD93D;
          text-underline-offset: 3px;
          text-decoration-thickness: 2px;
          transition: all 0.2s ease;
        }
        .blog-content a:hover {
          text-decoration-color: #092D22;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          margin: 32px 0;
          border: 3px solid rgba(255, 217, 61, 0.5);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .blog-content code {
          background: rgba(245, 243, 232, 0.8);
          padding: 3px 8px;
          font-family: 'Courier New', monospace;
          font-size: 16px;
          color: #092D22;
          border: 1px solid rgba(9, 45, 34, 0.1);
        }
        .blog-content pre {
          background: #092D22;
          color: #F5F3E8;
          padding: 24px;
          overflow-x: auto;
          margin: 32px 0;
          line-height: 1.6;
          border: 2px solid rgba(255, 217, 61, 0.3);
        }
        .blog-content pre code {
          background: none;
          padding: 0;
          color: #F5F3E8;
          font-size: 15px;
        }
        .blog-content strong {
          font-weight: 700;
          color: #092D22;
        }
        .blog-content em {
          font-style: italic;
        }
        .blog-content hr {
          border: none;
          border-top: 2px solid #E5E5E5;
          margin: 48px 0;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 32px 0;
          background: white;
          overflow: hidden;
          border: 2px solid rgba(9, 45, 34, 0.1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .blog-content th {
          background: #092D22;
          color: white;
          padding: 16px;
          text-align: left;
          font-weight: 600;
        }
        .blog-content td {
          padding: 14px 16px;
          border-bottom: 1px solid #E5E5E5;
        }
        .blog-content tr:last-child td {
          border-bottom: none;
        }
      `}</style>
      <Navbar currentPath="/blog" />
      <section style={{ paddingTop: '140px', paddingBottom: '80px', backgroundColor: '#F5F3E8' }}>
        <div className="max-w-[860px] mx-auto px-6 lg:px-12">
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
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#092D22',
                  lineHeight: 1.15,
                  letterSpacing: '-1px',
                  marginBottom: '24px',
                }}
              >
                {post.title}
              </h1>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '40px', color: '#555', fontSize: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Calendar className="w-5 h-5" /> {formatDate(post.publishedAt)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock className="w-5 h-5" /> {calculateReadTime(post.content)}
                </div>
                {post.author && (
                  <div style={{ fontWeight: 600, color: '#092D22' }}>Por {post.author}</div>
                )}
              </div>
              {post.coverImage?.url && (
                <img
                  src={getStrapiMediaUrl(post.coverImage.url)}
                  alt={post.coverImage.alternativeText || post.title}
                  style={{
                    width: '100%',
                    maxHeight: '480px',
                    objectFit: 'cover',
                    marginBottom: '56px',
                    border: '3px solid rgba(255, 217, 61, 0.5)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  }}
                />
              )}
              <article style={{ marginBottom: '64px' }}>{renderContent(post.content)}</article>
              
              {/* Call to Action */}
              <div 
                style={{ 
                  background: 'linear-gradient(180deg, rgba(245, 243, 232, 0.9) 0%, rgba(255, 217, 61, 0.8) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  padding: '40px',
                  border: '2px solid rgba(9, 45, 34, 0.1)',
                  marginBottom: '56px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: 700, 
                  color: '#092D22', 
                  marginBottom: '16px' 
                }}>
                  Gostou do conteúdo?
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#1A1A1A', 
                  marginBottom: '24px',
                  lineHeight: 1.6,
                }}>
                  Agende um diagnóstico gratuito e descubra como a Carcará pode transformar seu negócio
                </p>
                <motion.a
                  href="https://wa.me/5513998086401"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#092D22',
                    color: 'white',
                    padding: '16px 32px',
                    fontSize: '16px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    border: '2px solid #FFD93D',
                    boxShadow: '0 8px 24px rgba(9, 45, 34, 0.3)',
                  }}
                >
                  Agendar diagnóstico gratuito
                </motion.a>
              </div>

              {/* Share buttons */}
              <div style={{ borderTop: '2px solid #E5E5E5', paddingTop: '32px', marginBottom: '80px' }}>
                <span style={{ fontWeight: 600, fontSize: '16px', color: '#092D22', display: 'block', marginBottom: '16px' }}>
                  Compartilhar este artigo:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const url = window.location.href;
                    const text = encodeURIComponent(post.title);
                    window.open(`https://wa.me/?text=${text}%20${encodeURIComponent(url)}`, '_blank');
                  }}
                  style={{ 
                    background: '#25D366', 
                    color: '#fff', 
                    border: '2px solid #25D366', 
                    padding: '12px 20px', 
                    cursor: 'pointer', 
                    fontWeight: 600,
                    fontSize: '15px',
                  }}
                >
                  WhatsApp
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
                  }}
                  style={{ 
                    background: '#0A66C2', 
                    color: '#fff', 
                    border: '2px solid #0A66C2', 
                    padding: '12px 20px', 
                    cursor: 'pointer', 
                    fontWeight: 600,
                    fontSize: '15px',
                  }}
                >
                  LinkedIn
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const url = encodeURIComponent(window.location.href);
                    const text = encodeURIComponent(post.title);
                    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
                  }}
                  style={{ 
                    background: '#1D9BF0', 
                    color: '#fff', 
                    border: '2px solid #1D9BF0', 
                    padding: '12px 20px', 
                    cursor: 'pointer', 
                    fontWeight: 600,
                    fontSize: '15px',
                  }}
                >
                  X (Twitter)
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copiado!');
                  }}
                  style={{ 
                    background: '#FFD93D', 
                    color: '#092D22', 
                    border: '2px solid #092D22', 
                    padding: '12px 20px', 
                    cursor: 'pointer', 
                    fontWeight: 600,
                    fontSize: '15px',
                  }}
                >
                  Copiar link
                </motion.button>
                {navigator.share && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigator.share({ title: post.title, text: post.excerpt || post.title, url: window.location.href })}
                    style={{ 
                      background: '#092D22', 
                      color: '#fff', 
                      border: '2px solid #092D22', 
                      padding: '12px 20px', 
                      cursor: 'pointer', 
                      fontWeight: 600,
                      fontSize: '15px',
                    }}
                  >
                    Compartilhar
                  </motion.button>
                )}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>
      <Footer />
    </div>
  );
}
