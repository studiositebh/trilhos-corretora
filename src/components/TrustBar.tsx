import { Calendar, Globe, Heart, Handshake } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    number: '+10',
    label: 'Anos de Mercado',
    description: 'Experiência comprovada'
  },
  {
    icon: Globe,
    number: '27',
    label: 'Estados Atendidos',
    description: 'Cobertura nacional'
  },
  {
    icon: Heart,
    number: '+5.000',
    label: 'Vidas Protegidas',
    description: 'Famílias e empresas'
  },
  {
    icon: Handshake,
    number: '+20',
    label: 'Seguradoras Parceiras',
    description: 'As melhores do mercado'
  }
];

const TrustBar = () => {
  return (
    <section className="relative py-16 lg:py-20 bg-card overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#20244A]/5 via-transparent to-[#e2d37d]/10" />
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e2d37d] to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with glow effect */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e2d37d]/20 to-[#e2d37d]/30 mb-5 group-hover:from-[#e2d37d]/30 group-hover:to-[#e2d37d]/40 transition-all duration-300 group-hover:scale-110 shadow-soft">
                <stat.icon className="w-7 h-7 text-[#20244A] group-hover:text-[#181d3a] transition-colors duration-300" />
              </div>
              
              {/* Number with gradient */}
              <div className="text-4xl lg:text-5xl font-bold text-[#20244A] mb-2 tracking-tight">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="font-semibold text-foreground mb-1 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e2d37d] to-transparent" />
    </section>
  );
};

export default TrustBar;