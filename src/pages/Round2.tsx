import { Cpu, Clock, Trophy, Sparkles, Zap, Image as ImageIcon, ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Round2 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-6xl animate-fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Cpu className="w-12 h-12 text-accent" />
              <h2 className="text-6xl font-bold">Round 2</h2>
            </div>
            <h3 className="text-4xl font-bold gradient-text mt-4">Teachable Machine Accuracy Challenge</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-lg border-accent/30 glow-border p-8">
              <Cpu className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-2xl font-bold mb-4">Platform</h4>
              <p className="text-lg text-muted-foreground mb-4">
                Build a small ML model using the Teachable Machine website
              </p>
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-lg border border-accent/50">
                <p className="text-accent font-mono text-sm">teachablemachine.withgoogle.com</p>
              </div>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-lg border-accent/30 glow-border p-8">
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-2xl font-bold mb-4">Time Limit</h4>
              <p className="text-4xl font-black text-accent">25 minutes</p>
            </Card>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-lg border-primary/30 glow-border p-10">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary" />
              Judging Criteria
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl font-black text-primary mb-2">95%+</div>
                <p className="text-lg font-semibold">Accuracy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-lg font-semibold">Clean Dataset</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <p className="text-lg font-semibold">Timely Completion</p>
              </div>
            </div>
          </Card>
          
          <div className="mt-12 text-center">
            <Card className="bg-muted/30 backdrop-blur-lg border-primary/20 p-8 inline-block">
              <p className="text-sm text-muted-foreground mb-4">Model Training Example</p>
              <div className="flex items-center gap-6 justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg bg-primary/20 border-2 border-primary/50 flex items-center justify-center mb-2">
                    <ImageIcon className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Class A</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg bg-secondary/20 border-2 border-secondary/50 flex items-center justify-center mb-2">
                    <ImageIcon className="w-10 h-10 text-secondary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Class B</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-lg bg-accent/20 border-2 border-accent/50 flex items-center justify-center mb-2">
                    <ImageIcon className="w-10 h-10 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground">Class C</p>
                </div>
                <Zap className="w-6 h-6 text-primary" />
                <div className="px-6 py-4 bg-primary/20 rounded-lg border border-primary/50">
                  <p className="text-2xl font-black text-primary">98%</p>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8">
          <Link 
            to="/round1"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-8 h-8" />
          </Link>
          <Link 
            to="/final"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Round2;
