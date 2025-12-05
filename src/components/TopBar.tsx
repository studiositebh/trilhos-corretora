import { Phone, Mail, MapPin, Shield, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a 
              href="https://wa.me/5531999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(31) 99999-9999</span>
            </a>
            <a 
              href="mailto:contato@trilhosseguros.com.br"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>contato@trilhosseguros.com.br</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Atendimento Nacional | Sede: MG</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span className="hidden sm:inline">Ambiente Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span className="hidden sm:inline">Atendimento 24h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
