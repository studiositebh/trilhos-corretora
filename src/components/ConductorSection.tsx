import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle2, Quote, Star } from 'lucide-react';
import consultantImg from '@/assets/consultant-friendly.jpg';

const ConductorSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de uma consultoria personalizada.', '_blank');
  };

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#20244A]/5 to-transparent" />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[#20244A]/10 blur-3xl" />
      <div className="absolute top-20 right-40 w-48 h-48 rounded-full bg-[#20244A]/10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Editorial Layout - Asymmetric Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                {/* Background decorative card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#20244A]/20 to-[#2a3361]/20 rounded-3xl transform rotate-3" />
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#20244A]/10 to-[#2a3361]/10 rounded-3xl transform -rotate-2" />
                
                {/* Photo Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                  <img 
                    src={consultantImg} 
                    alt="Consultora de seguros sorridente e acolhedora" 
                    className="w-full h-auto object-cover aspect-[3/4]"
                  />
                  {/* Overlay on photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#20244A]/20 via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-card p-4 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#e2d37d] fill-[#e2d37d]" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">+500 avaliações</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              {/* Section Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-[#20244A] to-[#2a3361]" />
                <span className="text-[#20244A] font-semibold text-sm uppercase tracking-[0.2em]">
                  Nosso Diferencial
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
                O Maquinista da Sua
                <span className="block text-[#20244A]">Tranquilidade</span>
              </h2>

              {/* Pain Point */}
              <div className="relative pl-6 mb-8 border-l-2 border-[#20244A]/40">
                <Quote className="absolute -left-3 -top-1 w-6 h-6 text-[#20244A]/60" />
                <p className="text-xl lg:text-2xl text-[#20244A] font-medium italic">
                  Cansado da burocracia e do "segurês"?
                </p>
              </div>

              {/* Solution */}
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
                Na Trilhos, somos os maquinistas da sua tranquilidade. Atuamos com 
                <strong className="text-foreground"> consultoria humanizada</strong>, não apenas venda. 
                Entendemos suas necessidades reais e encontramos a proteção ideal para cada fase da sua vida.
              </p>

              {/* Benefits List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Análise completa e sem compromisso',
                  'Comparativo entre as melhores seguradoras',
                  'Suporte contínuo na vigência',
                  'Auxílio completo em caso de sinistro'
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-r from-[#20244A]/5 to-[#2a3361]/5 hover:from-[#20244A]/10 hover:to-[#2a3361]/10 transition-colors border border-[#20244A]/10"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#20244A] flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="cta" 
                size="lg"
                onClick={handleWhatsApp}
                className="cta-glow bg-[#20244A] hover:bg-[#2a3361] text-white border-0"
              >
                <MessageCircle className="w-5 h-5" />
                Quero uma consultoria personalizada
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConductorSection;