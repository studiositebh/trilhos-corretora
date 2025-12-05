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
  const colorClasses = {
    primary: 'border-primary/20 hover:border-primary/40',
    accent: 'border-accent/20 hover:border-accent/40',
    wine: 'border-secondary/20 hover:border-secondary/40'
  };

  const iconBgClasses = {
    primary: 'bg-primary/10 group-hover:bg-primary/20',
    accent: 'bg-accent/10 group-hover:bg-accent/20',
    wine: 'bg-secondary/10 group-hover:bg-secondary/20'
  };

  const iconColorClasses = {
    primary: 'text-primary',
    accent: 'text-accent',
    wine: 'text-secondary'
  };

  const handleClick = () => {
    window.open(`https://wa.me/5531999999999?text=Olá! Gostaria de cotar ${title.replace('Estação ', '')}.`, '_blank');
  };

  return (
    <div 
      className={`relative group bg-card rounded-xl p-6 border-2 ${colorClasses[color]} shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Station Dot */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-sm z-10" />

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${iconBgClasses[color]} mb-4 transition-colors duration-300`}>
        <Icon className={`w-8 h-8 ${iconColorClasses[color]}`} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
            <span className={`w-1.5 h-1.5 rounded-full ${iconColorClasses[color].replace('text-', 'bg-')}`} />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button 
        variant="ctaOutline" 
        className="w-full"
        onClick={handleClick}
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default StationCard;
