import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          : 'bg-black/10 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Text */}
          <a href="/" className="flex flex-col leading-none">
            <span className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#0f172a]' : 'text-white'}`}>
              TRILHOS
            </span>
            <span className={`text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] transition-colors duration-300 ${isScrolled ? 'text-[#0f172a]' : 'text-white/90'}`}>
              Corretora de Seguros
            </span>
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
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white"
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
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white w-full"
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
