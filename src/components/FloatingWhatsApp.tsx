import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open('https://wa.me/5531999999999?text=Olá! Vim pelo site e gostaria de mais informações.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Falar no WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
      
      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-cta hover:shadow-elevated transition-all duration-300 transform hover:scale-110">
        <MessageCircle className="w-6 h-6" />
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card text-foreground px-4 py-2 rounded-lg shadow-card text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco!
      </span>
    </button>
  );
};

export default FloatingWhatsApp;
