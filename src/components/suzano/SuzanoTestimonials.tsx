import { Card } from "@/components/ui/card";

const SuzanoTestimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Mentor Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Conheça seu{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mentor
              </span>
            </h2>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Marcos Suzano é reconhecido mundialmente como um dos maiores pandeiristas do Brasil, 
                revolucionando a forma de tocar o instrumento com sua técnica única e inovadora.
              </p>
            </Card>
          </div>

          {/* Testimonials Preview */}
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Eles decidiram aplicar.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                E colheram os frutos.
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {['A', 'B', 'C'].map((letter, index) => (
                <Card 
                  key={index}
                  className="aspect-square bg-card/30 backdrop-blur-sm border-primary/20 flex items-center justify-center hover:border-primary/40 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-4xl font-bold text-primary">{letter}</span>
                </Card>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {['D', 'E', 'F', 'G', 'H'].map((letter, index) => (
                <Card 
                  key={index}
                  className="aspect-square bg-card/30 backdrop-blur-sm border-primary/20 flex items-center justify-center hover:border-primary/40 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <span className="text-3xl font-bold text-primary">{letter}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Olha... Se eu fosse você,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                eu entrava...
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuzanoTestimonials;