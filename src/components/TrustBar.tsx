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
    <section className="relative py-12 bg-card border-y border-border">
      {/* Rail Line Top */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Circle */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              
              {/* Number */}
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="font-semibold text-foreground mb-1">
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

      {/* Rail Line Bottom */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  );
};

export default TrustBar;
