import { Phone, Mail, MapPin, Clock, Heart, Activity, Car, Building2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-serif font-bold">
                Trilhos
              </h3>
              <span className="text-primary-foreground/60 text-sm">Corretora de Seguros</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Guiando você e sua família pelos trilhos da segurança financeira. 
              Consultoria humanizada em seguros, saúde e previdência.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
              <span>SUSEP</span>
              <span>•</span>
              <span>CNPJ: XX.XXX.XXX/0001-XX</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Nossas Estações</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#estacoes" 
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  Seguro de Vida
                </a>
              </li>
              <li>
                <a 
                  href="#estacoes" 
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Activity className="w-4 h-4" />
                  Planos de Saúde
                </a>
              </li>
              <li>
                <a 
                  href="#estacoes" 
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Car className="w-4 h-4" />
                  Auto e Residência
                </a>
              </li>
              <li>
                <a 
                  href="#estacoes" 
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Building2 className="w-4 h-4" />
                  Seguros Empresariais
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://wa.me/5531999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">(31) 99999-9999</div>
                    <div className="text-sm text-primary-foreground/60">WhatsApp</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@trilhosseguros.com.br"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">contato@trilhosseguros.com.br</div>
                    <div className="text-sm text-primary-foreground/60">E-mail</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/80">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Belo Horizonte - MG</div>
                    <div className="text-sm text-primary-foreground/60">Atendimento Nacional</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 - Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Horário de Atendimento</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary-foreground/90">Segunda a Sexta</div>
                  <div className="text-primary-foreground/70">08:00 às 18:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary-foreground/90">Sábado</div>
                  <div className="text-primary-foreground/70">08:00 às 12:00</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
                <div className="text-sm text-primary-foreground/80">
                  <strong className="text-accent">Emergências:</strong> Suporte 24h através das centrais das seguradoras parceiras.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <div>
              © {currentYear} Trilhos Corretora de Seguros. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
