import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoTrilhos from '@/assets/logo-trilhos.png';
import logoTrilhosBranca from '@/assets/logo-trilhos-branca.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Estações', href: '#estacoes' },
    { label: 'Sobre', href: '#maquinista' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

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
          {/* Logo Image */}
          <a href="/" className="flex items-center">
            <img 
              src={isScrolled ? logoTrilhos : logoTrilhosBranca} 
              alt="Trilhos Corretora de Seguros" 
              className="h-12 md:h-14 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-colors relative group ${isScrolled ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-white'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-accent' : 'bg-white'}`} />
              </button>
            ))}
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open('https://wa.me/5531999999999', '_blank')}
              className="bg-[#20244A] hover:bg-[#2a3361] text-white"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className={`md:hidden pb-6 animate-fade-in ${isScrolled ? '' : 'bg-black/50 backdrop-blur-md rounded-b-2xl px-4'}`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-foreground/80 hover:text-primary font-medium py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="default"
                onClick={() => window.open('https://wa.me/5531999999999', '_blank')}
                className="bg-[#20244A] hover:bg-[#2a3361] text-white w-full"
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
