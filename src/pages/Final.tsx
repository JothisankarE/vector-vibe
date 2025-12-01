import { Sparkles, Trophy, Image as ImageIcon, Zap, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

const Final = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl animate-fade-in">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="w-12 h-12 text-primary" />
              <h2 className="text-6xl font-bold gradient-text">Final Round</h2>
            </div>
            <h3 className="text-4xl font-bold mt-4">AI Image Creation</h3>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-lg border-primary/30 glow-border p-10 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <ImageIcon className="w-12 h-12 text-primary" />
              <h4 className="text-3xl font-bold">The Challenge</h4>
            </div>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold">1</span>
                </div>
                <p className="text-muted-foreground">Teams will be given <span className="text-primary font-bold">four different images</span></p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <p className="text-muted-foreground">Use them as <span className="text-secondary font-bold">prompts</span> to generate a meaningful and attractive AI image</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold">3</span>
                </div>
                <p className="text-muted-foreground">Time limit: <span className="text-accent font-bold text-2xl">30 minutes</span></p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-lg border-primary/30 glow-border p-10">
            <div className="text-center">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
              <h4 className="text-3xl font-bold mb-6">Winner Selection</h4>
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-muted-foreground mb-6">
                  Final AI-generated images will be shared <span className="text-primary font-bold">publicly</span>
                </p>
                <div className="bg-background/50 rounded-lg p-8 border border-primary/30">
                  <p className="text-2xl font-bold gradient-text mb-2">
                    The image that receives the most likes wins! 🏆
                  </p>
                  <p className="text-sm text-muted-foreground">Community voting decides the champion</p>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="mt-12 text-center">
            <div className="inline-flex gap-4 items-center px-8 py-4 bg-muted/30 backdrop-blur-lg rounded-full border border-primary/20">
              <ImageIcon className="w-6 h-6 text-primary" />
              <span className="text-lg">+</span>
              <ImageIcon className="w-6 h-6 text-secondary" />
              <span className="text-lg">+</span>
              <ImageIcon className="w-6 h-6 text-accent" />
              <span className="text-lg">+</span>
              <ImageIcon className="w-6 h-6 text-neon-green" />
              <Zap className="w-6 h-6 text-primary ml-4" />
              <Sparkles className="w-8 h-8 text-accent animate-pulse-glow" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <Link 
            to="/round2"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 text-center">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-primary animate-pulse-glow" />
            <p className="text-sm text-muted-foreground">Association of Computer Applications</p>
          </div>
          <p className="text-xs text-muted-foreground">MINI ORION 2K25 - VECTOR VIBE</p>
        </div>
      </footer>
    </div>
  );
};

export default Final;
