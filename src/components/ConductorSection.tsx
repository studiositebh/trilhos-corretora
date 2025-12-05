import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle2, Users, HeartHandshake, Award } from 'lucide-react';

const differentials = [
  {
    icon: Users,
    title: 'Atendimento Humanizado',
    description: 'Sem robôs. Você fala diretamente com especialistas.'
  },
  {
    icon: HeartHandshake,
    title: 'Consultoria Personalizada',
    description: 'Analisamos suas necessidades reais, não vendemos pacotes prontos.'
  },
  {
    icon: Award,
    title: 'Parceiros de Confiança',
    description: 'Trabalhamos apenas com as seguradoras mais sólidas do mercado.'
  }
];

const ConductorSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Gostaria de uma consultoria personalizada.', '_blank');
  };

  return (
    <section className="py-20 bg-muted relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Rail Lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Nosso Diferencial
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                O Maquinista da Sua Tranquilidade
              </h2>
              <p className="text-xl text-secondary font-medium mb-4">
                Cansado da burocracia e do "segurês"?
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Na Trilhos, somos os maquinistas da sua tranquilidade. Atuamos com 
                <strong className="text-foreground"> consultoria humanizada</strong>, não apenas venda. 
                Entendemos suas necessidades reais e encontramos a proteção ideal para cada fase da sua vida.
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-8">
                {[
                  'Análise completa e sem compromisso',
                  'Comparativo entre as melhores seguradoras',
                  'Suporte contínuo na vigência do seguro',
                  'Auxílio completo em caso de sinistro'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="cta" 
                size="lg"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Quero uma consultoria personalizada
              </Button>
            </div>

            {/* Right Content - Differentials */}
            <div className="space-y-6">
              {differentials.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-card transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConductorSection;
