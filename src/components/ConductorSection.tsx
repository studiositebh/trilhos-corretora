import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle2, Quote } from 'lucide-react';

const ConductorSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de uma consultoria personalizada.', '_blank');
  };

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Editorial Layout - Asymmetric Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content - Takes 7 columns */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              {/* Section Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
                  Nosso Diferencial
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-[1.1]">
                O Maquinista da Sua
                <span className="block gradient-text-accent">Tranquilidade</span>
              </h2>

              {/* Pain Point */}
              <div className="relative pl-6 mb-8 border-l-2 border-secondary/30">
                <Quote className="absolute -left-3 -top-1 w-6 h-6 text-secondary/40" />
                <p className="text-xl lg:text-2xl text-secondary font-serif italic">
                  Cansado da burocracia e do "segurês"?
                </p>
              </div>

              {/* Solution */}
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-xl">
                Na Trilhos, somos os maquinistas da sua tranquilidade. Atuamos com 
                <strong className="text-foreground"> consultoria humanizada</strong>, não apenas venda. 
                Entendemos suas necessidades reais e encontramos a proteção ideal para cada fase da sua vida.
              </p>

              {/* Benefits List - Premium Style */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Análise completa e sem compromisso',
                  'Comparativo entre as melhores seguradoras',
                  'Suporte contínuo na vigência',
                  'Auxílio completo em caso de sinistro'
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="cta" 
                size="lg"
                onClick={handleWhatsApp}
                className="cta-glow"
              >
                <MessageCircle className="w-5 h-5" />
                Quero uma consultoria personalizada
              </Button>
            </div>

            {/* Right Content - Visual Card - Takes 5 columns */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                {/* Background decorative card */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3" />
                
                {/* Main Card */}
                <div className="relative glass-card-strong rounded-2xl p-8 lg:p-10">
                  {/* Stats Grid */}
                  <div className="space-y-8">
                    {/* Stat Item */}
                    <div className="text-center pb-8 border-b border-border">
                      <div className="text-5xl lg:text-6xl font-serif font-bold text-primary mb-2">
                        100%
                      </div>
                      <div className="text-muted-foreground text-sm uppercase tracking-wide">
                        Foco no Cliente
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {[
                        { label: 'Atendimento Humanizado', desc: 'Sem robôs, fale com especialistas' },
                        { label: 'Consultoria Personalizada', desc: 'Soluções sob medida' },
                        { label: 'Parceiros de Confiança', desc: 'As melhores seguradoras' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                          <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-foreground text-sm mb-0.5">
                              {item.label}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConductorSection;