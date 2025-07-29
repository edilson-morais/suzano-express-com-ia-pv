import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SuzanoFAQ = () => {
  const faqs = [
    {
      question: "PRA QUEM É O CURSO SUZANO EXPRESS?",
      answer: "O curso é para qualquer pessoa que deseja aprender pandeiro, desde iniciantes até músicos experientes que querem aprimorar suas técnicas e criar novas levadas."
    },
    {
      question: "RECEBEREI ALGUM MATERIAL PELOS CORREIOS?",
      answer: "Não, todo o material é digital. Você receberá acesso imediato à plataforma online com todos os vídeos, PDFs e materiais de apoio."
    },
    {
      question: "É NECESSÁRIO SABER LER PARTITURAS PARA ENTENDER AS AULAS?",
      answer: "Não! O método Suzano Express foi desenvolvido para ser aprendido sem necessidade de leitura de partituras. Tudo é ensinado de forma visual e prática."
    },
    {
      question: "EU NÃO SEI TOCAR NADA AINDA. ESTE CURSO É PARA INICIANTES?",
      answer: "Sim! O curso é especialmente desenvolvido para quem está começando do zero. Começamos pelos fundamentos básicos e evoluímos gradualmente."
    },
    {
      question: "EXISTE ALGUM TIPO DE SUPORTE, CASO EU TENHA DÚVIDAS DURANTE O CURSO?",
      answer: "Sim! Você terá acesso ao Suzano Bot (IA) no WhatsApp que responderá suas dúvidas 24h, além dos grupos exclusivos por nível de aprendizado."
    },
    {
      question: "POSSO PAGAR O SUZANO EXPRESS MENSALMENTE?",
      answer: "Sim! Oferecemos a opção de parcelamento em até 12x no cartão de crédito, tornando o acesso mais fácil para todos."
    },
    {
      question: "EU POSSO BAIXAR AS VÍDEO AULAS?",
      answer: "As aulas ficam disponíveis na plataforma online por 2 anos. Você pode assistir quantas vezes quiser durante este período."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
          </div>

          <div className="animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-primary/20 rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuzanoFAQ;