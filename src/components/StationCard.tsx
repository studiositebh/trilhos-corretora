import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  color: 'primary' | 'accent' | 'wine';
  index: number;
}

const StationCard = ({ icon: Icon, title, description, features, ctaText, color, index }: StationCardProps) => {
  const colorConfig = {
    primary: {
      iconBg: 'bg-primary-foreground/10',
      iconBgHover: 'group-hover:bg-primary-foreground/20',
      iconColor: 'text-primary-foreground',
      dot: 'bg-accent',
      glow: 'group-hover:shadow-[0_0_40px_hsl(24_70%_50%/0.2)]'
    },
    accent: {
      iconBg: 'bg-accent/20',
      iconBgHover: 'group-hover:bg-accent/30',
      iconColor: 'text-accent',
      dot: 'bg-accent',
      glow: 'group-hover:shadow-[0_0_40px_hsl(24_70%_50%/0.25)]'
    },
    wine: {
      iconBg: 'bg-secondary/20',
      iconBgHover: 'group-hover:bg-secondary/30',
      iconColor: 'text-secondary-foreground',
      dot: 'bg-accent',
      glow: 'group-hover:shadow-[0_0_40px_hsl(352_43%_32%/0.2)]'
    }
  };

  const config = colorConfig[color];

  const handleClick = () => {
    window.open(`https://wa.me/5531999999999?text=Olá! Gostaria de cotar ${title.replace('Estação ', '')}.`, '_blank');
  };

  return (
    <div 
      className={`
        group relative rounded-2xl p-8
        bg-white/5 backdrop-blur-xl border border-white/10
        transition-all duration-500 ease-out
        hover:-translate-y-2 ${config.glow}
        animate-fade-in-up
      `}
      style={{ 
        animationDelay: `${index * 150}ms`,
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)'
      }}
    >
      {/* Gradient Border Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-transparent to-white/0 group-hover:from-accent/10 group-hover:to-white/5 transition-all duration-500" />

      {/* Content */}
      <div className="relative">
        {/* Icon with Circular Background */}
        <div className={`
          inline-flex items-center justify-center w-16 h-16 rounded-full 
          ${config.iconBg} ${config.iconBgHover}
          mb-6 transition-all duration-300
          group-hover:scale-110
        `}>
          <Icon className={`w-7 h-7 ${config.iconColor}`} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-primary-foreground mb-3 tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-primary-foreground/60 mb-5 text-sm leading-relaxed font-light">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <span className={`w-1.5 h-1.5 rounded-full ${config.dot} mt-1.5 flex-shrink-0`} />
              <span className="font-light">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button 
          variant="hero" 
          size="default"
          className="w-full group/btn"
          onClick={handleClick}
        >
          <span className="relative z-10">{ctaText}</span>
        </Button>
      </div>
    </div>
  );
};

export default StationCard;