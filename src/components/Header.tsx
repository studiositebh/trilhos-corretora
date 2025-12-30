import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart, Activity, TrendingUp, Car, Home, Building2, Users, Shield, Truck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import logoTrilhosFull from '@/assets/logo-trilhos-full.png';
import logoTrilhosBranca from '@/assets/logo-trilhos-branca.png';

const menuParaVoce = {
  seguros: [
    { label: 'Estação Vida', href: '#vida', icon: Heart },
    { label: 'Estação Saúde', href: '#saude', icon: Activity },
    { label: 'Previdência', href: '#previdencia', icon: TrendingUp },
  ],
  patrimonio: [
    { label: 'Seguro Auto', href: '#auto', icon: Car },
    { label: 'Seguro Residencial', href: '#residencial', icon: Home },
  ],
};

const menuEmpresa = [
  { label: 'Saúde Empresarial', href: '#saude-empresarial', icon: Building2 },
  { label: 'Vida em Grupo', href: '#vida-grupo', icon: Users },
  { label: 'Responsabilidade Civil', href: '#responsabilidade', icon: Shield },
  { label: 'Frotas', href: '#frotas', icon: Truck },
];

const simpleLinks = [
  { label: 'Sobre Nós', href: '#maquinista' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [paraVoceOpen, setParaVoceOpen] = useState(false);
  const [empresaOpen, setEmpresaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setParaVoceOpen(false);
    setEmpresaOpen(false);
  };

  const triggerStyles = isScrolled 
    ? 'text-[#20244A] hover:text-[#e2d37d] data-[state=open]:text-[#e2d37d]' 
    : 'text-white/90 hover:text-white data-[state=open]:text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-warm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={isScrolled ? logoTrilhosFull : logoTrilhosBranca} 
              alt="Trilhos Corretora de Seguros" 
              className="h-12 md:h-14 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation - Mega Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Para Você - Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`bg-transparent font-medium transition-colors ${triggerStyles}`}
                  >
                    Para Você
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[650px] p-6 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-xl">
                      <div className="grid grid-cols-3 gap-6">
                        {/* Coluna 1 - Seguros Pessoais */}
                        <div>
                          <h3 className="text-xs font-semibold text-[#20244A]/60 uppercase tracking-wider mb-3">
                            Seguros Pessoais
                          </h3>
                          <ul className="space-y-2">
                            {menuParaVoce.seguros.map((item) => (
                              <li key={item.label}>
                                <NavigationMenuLink asChild>
                                  <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="group flex items-center gap-3 w-full p-2 rounded-lg hover:bg-[#20244A]/5 transition-colors"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#20244A]/10 to-[#e2d37d]/20 flex items-center justify-center group-hover:from-[#20244A]/20 group-hover:to-[#e2d37d]/30 transition-colors">
                                      <item.icon className="w-4 h-4 text-[#20244A]" />
                                    </div>
                                    <span className="text-[#20244A] font-medium group-hover:text-[#e2d37d] transition-colors">
                                      {item.label}
                                    </span>
                                  </button>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Coluna 2 - Patrimônio */}
                        <div>
                          <h3 className="text-xs font-semibold text-[#20244A]/60 uppercase tracking-wider mb-3">
                            Patrimônio
                          </h3>
                          <ul className="space-y-2">
                            {menuParaVoce.patrimonio.map((item) => (
                              <li key={item.label}>
                                <NavigationMenuLink asChild>
                                  <button
                                    onClick={() => scrollToSection(item.href)}
                                    className="group flex items-center gap-3 w-full p-2 rounded-lg hover:bg-[#20244A]/5 transition-colors"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#20244A]/10 to-[#e2d37d]/20 flex items-center justify-center group-hover:from-[#20244A]/20 group-hover:to-[#e2d37d]/30 transition-colors">
                                      <item.icon className="w-4 h-4 text-[#20244A]" />
                                    </div>
                                    <span className="text-[#20244A] font-medium group-hover:text-[#e2d37d] transition-colors">
                                      {item.label}
                                    </span>
                                  </button>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Coluna 3 - CTA Card */}
                        <div className="bg-gradient-to-br from-[#20244A] to-[#2a3361] rounded-xl p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="text-white font-semibold text-sm mb-2">
                              Fale com o Maquinista
                            </h3>
                            <p className="text-white/70 text-xs leading-relaxed">
                              Tire suas dúvidas e encontre o seguro ideal para você.
                            </p>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => window.open('https://wa.me/5531999999999', '_blank')}
                            className="mt-4 bg-[#25D366] hover:bg-[#20bd5a] text-white w-full gap-2"
                          >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Para Sua Empresa - Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`bg-transparent font-medium transition-colors ${triggerStyles}`}
                  >
                    Para Sua Empresa
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-xl">
                      <h3 className="text-xs font-semibold text-[#20244A]/60 uppercase tracking-wider mb-3">
                        Soluções Corporativas
                      </h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {menuEmpresa.map((item) => (
                          <li key={item.label}>
                            <NavigationMenuLink asChild>
                              <button
                                onClick={() => scrollToSection(item.href)}
                                className="group flex items-center gap-3 w-full p-3 rounded-lg hover:bg-[#20244A]/5 transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#20244A]/10 to-[#e2d37d]/20 flex items-center justify-center group-hover:from-[#20244A]/20 group-hover:to-[#e2d37d]/30 transition-colors">
                                  <item.icon className="w-5 h-5 text-[#20244A]" />
                                </div>
                                <span className="text-[#20244A] font-medium text-sm group-hover:text-[#e2d37d] transition-colors">
                                  {item.label}
                                </span>
                              </button>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Simple Links */}
            {simpleLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 font-medium transition-colors relative group ${
                  isScrolled ? 'text-[#20244A] hover:text-[#e2d37d]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-4 right-4 h-0.5 transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${
                  isScrolled ? 'bg-[#e2d37d]' : 'bg-white'
                }`} />
              </button>
            ))}

            {/* CTA Button */}
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open('https://wa.me/5531999999999', '_blank')}
              className="ml-4 bg-[#20244A] hover:bg-[#2a3361] text-white"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Accordion Style */}
        {isMobileMenuOpen && (
          <nav className={`lg:hidden pb-6 animate-fade-in ${
            isScrolled ? '' : 'bg-black/50 backdrop-blur-md rounded-b-2xl px-4'
          }`}>
            <div className="flex flex-col gap-2 py-4">
              {/* Para Você - Collapsible */}
              <Collapsible open={paraVoceOpen} onOpenChange={setParaVoceOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-2 text-left font-medium text-white hover:text-[#e2d37d] transition-colors">
                  <span>Para Você</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${paraVoceOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  {/* Seguros Pessoais */}
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider py-2">
                    Seguros Pessoais
                  </p>
                  {menuParaVoce.seguros.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 w-full py-2 px-2 text-white/80 hover:text-[#e2d37d] transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                  {/* Patrimônio */}
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider py-2 mt-2">
                    Patrimônio
                  </p>
                  {menuParaVoce.patrimonio.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 w-full py-2 px-2 text-white/80 hover:text-[#e2d37d] transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Para Sua Empresa - Collapsible */}
              <Collapsible open={empresaOpen} onOpenChange={setEmpresaOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-2 text-left font-medium text-white hover:text-[#e2d37d] transition-colors">
                  <span>Para Sua Empresa</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${empresaOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  {menuEmpresa.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-3 w-full py-2 px-2 text-white/80 hover:text-[#e2d37d] transition-colors"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Divider */}
              <div className="h-px bg-white/20 my-2" />

              {/* Simple Links */}
              {simpleLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="py-3 px-2 text-left font-medium text-white hover:text-[#e2d37d] transition-colors"
                >
                  {link.label}
                </button>
              ))}

              {/* CTA Button */}
              <Button
                variant="default"
                onClick={() => window.open('https://wa.me/5531999999999', '_blank')}
                className="mt-4 bg-[#20244A] hover:bg-[#2a3361] text-white w-full"
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
