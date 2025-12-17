import { Button } from '@/components/ui/button';
import { MessageCircle, ChevronRight, Sun } from 'lucide-react';
import heroBg from '@/assets/hero-family-station.jpg';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de falar com um especialista.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Golden Hour Sunset */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Warm Golden Overlay - Subtle to keep image vibrant */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-orange-900/25 to-amber-800/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-amber-500/10" />
      </div>

      {/* Sun Rays Effect */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(38 92% 70% / 0.4) 0%, hsl(24 85% 55% / 0.2) 40%, transparent 70%)',
          }}
        />
      </div>

      {/* Elegant Rail Line Decoration - Golden */}
      <div className="absolute left-12 lg:left-20 top-1/4 bottom-1/4 hidden lg:flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent shadow-lg animate-glow-pulse" />
        <div className="flex-1 w-px bg-gradient-to-b from-accent/60 via-accent/40 to-accent/60" />
        <div className="w-3 h-3 rounded-full bg-accent shadow-lg animate-glow-pulse" />
      </div>

      {/* Floating Warm Elements */}
      <div className="absolute right-20 top-1/4 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl hidden lg:block" />
      <div className="absolute right-40 bottom-1/4 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Premium Badge - Warmer */}
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-5 py-2.5 mb-8 animate-fade-in-up bg-white/10 backdrop-blur-md border-white/20">
            <Sun className="w-4 h-4 text-amber-400" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Corretora Especializada em Seguros
            </span>
          </div>

          {/* Headline with Poppins Bold */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.05] animate-fade-in-up animation-delay-100 tracking-tight drop-shadow-lg">
            A vida nos trilhos.
            <br />
            <span className="gradient-text-warm">O futuro sob controle.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200 font-light drop-shadow-md">
            Consultoria especializada em <span className="text-white font-medium">Seguros</span>, <span className="text-white font-medium">Planos de Saúde</span> e <span className="text-white font-medium">Previdência</span>. 
            Protegemos seu patrimônio e sua família com atendimento humanizado e sob medida.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleWhatsApp}
              className="cta-glow group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white border-0"
            >
              <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              Falar com um Especialista Agora
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => document.getElementById('estacoes')?.scrollIntoView({ behavior: 'smooth' })}
              className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
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
              <div key={index} className="flex items-center gap-2.5 text-white/80">
                <div className="w-2 h-2 rounded-full bg-amber-400 shadow-lg" style={{ boxShadow: '0 0 10px hsl(38 92% 50% / 0.5)' }} />
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
