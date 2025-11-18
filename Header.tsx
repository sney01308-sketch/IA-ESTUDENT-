import { Button } from "@/components/ui/button";
import { Brain, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">IA ESTUDENT</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="hover:bg-glass">
              Entrar
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Começar Grátis
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-glass-border">
            <a href="#features" className="block text-sm font-medium hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#pricing" className="block text-sm font-medium hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#about" className="block text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full justify-center">
                Entrar
              </Button>
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Começar Grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;