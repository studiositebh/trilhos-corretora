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
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-[#242d54] to-[#2d3a6d]" />
            <span className="text-[#242d54] font-semibold text-sm uppercase tracking-[0.2em]">
              Para Quem É
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Soluções Para Cada Necessidade
          </h2>
          <p className="text-muted-foreground text-lg">
            Seja para proteger sua família ou sua empresa, temos a solução certa.
          </p>
        </div>

        {/* Two Column Split with Photos */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For You and Family */}
          <div className="group relative bg-gradient-to-br from-[#242d54] via-[#242d54] to-[#2d3a6d] rounded-3xl overflow-hidden">
            {/* Background Photo */}
            <div className="absolute inset-0">
              <img 
                src={familyImg} 
                alt="Família feliz se abraçando" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#242d54]/90 via-[#242d54]/85 to-[#2d3a6d]/80" />
            </div>

            <div className="relative p-8 lg:p-10 text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Para Você e Sua Família
              </h3>

              <p className="text-white/80 mb-6 leading-relaxed">
                Proteja quem você ama com soluções completas de seguro de vida, 
                planos de saúde e previdência. Garanta tranquilidade para o presente 
                e segurança para o futuro.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-white/80" />
                  <span className="text-sm">Seguro de Vida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-white/80" />
                  <span className="text-sm">Planos de Saúde</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-white/80" />
                  <span className="text-sm">Auto e Residência</span>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-white/80" />
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
                className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#242d54] border-0"
              >
                Proteger Minha Família
              </Button>
            </div>
          </div>

          {/* For Your Business */}
          <div className="group relative bg-gradient-to-br from-[#e2d37d] via-[#e2d37d] to-[#d4c46d] rounded-3xl overflow-hidden">
            {/* Background Photo */}
            <div className="absolute inset-0">
              <img 
                src={teamImg} 
                alt="Equipe corporativa feliz" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#e2d37d]/90 via-[#e2d37d]/85 to-[#d4c46d]/80" />
            </div>

            <div className="relative p-8 lg:p-10 text-[#242d54]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#242d54]/20 mb-6">
                <Building className="w-8 h-8 text-[#242d54]" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Para Sua Empresa
              </h3>

              <p className="text-[#242d54]/80 mb-6 leading-relaxed">
                Soluções corporativas completas para proteger seu negócio, 
                seus colaboradores e sua frota. Responsabilidade civil, 
                seguros empresariais e benefícios corporativos.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#242d54]/80" />
                  <span className="text-sm">Responsabilidade Civil</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-[#242d54]/80" />
                  <span className="text-sm">Frotas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#242d54]/80" />
                  <span className="text-sm">Saúde Corporativa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-[#242d54]/80" />
                  <span className="text-sm">Seguro Empresarial</span>
                </div>
              </div>

              {/* Photo Preview */}
              <div className="mb-6 rounded-2xl overflow-hidden border-2 border-[#242d54]/10">
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
                className="w-full sm:w-auto bg-[#242d54] hover:bg-[#2d3a6d] text-white border-0"
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