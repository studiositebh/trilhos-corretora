import { Helmet } from 'react-helmet-async';
import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import StationsSection from '@/components/StationsSection';
import ConductorSection from '@/components/ConductorSection';
import SegmentationSection from '@/components/SegmentationSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Trilhos Corretora de Seguros | Seguros, Saúde e Previdência</title>
        <meta name="description" content="Consultoria especializada em Seguros, Planos de Saúde e Previdência. Protegemos seu patrimônio e sua família com atendimento humanizado. Atendimento em todo Brasil." />
        <meta name="keywords" content="seguro de vida, plano de saúde, previdência, seguro auto, seguro residencial, corretora de seguros, Minas Gerais" />
        <link rel="canonical" href="https://trilhosseguros.com.br" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Trilhos Corretora de Seguros | A vida nos trilhos. O futuro sob controle." />
        <meta property="og:description" content="Consultoria especializada em Seguros, Planos de Saúde e Previdência. Atendimento humanizado e sob medida." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "InsuranceAgency",
            "name": "Trilhos Corretora de Seguros",
            "description": "Consultoria especializada em Seguros, Planos de Saúde e Previdência",
            "url": "https://trilhosseguros.com.br",
            "telephone": "+55-31-99999-9999",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Belo Horizonte",
              "addressRegion": "MG",
              "addressCountry": "BR"
            },
            "areaServed": "BR",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <TopBar />
        <main>
          <Hero />
          <TrustBar />
          <StationsSection />
          <ConductorSection />
          <SegmentationSection />
          <FAQSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default Index;
