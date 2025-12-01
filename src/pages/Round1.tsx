import { Target, Brain, Clock, Trophy, Sparkles, Zap, ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Round1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl animate-fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Target className="w-12 h-12 text-secondary" />
              <h2 className="text-6xl font-bold">Round 1</h2>
            </div>
            <h3 className="text-4xl font-bold gradient-text mt-4">Connection Round</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-lg border-secondary/30 glow-border p-8">
              <Brain className="w-12 h-12 text-secondary mb-4" />
              <h4 className="text-2xl font-bold mb-4">Challenge</h4>
              <p className="text-lg text-muted-foreground">
                Solve connection-based puzzles related to ML and DL concepts
              </p>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-lg border-secondary/30 glow-border p-8">
              <Clock className="w-12 h-12 text-accent mb-4" />
              <h4 className="text-2xl font-bold mb-4">Time Limit</h4>
              <p className="text-4xl font-black text-secondary">20 minutes</p>
            </Card>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-lg border-primary/30 glow-border p-10">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-primary" />
              Evaluation Criteria
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg font-semibold">Clarity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-lg font-semibold">Accuracy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <p className="text-lg font-semibold">Correctness</p>
              </div>
            </div>
          </Card>
          
          <div className="mt-12 text-center">
            <Card className="bg-muted/30 backdrop-blur-lg border-primary/20 p-8 inline-block">
              <p className="text-sm text-muted-foreground mb-2">Example Connection</p>
              <div className="flex items-center gap-4 justify-center flex-wrap">
                <div className="px-6 py-3 bg-primary/20 rounded-lg border border-primary/50">
                  <p className="font-mono text-primary">Neural Network</p>
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="px-6 py-3 bg-secondary/20 rounded-lg border border-secondary/50">
                  <p className="font-mono text-secondary">Deep Learning</p>
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
                <div className="px-6 py-3 bg-accent/20 rounded-lg border border-accent/50">
                  <p className="font-mono text-accent">Backpropagation</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8">
          <Link 
            to="/guidelines"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-8 h-8" />
          </Link>
          <Link 
            to="/round2"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Round1;
