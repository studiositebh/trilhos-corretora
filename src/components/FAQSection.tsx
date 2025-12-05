import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a diferença entre corretor e seguradora?",
    answer: "A seguradora é a empresa que oferece o produto de seguro. Já o corretor (como a Trilhos) é um consultor independente que analisa suas necessidades e encontra a melhor opção entre diversas seguradoras, sempre buscando o melhor custo-benefício para você. Trabalhamos de forma imparcial, sem vínculo exclusivo com nenhuma seguradora."
  },
  {
    question: "Quanto tempo demora para fazer uma cotação?",
    answer: "Em média, preparamos sua cotação completa em até 24 horas úteis. Para casos mais simples, como seguros de vida e auto, a resposta pode ser ainda mais rápida. Nosso processo é totalmente digital, sem burocracia e sem necessidade de deslocamento."
  },
  {
    question: "Vocês atendem em todo o Brasil?",
    answer: "Sim! Embora nossa sede seja em Minas Gerais, atendemos clientes em todos os 27 estados brasileiros. Todo nosso atendimento é realizado de forma remota, com a mesma qualidade e agilidade, independente de onde você esteja."
  },
  {
    question: "O que acontece se eu precisar acionar o seguro (sinistro)?",
    answer: "Quando você precisa acionar o seguro, nossa equipe te acompanha durante todo o processo. Auxiliamos na abertura do sinistro, acompanhamos os prazos da seguradora e garantimos que você receba a indenização de forma justa e no menor tempo possível. Estamos do seu lado quando você mais precisa."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-amber-500 to-orange-500" />
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em]">
              Dúvidas Frequentes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-sans font-extrabold text-foreground mb-4">
            Tira-Dúvidas
          </h2>
          <p className="text-muted-foreground text-lg">
            Respostas para as perguntas mais comuns sobre nossos serviços.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
