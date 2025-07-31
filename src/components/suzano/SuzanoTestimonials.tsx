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
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/ced24b54-be42-4a83-8442-3490135eff92.png" 
                    alt="Marcos Suzano tocando pandeiro"
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Meu nome é Marcos Suzano, criador da "técnica invertida" e do método Suzano Express. 
                    Sou reconhecido mundialmente como um dos maiores pandeiristas do Brasil, 
                    revolucionando a forma de tocar o instrumento com minha técnica única e inovadora.
                  </p>
                </div>
              </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'https://youtu.be/8lXgS2xZxv8',
                'https://youtu.be/lJCwvkgSUVY',
                'https://youtu.be/a5Fkulj2SIY',
                'https://youtu.be/ZnkHaKyEJ4A'
              ].map((videoUrl, index) => {
                const videoId = videoUrl.split('/').pop();
                return (
                  <Card 
                    key={index}
                    className="overflow-hidden bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`Depoimento ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </Card>
                );
              })}
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