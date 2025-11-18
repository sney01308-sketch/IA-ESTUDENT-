import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Trophy } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background/50" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Plataforma de Estudos com IA</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              IA ESTUDENT
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Questões ilimitadas e não repetidas geradas por IA para concursos públicos. 
            Estude de forma inteligente, acompanhe concursos e corrija redações com feedback detalhado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="glass-strong hover:glow text-lg px-8 py-6 h-auto rounded-xl transition-all duration-300">
              <Brain className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="glass text-lg px-8 py-6 h-auto rounded-xl border-2 hover:border-primary transition-all duration-300">
              <Trophy className="w-5 h-5 mr-2" />
              Ver Planos
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-2xl hover:glow transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Questões Infinitas</h3>
              <p className="text-sm text-muted-foreground">Geração ilimitada de questões únicas com IA</p>
            </div>
            
            <div className="glass p-6 rounded-2xl hover:glow transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Correção de Redação</h3>
              <p className="text-sm text-muted-foreground">Análise detalhada com critérios de bancas</p>
            </div>
            
            <div className="glass p-6 rounded-2xl hover:glow transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Acompanhamento</h3>
              <p className="text-sm text-muted-foreground">Notificações de concursos e estatísticas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;