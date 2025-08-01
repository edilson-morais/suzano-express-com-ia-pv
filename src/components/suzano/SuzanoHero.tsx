
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SuzanoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-accent/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Robot Image */}
          <div className="flex justify-center lg:justify-start animate-slide-up order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img 
                src="/lovable-uploads/a0cee00a-7fd3-4e82-9ae1-aac1dd53a883.png" 
                alt="Suzano Bot AI Assistant - Olá! Eu sou o Suzano Bot" 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl" 
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-2">
            <Badge className="w-fit bg-primary/20 text-primary border-primary/30">
              CURSO DE PANDEIRO DE MARCOS SUZANO
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Suzano Express 2.0
              </span>
              <br />
              <span className="text-accent">com IA</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Seu Professor Particular de Pandeiro online 24 horas por dia.
            </p>
            
            <p className="text-base text-muted-foreground">
              A IA mais avançada a serviço do seu aprendizado musical: aprenda no seu ritmo, onde e quando quiser
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">suzano express</h2>
              <p className="text-lg text-muted-foreground">
                Aprenda a criar seus próprios ritmos no pandeiro e surpreenda — mesmo que esteja começando do zero.
              </p>
              <p className="text-base text-muted-foreground">
                Está cansado(a) de não ter ideias na hora de tocar pandeiro? Com nosso método exclusivo, você vai desbloquear seu potencial criativo e apresentar ritmos novos e empolgantes. Domine técnicas inovadoras e impressione a todos!
              </p>
              
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-6">
                QUERO COMEÇAR AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuzanoHero;
