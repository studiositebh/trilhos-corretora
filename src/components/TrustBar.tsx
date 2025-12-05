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
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/30 via-transparent to-orange-50/30" />
      
      {/* Top decorative line - Golden */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with warm glow effect */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 mb-5 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300 group-hover:scale-110 shadow-soft">
                <stat.icon className="w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" />
              </div>
              
              {/* Number with warm gradient */}
              <div className="text-4xl lg:text-5xl font-bold gradient-text-warm mb-2 tracking-tight">
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

      {/* Bottom decorative line - Golden */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
    </section>
  );
};

export default TrustBar;