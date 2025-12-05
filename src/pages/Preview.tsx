import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import StationsSection from '@/components/StationsSection';
import CTABreak from '@/components/CTABreak';
import ConductorSection from '@/components/ConductorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SegmentationSection from '@/components/SegmentationSection';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Preview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem('trilhos_auth');
    if (!isAuth) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('trilhos_auth');
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Trilhos Corretora de Seguros | Proteção para Você e Sua Família</title>
        <meta name="description" content="Consultoria especializada em seguros, planos de saúde e previdência. Atendimento humanizado e soluções personalizadas para proteger seu patrimônio e sua família." />
        <meta name="keywords" content="corretora de seguros, plano de saúde, seguro de vida, previdência privada, seguro empresarial" />
      </Helmet>
      
      {/* Logout button for preview */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-[100] bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-full shadow-lg transition-colors"
      >
        Sair do Preview
      </button>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <StationsSection />
          <CTABreak variant="navy" title="Não sabe qual estação descer? Fale com nosso Maquinista." buttonText="Ajuda Rápida" />
          <ConductorSection />
          <TestimonialsSection />
          <SegmentationSection />
          <FAQSection />
          <BlogSection />
          <CTABreak variant="warm" title="Pronto para embarcar na sua jornada de proteção?" buttonText="Começar Agora" />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Preview;
