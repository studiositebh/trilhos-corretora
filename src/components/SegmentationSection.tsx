import { Button } from '@/components/ui/button';
import { Users, Building, Shield, Heart, Briefcase, Car } from 'lucide-react';
import familyImg from '@/assets/family-happy.jpg';
import teamImg from '@/assets/team-corporate.jpg';

const SegmentationSection = () => {
  const handleWhatsApp = (segment: string) => {
    window.open(`https://wa.me/5531999999999?text=Olá! Tenho interesse em seguros para ${segment}.`, '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Para Quem É
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluções Para Cada Necessidade
          </h2>
          <p className="text-muted-foreground text-lg">
            Seja para proteger sua família ou sua empresa, temos a solução certa.
          </p>
        </div>

        {/* Two Column Split with Photos */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For You and Family */}
          <div className="group relative bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl overflow-hidden">
            {/* Background Photo */}
            <div className="absolute inset-0">
              <img 
                src={familyImg} 
                alt="Família feliz se abraçando" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
            </div>

            <div className="relative p-8 lg:p-10 text-primary-foreground">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Users className="w-8 h-8 text-amber-400" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
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
                  <Heart className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Seguro de Vida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Planos de Saúde</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Auto e Residência</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Previdência</span>
                </div>
              </div>

              {/* Photo Preview */}
              <div className="mb-6 rounded-2xl overflow-hidden border-2 border-white/10">
                <img 
                  src={familyImg} 
                  alt="Família feliz" 
                  className="w-full h-48 object-cover"
                />
              </div>

              <Button 
                variant="heroOutline"
                size="lg"
                onClick={() => handleWhatsApp('minha família')}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-white border-0"
              >
                Proteger Minha Família
              </Button>
            </div>
          </div>

          {/* For Your Business */}
          <div className="group relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 rounded-3xl overflow-hidden">
            {/* Background Photo */}
            <div className="absolute inset-0">
              <img 
                src={teamImg} 
                alt="Equipe corporativa feliz" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/85 to-secondary/80" />
            </div>

            <div className="relative p-8 lg:p-10 text-secondary-foreground">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 mb-6">
                <Building className="w-8 h-8 text-amber-400" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
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
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Responsabilidade Civil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Frotas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Saúde Corporativa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Seguro Empresarial</span>
                </div>
              </div>

              {/* Photo Preview */}
              <div className="mb-6 rounded-2xl overflow-hidden border-2 border-white/10">
                <img 
                  src={teamImg} 
                  alt="Equipe corporativa" 
                  className="w-full h-48 object-cover"
                />
              </div>

              <Button 
                variant="heroOutline"
                size="lg"
                onClick={() => handleWhatsApp('minha empresa')}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-white border-0"
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