import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    title: 'Como escolher o Seguro de Vida ideal para sua família',
    excerpt: 'Descubra os principais pontos a considerar na hora de proteger quem você ama.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
    date: '28 Nov 2024',
    category: 'Seguro de Vida',
  },
  {
    title: 'Planejamento Financeiro 2025: comece agora',
    excerpt: 'Dicas práticas para organizar suas finanças e garantir um futuro tranquilo.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    date: '20 Nov 2024',
    category: 'Previdência',
  },
  {
    title: 'Plano de Saúde: PME ou Individual?',
    excerpt: 'Entenda as diferenças e descubra qual modalidade é melhor para você.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    date: '15 Nov 2024',
    category: 'Saúde',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Diário de Bordo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conteúdos para ajudar você a tomar as melhores decisões sobre proteção e planejamento
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-warm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="text-primary font-medium text-sm inline-flex items-center gap-1 group/btn">
                  Ler mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Ver todos os artigos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
