import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface CTABreakProps {
  variant?: 'navy' | 'warm';
  title: string;
  buttonText: string;
  buttonHref?: string;
}

const CTABreak = ({ variant = 'navy', title, buttonText, buttonHref }: CTABreakProps) => {
  const handleClick = () => {
    if (buttonHref?.startsWith('#')) {
      document.querySelector(buttonHref)?.scrollIntoView({ behavior: 'smooth' });
    } else if (buttonHref) {
      window.open(buttonHref, '_blank');
    } else {
      window.open('https://wa.me/5531999999999?text=Olá! Preciso de ajuda para escolher meu seguro.', '_blank');
    }
  };

  if (variant === 'navy') {
    return (
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <p className="text-white text-lg md:text-xl font-medium">
              {title}
            </p>
            <Button
              onClick={handleClick}
              className="bg-white text-primary hover:bg-white/90 font-semibold gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {buttonText}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {title}
          </h3>
          <Button
            onClick={handleClick}
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold gap-2"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABreak;
