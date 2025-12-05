import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de falar com um especialista.', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Rail Line Decoration */}
      <div className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-0.5 bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0 hidden lg:block" />
      <div className="absolute left-6 md:left-14 top-1/4 w-2 h-2 rounded-full bg-accent hidden lg:block" />
      <div className="absolute left-6 md:left-14 bottom-1/4 w-2 h-2 rounded-full bg-accent hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Corretora Especializada em Seguros
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up animation-delay-100">
            A vida nos trilhos.
            <br />
            <span className="text-accent">O futuro sob controle.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
            Consultoria especializada em <strong>Seguros</strong>, <strong>Planos de Saúde</strong> e <strong>Previdência</strong>. 
            Protegemos seu patrimônio e sua família com atendimento humanizado e sob medida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleWhatsApp}
              className="cta-glow"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com um Especialista Agora
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => document.getElementById('estacoes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conhecer Soluções
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap gap-6 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Sem burocracia</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Consultoria gratuita</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Atendimento humanizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
