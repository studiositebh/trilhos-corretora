import { Heart, Activity, Car, Building2 } from 'lucide-react';
import StationCard from './StationCard';

const stations = [
  {
    icon: Heart,
    title: 'Estação Vida',
    description: 'Proteção financeira para sua família em caso de imprevistos. Garanta o futuro de quem você ama.',
    features: [
      'Seguro de vida individual e familiar',
      'Cobertura por invalidez',
      'Assistência funeral completa',
      'Indenização por doenças graves'
    ],
    ctaText: 'Cotar Vida',
    color: 'primary' as const
  },
  {
    icon: Activity,
    title: 'Estação Saúde',
    description: 'Planos completos para você e sua empresa. Atendimento de qualidade quando você mais precisa.',
    features: [
      'Cobertura nacional',
      'Opções sem coparticipação',
      'Rede credenciada ampla',
      'Reembolso facilitado'
    ],
    ctaText: 'Cotar Saúde',
    color: 'accent' as const
  },
  {
    icon: Car,
    title: 'Estação Patrimônio',
    description: 'Proteja seu carro, moto, casa e bens. Tranquilidade para seu dia a dia.',
    features: [
      'Seguro auto com assistência 24h',
      'Residencial completo',
      'Proteção contra roubo e furto',
      'Cobertura para terceiros'
    ],
    ctaText: 'Cotar Patrimônio',
    color: 'wine' as const
  },
  {
    icon: Building2,
    title: 'Estação Empresarial',
    description: 'Soluções corporativas sob medida. Proteja sua empresa e seus colaboradores.',
    features: [
      'Responsabilidade civil',
      'Seguro de frotas',
      'Saúde corporativa',
      'Seguro D&O'
    ],
    ctaText: 'Cotar Empresarial',
    color: 'primary' as const
  }
];

const StationsSection = () => {
  return (
    <section id="estacoes" className="py-20 bg-background relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            As Estações da Sua Vida
          </h2>
          <p className="text-muted-foreground text-lg">
            Em cada fase, uma proteção sob medida. Descubra a solução ideal para você e sua família.
          </p>
        </div>

        {/* Rail Track Connector */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[280px] h-[calc(100%-360px)] w-0.5 bg-gradient-to-b from-accent/30 via-accent/20 to-accent/30" />

        {/* Station Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Horizontal Rail Line */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/10 via-accent/30 to-primary/10 -translate-y-6" />
          
          {stations.map((station, index) => (
            <StationCard
              key={index}
              {...station}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StationsSection;
