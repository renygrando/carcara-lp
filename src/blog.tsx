import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { fetchBlogPosts, getStrapiMediaUrl, type BlogPost } from './services/strapi';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await fetchBlogPosts(currentPage);
      setPosts(response.data);
      setTotalPages(response.meta.pagination.pageCount);
      setLoading(false);
    };

    loadPosts();
  }, [currentPage]);

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
            <div className="text-center">
              <p style={{ fontSize: '18px', color: '#1A1A1A' }}>Carregando posts...</p>
            </div>
          ) : posts.length > 0 ? (
            <>
              {/* Grid de Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {posts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Imagem do Post */}
                    <div style={{ height: '240px', overflow: 'hidden' }}>
                      <img
                        src={
                          post.attributes.coverImage?.data?.attributes?.url
                            ? getStrapiMediaUrl(post.attributes.coverImage.data.attributes.url)
                            : blogImage
                        }
                        alt={post.attributes.coverImage?.data?.attributes?.alternativeText || post.attributes.title}
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
                          <span>{formatDate(post.attributes.publishedAt)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{calculateReadTime(post.attributes.content)}</span>
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
                        {post.attributes.title}
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
                        {post.attributes.excerpt}
                      </p>

                      {/* Autor (se disponível) */}
                      {post.attributes.author && (
                        <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>
                          Por {post.attributes.author}
                        </p>
                      )}

                      {/* Botão de leitura */}
                      <motion.a
                        href={`/blog/${post.attributes.slug}`}
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2"
                        style={{
                          color: '#092D22',
                          fontWeight: 600,
                          fontSize: '16px',
                          textDecoration: 'none',
                        }}
                      >
                        Ler mais
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Paginação */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      backgroundColor: currentPage === 1 ? '#E5E5E5' : '#FFD93D',
                      color: '#092D22',
                      fontWeight: 600,
                      border: 'none',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    }}
                  >
                    Anterior
                  </motion.button>

                  <span style={{ fontSize: '16px', color: '#1A1A1A' }}>
                    Página {currentPage} de {totalPages}
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '8px',
                      backgroundColor: currentPage === totalPages ? '#E5E5E5' : '#FFD93D',
                      color: '#092D22',
                      fontWeight: 600,
                      border: 'none',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    }}
                  >
                    Próxima
                  </motion.button>
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
                  borderRadius: '16px',
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
                    borderRadius: '8px',
                    fontSize: '18px',
                    fontWeight: 700,
                    boxShadow: '0 4px 12px rgba(255, 217, 61, 0.3)',
                    border: 'none',
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
