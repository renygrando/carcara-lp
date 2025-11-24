import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SEO } from './components/SEO';
import { fetchBlogPosts, getStrapiMediaUrl, resolveStrapiUrl, type BlogPost } from './services/strapi';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  // Diagnóstico: verificar se a URL configurada parece incorreta em produção
  const strapiUrl = resolveStrapiUrl();
  const isLikelyWrongUrl =
    strapiUrl.includes('localhost') && typeof window !== 'undefined' && window.location.hostname !== 'localhost';

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        console.debug('[Blog] STRAPI_URL em runtime:', strapiUrl);
        // Cache por página
        const cacheKey = `blog_page_${currentPage}`;
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          const parsed = JSON.parse(cached);
            setPosts(parsed.data);
            setTotalPages(parsed.meta.pagination.pageCount);
            setLoading(false);
            return;
        }
        const response = await fetchBlogPosts(currentPage);
        setPosts(response.data);
        setTotalPages(response.meta.pagination.pageCount);
        sessionStorage.setItem(cacheKey, JSON.stringify(response));
        if (response.data.length === 0 && isLikelyWrongUrl) {
          setError('A URL do Strapi está apontando para localhost em produção. Verifique a variável VITE_STRAPI_URL no Easypanel.');
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Erro ao carregar posts');
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, [currentPage, strapiUrl, isLikelyWrongUrl]);

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

  const blogImage = 'https://images.unsplash.com/photo-1641430034785-47f6f91ab6cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3AlMjBub3RlYm9va3xlbnwxfHx8fDE3NjI4MTUwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080';

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}>
      <SEO title="Blog Carcará - IA, Vendas e Transformação Digital" description="Artigos sobre vendas, inteligência artificial aplicada e transformação digital." />
      <Navbar currentPath="/blog" />

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '64px', backgroundColor: '#F5F3E8' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#092D22',
              letterSpacing: '-1px',
              lineHeight: '1.1',
              marginBottom: '24px',
            }}
          >
            Blog Carcará
          </h1>
          <p style={{ fontSize: '18px', color: '#1A1A1A', maxWidth: '768px' }}>
            Insights sobre vendas, inteligência artificial e transformação digital
          </p>
        </div>
      </section>

      {/* Em breve ou Lista de Posts */}
      <section style={{ padding: '96px 0' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          {loading ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse bg-white rounded-2xl overflow-hidden shadow-lg p-4">
                    <div className="bg-gray-200 h-60 w-full mb-4" />
                    <div className="bg-gray-200 h-6 w-3/4 mb-3" />
                    <div className="bg-gray-200 h-4 w-full mb-2" />
                    <div className="bg-gray-200 h-4 w-5/6 mb-6" />
                    <div className="bg-gray-200 h-6 w-24" />
                  </div>
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="text-center max-w-2xl mx-auto">
              <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#092D22', marginBottom: '16px' }}>
                Erro ao carregar posts
              </h2>
              <p style={{ fontSize: '16px', color: '#B30000', marginBottom: '24px' }}>{error}</p>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>
                Abra o console do navegador (F12) e procure pelos logs [Strapi] / [Blog] para confirmar a URL usada.
              </p>
            </div>
          ) : posts.length > 0 ? (
            <>
              {/* Grid de Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post) => (
                  <motion.a
                    key={post.id}
                    href={`/blog/${post.slug || post.documentId}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 block"
                    style={{ textDecoration: 'none', cursor: 'pointer' }}
                  >
                    {/* Imagem do Post */}
                    <div style={{ height: '240px', overflow: 'hidden' }}>
                      <img
                        src={
                          post.coverImage?.url
                            ? getStrapiMediaUrl(post.coverImage.url)
                            : blogImage
                        }
                        alt={post.coverImage?.alternativeText || post.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                    </div>

                    {/* Conteúdo do Post */}
                    <div style={{ padding: '24px' }}>
                      {/* Meta informações */}
                      <div className="flex items-center gap-4 mb-3" style={{ fontSize: '14px', color: '#666' }}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{calculateReadTime(post.content)}</span>
                        </div>
                      </div>

                      {/* Título */}
                      <h3
                        style={{
                          fontSize: '22px',
                          fontWeight: 700,
                          color: '#092D22',
                          marginBottom: '12px',
                          lineHeight: '1.3',
                        }}
                      >
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p
                        style={{
                          fontSize: '16px',
                          color: '#1A1A1A',
                          lineHeight: '1.6',
                          marginBottom: '20px',
                        }}
                      >
                        {post.excerpt}
                      </p>

                      {/* Autor (se disponível) */}
                      {post.author && (
                        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                          Por {post.author}
                        </p>
                      )}

                      {/* Botão de leitura */}
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2"
                        style={{
                          color: '#092D22',
                          fontWeight: 600,
                          fontSize: '16px',
                        }}
                      >
                        Ler mais
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Paginação avançada */}
              {totalPages > 1 && (
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className="px-4 py-2 rounded-md font-semibold"
                      style={{ background: currentPage === 1 ? '#E5E5E5' : '#FFD93D', color: '#092D22' }}
                    >
                      Anterior
                    </button>
                    {Array.from({ length: totalPages }).map((_, i) => {
                      const page = i + 1;
                      if (totalPages > 7) {
                        // Condensar páginas distantes
                        const near = Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages;
                        if (!near) return null;
                        const showEllipsis =
                          (page === 2 && currentPage > 4) || (page === totalPages - 1 && currentPage < totalPages - 3);
                        if (showEllipsis) {
                          return (
                            <span key={page} style={{ padding: '8px 12px', color: '#666' }}>
                              ...
                            </span>
                          );
                        }
                      }
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className="px-4 py-2 rounded-md font-semibold"
                          style={{
                            background: page === currentPage ? '#092D22' : '#F0F0F0',
                            color: page === currentPage ? '#FFFFFF' : '#092D22',
                          }}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className="px-4 py-2 rounded-md font-semibold"
                      style={{ background: currentPage === totalPages ? '#E5E5E5' : '#FFD93D', color: '#092D22' }}
                    >
                      Próxima
                    </button>
                  </div>
                  <div style={{ fontSize: '14px', color: '#555' }}>Página {currentPage} de {totalPages}</div>
                </div>
              )}
            </>
          ) : (
            /* Mensagem de "Em breve" quando não há posts */
            <div className="text-center max-w-2xl mx-auto">
              <img
                src={blogImage}
                alt="Blog em construção"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  border: '3px solid rgba(255, 217, 61, 0.5)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  marginBottom: '48px',
                }}
              />
              
              <h2
                style={{
                  fontSize: '40px',
                  fontWeight: 700,
                  color: '#092D22',
                  marginBottom: '24px',
                }}
              >
                Em breve: conteúdo de qualidade sobre IA e vendas
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  color: '#1A1A1A',
                  lineHeight: '1.6',
                  marginBottom: '32px',
                }}
              >
                Estamos preparando artigos exclusivos, estudos de caso e guias práticos para ajudar você a implementar inteligência artificial no seu negócio.
              </p>
              <p style={{ fontSize: '16px', color: '#1A1A1A', marginBottom: '32px' }}>
                Enquanto isso, que tal agendar um diagnóstico gratuito e descobrir como podemos ajudar seu negócio agora?
              </p>
              <a href="https://wa.me/553597640878" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>
                <motion.button
                  whileHover={{ backgroundColor: '#FFC700' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2"
                  style={{
                    backgroundColor: '#FFD93D',
                    color: '#092D22',
                    padding: '20px 40px',
                    fontSize: '18px',
                    fontWeight: 700,
                    boxShadow: '0 8px 24px rgba(255, 217, 61, 0.4)',
                    border: '2px solid #092D22',
                    cursor: 'pointer',
                  }}
                >
                  Agendar diagnóstico gratuito
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
