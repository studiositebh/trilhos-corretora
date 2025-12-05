import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronRight, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de falar com um especialista.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Deep Navy Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Premium Dark Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />

      {/* Elegant Rail Line Decoration */}
      <div className="absolute left-12 lg:left-20 top-1/4 bottom-1/4 hidden lg:flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent shadow-lg" style={{ boxShadow: '0 0 20px hsl(var(--accent) / 0.5)' }} />
        <div className="flex-1 w-px bg-gradient-to-b from-accent/60 via-accent/30 to-accent/60" />
        <div className="w-3 h-3 rounded-full bg-accent shadow-lg" style={{ boxShadow: '0 0 20px hsl(var(--accent) / 0.5)' }} />
      </div>

      {/* Floating Accent Elements */}
      <div className="absolute right-20 top-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl hidden lg:block" />
      <div className="absolute right-40 bottom-1/4 w-48 h-48 rounded-full bg-secondary/5 blur-3xl hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-5 py-2.5 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">
              Corretora Especializada em Seguros
            </span>
          </div>

          {/* Headline with Poppins Bold */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-8 leading-[1.05] animate-fade-in-up animation-delay-100 tracking-tight">
            A vida nos trilhos.
            <br />
            <span className="gradient-text-accent">O futuro sob controle.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200 font-light">
            Consultoria especializada em <span className="text-primary-foreground font-medium">Seguros</span>, <span className="text-primary-foreground font-medium">Planos de Saúde</span> e <span className="text-primary-foreground font-medium">Previdência</span>. 
            Protegemos seu patrimônio e sua família com atendimento humanizado e sob medida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleWhatsApp}
              className="cta-glow group"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              Falar com um Especialista Agora
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => document.getElementById('estacoes')?.scrollIntoView({ behavior: 'smooth' })}
              className="backdrop-blur-sm"
            >
              Conhecer Soluções
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap gap-8 animate-fade-in-up animation-delay-400">
            {[
              'Sem burocracia',
              'Consultoria gratuita',
              'Atendimento humanizado'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 text-primary-foreground/60">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-medium tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;