import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Empresária',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: 'Atendimento excepcional! A equipe da Trilhos me ajudou a encontrar o plano perfeito para minha família. Consultoria humanizada de verdade.',
    rating: 5,
  },
  {
    name: 'João Pedro Santos',
    role: 'Engenheiro',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'Finalmente encontrei uma corretora que explica tudo de forma clara, sem aquela linguagem complicada. Recomendo demais!',
    rating: 5,
  },
  {
    name: 'Ana Carolina Lima',
    role: 'Médica',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'Precisei acionar o seguro e fui muito bem atendida. A Trilhos me acompanhou em todo o processo. Gratidão!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-warm-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-[#242d54] to-[#2d3a6d]" />
            <span className="text-[#242d54] font-semibold text-sm uppercase tracking-[0.2em]">
              Depoimentos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Passageiros satisfeitos com a viagem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre a experiência com a Trilhos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-warm hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#242d54]/20"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;