import { Button } from '@/components/ui/button';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface StationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  color: 'amber' | 'orange' | 'gold' | 'coral';
  index: number;
}

const colorStyles = {
  amber: {
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    accentBorder: 'border-amber-200',
    hoverBorder: 'hover:border-amber-300',
    bullet: 'bg-amber-500',
    buttonHover: 'hover:bg-amber-50',
  },
  orange: {
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    accentBorder: 'border-orange-200',
    hoverBorder: 'hover:border-orange-300',
    bullet: 'bg-orange-500',
    buttonHover: 'hover:bg-orange-50',
  },
  gold: {
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    accentBorder: 'border-yellow-200',
    hoverBorder: 'hover:border-yellow-300',
    bullet: 'bg-yellow-500',
    buttonHover: 'hover:bg-yellow-50',
  },
  coral: {
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    accentBorder: 'border-rose-200',
    hoverBorder: 'hover:border-rose-300',
    bullet: 'bg-rose-500',
    buttonHover: 'hover:bg-rose-50',
  }
};

const StationCard = ({ icon: Icon, title, description, features, ctaText, color, index }: StationCardProps) => {
  const handleClick = () => {
    window.open(`https://wa.me/5531999999999?text=Olá! Gostaria de uma cotação de ${title}.`, '_blank');
  };

  const styles = colorStyles[color];

  return (
    <div 
      className={`group relative bg-card rounded-3xl p-6 lg:p-8 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 animate-fade-in-up border ${styles.accentBorder} ${styles.hoverBorder}`}
      style={{ 
        animationDelay: `${index * 100 + 200}ms`,
        boxShadow: '0 10px 40px -10px hsl(30 50% 30% / 0.15)'
      }}
    >
      {/* Icon with Warm Circular Background */}
      <div className={`w-14 h-14 rounded-2xl ${styles.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
        <Icon className={`w-7 h-7 ${styles.iconColor}`} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2.5 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/80">
            <div className={`w-1.5 h-1.5 rounded-full ${styles.bullet} mt-1.5 flex-shrink-0`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Button 
        variant="outline" 
        size="sm" 
        onClick={handleClick}
        className={`w-full group/btn border-border ${styles.buttonHover} text-foreground`}
      >
        {ctaText}
        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  );
};

export default StationCard;