import { Zap, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImage} alt="Tech Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
        
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 border border-primary/50 rounded-full glow-border">
            <p className="text-sm text-primary font-medium">Association of Computer Applications presents</p>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-4 glow-text tracking-tight">
            MINI ORION
          </h1>
          <div className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">2K25</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <Zap className="w-8 h-8 text-accent animate-pulse-glow" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">VECTOR VIBE</h2>
            <Sparkles className="w-8 h-8 text-secondary animate-pulse-glow" />
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Unleash your creativity in Machine Learning & Deep Learning challenges
          </p>
          
          <Link to="/guidelines">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg glow-border animate-float"
            >
              Explore Event
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
        
        <Link 
          to="/guidelines"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors animate-bounce"
        >
          <ArrowRight className="w-8 h-8" />
        </Link>
      </section>
    </div>
  );
};

export default Hero;
