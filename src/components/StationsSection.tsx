import { Heart, Activity, Car, Building2 } from 'lucide-react';
import StationCard from './StationCard';

const stations = [{
  icon: Heart,
  title: 'Estação Vida',
  description: 'Proteção financeira para sua família em caso de imprevistos. Garanta o futuro de quem você ama.',
  features: ['Seguro de vida individual e familiar', 'Cobertura por invalidez', 'Assistência funeral completa', 'Indenização por doenças graves'],
  ctaText: 'Cotar Vida',
  color: 'navy' as const
}, {
  icon: Activity,
  title: 'Estação Saúde',
  description: 'Planos completos para você e sua empresa. Atendimento de qualidade quando você mais precisa.',
  features: ['Cobertura nacional', 'Opções sem coparticipação', 'Rede credenciada ampla', 'Reembolso facilitado'],
  ctaText: 'Cotar Saúde',
  color: 'navyLight' as const
}, {
  icon: Car,
  title: 'Estação Patrimônio',
  description: 'Proteja seu carro, moto, casa e bens. Tranquilidade para seu dia a dia.',
  features: ['Seguro auto com assistência 24h', 'Residencial completo', 'Proteção contra roubo e furto', 'Cobertura para terceiros'],
  ctaText: 'Cotar Patrimônio',
  color: 'slate' as const
}, {
  icon: Building2,
  title: 'Estação Empresarial',
  description: 'Soluções corporativas sob medida. Proteja sua empresa e seus colaboradores.',
  features: ['Responsabilidade civil', 'Seguro de frotas', 'Saúde corporativa', 'Seguro D&O'],
  ctaText: 'Cotar Empresarial',
  color: 'wine' as const
}];

const StationsSection = () => {
  return (
    <section id="estacoes" className="py-24 lg:py-32 bg-warm-gradient relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#20244A]/5 via-slate-50/50 to-[#20244A]/10" />
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#20244A]/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#20244A]/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-[#20244A] to-[#2a3361]" />
            <span className="text-[#20244A] font-semibold text-sm uppercase tracking-[0.2em]">
              Nossos Produtos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight">
            As Estações da Sua Vida
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light text-base">
            Em cada fase, uma proteção sob medida. Descubra a solução ideal para você e sua família.
          </p>
        </div>

        {/* Visual Journey - Station Cards with Rail Line */}
        <div className="relative">
          {/* Horizontal Rail Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#20244A]/50 to-transparent" />
            {/* Animated train light effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#20244A] to-transparent opacity-60 animate-pulse" style={{
              animationDuration: '3s'
            }} />
          </div>

          {/* Station Connector Dots - Desktop */}
          <div className="hidden lg:flex absolute top-8 left-[10%] right-[10%] justify-between -translate-y-1/2">
            {stations.map((_, index) => (
              <div key={index} className="relative" style={{
                left: `${index * (100 / (stations.length - 1))}%`,
                transform: 'translateX(-50%)'
              }}>
                <div className="w-4 h-4 rounded-full bg-white border-2 border-[#20244A] shadow-lg" style={{
                  boxShadow: '0 0 20px hsl(229 43% 21% / 0.5)'
                }} />
              </div>
            ))}
          </div>

          {/* Station Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-16">
            {stations.map((station, index) => (
              <div key={index} className="relative">
                {/* Vertical connector line - Mobile/Tablet */}
                {index < stations.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -bottom-6 w-px h-12 bg-gradient-to-b from-[#20244A]/50 to-transparent -translate-x-1/2" />
                )}
                
                <StationCard {...station} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationsSection;