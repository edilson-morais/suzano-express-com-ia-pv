import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
const SuzanoPricing = () => {
  const plans = [{
    name: "PLANO INICIANTE",
    priceMonthly: "6,70",
    priceTotal: "67,00",
    features: ["42 aulas em vídeo HD (INCLUSIVE EM CÂMERA LENTA)", "Acesso por 2 anos", "PDF de apoio (APOSTILA COM TODOS OS RITMOS E VARIAÇÕES)", "Suporte por IA (inteligência artificial) no WhatsApp", "o Suzano Bot responderá todas as suas dúvidas"],
    highlight: false
  }, {
    name: "PLANO MODERN GROOVES",
    priceMonthly: "14,70",
    priceTotal: "147,00",
    features: ["MÉTODO EXCLUSIVO CRIADO POR SUZANO (Técnica Invertida)", "MÓDULO 0 COM EXERCÍCIOS", "ELETRO MÓDULO (Pandeiro com Pedais e Sampler)", "FUNK 1", "FUNK 2", "REGGAE", "ALÉM (criado por Suzano)", "AFRO LATINO", "JUNGLE", "DRUM'N BASS", "GROOVE BACK BEAT"],
    highlight: false
  }, {
    name: "CURSO AFRO BRASIL - ATABAQUE E PANDEIRO",
    priceMonthly: "19,70",
    priceTotal: "197,00",
    features: ["MÓDULO EXERCÍCIOS – PANDEIRO", "MÓDULO CONGO", "MÓDULO ILÚ", "MÓDULO IJEXÁ", "MÓDULO AFRO LATINO", "MÓDULO AGUERÊ", "MÓDULO IBÍ", "MÓDULO BARRAVENTO", "MÓDULO JONGO", "MÓDULO BATUCADA CONGO + CABILA"],
    highlight: false
  }, {
    name: "Plano PRO",
    priceMonthly: "22,70",
    priceTotal: "227",
    originalPrice: "397,00",
    features: ["Técnica invertida exclusiva", "Coordenação entre mão direita e esquerda", "7 sons essenciais do pandeiro", "Ritmos como samba, maracatu, baião e mais", "Adaptação para tocar com cajón, congas", "Fluidez, controle e criatividade na sua forma de tocar"],
    highlight: true
  }];
  return <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Student Count Badge */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 text-lg font-semibold mb-8">
            + de 2.000 alunos dominando o PANDEIRO e tocando cada vez mais ainda!
          </Badge>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => <Card key={index} className={`relative overflow-hidden transition-all duration-500 hover:scale-105 animate-slide-up ${plan.highlight ? 'border-primary/50 bg-gradient-to-br from-primary/10 to-accent/10' : 'border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30'}`} style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {plan.highlight && <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent py-2">
                  <p className="text-center text-white font-semibold text-sm">MAIS POPULAR</p>
                </div>}
              
              <CardHeader className={`text-center ${plan.highlight ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-lg font-bold mb-4">{plan.name}</CardTitle>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold">
                    12x R$ {plan.priceMonthly}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.originalPrice && <span className="line-through mr-2">De R$ {plan.originalPrice}</span>}
                    ou R$ {plan.priceTotal} à vista{plan.name === "Plano PRO" ? " no Pix" : ""}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>)}
                </div>
                
                <Button className={`w-full mt-6 ${plan.highlight ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90' : 'bg-primary hover:bg-primary/90'}`}>
                  QUERO COMEÇAR AGORA
                </Button>
              </CardContent>
              
              {/* Bottom Badge */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                
              </div>
            </Card>)}
        </div>

        {/* Guarantee Section */}
        <div className="mt-24 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                CONHEÇA NOSSA GARANTIA
              </span>
            </h3>
            
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-primary">Garantia 15 dias incondicional</h4>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Estás Protegido por nossa <br />
                    <span className="text-accent font-semibold">★ Garantia Incondicional de Satisfação ★</span>
                  </p>
                  
                  <p>
                    Fazendo sua inscrição hoje, seu risco é zero, pois conta com nossa garantia total 
                    e incondicional de satisfação do Suzano Express.
                  </p>
                  
                  <p>
                    Se não ficares satisfeito com o método, solo envíanos um email dentro de 15 dias 
                    e devolveremos 100% de tu dinero, sem nenhuma pergunta.
                  </p>
                  
                  <p>
                    Acreditamos que NÃO vamos chegar a esse ponto, mas, se realmente estás preocupado 
                    se isso vai funcionar para ti ou não, fica tranquilo, pois tens garantia.
                  </p>
                </div>
                
                <p className="text-primary font-semibold">Mentor Suzano</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default SuzanoPricing;