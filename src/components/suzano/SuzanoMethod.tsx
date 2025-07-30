import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const SuzanoMethod = () => {
  const steps = [{
    number: "1",
    title: "Fundamentos:",
    description: "Aprenda desde o zero os fundamentos essenciais do pandeiro com a técnica exclusiva de Marcos Suzano, dominando postura, sons, coordenação e independência."
  }, {
    number: "2",
    title: "Criação:",
    description: "Descubra como criar suas próprias levadas e variações. Desenvolva sua expressão musical com exercícios que estimulam improviso e musicalidade."
  }, {
    number: "3",
    title: "Integração:",
    description: "Aprenda a tocar com outros instrumentos, em rodas, com amigos ou na igreja. Ritmos brasileiros integrados à vivência real da música."
  }, {
    number: "4",
    title: "Monetização:",
    description: "Veja como o que você aprende no curso pode se transformar em apresentações, aulas, rodas e outras formas de gerar renda com a música."
  }, {
    number: "5",
    title: "Vendas:",
    description: "Ganhe confiança para mostrar seu som ao vivo, nas redes ou para oportunidades de trabalho musical. Seu pandeiro como sua voz artística."
  }, {
    number: "6",
    title: "Escala:",
    description: "Monte um plano de estudo contínuo com base no método Suzano Express e siga evoluindo com clareza, foco e propósito."
  }];
  return <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Student Count Badge */}
        <div className="text-center mb-8 animate-fade-in">
          <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-lg font-semibold">+ de 2.000 alunos dominando o PANDEIRO e tocando cada vez mais!</Badge>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Método Validado em{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              6 Passos
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A única metodologia comprovada para dominar o pandeiro do zero ao avançado
          </p>
        </div>

        {/* Method Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => <Card key={index} className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-slide-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-6 relative z-10">
                {/* Step Number */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                
                {/* Step Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-lg shadow-2xl shadow-primary/20" />
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default SuzanoMethod;