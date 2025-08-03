import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Video, Clock, MessageCircle, BookOpen } from "lucide-react";

const SuzanoAbout = () => {
  const features = [
    "Método comprovado: mais de 800 alunos no Japão e mais de 2.000 alunos no Brasil",
    "3 vídeos por ritmo: execução, explicação e câmera lenta",
    "Técnica Invertida: marca registrada de Suzano",
    "Grupos exclusivos no WhatsApp por nível",
    "Acesso 24h por 2 anos, sem precisar ler partitura"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Você já tentou aprender pandeiro",
      description: "mas só encontrou teoria vaga e vídeos soltos no YouTube."
    },
    {
      icon: Video,
      title: "Fica perdido entre técnicas",
      description: "solos, músicos que só querem mostrar que sabem tocar rápido e você não sabe nem por onde começar."
    },
    {
      icon: Clock,
      title: "Sonha em tocar bem pandeiro",
      description: "mas sente que está atrasado nessa corrida."
    },
    {
      icon: MessageCircle,
      title: "Quer chegar na roda de samba",
      description: "mas não sabe o que vai fazer na hora do play."
    },
    {
      icon: BookOpen,
      title: "Está cansado de cursos genéricos",
      description: "e quer um passo a passo validado por quem aplica de verdade."
    },
    {
      icon: CheckCircle,
      title: "Precisa de uma comunidade ativa",
      description: "suporte real e um mestre com reconhecimento mundial."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* What You'll Learn */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O Que Você Vai Aprender no{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              curso suzano express
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Você não vai apenas "aprender tocar pandeiro". Vai criar suas próprias levadas, de verdade. 
            Do absoluto zero ao avançado, você vai:
          </p>
        </div>

        {/* Features List */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-6"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              QUERO COMEÇAR AGORA
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="text-center mb-16 animate-fade-in">
          <blockquote className="text-xl md:text-2xl italic text-muted-foreground mb-8 max-w-3xl mx-auto">
            "Eu não sabia que tocava "invertido". Acabei descobrindo um jeito inovador de tocar pandeiro."
          </blockquote>
        </div>

        {/* About Marcos Suzano */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Meu nome é Marcos Suzano, criador da "técnica invertida" e do método Suzano express.
            </h3>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              Ele inventou uma nova forma de tocar e de ensinar, tornando o aprendizado mais acessível e musicalmente expressivo. 
              Sua habilidade de extrair diferentes timbres e sua impressionante coordenação são marcas registradas.
            </p>
            <p className="font-semibold text-primary">
              MAIS de 30 PAÍSES já puderam conferir o SOM PODEROSO de seu PANDEIRO
            </p>
            <p>
              MARCOS SUZANO começou a batucar com 13 anos de idade nas ruas de copacabana Rio de Janeiro. 
              Era fanático por rock adorava Led Zeppelin e Pink Floyd até que um dia ficou atrás da bateria de um Bloco de carnaval 
              "...Senti a mesma sensação que sentia ouvindo os discos de Rock..."
            </p>
            <p>
              Agora, transformei esse processo em um curso completo, para que você possa fazer o mesmo — sem precisar errar sozinho.
            </p>
            <p className="text-center font-semibold text-lg">
              A pergunta é: você está pronto para entrar na nova era no seu som de pandeiro?
            </p>
            <p className="text-center text-primary font-bold">Marcos Suzano</p>
          </div>
        </div>

        {/* Why You Need This Course */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Por que você precisa no{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                suzano express
              </span>{" "}
              agora:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
                <img 
                  src="/lovable-uploads/a0cee00a-7fd3-4e82-9ae1-aac1dd53a883.png" 
                  alt="Suzano Bot AI Assistant" 
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl" 
                />
              </div>
            </div>
            
            {/* Right - Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aprender pandeiro com o apoio da IA Suzano BoT é como ter um professor disponível 24h por dia. 
                Ele responde dúvidas em tempo real, sugere exercícios personalizados, acompanha seu progresso e 
                dá dicas práticas para corrigir erros. Com o Suzano BoT, você estuda no seu ritmo, com autonomia 
                e segurança, acelerando sua evolução no instrumento. É tecnologia aliada à tradição, colocando 
                o pandeiro na palma da sua mão de um jeito moderno e eficaz.
              </p>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            O{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              suzano express
            </span>{" "}
            é para você que:
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-4 mb-8">
            {[
              "Quer aprender na prática, sem enrolação ou termos técnicos confusos",
              "É músico profissional ou amador, que já toca Percussão ou Pandeiro, porém ainda se sente um pouco limitado na parte técnica ou dos grooves",
              "Quer aumentar — e muito — o seu repertório de grooves, ou quer aprender pandeiro para tocar com os amigos ou na igreja", 
              "É iniciante mas se compromete a estudar e quer aprender o método adequado desde o início"
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm text-left animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{String.fromCharCode(65 + index)}</span>
                </div>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-6"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            QUERO COMEÇAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuzanoAbout;