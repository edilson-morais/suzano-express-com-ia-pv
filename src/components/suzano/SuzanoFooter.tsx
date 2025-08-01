import { Separator } from "@/components/ui/separator";

const SuzanoFooter = () => {
  return (
    <footer className="py-16 relative overflow-hidden bg-background/95 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              A Comunidade suzano express não é uma empresa associada ao WhatsApp INC, Facebook INC, META 
              ou qualquer uma de suas empresas, e não possui relação comercial ou consentimento para uso.
            </p>
          </div>

          <Separator className="my-8" />

          {/* Copyright and Links */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, 
              você concorda com os nossos Termos de Uso e Política de Privacidade.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <span className="text-primary font-bold">suzano express</span>
              <div className="flex gap-4 text-sm">
                <a href="https://politica-de-privacidade.rota50ia.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </a>
                <span className="text-muted-foreground">|</span>
                <a href="https://politica-de-privacidade.rota50ia.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Todos os direitos reservados – Edilson Morais 2025
            </p>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold">Contato:</p>
              <a 
                href="mailto:edilsomdil@gmail.com" 
                className="text-primary hover:text-accent transition-colors"
              >
                edilsomdil@gmail.com
              </a>
              <p className="text-xs text-muted-foreground">
                Desenvolvido por Edilson Morais
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SuzanoFooter;