import { Network, Users, ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Guidelines = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Network className="w-10 h-10 text-primary" />
              <h2 className="text-5xl font-bold gradient-text">Event Guidelines</h2>
            </div>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-lg border-primary/30 glow-border p-12">
            <div className="flex flex-col items-center text-center">
              <Users className="w-20 h-20 text-accent mb-6 animate-pulse-glow" />
              <h3 className="text-3xl font-bold text-foreground mb-4">Team Size</h3>
              <p className="text-6xl font-black text-primary glow-text mb-4">3</p>
              <p className="text-xl text-muted-foreground">Members per team</p>
            </div>
          </Card>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8">
          <Link 
            to="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-8 h-8" />
          </Link>
          <Link 
            to="/round1"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Guidelines;
