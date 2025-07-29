import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/ai-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/20 backdrop-blur-md border border-primary/30 text-sm text-foreground/80 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Powered by Advanced AI Technology</span>
          </div>
          
          {/* Main Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
            The Future of AI
            <br />
            <span className="text-primary">Innovation</span> Starts Here
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            Unlock unprecedented efficiency, insights, and growth with our advanced AI platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
              Watch Demo
              <Zap className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/10 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart AI Models</h3>
              <p className="text-muted-foreground text-center">Advanced machine learning algorithms that adapt to your needs</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/10 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent to-primary flex items-center justify-center mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-center">Process data and generate insights in milliseconds</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/10 backdrop-blur-md border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
              <p className="text-muted-foreground text-center">Effortlessly integrate with your existing workflows</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;