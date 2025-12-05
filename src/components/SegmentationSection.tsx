import { Button } from '@/components/ui/button';
import { Users, Building, Shield, Heart, Briefcase, Car } from 'lucide-react';

const SegmentationSection = () => {
  const handleWhatsApp = (segment: string) => {
    window.open(`https://wa.me/5531999999999?text=Olá! Tenho interesse em seguros para ${segment}.`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Para Quem É
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Soluções Para Cada Necessidade
          </h2>
          <p className="text-muted-foreground text-lg">
            Seja para proteger sua família ou sua empresa, temos a solução certa.
          </p>
        </div>

        {/* Two Column Split */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For You and Family */}
          <div className="group relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-8 lg:p-10 text-primary-foreground overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-foreground/10 mb-6">
                <Users className="w-8 h-8" />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Para Você e Sua Família
              </h3>

              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Proteja quem você ama com soluções completas de seguro de vida, 
                planos de saúde e previdência. Garanta tranquilidade para o presente 
                e segurança para o futuro.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-sm">Seguro de Vida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm">Planos de Saúde</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-accent" />
                  <span className="text-sm">Auto e Residência</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <span className="text-sm">Previdência</span>
                </div>
              </div>

              <Button 
                variant="heroOutline"
                size="lg"
                onClick={() => handleWhatsApp('minha família')}
                className="w-full sm:w-auto"
              >
                Proteger Minha Família
              </Button>
            </div>
          </div>

          {/* For Your Business */}
          <div className="group relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 rounded-2xl p-8 lg:p-10 text-secondary-foreground overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <rect x="40" y="40" width="120" height="120" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="60" y="60" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="80" y="80" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-secondary-foreground/10 mb-6">
                <Building className="w-8 h-8" />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Para Sua Empresa
              </h3>

              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                Soluções corporativas completas para proteger seu negócio, 
                seus colaboradores e sua frota. Responsabilidade civil, 
                seguros empresariais e benefícios corporativos.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm">Responsabilidade Civil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-accent" />
                  <span className="text-sm">Frotas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-sm">Saúde Corporativa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-accent" />
                  <span className="text-sm">Seguro Empresarial</span>
                </div>
              </div>

              <Button 
                variant="heroOutline"
                size="lg"
                onClick={() => handleWhatsApp('minha empresa')}
                className="w-full sm:w-auto"
              >
                Proteger Minha Empresa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentationSection;
