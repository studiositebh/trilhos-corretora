import { Phone, Mail, MapPin, Clock, Heart, Activity, Car, Building2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Top decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-extrabold tracking-tight">
                TRILHOS
              </h3>
              <span className="text-primary-foreground/50 text-xs font-medium tracking-[0.3em] uppercase">
                Corretora de Seguros
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 text-sm">
              Guiando você e sua família pelos trilhos da segurança financeira. 
              Consultoria humanizada em seguros, saúde e previdência.
            </p>
            <div className="flex items-center gap-2 text-xs text-primary-foreground/40 font-medium">
              <span>SUSEP</span>
              <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
              <span>CNPJ: XX.XXX.XXX/0001-XX</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] mb-6 text-primary-foreground/90">
              Nossas Estações
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Heart, label: 'Seguro de Vida' },
                { icon: Activity, label: 'Planos de Saúde' },
                { icon: Car, label: 'Auto e Residência' },
                { icon: Building2, label: 'Seguros Empresariais' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#estacoes" 
                    className="flex items-center gap-3 text-primary-foreground/60 hover:text-[#e2d37d] transition-colors group"
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] mb-6 text-primary-foreground/90">
              Contato
            </h4>
            <ul className="space-y-5">
              <li>
                <a 
                  href="https://wa.me/5531999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/60 hover:text-[#e2d37d] transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-primary-foreground/80 text-sm">(31) 99999-9999</div>
                    <div className="text-xs text-primary-foreground/40">WhatsApp</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contato@trilhosseguros.com.br"
                  className="flex items-start gap-3 text-primary-foreground/60 hover:text-[#e2d37d] transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-primary-foreground/80 text-sm">contato@trilhosseguros.com.br</div>
                    <div className="text-xs text-primary-foreground/40">E-mail</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/60">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary-foreground/80 text-sm">Belo Horizonte - MG</div>
                    <div className="text-xs text-primary-foreground/40">Atendimento Nacional</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 - Hours */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-[0.15em] mb-6 text-primary-foreground/90">
              Horário de Atendimento
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-[#e2d37d] flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary-foreground/80 text-sm">Segunda a Sexta</div>
                  <div className="text-primary-foreground/50 text-sm">08:00 às 18:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-[#e2d37d] flex-shrink-0" />
                <div>
                  <div className="font-medium text-primary-foreground/80 text-sm">Sábado</div>
                  <div className="text-primary-foreground/50 text-sm">08:00 às 12:00</div>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                <div className="text-xs text-primary-foreground/70">
                  <strong className="text-[#e2d37d]">Emergências:</strong> Suporte 24h através das centrais das seguradoras parceiras.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
            <div>
              © {currentYear} Trilhos Corretora de Seguros. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-[#e2d37d] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#e2d37d] transition-colors">
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