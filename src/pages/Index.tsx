import { Brain, Network, Zap, Users, Target, Cpu, Sparkles, Image as ImageIcon, Clock, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-tech.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary animate-pulse-glow" />
            <span className="text-xl font-bold gradient-text">VECTOR VIBE</span>
          </div>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection("guidelines")} className="text-sm hover:text-primary transition-colors">Guidelines</button>
            <button onClick={() => scrollToSection("round1")} className="text-sm hover:text-primary transition-colors">Round 1</button>
            <button onClick={() => scrollToSection("round2")} className="text-sm hover:text-primary transition-colors">Round 2</button>
            <button onClick={() => scrollToSection("final")} className="text-sm hover:text-primary transition-colors">Final</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
          
          <Button 
            onClick={() => scrollToSection("guidelines")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg glow-border animate-float"
          >
            Explore Event
            <Zap className="ml-2 w-5 h-5" />
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="min-h-screen flex items-center justify-center py-20 px-6">
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
      </section>

      {/* Round 1 Section */}
      <section id="round1" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-background to-muted/20">
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
      </section>

      {/* Round 2 Section */}
      <section id="round2" className="min-h-screen flex items-center justify-center py-20 px-6">
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
      </section>

      {/* Final Round Section */}
      <section id="final" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-background to-muted/20">
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

export default Index;
